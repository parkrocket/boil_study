import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import { Main } from './Main';
import { Introduce } from './Introduce';
import Login from './Login';
import Register from './Register';
import Test from './Test';

export const Routes = () => {
    return (
      <ReactRouterRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test value={'테스트 컴포넌트 :)😁'} />} />
      </ReactRouterRoutes>
    );
  };
  