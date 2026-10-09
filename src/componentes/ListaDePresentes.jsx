import { useState } from 'react'
import { listas } from '../dados/presentes.js'
import { evento } from '../dados/evento.js'
import Figurinha from './Figurinha.jsx'
import Rabisco from './Rabisco.jsx'

// Rabiscos de fundo do mural: ficam nas margens, atrás das figurinhas.
const enfeites = [
  { nome: 'pizza-inteira', cor: 'vermelho', tamanho: 110, giro: -14, top: '2%', left: '-2%' },
  { nome: 'estrela-rabiscada', cor: 'vermelho', tamanho: 76, giro: 10, top: '-2%', left: '30%' },
  { nome: 'tacas-brinde', cor: 'verde', tamanho: 80, giro: -8, top: '-2%', right: '28%' },
  { nome: 'presente-laco', cor: 'vermelho', tamanho: 92, giro: 8, top: '4%', right: '-2%' },
  { nome: 'ramo-pinheiro', cor: 'verde', tamanho: 84, giro: -6, top: '42%', left: '-4%' },
  { nome: 'estrela-rabiscada', cor: 'vermelho', tamanho: 80, giro: 12, top: '48%', right: '-3%' },
  { nome: 'meia-doces', cor: 'vermelho', tamanho: 80, giro: -10, bottom: '-2%', left: '20%' },
  { nome: 'bola-floco', cor: 'vermelho', tamanho: 76, giro: 6, bottom: '-3%', right: '22%' },
  { nome: 'estrela-rabiscada', cor: 'verde', tamanho: 64, giro: -14, bottom: '30%', right: '-3%' },
]

export default function ListaDePresentes() {
  const [atual, setAtual] = useState(0)
  const lista = listas[atual]

  return (
    <section className="secao presentes" id="presentes" aria-labelledby="presentes-titulo">
      <h2 className="titulo-secao" id="presentes-titulo">Lista de presentes</h2>
      <p className="presentes__intro">
        Passe o mouse (ou toque) em cada figurinha pra ver os detalhes. Faixa de {evento.presenteFaixa}.
      </p>

      {listas.length > 1 && (
        <div className="pessoas" role="tablist" aria-label="Escolha a pessoa">
          {listas.map((l, i) => (
            <button
              key={l.pessoa}
              role="tab"
              aria-selected={i === atual}
              className={`botao ${i === atual ? '' : 'botao--secundario'}`}
              onClick={() => setAtual(i)}
            >
              {l.pessoa}
            </button>
          ))}
        </div>
      )}

      <div className="mural">
        <div className="mural__fundo" aria-hidden="true">
          {enfeites.map((e, i) => {
            const { nome, cor, tamanho, giro, ...pos } = e
            return <Rabisco key={i} nome={nome} cor={cor} tamanho={tamanho} giro={giro} style={{ position: 'absolute', ...pos }} />
          })}
        </div>

        <div className="mural__cabeca">
          <h3 className="mural__pessoa">{lista.pessoa}</h3>
          {lista.gosto && <p className="mural__gosto">{lista.gosto}</p>}
        </div>

        <div className="mural__grade">
          {lista.itens.map((item, i) => (
            <div className="mural__celula" key={item.nome}>
              <Figurinha item={item} indice={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
