import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Nav from "../../components/Navegar/Navegar"
import TituloHeader from "../../components/TituloHeader/TituloHeader";
import { SectionCard } from "./styled";
import menu from "../../assets/menu.png"
import lupa from "../../assets/search.png"

function Home(props) {

    return(
        <>
            <Header
            pagina={props.pagina}
            imgPrimeira={menu}
            imgSegunda={lupa}
            />
            <TituloHeader/>
            <Nav/>

            <SectionCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </SectionCard>
        </>
    );

}

export default Home;