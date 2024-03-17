import { guitar } from './audiosynth';

function getNote(string: number, fret: number) {
    // 音階の配列
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    // 開放弦のインデックスを示す配列。最低音Eは上記音階の配列上notes[4]なので4から開始となっている。
    const open = [4, 9, 14, 19, 23, 28];
    const index = open[string] + fret;
    const note = notes[index % 12];
    // 最低音Eのオクターブは2なのでそこを起点に12音ごとにオクターブが上がるようにしている。
    const octave = Math.floor(index / 12) + 2;
    return [note, octave]
}

function isMuted(fret: number) {
    return fret < 0 || Object.is(fret, -0);
}

function playNote(string: number, fret: number) {
    const [note, octave] = getNote(string, fret);
    // 音の長さを指定。1.5秒で鳴らす。
    const duration = 1.5;
    guitar.play(note, octave, duration)
}

function playGuitarBody(strings: number[], frets: number[]) {
    frets.forEach((f, s) => strings.includes(s) && !isMuted(f) && playNote(s, f))
}

export { playGuitarBody, playNote, isMuted }