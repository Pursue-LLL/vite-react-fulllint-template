/**
 * @description App容器
 */

import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';
import './App.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
