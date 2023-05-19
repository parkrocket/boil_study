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
import BoardUpdate from './board/BoardUpdate';
import BoardView from './board/BoardView';
import Mypage from './user/Mypage';
import Admin from './admin/Admin';
import AdminBoard from './admin/Board/AdminBoard';
import AdminBoardWrite from './admin/Board/AdminBoardWrite';
import PasswordCheck from './PasswordCheck';
import AdminMain from './admin/AdminMain';
import AdminBoardTest from './admin/Board/AdminBoardTest';


export const Routes = () => {
    return (
      <ReactRouterRoutes>
        
        <Route path="/" element={Auth(Main,null)} />
        <Route path="/introduce" element={Auth(Introduce,true)} />
        <Route path="/login" element={Auth(Login,false)} />
        <Route path="/register" element={Auth(Register,false)} />
        <Route path="/mypage" element={Auth(Mypage,true)} />
        <Route path="/board" element={Auth(BoardList,true)} />
        <Route path="/board/:boardId" element={Auth(BoardList,true)} />
        <Route path="/board/:boardId/:wrNo" element={Auth(BoardView,true)} />
        <Route path="/board/:boardId/write" element={Auth(BoardWrite,true)} />
        <Route path="/board/page/:page" element={Auth(BoardList,true)} />
        <Route path="/board/update/:boardId/:wrNo" element={Auth(BoardWrite,true)} />
        <Route path="/dblook" element={<DbLook />} />
        <Route path="/passwordcheck" element={Auth(PasswordCheck,true)} />
        <Route path="/test" element={<Test value={'테스트 컴포넌트 :)😁'} />} />




        <Route path="/admin" element={Auth(Admin,true, true)}>
          <Route path="" element={<AdminMain/>}></Route>
          <Route path="board" element={<AdminBoard />}></Route>
          <Route path="board/test" element={<AdminBoardTest />}></Route>
          <Route path="board/write" element={<AdminBoardWrite />}></Route>
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
  