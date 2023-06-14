import { React, useState } from "react";
import styled from "styled-components";

export default function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <InputDiv>
        <Label>이메일</Label>
        <InputBox
          width="322px"
          height="48px"
          padding="15px"
          onChange={(e) => {
            setEmail(e.target.value.trim());
            // console.log(e.target.value);
          }}
          placeholder="이메일을 입력해주세요"
        />
      </InputDiv>
      <InputDiv>
        <Label>비밀번호</Label>
        <InputBox
          width="322px"
          height="48px"
          onChange={(e) => {
            setPassword(e.target.value.trim());
            // console.log(e.target.value);
          }}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </InputDiv>
    </>
  );
}

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px; // margin-top 28px -> 16px 수정
`;
export const Label = styled.label`
  font-family: var(--font--Bold);
  font-weight: 400;
  color: #767676;
  font-size: 12px;
  /* margin-bottom: 9px; 삭제처리 */
`;

export const InputBox = styled.input`
  border: none;
  border-bottom: 1px solid #dbdbdb;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  padding: 8px 0;
  // border-radius: 4px;
  &::placeholder {
    color: #dbdbdb;
  }
  &:focus {
    border-color: #036635;
  }
`;
