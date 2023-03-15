<script lang="ts">
    import './song-row.postcss';
    import { Song } from '../../_model/music/song/song';
    export let delay = 0;  // ms
    export let song : Song;
</script>


<div class="song-row delay-[{delay}ms]">
    <div class="song-row__content">
        <div class="song-row__cover">
            <img class="song-row__cover--image" src="https://i.scdn.co/image/ab67616d0000b273d0f1f2f2b3b2f2f2f2f2f2f2" alt="Gorillaz"/>
        </div>
        <div class="song-row__infos">
            <span class="song-row__title">
                1
            </span>
            {#if song.feat != null}
                <span class="song-row__feat">
                    {song.feat}
                </span>
            {/if}
        </div>
        <div class="song-row__actions">
            <div class="song-row__duration">
                3:20
            </div>
            <div class="song-row__play">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
        </div>
    </div>
   
</div>