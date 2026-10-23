import { useCallback, useEffect, useMemo, useState } from 'react'
import { evento } from '../dados/evento.js'
import Rabisco from './Rabisco.jsx'

// Votação dos sabores do rodízio.
// Os dados ficam numa planilha do Google; o site conversa com ela pelo
// Apps Script cujo endereço está em evento.urlVotacao.
const URL = evento.urlVotacao
const INTERVALO = 20000 // atualiza o ranking a cada 20 s

async function chamar(corpo) {
  // text/plain evita a checagem extra (preflight) que o Apps Script não aceita
  const r = await fetch(URL, { method: 'POST', body: JSON.stringify(corpo) })
  return r.json()
}

function formatarData(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
}

export default function Votacao() {
  const [estado, setEstado] = useState(null)
  const [erroCarga, setErroCarga] = useState(false)

  const carregar = useCallback(async () => {
    if (!URL) return
    try {
      const r = await fetch(URL)
      const d = await r.json()
      if (d.ok) { setEstado(d); setErroCarga(false) }
    } catch {
      setErroCarga(true)
    }
  }, [])

  useEffect(() => {
    carregar()
    const id = setInterval(() => { if (!document.hidden) carregar() }, INTERVALO)
    return () => clearInterval(id)
  }, [carregar])

  return (
    <section className="secao votacao" id="votacao" aria-labelledby="votacao-titulo">
      <h2 className="titulo-secao" id="votacao-titulo">Votação dos sabores</h2>
      <p className="votacao__intro">
        Cada um escolhe {estado?.votosPorPessoa ?? 8} sabores pro rodízio. Use a chave que você recebeu no zap.
        {estado?.encerraEm && !estado.encerrado && <> A votação fecha em <strong>{formatarData(estado.encerraEm)}</strong>.</>}
      </p>

      {!URL && <p className="votacao__aviso">A votação abre em breve!</p>}
      {URL && !estado && !erroCarga && <p className="votacao__aviso">Carregando o cardápio…</p>}
      {URL && !estado && erroCarga && <p className="votacao__aviso">Não consegui carregar a votação agora. Tenta recarregar a página.</p>}

      {estado && (
        <div className="votacao__grade">
          <Formulario estado={estado} aoAtualizar={setEstado} />
          <Ranking estado={estado} />
        </div>
      )}
      <Rabisco nome="pizza-inteira" cor="vermelho" tamanho={96} giro={-12} className="secao__enfeite secao__enfeite--dir" />
    </section>
  )
}

function Formulario({ estado, aoAtualizar }) {
  const [nome, setNome] = useState('')
  const [chave, setChave] = useState('')
  const [entrou, setEntrou] = useState(false)
  const [escolhidos, setEscolhidos] = useState([])
  const [msg, setMsg] = useState(null) // { tipo: 'erro' | 'ok', texto }
  const [enviando, setEnviando] = useState(false)
  const limite = estado.votosPorPessoa

  const salgadas = estado.sabores.filter((s) => s.categoria !== 'doce')
  const doces = estado.sabores.filter((s) => s.categoria === 'doce')

  async function entrar(e) {
    e.preventDefault()
    setEnviando(true); setMsg(null)
    try {
      const d = await chamar({ acao: 'entrar', nome, chave })
      if (!d.ok) { setMsg({ tipo: 'erro', texto: d.erro }); return }
      setEntrou(true)
      // ignora sabores que saíram do cardápio depois do voto
      const validos = new Set(d.estado.sabores.map((x) => x.nome))
      setEscolhidos((d.meuVoto || []).filter((x) => validos.has(x)))
      aoAtualizar(d.estado)
      if (d.meuVoto?.length) setMsg({ tipo: 'ok', texto: 'Esse é o seu voto atual. Pode mudar se quiser!' })
    } catch {
      setMsg({ tipo: 'erro', texto: 'Deu erro de conexão. Tenta de novo.' })
    } finally {
      setEnviando(false)
    }
  }

  function alternar(sabor) {
    setMsg(null)
    setEscolhidos((atual) =>
      atual.includes(sabor) ? atual.filter((s) => s !== sabor) : atual.length >= limite ? atual : [...atual, sabor],
    )
  }

  async function votar() {
    setEnviando(true); setMsg(null)
    try {
      const d = await chamar({ acao: 'votar', nome, chave, sabores: escolhidos })
      if (!d.ok) { setMsg({ tipo: 'erro', texto: d.erro }); return }
      aoAtualizar(d.estado)
      setMsg({ tipo: 'ok', texto: 'Voto registrado! 🍕 Se mudar de ideia, é só votar de novo.' })
    } catch {
      setMsg({ tipo: 'erro', texto: 'Deu erro de conexão. Tenta de novo.' })
    } finally {
      setEnviando(false)
    }
  }

  if (estado.encerrado) {
    return (
      <div className="cartao"><div className="cartao__corpo">
        <p className="nota-titulo">votação encerrada!</p>
        <p>O ranking ao lado é o resultado final.</p>
      </div></div>
    )
  }

  if (!entrou) {
    return (
      <form className="cartao votacao__entrar" onSubmit={entrar}>
        <div className="cartao__corpo">
          <p className="nota-titulo">quem é você?</p>
          <label className="campo">
            <span className="rotulo">Nome</span>
            <select value={nome} onChange={(e) => setNome(e.target.value)} required>
              <option value="" disabled>Escolha seu nome</option>
              {estado.participantes.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
          <label className="campo">
            <span className="rotulo">Chave secreta</span>
            <input type="password" value={chave} onChange={(e) => setChave(e.target.value)} autoComplete="off" required placeholder="ex.: calabresa" />
          </label>
          {msg && <p className={`votacao__msg votacao__msg--${msg.tipo}`} role="status">{msg.texto}</p>}
          <button className="botao" type="submit" disabled={enviando}>{enviando ? 'Conferindo…' : 'Entrar'}</button>
        </div>
      </form>
    )
  }

  const completo = escolhidos.length === limite
  return (
    <div className="cartao votacao__cardapio">
      <div className="cartao__corpo">
        <div className="votacao__topo">
          <p className="nota-titulo">oi, {nome}!</p>
          <span className={`votacao__contador ${completo ? 'is-completo' : ''}`} aria-live="polite">
            {escolhidos.length} de {limite}
          </span>
        </div>
        <Grupo titulo="Salgadas" sabores={salgadas} escolhidos={escolhidos} cheio={escolhidos.length >= limite} aoClicar={alternar} />
        <Grupo titulo="Doces" sabores={doces} escolhidos={escolhidos} cheio={escolhidos.length >= limite} aoClicar={alternar} />
        {msg && <p className={`votacao__msg votacao__msg--${msg.tipo}`} role="status">{msg.texto}</p>}
        <button className="botao" type="button" onClick={votar} disabled={!completo || enviando}>
          {enviando ? 'Enviando…' : completo ? 'Enviar meu voto' : `Escolha mais ${limite - escolhidos.length}`}
        </button>
      </div>
    </div>
  )
}

function Grupo({ titulo, sabores, escolhidos, cheio, aoClicar }) {
  if (!sabores.length) return null
  return (
    <fieldset className="votacao__grupo">
      <legend className="rotulo">{titulo}</legend>
      <div className="votacao__sabores">
        {sabores.map((s) => {
          const marcado = escolhidos.includes(s.nome)
          return (
            <button
              key={s.nome}
              type="button"
              className={`sabor ${marcado ? 'is-marcado' : ''}`}
              aria-pressed={marcado}
              disabled={!marcado && cheio}
              onClick={() => aoClicar(s.nome)}
              title={s.descricao}
            >
              <span className="sabor__nome">{s.nome}</span>
              {s.descricao && <span className="sabor__desc">{s.descricao}</span>}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

function Ranking({ estado }) {
  const lista = useMemo(
    () => [...estado.sabores].sort((a, b) => b.votos - a.votos || a.nome.localeCompare(b.nome, 'pt-BR')),
    [estado.sabores],
  )
  const max = Math.max(1, ...lista.map((s) => s.votos))
  const votaram = estado.jaVotaram.length
  const faltam = estado.participantes.filter((p) => !estado.jaVotaram.includes(p))
  const comVoto = lista.filter((s) => s.votos > 0)

  return (
    <div className="cartao votacao__ranking">
      <div className="xadrez" role="presentation" />
      <div className="cartao__corpo">
        <div className="votacao__topo">
          <p className="nota-titulo">{estado.encerrado ? 'resultado final' : 'ranking ao vivo'}</p>
          {!estado.encerrado && <span className="votacao__aovivo">● ao vivo</span>}
        </div>
        <p className="votacao__participacao">{votaram} de {estado.participantes.length} já votaram</p>

        {comVoto.length === 0 ? (
          <p className="votacao__vazio">Ninguém votou ainda. Seja a primeira pessoa!</p>
        ) : (
          <ol className="ranking">
            {comVoto.map((s, i) => (
              <li key={s.nome} className={i < estado.votosPorPessoa ? 'is-top' : ''}>
                <span className="ranking__pos">{i + 1}</span>
                <span className="ranking__nome">{s.nome}</span>
                <span className="ranking__barra" aria-hidden="true"><span style={{ width: `${(s.votos / max) * 100}%` }} /></span>
                <span className="ranking__votos">{s.votos}</span>
              </li>
            ))}
          </ol>
        )}

        {faltam.length > 0 && !estado.encerrado && (
          <p className="votacao__faltam"><span className="rotulo">Falta votar</span> {faltam.join(', ')}</p>
        )}
      </div>
    </div>
  )
}
