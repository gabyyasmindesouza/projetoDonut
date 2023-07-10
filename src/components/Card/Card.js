import { CardContainer, ImagemCard, TituloCard, TextCard, DivCard } from "./styled"

function Card() {
    return(
       <CardContainer>
            <ImagemCard/>
            <TituloCard>
                Unicorn Sprinkles
            </TituloCard>

            <TextCard>
                Stramberry creamy...
            </TextCard>

            <DivCard>
                <p>7.800</p>
                <a>Mais</a>
            </DivCard>
       </CardContainer> 
    );

}

export default Card;