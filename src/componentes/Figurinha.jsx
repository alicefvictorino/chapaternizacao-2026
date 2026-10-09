// Um item da lista de presentes. Com foto vira adesivo recortado;
// sem foto vira um adesivo de texto com a borda desenhada do botão.
// Passar o mouse (ou tocar) mostra a etiqueta com a descrição.
export default function Figurinha({ item, indice }) {
  const giros = [-5, 4, -3, 6, -6, 3]
  const giro = giros[indice % giros.length]
  const cor = indice % 2 === 0 ? 'vermelho' : 'verde'
  const temFoto = Boolean(item.foto)
  const temCores = Array.isArray(item.cores)
  const tipo = temCores ? 'figurinha--cores' : temFoto ? 'figurinha--foto' : `figurinha--texto figurinha--${cor}`

  return (
    <button
      type="button"
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
        {item.onde && <span className="etiqueta__extra">{item.onde}</span>}
      </span>
    </button>
  )
}
