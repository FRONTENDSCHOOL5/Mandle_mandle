import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/img/logo.svg';
import LoadedImg from '../../assets/img/full-logo(loaded).svg';
import LoadingImg from '../../assets/img/full-logo(loading).svg';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../../Store/userInfoAtoms';
import { SplashWrap } from './SplashStyle';

const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

export default function Loading() {
  const userInfo = useRecoilValue(UserAtom);

  useEffect(() => {
    preloadImage(LogoImg);
    preloadImage(LoadedImg);
    preloadImage(LoadingImg);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const introTimer = setTimeout(() => {
        if (Object.keys(userInfo).length) {
          navigate('/home');
        } else {
          navigate('/intro');
        }
      }, 3300);

      return () => clearTimeout(introTimer);
    }
  }, [isLoaded, userInfo, navigate]);

  return (
    <SplashWrap>
      {isLoaded ? (
        <img
          src={LoadedImg}
          className='twist'
          alt='만들만들 로딩 캐릭터 로고 '
        />
      ) : (
        <img
          src={LoadingImg}
          className='bounce'
          alt='만들만들 로딩완료 캐릭터 로고'
        />
      )}
      <h1>
        <img
          src={LogoImg}
          className={isLoaded ? 'twist' : ''}
          alt='만들만들 로딩완료 캐릭터 로고'
        />
      </h1>
    </SplashWrap>
  );
}
