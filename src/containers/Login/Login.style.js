import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const ImgWrapper = styled.div`
  width: 18.438rem;
  height: 4.5rem;
  margin-bottom: 4.188rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const TextWrapper = styled.div`
  width: auto;
  height: auto;
  p {
    width: 22.359rem;
    height: 3.25rem;
    margin: 1.281rem 0.133rem 2.947rem 0;
    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: -0.25px;
    text-align: center;
    color: #383743;
  }
`;

export const Formulary = styled.div`
  width: 100%;
  height: auto;
  input {
    background: #ebe9d7;
    padding: 12px 20px;
    width: 20rem;
    box-sizing: border-box;
    border: none;
    height: 30px;
  }
  input::-webkit-input-placeholder {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
  div {
    width: 21.938rem;
    height: 30px;
    display: flex;
    margin: 0.162rem 0 2.894rem 0.554rem;
    justify-content: center;
    align-items: center;
    border-bottom: solid 0.7px #383743;
  }

  button {
    width: 20.25rem;
    height: 3.3rem;
    margin: 2.894rem 0.688rem 0 1.554rem;
    padding: 0.9rem 7.919rem 0.9rem 7.956rem;
    border-radius: 3.6px;
    background-color: #57bbbc;
    border: 0;
    cursor: pointer;
    span {
      width: 4.375rem;
      height: 1.5rem;
      font-family: "Roboto";
      font-size: 1.125rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: white;
      background-color: #57bbbc;
    }
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  margin-right: -10px;
  z-index: 3;
  max-width: 1.625rem;
  max-height: 1.625rem;
`;

export const Title = styled.h3`
  width: 11rem;
  height: 4rem;
  margin: 0 auto;
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #383743;
`;
