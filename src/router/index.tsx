/**
 * @description 路由配置
 */

import { createBrowserRouter } from 'react-router-dom';
import Index from '../pages/index/index';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Index,
  },
]);
export default router;
