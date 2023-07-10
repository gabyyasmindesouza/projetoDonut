import filtro from '../../assets/filtro.png';
import { ContainerNav } from './styled';
import Botao from "../Botao/Botao"

function Navegar(){
    return(
        <ContainerNav>
            <Botao titulo={"Donuts"}/>
            <Botao titulo={"Ice Cream"}/>
            <Botao titulo={"abomboloni"}/>
            <img src={filtro} alt=""/>
        </ContainerNav>
    )


}

export default Navegar;