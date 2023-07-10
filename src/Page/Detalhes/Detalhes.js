import Header from "../../components/Header/Header"
import seta from "../../assets/seta.png"
import ponto from "../../assets/ponto.png"
import group from "../../assets/group.png"
import donutGrande from "../../assets/Frame 9.png"
import { BotaoAddCard, ImagemGrande, BotaoMore, ContainerDetalhes, ContainerDiv, MaisProdutos, TextMore, TextNumber, TextoDonuts, TituloDonuts } from "./styled";

function Detalhes(props) {
    return(
        <>
        <Header/>
        pagina={props.pagina}
        imgPrimeira={seta}
        imgSegunda={ponto}

        <ContainerDetalhes>

            <ImagemGrande src={donutGrande}/>

            <ContainerDiv>

                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>

                <TextoDonuts>
                    
                </TextoDonuts>

                <MaisProdutos>
                    <img src={group}/>
                    <TextNumber>7800</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>Need more?</TextMore>
                    <BotaoMore>Add More</BotaoMore>
                </MaisProdutos>

                <BotaoAddCard>Add to Card</BotaoAddCard>

            </ContainerDiv>

        </ContainerDetalhes>
        </>
    );

}

export default Detalhes;