import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addOrUpdateToCart } from '../api/firebase';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product,
      product: { id, image, title, category, price, description, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleSelect = (e) => setSelected(e.target.value);

  const handleClick = (e) => {
    setIsUploading(true);
    const product = { id, image, title, price, options: selected, quantity: 1 };
    addOrUpdateToCart(uid, product) //
      .then(() => {
        setSuccess('성공적으로 장바구니에 추가 했습니다.');
        setTimeout(() => {
          setSuccess(null);
        }, 4000);
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  return (
    <>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>
      <section className='flex flex-col md:flex-row p-4'>
        <img className='w-full px-4 basis-7/12' src={image} alt={title} />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2'>{title}</h2>
          <p className='text-2xl font-bold border-b border-gray-400'>
            ₩{price}
          </p>
          <p className='py-4 text-lg'>{description}</p>
          <div className='flex items-center'>
            <label className='text-brand font-bold' htmlFor='select'>
              옵션:
            </label>
            <select
              className='p-2 m-4 mr-0 flex-1 border-2 border-dashed border-brand outline-none'
              id='select'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button
            text={isUploading ? '장바구니에 추가중...' : '장바구니에 추가'}
            onClick={handleClick}
            disabled={isUploading}
          />
          {success && <p>✅ {success}</p>}
        </div>
      </section>
    </>
  );
}
