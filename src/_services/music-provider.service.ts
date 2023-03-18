/*#region svelte imports*/
import { writable, type Writable } from 'svelte/store';
/*#endregion*/
/*#region models*/
import type { MusicProviderInfo } from "../_model/music/providers/providers";
/*#endregion*/
class MusicProviderService {
    public _musicProvider: Writable<MusicProviderInfo>;
    constructor() {
        this._musicProvider = writable(availableMusicProviders[0]);
    }    

    /**
     * setMusicProvider
     */
    public setMusicProvider( newProvider : MusicProviderInfo) {
        this._musicProvider.set(newProvider);
    }
}
export const availableMusicProviders : MusicProviderInfo[] = [
    { 
        name: 'Spotify',
        logo: '/images/music-providers/logo/spotify.png',
        color: '#1DB954'
    },
    {
        name: 'Deezer',
        logo: '/images/music-providers/logo/deezer.png',
        color: '#00A0E9'
    },
    {
        name: 'Apple Music',
        logo: '/images/music-providers/logo/apple-music.png',
        color: '#fe2954'
    }
];
export const musicProviderService = new MusicProviderService();