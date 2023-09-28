import react from "react"
import smarmita_foto from "../images/smarmita_foto.jpg"

function Conteudo() {
    return(
        <>
            <section className="project_history">
                <div className={styles.smarmita_mobile}>
                    <img  src={smarmita_foto} height="322" alt="Marmita preta com comida dentro" />
                </div>

                <h1>HISTÓRIA DO PROJETO</h1>

                <p>Tudo começou em uma conversa de café da tarde na família da Geh.</p>
                <p>“Certo dia eu estava em casa conversando com minha família e desesperada para conseguir ter uma ideia boa para o projeto do TCC. Conversa vai, conversa vem, pedindo várias dicas do que fazer, minha vó me deu a ideia de fazer um robô que lavava a louça sozinho, o que com certeza não daria certo (rsrsrsrs).</p>
                <p>Pensando em um projeto para ajudar outras pessoas, minha vó novamente, decidiu dar a idea de fazer uma marmita para os motoboys. Eu decidi parar para pensar nessa ideia, e pensar em como e qual diferencial poderia ter.</p>
                <p>Até que enfim, eu e meus queridos amigos Fael, Thithico e Preto chegamos no projeto que finalmente é hoje.”</p>
            </section>
        </>
    )
}

export default Conteudo
