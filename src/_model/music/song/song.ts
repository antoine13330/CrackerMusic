export interface Song {
    id: number;
    title: string;
    coverPath : string;
    artist: string;
    album: string;
    url : string;
    year: number;
    feat : string;
    duration : string;
}

export interface PlayedSong extends Song {
    currentTime : number;
    playing : boolean;
}