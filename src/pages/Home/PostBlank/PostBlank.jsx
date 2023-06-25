import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../../../assets/img/home-logo.svg';
import ButtonStyle from '../../../components/Common/Button';
import { PostBlankWrap } from './PostBlankStyle';
export default function PostBlank() {
  return (
    <PostBlankWrap>
      <img src={HomeLogo} alt='만들만들 홈로고' />
      <p>유저를 검색해 팔로우 해보세요!</p>
      <Link to='/home/search'>
        <ButtonStyle
          width='120px'
          height='44px'
          color='#fff'
          bg='#036635'
          br='44px'
        >
          검색하기
        </ButtonStyle>
      </Link>
    </PostBlankWrap>
  );
}
