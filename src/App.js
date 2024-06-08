import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Kanban from './components/Kanban/Kanban';
import Setting from './components/Setting/Setting';
import Root from './components/Root';

function App() {

  const router = createBrowserRouter([{
    path : '/',
    element : <Root />,
    children : [
      {
        index : true,
        element : <Kanban />
      },
      {
        path : '/setting',
        element : <Setting />
      }
    ]
  }]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;