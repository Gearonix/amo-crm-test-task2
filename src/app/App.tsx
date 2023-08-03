import './App.scss'
import 'normalize.css'
import { Footer } from '@/modules/footer'
import { Main } from '@/modules/main'
import { Background } from '../modules/background'
import { Header } from '../modules/header'

function App() {
  return (
    <div className="container">
      <Background>
        <Header />
        <Main />
        <Footer />
      </Background>
    </div>
  )
}

export default App
