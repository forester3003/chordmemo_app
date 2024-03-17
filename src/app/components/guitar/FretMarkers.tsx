'use client'
import React, { useState } from 'react';
import { fbSize, fretPositions, stringPositions } from '../../utils/fretboardValues';
import { playNote, isMuted } from '../../utils/sounds';

function FretMarkers({ currFrets, updateCurrFrets }: { currFrets: number[], updateCurrFrets: Function }) {

    // 初期値-1はホバーしていない、マーカーが出ていない状態。0-5の間のときだけマーカーを表示する。
    const [string, setString] = useState(-1);
    const [fret, setFret] = useState(0);

    function showMarker(e: React.MouseEvent<SVGSVGElement>) {
        let s = Math.floor(6 / fbSize.height * (fbSize.height - 1 - e.nativeEvent.offsetY));
        let f = fretPositions.findIndex(pos => e.nativeEvent.offsetX < pos);
        // マウスがフレットの外に出た時はfが-1になるが、-1はミュートとして扱っているため、開放弦を表す0に変換する
        f = f === -1 ? 0 : f;
        setString(s);
        setFret(f);
    }

    function hideMarker() {
        setString(-1);
    }

    const fretMarkers = currFrets.map((f, i) => {
        if (!isMuted(f)) {
            return (
                <circle
                    key={i}
                    cx={`${fretPositions[f] - 6}`}
                    cy={`${stringPositions[i]}`}
                    r="6"
                    fill="rgba(255,255,255,0.5)"
                    stroke="#fff"
                />
            )
        };
        return true;
    });

    const fretMarker = <circle
        cx={`${fretPositions[fret] - 6}`}
        cy={`${stringPositions[string]}`}
        r="6"
        fill="rgba(255,255,255,0.7)"
        stroke="#fff"
    />

    return (
        <div className="fret-markers">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${fbSize.width} ${fbSize.height}`}
                width={`${fbSize.width}`}
                height={`${fbSize.height}`}
                onClick={() => {
                    playNote(string, fret);
                    updateCurrFrets(string, fret);
                }}
                onMouseMove={showMarker}
                onMouseLeave={hideMarker}
            >
                {fretMarkers}
                {string > -1 && fretMarker}
            </svg>
        </div>
    )

}

export default FretMarkers;