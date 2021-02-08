import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
// eslint-disable-next-line
const SearchBar = ({ icon, handleClick, closeIcon, handleSearch }) => {
  return (
    <S.Formulary>
      <form>
        <div>
          <S.SearchIcon
            src={icon}
            params={{
              width: "3.75rem",
              height: "3.75rem",
              left: "30px",
            }}
          />
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Pesquisar"
            name="name"
          />

          <S.IconClose onClick={handleClick} src={closeIcon} />
        </div>
      </form>
    </S.Formulary>
  );
};

SearchBar.propTypes = {
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  closeIcon: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
