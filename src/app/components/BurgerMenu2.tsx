'use client'
import { useState } from 'react';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';

export default function BurgerMenu2() {
  // 開閉状態を管理するための「useState」を設定
  const [isOpen, setOpen] = useState<boolean>(false);
  // メニューを開くための関数を設定
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };
  // メニューを閉じるための関数を設定
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div id="outer-container">
      <nav className={
        isOpen
          ? "z-40 bg-indigo-300 fixed top-2 right-2 bottom-2 left-2 flex flex-col"
          : "fixed right-[-100%] md:right-4"
      }>
        <button onClick={handleMenuClose} className={
          isOpen
            ? "z-50 fixed top-2 right-2"
            : "hidden"
        }>
          <div className='translate-x-[-0.5rem] translate-y-[0.5rem] hover:opacity-50'>
            <MdClose size={30} />
          </div>
        </button>
        <main id="page-wrap" className='translate-y-[1rem]'>
          <ul className="flex flex-col">
            <li className="mb-4 flex justify-center">
              <Link href={'/'} className='hover:opacity-50' onClick={handleMenuClose}>
                Home
              </Link>
            </li>
            <li className="mb-4 flex justify-center">
              <Link href={'/chords'} className="hover:opacity-50"
                onClick={handleMenuClose}
              >
                Chord
              </Link>
            </li>
            <li className="mb-4 flex justify-center">
              <Link href={'/fretboard'} className="hover:opacity-50"
                onClick={handleMenuClose}
              >
                Fretboard
              </Link>
            </li>
            <li className="mb-4 flex justify-center">
              <button className="mt-4 p-1 w-3/5 border-2 rounded-lg bg-red-500 hover:opacity-50"
                onClick={handleMenuClose}
              >
                Signup
              </button>
            </li>
            <li className="mb-4 flex justify-center">
              <button className="mt-4 p-1 w-3/5 border-2 rounded-lg bg-slate-400 hover:opacity-50"
                onClick={handleMenuClose}
              >
                Login
              </button>
            </li>
          </ul>
        </main>
      </nav>
      <button className="z-50 space-y-1.5 md:hidden translate-x-[-0.25rem] translate-y-[0.1rem]" onClick={handleMenuOpen}>
        <span
          className={
            isOpen
              ? "block w-7 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
              : "block w-7 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen ? "block opacity-0 duration-300" : "block w-7 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block w-7 h-0.5 bg-gray-600 -rotate-45 duration-300"
              : "block w-7 h-0.5 bg-gray-600 duration-300"
          }
        />
      </button>
    </div>
  )
}