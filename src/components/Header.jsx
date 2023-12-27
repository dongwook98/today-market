import React from 'react';
import { IoToday } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex justify-between border-b border-slate-200 p-4'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <IoToday />
        <h1 className='ml-2 text-3xl font-bold'>오늘마켓</h1>
      </Link>
      <nav className='flex items-center gap-x-8 font-semibold'>
        <Link to='/products'>상품 구경하기</Link>
        <Link to='/carts'>장바구니</Link>
        <Link to='/products/new'>상품 추가하기</Link>
        <button>로그인</button>
      </nav>
    </header>
  );
}
