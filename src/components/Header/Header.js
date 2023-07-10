import menu from "../../assets/menu.png"
import { BotaoNavegacao, PrimeiroMenu } from "./styled.jsx"
import React from "react"

function Header(props){

    const handlePageChange = ()=>(
        props.pagina()
    )

    return(
        <>
            <PrimeiroMenu>
                <BotaoNavegacao onClick={handlePageChange}>
                    <img src={props.imgSegunda}/>
                </BotaoNavegacao>
                <BotaoNavegacao>
                    <img src={props.imgSegunda}/>
                </BotaoNavegacao>
            </PrimeiroMenu>
        </>
    )

}

export default Header;