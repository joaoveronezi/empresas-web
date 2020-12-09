import React, { useState } from "react";
import LogoIoasys from "assets/images/logo-branco.png";

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

  const handleClick = () => {
    setShowSearchBar(!showSearchbar);
  };
  const LogoComponent = () => (
    <>
      <Logo src={LogoIoasys} alt="Logo ioasys branco" />
      <a href="/#" onClick={handleClick}>
        <SearchIcon src={Icon} />
      </a>
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
      </Content>
    </Container>
  );
};

export default Home;
