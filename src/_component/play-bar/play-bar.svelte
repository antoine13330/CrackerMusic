<script lang="ts">
    import './play-bar.postcss';
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
    <div class="play-bar__visualizer ">
        <div class="play-bar__visualizer__db" style="height: {currDB * 2}px">
        </div>
    </div>
{/if}

