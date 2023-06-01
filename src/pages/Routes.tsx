import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import Main from './Main';
import Introduce from './Introduce';
import Login from './user/Login';
import Register from './user/Register';
import Test from './Test';
import DbLook from './DbLook';
import Auth from '../hoc/Auth';
import NotFound from '../pages/NotFound';
import BoardList from './board/BoardList';
import BoardWrite from './board/BoardWrite';
import BoardView from './board/BoardView';
import Mypage from './user/Mypage';
import Admin from './admin/Admin';
import AdminBoard from './admin/Board/AdminBoard';
import AdminBoardWrite from './admin/Board/AdminBoardWrite';
import PasswordCheck from './PasswordCheck';
import AdminMain from './admin/AdminMain';
import UserList from './admin/User/UserList';
import ConfigList from './admin/Config/ConfigList';
import MenuEdit from './admin/Config/MenuEdit'
import UserUpdate from './admin/User/UserUpdate';
import NaverLogin from '../pages/user/Social/NaverLogin'

export const Routes = () => {
    return (
      <ReactRouterRoutes>
        
        <Route path="/" element={Auth(Main,null)} />
        <Route path="/introduce" element={Auth(Introduce,true)} />
        <Route path="/login" element={Auth(Login, false)} />
        <Route path="/naver" element={Auth(NaverLogin, false)} />
        <Route path="/register" element={Auth(Register,false)} />
        <Route path="/mypage" element={Auth(Mypage,true)} />
        <Route path="/board" element={Auth(BoardList,true)} />
        <Route path="/board/:boardId" element={Auth(BoardList,true)} />
        <Route path="/board/:boardId/:wrNo" element={Auth(BoardView,true)} />
        <Route path="/board/:boardId/write" element={Auth(BoardWrite,true)} />
        <Route path="/board/:boardId/page/:page" element={Auth(BoardList,true)} />
        <Route path="/board/update/:boardId/:wrNo" element={Auth(BoardWrite,true)} />
        <Route path="/dblook" element={<DbLook />} />
        <Route path="/passwordcheck" element={Auth(PasswordCheck,true)} />
        <Route path="/test" element={<Test value={'테스트 컴포넌트 :)😁'} />} />




        <Route path="/admin" element={Auth(Admin,true, true)}>
          <Route path="" element={Auth(AdminMain,true, true)}></Route>
          <Route path="config" element={Auth(ConfigList,true, true,1,1)}></Route>
          <Route path="menu" element={Auth(MenuEdit,true, true,1,2)}></Route>
          <Route path="users" element={Auth(UserList,true, true,2,0)}></Route>
          <Route path="users/update/:userNo" element={Auth(UserUpdate,true, true,2,0)}></Route>
          <Route path="users/page/:page" element={Auth(UserList,true, true,2,0)}></Route>
          <Route path="board/write" element={Auth(AdminBoardWrite,true, true,3,1)}></Route>
          <Route path="board" element={Auth(AdminBoard,true, true,3,2)}></Route>
          <Route path="/admin/board/update/:boardId" element={Auth(AdminBoardWrite,true, true,3,2)} />
        </Route>
        {/**
        <Route path="/admin/board" element={Auth(AdminBoard,true, true)} />
        <Route path="/admin/board/write" element={Auth(AdminBoardWrite,true, true)} />
        <Route path="/admin/board/update/:boardId" element={Auth(AdminBoardWrite,true, true)} />
    **/}

        <Route path="*" element={<NotFound></NotFound>} />
      </ReactRouterRoutes>
    );
  };
  