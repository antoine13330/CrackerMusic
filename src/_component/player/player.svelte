<script lang="ts">
    import './player.postcss';
    import { musicPlayerService } from '../../_services/music-player.service';
    import { onMount , onDestroy } from 'svelte';
    import type { Unsubscriber } from 'svelte/store';
    import type { Song , SongInfo } from '../_model/music/song/song';
    let playingSong : SongInfo;
    const playingSongUnsub : Unsubscriber = musicPlayerService._songInfo.subscribe((value : SongInfo) => {
        playingSong = value;
    });
    let currDB : number = 0;
    const currDBUnsub : Unsubscriber = musicPlayerService._currDB.subscribe((value : number) => {
        currDB = value;
    });    
    onDestroy(() => {
        playingSongUnsub();
        currDBUnsub();
    });

 </script>
{#if playingSong}
<!-- create a db reactiv audio visualizer -->
{currDB}
    <div class="player">
        
        <div class="player__visualizer ">
            <div class="player__visualizer__db" style="height: {currDB * 2}px">
            </div>
        </div>
        <!-- play / pause button--> 
        <div class="player__actions">
            <div class="player__actions__play-pause">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
        </div>
    </div>

{/if}

