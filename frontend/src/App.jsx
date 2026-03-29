import { useState } from 'react'
import Footer from './view/components/Footer/footer'
import CadastroCliente from './view/cadastroCliente/cadastroCliente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CadastroCliente />
      <Footer />
    </>
  )
}

export default App
