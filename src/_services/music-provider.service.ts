/*#region svelte imports*/
import { writable, type Writable } from 'svelte/store';
/*#endregion*/
/*#region models*/
import type { MusicProvider } from "../_model/music/providers/providers";
/*#endregion*/
class MusicProviderService {
    public _musicProvider: Writable<MusicProvider>;
    constructor() {
        this._musicProvider = writable('Spotify');
    }    

    /**
     * setMusicProvider
     */
    public setMusicProvider( newProvider : MusicProvider) {
        this._musicProvider.set(newProvider);
    }

}

export const musicProviderService = new MusicProviderService();