'use client'
import React, { useState } from 'react';
import GuitarBody from './GuitarBody';
import Fretboard from './Fretboard';

function Guitar() {

  // 6弦から1弦までのフレットの状態を管理。0は押さえない、正の数は押さえるフレット。
  const [currFrets, setCurrFrets] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  function updateCurrFrets(string: number, fret?: number) {
    let newFrets = [...currFrets];
    // fretがundefinedの場合はミュート(負の数)する
    newFrets[string] = fret !== undefined ? fret : newFrets[string] * -1;
    setCurrFrets(newFrets);
  }

  return (
    <div className="guitar overflow-x-auto">
      <GuitarBody
        currFrets={currFrets}
      />
      <Fretboard
        currFrets={currFrets}
        updateCurrFrets={updateCurrFrets}
      />
    </div>
  )
}

export default Guitar;