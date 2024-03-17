import React from 'react';
import MuteBtns from './MuteBtns';
import FretboardBg from './FretboardBg';
import FretMarkers from './FretMarkers';

function Fretboard({ currFrets, updateCurrFrets }: { currFrets: number[], updateCurrFrets: Function }) {

  return (
    <div className="fretboard-container">
      <MuteBtns
        currFrets={currFrets}
        updateCurrFrets={updateCurrFrets}
      />
      <FretboardBg />
      <FretMarkers
        currFrets={currFrets}
        updateCurrFrets={updateCurrFrets}
      />
    </div>
  )
}

export default Fretboard;
