import Header from './components/Header'
import { BrowserRouter} from "react-router-dom"
import Router from "./router"



function App() {
  

  return (
  <>
    <Header />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App
