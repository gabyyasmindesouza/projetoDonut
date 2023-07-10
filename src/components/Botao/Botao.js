import { BotaoEstilo } from "./styled";

function Botao(props) {
    return(
        <BotaoEstilo>
            {props.titulo}
        </BotaoEstilo>
    )
}

export default Botao;