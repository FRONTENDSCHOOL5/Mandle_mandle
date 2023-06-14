import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Teacher from "../../assets/img/icon-teacher.svg";

const TopNavWrap = styled.div`
  display: flex;
  width: 390px;
  height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  justify-content: space-between;

  input {
    width: 316px;
    height: 32px;
    border-radius: 32px;
    border: none;
    background-color: #f2f2f2;
    padding-left: 16px;
    font-size: 14px;
  }

  button {
    margin-right: 16px;
  }

  .go-back {
    margin-left: 16px;
  }
`;

const ProfileSection = styled.section`
  width: 390px;
  text-align: center;
  margin: 10px auto;

  #NickName {
    font-size: var(--font-lg);
    position: relative;
  }
  & #NickName span {
    display: block;
    width: 14px;
    height: 14px;
    position: absolute;
    right: 116px;
    top: 0;
    background-image: url(${Teacher});
  }
  #MandleId {
    font-size: var(--font-sm);
    color: var(--sub-font-color);
    margin: 6px 0 16px 0;
  }
  #Introduce {
    font-size: var(--font-md);
    color: var(--sub-font-color);
    margin-bottom: 24px;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  img {
    width: 110px;
    margin: 30px 0 16px 0;
  }
  .follow {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .follow p {
    font-size: 18px;
    color: var(--sub-font-color);
    margin-bottom: 6px;
  }
  .follow .followNum {
    font-size: 8px;
  }
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 26px;
  .profileBtn {
    border: 1px solid var(--border-color);
    border-radius: 30px;
    width: 120px;
    height: 34px;
    text-align: center;
    color: var(--sub-font-color);
    font-size: var(--font-md);
  }
  .ChatBtn,
  .ShareBtn {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    border: 1px solid var(--border-color);
  }
  .FollowBtn {
    border-radius: 30px;
    color: var(--main-color);
    width: 120px;
    height: 34px;
  }
`;

export { WrapBtn, Wrap, ProfileSection, TopNavWrap };
