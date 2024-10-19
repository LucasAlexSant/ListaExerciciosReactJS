import './App.css'
import BemVindo from './components/BemVindo'
import BotaoLogin from './components/BotaoLogin'
import Fragmento from './components/Fragmento'
import Idade from './components/Idade'
import Imagem from './components/Imagem'
import Link from './components/Link'
import ListaOrdenada from './components/ListaOrdenada'
import NivelUsuario from './components/NivelUsuario'
import Sadacoes from './components/Saudacoes'
import StatusUsuario from './components/Status'
import VerificaEstudante from './components/VerificaEstudante'
import VerificaNota from './components/VerifiNota'

function App() {


  return (
    <div >
      <div style={{ backgroundColor: 'green' }}>
        <BemVindo />
        <Sadacoes nome="Lucas " />
      </div>
      <br />
      <Idade idade={30} />
      <br />
      <Idade idade={14} />
      <br />
      <VerificaEstudante estudante={false} />
      <VerificaEstudante estudante={true} />
      <br />

      <VerificaNota nota={10} />
      <VerificaNota nota={75} />
      <VerificaNota nota={90} />
      <br />

      <StatusUsuario online={true} />
      <StatusUsuario online={false} />

      <br />

      <NivelUsuario nivel="iniciante" />
      <NivelUsuario nivel="intermediário" />
      <NivelUsuario nivel="avançado" />
      <br />

      <BotaoLogin logado={false} />
      <BotaoLogin logado={true} />
      <br />

      <ListaOrdenada />
      <br />

      <Imagem url="https://picsum.photos/200/300" />
      <br />

      <Link />
      <br />

      <Fragmento/>

    </div>
  )
}

export default App
