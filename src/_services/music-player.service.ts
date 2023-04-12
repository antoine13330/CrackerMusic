/*#region svelte imports*/
import { writable, type Writable } from 'svelte/store';
import type { PlayedSong, Song } from "src/_model/music/song/song";

/*#endregion*/
class MusicPlayerService {
    audio?: HTMLAudioElement;
    _songInfo : Writable<PlayedSong | undefined> = writable(undefined)
    _currDB : Writable<number> = writable(0);
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
        console.log('setMusicPlayed');
        if ( this.audio ) {
            this.audio.pause();
            this.audio.src = "";
            this.audio = undefined;
        }
        const audioCtx = new AudioContext();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        this.audio = new Audio(song.url);
        this._songInfo.set({
            ...song,
            currentTime: 0,
            playing: true
        });
        const source = audioCtx.createMediaElementSource(this.audio);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        this.audio.play();
        setInterval(() => {
            analyser.getByteFrequencyData(dataArray);
            // make the average of the frequencies
            const avg = dataArray.reduce((acc, cur) => acc + cur * cur, 0) / dataArray.length;
            const db = 20 * Math.log10(avg / 255);
            if ( !isFinite(db) ) return;
            this._currDB.set(db);
            this._songInfo.update((song) => {
                if (song) {
                    song.currentTime = this.audio?.currentTime || 0;
                }
                return song;
            });
        } , 10);

    }
}

export const musicPlayerService = new MusicPlayerService();