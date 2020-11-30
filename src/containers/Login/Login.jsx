import React from "react";
import Logo from "assets/images/logo.png";
import emailIcon from "assets/icons/ic-email.png";
import lockerIcon from "assets/icons/ic-cadeado.png";
import {
  Wrapper,
  ImgWrapper,
  TextWrapper,
  Title,
  Formulary,
  Icon,
} from "./Login.style";

const Login = () => (
  <Wrapper>
    <ImgWrapper>
      <img src={Logo} alt="Logo Ioasys" />
    </ImgWrapper>
    <TextWrapper>
      <Title>BEM-VINDO AO EMPRESAS</Title>
      <p>
        Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
      </p>
      <Formulary>
        <form>
          <div>
            <Icon src={emailIcon} />
            <input type="text" placeholder="E-Mail" required />
          </div>
          <div>
            <Icon src={lockerIcon} />
            <input type="password" placeholder="Senha" required />
          </div>
          <button type="submit">
            <span>Entrar</span>
          </button>
        </form>
      </Formulary>
    </TextWrapper>
  </Wrapper>
);
export default Login;
