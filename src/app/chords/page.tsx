'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Fretboard, Systems } from '@moonwave99/fretboard.js'

export default function Chord() {
  const fretboardRef = useRef<HTMLElement>(null);
  const [root, setRoot] = useState('C');
  const [chord, setChord] = useState('I_Maj7');

  useEffect(() => {
    console.log(root, chord);
    // レンダリング
    if (fretboardRef.current) {
      fretboardRef.current.innerHTML = ''; // すでに要素が存在する場合はクリアする

      // フレットボードの初期化
      const fretboard = new Fretboard({
        el: fretboardRef.current,
        dotSize: 28,
        highlightFill: 'whitesmoke',
        width: 960,
      });

      // フレットボードにスケールを描画
      fretboard.renderScale({
        root: root,
        type: 'ionian',
      });

      // 音名と度数を表示
      fretboard.style({
        // text: ({ note }: { note: any }) => note,
        text: ({ interval, note }: { interval: any, note: any }) => interval + "/" + note,
        fontSize: 10,
      });

      // Ionianにおけるダイアトニックコード定義
      const chordsDefinition: { [key: string]: string[] } = {
        I_Maj7: ['1P', '3M', '5P', '7M'],
        II_min7: ['2M', '4P', '6M', '1P'],
        III_min7: ['3M', '5P', '7M', '2M'],
        IV_Maj7: ['4P', '6M', '1P', '3M'],
        V_7: ['5P', '7M', '2M', '4P'],
        VI_min7: ['6M', '1P', '3M', '5P'],
        VII_min7b5: ['7M', '2M', '4P', '6M'],
      };

      const chordComponent: string[] = chordsDefinition[chord];

      chordComponent.forEach((interval, index) => {
        if (index === 0) {
          fretboard.style({
            filter: { interval: interval },
            fill: 'orange',
          });
        } else {
          fretboard.style({
            filter: { interval: interval },
            fill: 'skyblue',
          });
        }
      });

      /*fretboard.highlightAreas([
        { string: 1, fret: 5 },
        { string: 6, fret: 2 },
      ]);*/
      console.log("rendered");
    }
  }, [fretboardRef.current, root, chord]); // fretboardRef.current が変更されるたびに再レンダリングをトリガー

  const handleRootChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRoot(event.target.value);
  };

  const handleChordChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChord(event.target.value);
  };

  return (
    <div className='h-screen'>
      <div className='text-4xl text-center'>Guitar</div>
      <div className='flex justify-center items-center mt-4'>
        <label className='mr-2'>Root:</label>
        <select value={root} onChange={handleRootChange} className='text-gray-800'>
          <option value='C'>C</option>
          <option value='Db'>Db/C#</option>
          <option value='D'>D</option>
          <option value='Eb'>Eb/D#</option>
          <option value='E'>E</option>
          <option value='F'>F</option>
          <option value='Gb'>Gb/F#</option>
          <option value='G'>G</option>
          <option value='Ab'>Ab/G#</option>
          <option value='A'>A</option>
          <option value='Bb'>Bb/A#</option>
          <option value='B'>B</option>
        </select>
        <label className='mx-2'>Chord:</label>
        <select value={chord} onChange={handleChordChange} className='text-gray-800'>
          <option value='I_Maj7'>IMaj7</option>
          <option value='II_min7'>IImin7</option>
          <option value='III_min7'>IIImin7</option>
          <option value='IV_Maj7'>IVMaj7</option>
          <option value='V_7'>V7</option>
          <option value='VI_min7'>VImin7</option>
          <option value='VII_min7b5'>VIImin7b5</option>
        </select>
      </div>
      <div className='overflow-x-auto'>
        <figure ref={fretboardRef} className='flex-none'></figure>
      </div>
    </div>
  )
}
