import React, { useState } from "react";
import Logo from "assets/images/logo.png";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "utils/constants";
import emailIcon from "assets/icons/ic-email.png";
import { Creators as AuthActions } from "store/ducks/auth";
import lockerIcon from "assets/icons/ic-cadeado.png";

import {
  Wrapper,
  ImgWrapper,
  TextWrapper,
  Title,
  Formulary,
  Icon,
} from "./Login.style";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  const changeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(AuthActions.authRequest(form));
    setForm({ email: "", password: "" });

    setTimeout(() => {
      history.push(ROUTES.home.path);
    }, 1000);
  };

  return (
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
          <form onSubmit={handleSubmit}>
            <div>
              <Icon src={emailIcon} />
              <input
                type="text"
                placeholder="E-Mail"
                onChange={changeForm}
                name="email"
                required
                value={form.email}
              />
            </div>
            <div>
              <Icon src={lockerIcon} />
              <input
                type="password"
                placeholder="Senha"
                onChange={changeForm}
                name="password"
                required
                value={form.password}
              />
            </div>
            <button type="submit">
              <span>Entrar</span>
            </button>
          </form>
        </Formulary>
      </TextWrapper>
    </Wrapper>
  );
};
export default Login;
