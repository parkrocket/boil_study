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

export const Routes = () => {
    return (
      <ReactRouterRoutes>
        
        <Route path="/" element={Auth(Main,null)} />
        <Route path="/introduce" element={Auth(Introduce,true)} />
        <Route path="/login" element={Auth(Login,false)} />
        <Route path="/register" element={Auth(Register,false)} />
        <Route path="/mypage" element={Auth(Mypage,true)} />
        <Route path="/board" element={Auth(BoardList,true)} />
        <Route path="/admin" element={Auth(Admin,true, true)} />
        <Route path="/board/:boardId" element={Auth(BoardView,true)} />
        <Route path="/board/write" element={Auth(BoardWrite,true)} />

        <Route path="/dblook" element={<DbLook />} />
        <Route path="/test" element={<Test value={'테스트 컴포넌트 :)😁'} />} />

        <Route path="*" element={<NotFound></NotFound>} />
      </ReactRouterRoutes>
    );
  };
  