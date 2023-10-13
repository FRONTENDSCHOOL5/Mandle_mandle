import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';

import Class from '../src/pages/Class/Class';
import ClassDetail from '../src/pages/Class/ClassDetail/ClassDetail';
import ClassRegistration from '../src/pages/Class/ClassRegistration/ClassRegistration';
import ClassReservation from '../src/pages/Class/ClassReservation/ClassReservation';
import Posting from '../src/pages/Posting/Posting';
import Profile from '../src/pages/Profile/MyProfile';
import OtherProfile from '../src/pages/Profile/OtherProfile';
import SetProfile from './pages/Signup/SetProfile';
import Signup from './pages/Signup/Signup';
import Login from '../src/pages/Login/Login';
import Splash from '../src/pages/Splash/Splash';
import Intro from '../src/pages/Intro/Intro';
import Home from '../src/pages/Home/Home';
import Search from '../src/pages/Home/Search/Search';
import PostDetail from '../src/pages/Home/PostDetail/PostDetail';
import NotFound from '../src/pages/NotFound/NotFound';
import EditProfile from './pages/Profile/EditProfile/EditProfile';
import Follower from './pages/Profile/FollowList/FollowerList';
import Following from './pages/Profile/FollowList/FollowingList';
import ChatRoom from '../src/pages/Chatting/ChatRoom';
import EditPost from './pages/Posting/EditPost';
import ChatList from './pages/Chatting/ChatList';

function App() {
  return (
    <Wrap>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/account' element={<Outlet />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='set_profile' element={<SetProfile />} />
        </Route>
        <Route path='/home' element={<Outlet />}>
          <Route path='' element={<Home />} />
          <Route path='search' element={<Search />} />
        </Route>
        <Route path='/class' element={<Outlet />}>
          <Route path='' element={<Class />} />
          <Route path='detail/:class_id' element={<ClassDetail />} />
        </Route>
        <Route path='registration' element={<ClassRegistration />} />
        <Route path='reservation' element={<ClassReservation />} />

        <Route path='/post' element={<Outlet />}>
          <Route path=':post_id' element={<PostDetail />} />
          <Route path=':post_id/edit' element={<EditPost />} />
          <Route path='upload' element={<Posting />} />
        </Route>
        <Route path='/chat' element={<Outlet />}>
          <Route path='chatlist' element={<ChatList />} />
          <Route path='chatroom' element={<ChatRoom />} />
        </Route>

        <Route path='/my_profile' element={<Outlet />}>
          <Route path='' element={<Profile />} />
          <Route path='follower' element={<Follower />} />
          <Route path='following' element={<Following />} />
          <Route path='edit/:accountname' element={<EditProfile />} />
        </Route>
        <Route path='/other_profile/:accountname' element={<Outlet />}>
          <Route path='' element={<OtherProfile />} />
          <Route path='follower' element={<Follower />} />
          <Route path='following' element={<Following />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 390px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  overflow: hidden;
  background-color: #fff;
`;

export default App;
