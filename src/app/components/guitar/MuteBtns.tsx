'use client'
import React from 'react';

function MuteBtns({ currFrets, updateCurrFrets }: { currFrets: number[], updateCurrFrets: Function }) {

  return (
    <div className="mute-btns">
      {currFrets.map((fret, i) => {
        // fretが-0, 負の数の場合はチェックを入れる
        const isChecked = fret < 0 || Object.is(fret, -0);

        return (
          <div key={i} className="mute-btn">
            <input
              id={`mute-${i}`}
              type="checkbox"
              checked={isChecked}
              onChange={() => updateCurrFrets(i)}
            />
            <label htmlFor={`mute-${i}`}></label>
          </div>
        )
      })}
    </div>
  )
}

export default MuteBtns