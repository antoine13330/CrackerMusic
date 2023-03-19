/*#region svelte imports*/
import { writable, type Writable } from 'svelte/store';
import type { Song } from "src/_model/music/song/song";

/*#endregion*/
class MusicPlayerService {
    audio?: HTMLAudioElement;
    _actualDB : Writable<number> = writable(0);
    public play() {
        console.log('play');
    }
    public pause() {
        console.log('pause');
    }
    public next() {
        console.log('next');
    }
    public previous() {
        console.log('previous');
    }
    public setMusicPlayed(song: Song) {
        const audioCtx = new AudioContext();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        this.audio = new Audio(song.url);
        const source = audioCtx.createMediaElementSource(this.audio);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        this.audio.play();
        this.audio.addEventListener('timeupdate', () => {
            analyser.getByteFrequencyData(dataArray);
            // make the average of the frequencies
            const avg = dataArray.reduce((acc, cur) => acc + cur * cur, 0) / dataArray.length;
            const db = 20 * Math.log10(avg / 255);
            console.log(db);

        });

    }
}

export const musicPlayerService = new MusicPlayerService();