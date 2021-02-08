import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 57.69rem;
  max-height: 13.366rem;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background: #ffffff;
  margin: 60px;
  img {
    max-width: 18.313rem;
    max-height: 10rem;
    margin: 30px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 20px;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-bottom: -10px;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #8d8c8c;
  margin-bottom: -10px;
`;

export const Label = styled.p`
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #8d8c8c;
`;
