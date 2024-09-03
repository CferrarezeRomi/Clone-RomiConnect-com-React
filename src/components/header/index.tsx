import styled from "styled-components";
import HeaderDescripition from "./headerDescripition"
import LogoHeader from "../../assets/imagem.png"

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background-color:#4682b4;
    padding: .5em 1.5em;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
`
const HeaderImg = styled.img`
    width: 100px;
`
function Header() {
    return(
        <HeaderContainer>
            <HeaderImg src={LogoHeader}/>
            <HeaderDescripition/>
        </HeaderContainer>
    )
}
export default Header