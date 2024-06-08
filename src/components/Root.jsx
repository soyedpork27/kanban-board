import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import { Header } from '../styles/header';


function Root(props) {

  return (
    <>
      <Header>
        <h1>
          로고
        </h1>

        <ul className='gnb'>
          <li>
            <Link to='/' className='one_depth'>
              칸반보드
            </Link>
          </li>

          <li>
            <Link to='/setting' className='one_depth'>
              설정
            </Link>
          </li>
        </ul>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;