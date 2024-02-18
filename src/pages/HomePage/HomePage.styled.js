import styled from "styled-components";
import imgBg from "../../assets/images/1701840650_sportishka-com-p-avtomobil-na-chernom-fone-oboi-40.jpg";

export const HomeWrap = styled.div`
  min-height: 100vh;
  background-image: url("${imgBg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    color: white;
  }

  .hero {
    font-size: 42px;
  }

  .hero-2 {
    font-weight: 400;
  }
`;
