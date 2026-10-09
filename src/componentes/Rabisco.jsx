// Desenho decorativo com papel creme em volta. Não é clicável.
// Os desenhos enviados em PNG ficam listados aqui; o resto é SVG.
const PNG = new Set(['estrela-rabiscada', 'meia-doces', 'ramo-pinheiro', 'bola-floco', 'tacas-brinde', 'presente-laco', 'arvore-pinheiro'])

export default function Rabisco({ nome, cor = 'vermelho', tamanho = 80, giro = 0, style, className = '' }) {
  return (
    <img
      className={`rabisco ${className}`}
      src={`./rabiscos/${nome}-${cor}.${PNG.has(nome) ? 'png' : 'svg'}`}
      alt=""
      aria-hidden="true"
      style={{ width: tamanho, '--giro': `${giro}deg`, ...style }}
    />
  )
}
