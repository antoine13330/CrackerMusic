export type MusicProvider = 'Spotify' | 'Deezer' | 'Apple Music';

export interface MusicProviderInfo {
    name: MusicProvider;
    logo: string;
    color : string;
}