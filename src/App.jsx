import Header from './components/Header'
import { BrowserRouter} from "react-router-dom"
import Router from "./router"
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


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
