import styles from "./Header.module.css"
import { useState } from "react"
import logo_smarmita from "../images/logo_smarmita.png"
import { List, X } from "@phosphor-icons/react"

function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false);

  function handleAbrirFecharMenu(){
    if (abrirMenu == true) {
      setAbrirMenu(false)
      return
    }

    setAbrirMenu(true)

  }

  return (
    <header className={styles.header}>
        <div className={styles.mobile}>
            <div className={styles.menu_logo}>
                <button onClick={handleAbrirFecharMenu}>{
                  abrirMenu == true ?(
                    <X size={32}/>
                  ) :(
                    <List size={32}/>
                  )
                }
                </button>
                

                <img src={logo_smarmita} />
            </div>

            <div className={`${styles.options} ${abrirMenu ===true && styles.open}`}>
                  <nav>
                    <a href="">História</a>
                    <a href="">Componentes</a>
                    <a href="">Integrantes</a>
                  </nav>
                </div>
        </div>

        <div className={styles.desktop}>
          <div>
            <img src={logo_smarmita} />
          </div>

          <div>
              <nav className={styles.desktop_options}>
                  <li><a href="">História</a></li>
                  <li><a href="">Componentes</a></li>
                  <li><a href="">Integrantes</a></li>
              </nav>
          </div>

        </div>

        <div className="escuro">
          <div className="modo-escuro">
            <Moon size={32} />
            <i class='bx bx-sun' ></i>
          </div>
        </div>

        <div className="pesquisa">
          <div className="modo-escuro">
            <i class='bx bx-x'></i>
            <i class='bx bx-search' ></i>
          </div>
        </div>


    </header>
  )
}


export default Header