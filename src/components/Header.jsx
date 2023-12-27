import React, { useEffect, useState } from 'react';
import { IoToday } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function Header() {
  const [user, setUser] = useState();
  const [admin, setAdmin] = useState();
  console.log(user);
  console.log('admin', admin);
  useEffect(() => {
    onUserStateChange(
      (user) => setUser(user),
      (user) => setAdmin({ ...user, admin: user.uid })
    );
  }, []);

  return (
    <header className='flex justify-between border-b border-slate-200 p-4'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <IoToday />
        <h1 className='ml-2 font-bold hidden md:block'>오늘마켓</h1>
      </Link>
      <nav className='flex items-center gap-x-4 md:gap-x-6 font-semibold'>
        <Link to='/products'>상품 구경하기</Link>
        {user && (
          <>
            <Link to='/carts'>장바구니</Link>
            <Link to='/products/new'>상품 추가하기</Link>
            {user && <User user={user} />}
          </>
        )}
        {!user && <button onClick={login}>로그인</button>}
        {user && <button onClick={logout}>로그아웃</button>}
      </nav>
    </header>
  );
}
