import React, { useState, useEffect } from "react";
import LogoIoasys from "assets/images/logo-branco.png";
import { useDispatch } from "react-redux";
import { Creators as EnterprisesActions } from "store/ducks/enterprise";
import Icon from "assets/icons/ic-busca.png";
import CloseIcon from "assets/icons/ic-close.png";
import {
  NavBar,
  Container,
  SearchIcon,
  Logo,
  Title,
  Content,
  Formulary,
  IconClose,
  // eslint-disable-next-line import/no-unresolved
} from "./Home.style";

const Home = () => {
  const [showSearchbar, setShowSearchBar] = useState(false);
  const dispatch = useDispatch();

  const Handle = () => {
    dispatch(EnterprisesActions.getEnterprises());
  };

  useEffect(() => {
    dispatch(EnterprisesActions.getEnterprises());
  }, []);

  const handleClick = () => {
    setShowSearchBar(!showSearchbar);
  };

  const LogoComponent = () => (
    <>
      <Logo src={LogoIoasys} alt="Logo ioasys branco" />
      <SearchIcon src={Icon} onClick={handleClick} />
    </>
  );
  const SearchBarComponent = () => (
    <Formulary>
      <form>
        <div>
          <SearchIcon
            src={Icon}
            params={{
              width: "3.75rem",
              height: "3.75rem",
              left: "30px",
            }}
          />
          <input type="text" placeholder="Pesquisar" name="search" />
          <IconClose onClick={handleClick} src={CloseIcon} />
        </div>
      </form>
    </Formulary>
  );
  return (
    <Container>
      <NavBar>{showSearchbar ? SearchBarComponent() : LogoComponent()}</NavBar>
      <Content>
        <Title>Clique na busca para iniciar</Title>
        <button type="button" onClick={Handle}>
          CLICK ME
        </button>
      </Content>
    </Container>
  );
};

export default Home;
