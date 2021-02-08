/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import imgTeste from "assets/images/imgTeste.png";
import { BASE_API } from "utils/constants";
import * as S from "./styled";

const EnterpriseCard = ({ enterprise }) => {
  console.log("Teeste");
  const { enterprise_name, photo, enterprise_type, country } = enterprise;
  return (
    <S.CardContainer>
      <img src={`${BASE_API}${photo}`} alt="imagem da empresa" />
      <S.TextWrapper>
        <S.Title>{enterprise_name}</S.Title>
        <S.Subtitle>{enterprise_type.enterprise_type_name}</S.Subtitle>
        <S.Label>{country}</S.Label>
      </S.TextWrapper>
    </S.CardContainer>
  );
};

EnterpriseCard.propTypes = {
  enterprise: PropTypes.object.isRequired,
};
export default EnterpriseCard;
