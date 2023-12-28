import React from 'react';
import { IoToday, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import User from './User';

export default function Header() {
  const { user, login, logout } = useAuthContext();

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
            <Link to='/carts'>
              <IoCartOutline className='text-4xl' />
            </Link>
            {true && <div></div>}
          </>
        )}
        {user && user.isAdmin && <Link to='/products/new'>상품 추가하기</Link>}
        {user && <User user={user} />}
        {!user && <Button text='로그인' onClick={login} />}
        {user && <Button text='로그아웃' onClick={logout} />}
      </nav>
    </header>
  );
}
