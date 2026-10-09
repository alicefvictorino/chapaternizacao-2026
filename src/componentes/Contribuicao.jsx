import { evento } from '../dados/evento.js'

export default function Contribuicao() {
  return (
    <section className="secao secao--meia" aria-labelledby="contribuicao-titulo">
      <div className="cartao cartao--cheio">
        <div className="cartao__corpo">
          <h2 className="nota-titulo" id="contribuicao-titulo">contribuição de cada um</h2>
          <ul className="cardapio">
            {evento.contribuicao.map((c) => (
              <li key={c.item}>
                <span>{c.item}</span>
                <span className="cardapio__pontos" aria-hidden="true" />
                <span className="cardapio__valor">{c.valor}</span>
              </li>
            ))}
            <li className="cardapio__total">
              <span>Total</span>
              <span className="cardapio__pontos" aria-hidden="true" />
              <span className="cardapio__valor">{evento.contribuicaoTotal}</span>
            </li>
          </ul>
          <p className="nota-rodape">Por pessoa. O presente do amigo secreto é à parte.</p>
          {evento.linkConfirmar && (
            <a className="botao" href={evento.linkConfirmar} target="_blank" rel="noreferrer">Confirmar presença</a>
          )}
        </div>
      </div>
    </section>
  )
}
