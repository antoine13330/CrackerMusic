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
        logo: '/images/music-providers/logo/spotify.png'
    },
    {
        name: 'Deezer',
        logo: '/images/music-providers/logo/deezer.png'
    },
    {
        name: 'Apple Music',
        logo: '/images/music-providers/logo/apple-music.png'
    }
];
export const musicProviderService = new MusicProviderService();