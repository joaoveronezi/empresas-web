/* eslint-disable */
import React, { useState, useEffect } from "react";
import LogoIoasys from "assets/images/logo-branco.png";
import { useDispatch, useSelector } from "react-redux";
import { Creators as EnterprisesActions } from "store/ducks/enterprise";
import Icon from "assets/icons/ic-busca.png";
import CloseIcon from "assets/icons/ic-close.png";
import SearchBar from "components/core/SearchBar";
import EnterpriseCard from "components/core/EnterpriseCard";

import {
  NavBar,
  Container,
  Logo,
  Title,
  Content,
  SearchIcon,
  // eslint-disable-next-line import/no-unresolved
} from "./Home.style";

const Home = () => {
  const [showSearchbar, setShowSearchBar] = useState(false);
  const [enterpriseName, setEnterpriseName] = useState("");
  const dispatch = useDispatch();
  const { enterprises } = useSelector(({ enterprise }) => enterprise);

  const handleSearch = ({ target: { value } }) => {
    value.length > 0
      ? dispatch(EnterprisesActions.getEnterprises(value))
      : dispatch(EnterprisesActions.cleanState());
  };

  const handleClick = () => {
    setShowSearchBar(!showSearchbar);
  };

  console.log("console da home", enterprises);

  const LogoComponent = () => (
    <>
      <Logo src={LogoIoasys} alt="Logo ioasys branco" />
      <SearchIcon src={Icon} onClick={handleClick} />
    </>
  );

  return (
    <Container>
      <NavBar>
        {showSearchbar ? (
          <SearchBar
            icon={Icon}
            closeIcon={CloseIcon}
            handleClick={handleClick}
            handleSearch={handleSearch}
          />
        ) : (
          LogoComponent()
        )}
      </NavBar>
      <Content>
        {
          // eslint-disable-next-line
          enterprises.enterprises?.length > 0 ? (
            enterprises?.enterprises?.map((enterprises, index) => {
              console.log(enterprises);
              return <EnterpriseCard enterprise={enterprises} key={index} />;
            })
          ) : (
            <Title>Clique na busca para iniciar</Title>
          )
        }
      </Content>
    </Container>
  );
};

export default Home;
