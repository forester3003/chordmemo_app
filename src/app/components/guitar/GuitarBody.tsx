'use client'
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { playGuitarBody } from '../../utils/sounds';

/*
export type GuitarBodyProps = {
  currFrets: number[];
};
*/

function GuitarBody({ currFrets }: { currFrets: number[] }) {

  // 弾く弦を示す配列
  const [currStrings, setCurrStrings] = useState<number[]>([]);
  // ストローク方向
  const [strumDir, setStrumDir] = useState<string>('down');

  // ストローク方向を切り替える
  function updateStrumDir(e: React.ChangeEvent<HTMLInputElement>) {
    setStrumDir(() => e.target.value === 'down' ? 'up' : 'down');
  }

  // 指定された弦とストローク方向から弾く弦を示す配列を返す
  function getCurrStrings(string: number, strumDir: string) {
    let strings = [0, 1, 2, 3, 4, 5];
    return strumDir === 'down' ? strings.slice(string) : strings.slice(0, string + 1);
  }

  // マウスをホバーしたときに弾く弦を示すマーカーを表示
  // TypeScriptの型定義がうまくいかないため、any型を使用
  function showStringsMarker(e: any) {
    if (e.target.className === 'body-string') {
      const startString = +e.target.id.replace('body-string-', '');
      setCurrStrings(getCurrStrings(startString, strumDir))
    }
  }

  // マウスを外したときにマーカーを非表示
  function hideStringsMarker() {
    setCurrStrings([])
  }

  // 弾く弦を示すマーカーのスタイル
  const stringsMarkerStyle = {
    height: `${100 / 6 * currStrings.length}%`,
    top: `${strumDir === 'down' ? '0' : 'unset'}`,
    bottom: `${strumDir === 'down' ? 'unset' : '0'}`
  }

  return (
    <div className="guitar-body-container">
      <div
        className="guitar-body"
        onMouseMove={showStringsMarker}
        onMouseLeave={hideStringsMarker}
        onClick={() => playGuitarBody(currStrings, currFrets)}
      >
        <label
          className="strum-dir-btn"
          htmlFor="strum-dir"
        >
          {strumDir === 'down' ? <FaArrowDown /> : <FaArrowUp />}
          <input
            id="strum-dir"
            type="checkbox"
            name="strum-dir"
            value={strumDir}
            onChange={updateStrumDir}
          />
        </label>
        <div className="body-strings">
          <div className="body-string" id="body-string-5"></div>
          <div className="body-string" id="body-string-4"></div>
          <div className="body-string" id="body-string-3"></div>
          <div className="body-string" id="body-string-2"></div>
          <div className="body-string" id="body-string-1"></div>
          <div className="body-string" id="body-string-0"></div>
          {currStrings.length > 0 &&
            <div id="strings-marker" style={stringsMarkerStyle}></div>
          }
        </div>
      </div>
    </div>
  )
}

export default GuitarBody;