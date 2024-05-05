'use client'

import React, { useEffect, useRef } from 'react'
import { Fretboard } from '@moonwave99/fretboard.js'

export default function Chord() {
  const fretboardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // レンダリング
    if (fretboardRef.current && !fretboardRef.current.innerHTML) {
      // fretboardRef.current.innerHTML = ''; // すでに要素が存在する場合はクリアする
      const fretboard = new Fretboard({
        el: fretboardRef.current,
      });
      fretboard.setDots([
        {
          string: 5,
          fret: 3,
        },
        {
          string: 4,
          fret: 2,
        },
        {
          string: 2,
          fret: 1,
        },
      ]);
      fretboard.render();
      console.log("rendered");
    }
  }, [fretboardRef.current]); // fretboardRef.current が変更されるたびに再レンダリングをトリガー

  return (
    <div className='h-screen'>
      <div className='text-4xl text-center'>Guitar</div>
      <figure ref={fretboardRef}></figure>
    </div>
  )
}
