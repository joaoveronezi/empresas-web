import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: 9.438rem;
  background: #ee4c77;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const IconClose = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
`;

export const Formulary = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    padding: 12px 20px;
    width: 58.766rem;
    box-sizing: border-box;
    border: none;
    height: 4rem;
    background: transparent;
    border-bottom: solid 0.7px #ffffff;
    font-size: 2rem;
  }
  input::-webkit-input-placeholder {
    font-size: 2rem;
    line-height: normal;
    font-family: Roboto;
    color: #991237;
  }
`;
export const SearchIcon = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  position: absolute;
  right: 40px;
  top: 50px;
  cursor: pointer;
  ${({ params }) => params}
`;

export const Logo = styled.img`
  width: 14.64rem;
  height: 3.563rem;
  margin: 0 auto;
  ${({ params }) => params}
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 2rem;
  font-weight: normal;
  letter-spacing: -0.45px;
  text-align: center;
  color: #383743;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 151px);
`;
