import Topo from './componentes/Topo.jsx'
import Evento from './componentes/Evento.jsx'
import Contribuicao from './componentes/Contribuicao.jsx'
import AmigoSecreto from './componentes/AmigoSecreto.jsx'
import ListaDePresentes from './componentes/ListaDePresentes.jsx'

export default function App() {
  return (
    <>
      <Topo />
      <main>
        <Evento />
        <div className="duas-colunas">
          <Contribuicao />
          <AmigoSecreto />
        </div>
        <ListaDePresentes />
      </main>
      <footer className="rodape">
        <div className="xadrez" role="presentation" />
        <p>Nos vemos no dia 14!</p>
      </footer>
    </>
  )
}
