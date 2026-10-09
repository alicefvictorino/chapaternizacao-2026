import { evento } from '../dados/evento.js'
import Rabisco from './Rabisco.jsx'

export default function Evento() {
  return (
    <section className="secao" id="evento" aria-label="Quando, onde e rodízio">
      <article className="cartao">
        <div className="xadrez" role="presentation" />
        <div className="cartao__corpo">
          <div className="grade-dados">
            <div className="dado">
              <span className="rotulo">Quando</span>
              <span className="titulo-cartao">{evento.data}</span>
              <p>Chegue às <strong>{evento.chegada}</strong></p>
            </div>
            <div className="dado">
              <span className="rotulo">Onde</span>
              <span className="titulo-cartao">{evento.local}</span>
              <p>{evento.localDetalhe}</p>
            </div>
            <div className="dado">
              <span className="rotulo">Rodízio</span>
              <span className="titulo-cartao">{evento.rodizio}</span>
              <p>{evento.rodizioDetalhe} {evento.sabores}</p>
            </div>
          </div>
        </div>
      </article>
      <Rabisco nome="bola-floco" cor="vermelho" tamanho={88} giro={-10} className="secao__enfeite secao__enfeite--dir" />
    </section>
  )
}
