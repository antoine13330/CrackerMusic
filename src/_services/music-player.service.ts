/*#region svelte imports*/

import type { Song } from "src/_model/music/song/song";

/*#endregion*/
class MusicPlayerService {
    audio?: HTMLAudioElement;
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
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;

        const audio = new Audio(song.url);
        const source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArrayFreq = new Uint8Array(bufferLength);
        const dataArrayTime = new Uint8Array(bufferLength);

        audio.play();

        setInterval(() => {
            analyser.getFrequencyData();
            console.log('Frequency data:', dataArrayFreq);

            analyser.getByteTimeDomainData(dataArrayTime);
            console.log('Time domain data:', dataArrayTime);
        }, 1000);
    }


}

export const musicPlayerService = new MusicPlayerService();