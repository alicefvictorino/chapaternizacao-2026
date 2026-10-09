import { evento } from '../dados/evento.js'
import Rabisco from './Rabisco.jsx'

export default function AmigoSecreto() {
  return (
    <section className="secao secao--meia" aria-labelledby="amigo-titulo">
      <div className="cartao cartao--cheio">
        <div className="cartao__corpo">
          <h2 className="nota-titulo" id="amigo-titulo">amigo secreto</h2>
          <div className="titulo-cartao">{evento.presenteFaixa}</div>
          <p>
            Quem quiser pode mandar inspirações de presente: cores, sentimentos, coisas que ama.
            As listas de cada um aparecem aqui embaixo!!
          </p>
          <p>{evento.apresentacoes}</p>
          <div className="botoes">
            <a className="botao" href="#presentes">Ver as listas</a>
            {evento.linkInspiracao && (
              <a className="botao botao--secundario" href={evento.linkInspiracao} target="_blank" rel="noreferrer">
                <img src="./rabiscos/estrela-rabiscada-verde.png" alt="" aria-hidden="true" />
                Mandar inspiração
              </a>
            )}
          </div>
        </div>
      </div>
      <Rabisco nome="meia-doces" cor="vermelho" tamanho={64} giro={10} className="secao__enfeite secao__enfeite--canto" />
    </section>
  )
}
