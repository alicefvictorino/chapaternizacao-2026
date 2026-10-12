// Um item da lista de presentes. Com foto vira adesivo recortado;
// sem foto vira um adesivo de texto com a borda desenhada do botão.
// Passar o mouse (ou tocar) mostra a etiqueta com a descrição.
// É uma div focável (não um botão) para a etiqueta poder ter link clicável.
export default function Figurinha({ item, indice }) {
  const giros = [-5, 4, -3, 6, -6, 3]
  const giro = giros[indice % giros.length]
  const cor = indice % 2 === 0 ? 'vermelho' : 'verde'
  const temFoto = Boolean(item.foto)
  const temCores = Array.isArray(item.cores)
  const tipo = temCores ? 'figurinha--cores' : temFoto ? 'figurinha--foto' : `figurinha--texto figurinha--${cor}`

  return (
    <div
      tabIndex={0}
      className={`figurinha ${tipo} ${item.pronta ? 'figurinha--pronta' : ''}`}
      style={{ '--giro': `${giro}deg` }}
      aria-describedby={`desc-${indice}`}
    >
      {temCores ? (
        <span className="cartela">
          <span className="cartela__titulo">{item.nome}</span>
          {item.cores.map((c) => (
            <span className="cartela__faixa" key={c.nome} style={{ background: c.hex, color: c.texto }}>
              {c.nome}
            </span>
          ))}
        </span>
      ) : temFoto ? (
        <img src={`./figurinhas/${item.foto}`} alt={item.nome} loading="lazy" />
      ) : (
        <span className="figurinha__nome">{item.nome}</span>
      )}
      <span className="etiqueta" id={`desc-${indice}`} role="tooltip">
        <span className="etiqueta__nome">{item.nome}</span>
        {item.descricao && <span className="etiqueta__desc">{item.descricao}</span>}
        {item.onde && !item.link && <span className="etiqueta__extra">{item.onde}</span>}
        {item.ilustrativa && <span className="etiqueta__extra">Imagem meramente ilustrativa</span>}
        {item.link && (
          <a className="etiqueta__link" href={item.link} target="_blank" rel="noreferrer">
            {item.onde || 'Ver na loja'} ↗
          </a>
        )}
      </span>
    </div>
  )
}

