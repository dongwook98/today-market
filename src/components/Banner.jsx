import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 bg-yellow-900 relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-90' />
      <div className='absolute w-full top-10 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-6xl'>신발은 오늘마켓</h2>
        <p className='text-2xl'>
          오늘 신을 신발은 무엇인가요? 오늘마켓에서 골라보세요!
        </p>
      </div>
    </section>
  );
}
