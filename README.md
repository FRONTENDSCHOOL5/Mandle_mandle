# <span id="top">🧤 만들만들 🧤</span>

- 🔗 [배포 URL](차후추가) **❗️차후 추가될 예정❗️**
- **목차**

1. [프로젝트 소개](#1-프로젝트-소개)
2. [팀원 소개](#2-팀원-소개)
3. [기술 및 개발 환경](#3-기술-및-개발-환경)
4. [팀 협업 방식](#4-팀-협업-방식)
5. [구현 기능](#5-구현-기능)
6. [개선 방안](#6-개선-노력)
7. [폴더 구조](#8-폴더-구조)
8. [프로젝트 후기](#9-프로젝트-후기)

## 1. 프로젝트 소개

> 추가예정

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 2. 팀원 소개

### 만들5️⃣ 조

안녕하세요! 저희는 4명의 Front-end 개발자로 구성된 '만들5️⃣ 조' 입니다.<br/> <br/>
_(🦁멋쟁이사자처럼 프론트엔드스쿨 5기 프로젝트 5팀)_
|**차다연**|**김예지**|**우경석**|**윤서준** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="Dayoun_profile_img" src="https://avatars.githubusercontent.com/u/105140201?v=4"> | <img width="180"  alt="Yegi_profile_img" src="https://likelion.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F23901406-5d30-4f87-a166-03a79e52a991%2FKakaoTalk_Photo_2023-02-28-20-38-30.jpeg?table=block&id=f41783c9-bc51-4c24-ad37-de2caf59e1bd&spaceId=c69962b0-3951-485b-b10a-5bb29576bba8&width=2000&userId=&cache=v2"> | <img width="180" alt="kyungseuk_profile_img" src="https://cdn.discordapp.com/attachments/1114083723663650887/1114083747642482728/1668348982968.jpg"> | <img width="180" alt="seojun_profile_img" src="https://avatars.githubusercontent.com/u/72855681?v=4" > |
| [dyFlower](https://github.com/Da-Youn) | [ yeji_kim ](https://github.com/yejify) | [5647kr](https://github.com/5647kr) | [junny97](https://github.com/junny97) |
| 팀장 | 팀원 | 팀원 | 팀원 |

## 2.1. 역할 분배 

<p align="right"><a href="#top">(🔼 Top)</a></p>

## 3. 기술 및 개발 환경

### [기술 스택]

<table>
<tr>
 <td align="center" width="100px">사용 기술</td>
 <td width="800px">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
  <img src="https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/axios-7F2B7B?style=for-the-badge&logo=axios&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white"/>&nbsp
    </td>
</tr>
<tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=NPM&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">포맷터</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp 
 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
 </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp  
 </td>
 <tr>
  <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>

### [ Git-flow 전략 ]

기본적으로 5가지 브랜치를 활용하는 Git-flow 전략이 일방적이나, 프로젝트 규모에 맞춰 3가지로 축소하여 사용했습니다.

- `main` : 최종 배포하기 위한 브랜치
- `develop` : 기능 구현, 버그 수정과 같은 기능을 합쳐 확인하기 위한 브랜치
- `feat` : 세부 기능 작업들을 위한 브랜치
  - 각 브랜치의 이름은 `feat/세부기능`으로 이름 지어 어떠한 기능의 브랜치인지를 알 수 있도록 했습니다.
  - push 완료 후에는 해당 브랜치를 삭제하여 브랜치를 잘못 사용하는 경우를 방지했습니다.

### [Git/Commit 컨벤션]

<details>
<summary>커밋 유형</summary>
<div markdown="1">

```
✨ Feat: 새로운 기능 추가
🐛 Fix: 버그 수정
📝 Docs: 리드미 등 문서 수정, 라이브러리 설치
🎨 Style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
🖌 Design: UI 디자인 변경
🔨 Refactor: 코드 리팩토링
🤔 Test: 테스트 코드, 리팩토링 테스트 코드 추가
⚙ Chore: 빌드 업무 수정, 패키지 매니저 수정
🗒 Rename: 파일명 혹은 폴더명 수정, 위치 옮기기
🔥 Remove: 파일 삭제
```

 </div>
 </details>

<details>
<summary>커밋 메시지(제목 /본문 /숫자)</summary>
<div markdown="1">

```
git commit -m "[✨Feat] 로그인 기능 구현 #13 //제목

   - 로그인 유효성 검사 //본문
   - 로그인 정보 서버로 전송" //본문
```

 </div>
</details>

## 5. 주요기능
- **🙂 Account**
  - 로그인/로그아웃
  - 로그인/ 회원가입/프로필 유효성 검사
  - 강사/수강생 구분하여 회원가입 진행
  - 강사/수강생 구분하여 프로필 정보 설정

- **✍️ Post** 
  - 게시글 등록/수정/삭제
  - 모달창
  - 이미지 유효성 검사
  - 이미지 최대 3장 업로드
  - 유저 게시글 목록
  - 팔로잉 게시글 목록
  - 게시글 신고
  
- **📢 Commemt**
  - 댓글 등록/수정/삭제
  - 신고하기

- **🔎 Search** 
  - 유저 검색

- **🌹 Follow**
  - 팔로우/언팔로우
  - 팔로우/팔로잉 리스트

- **♥️ Like**
  - 게시물 좋아요 및 취소

- **🙌 Class**
  - 클래스 등록/예약/삭제
  - 클래스 피드
  - 인기 클래스 리스트
  - 클래스 상세

   
<br/>
<br/>

