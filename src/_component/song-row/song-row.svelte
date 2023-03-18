    <script lang="ts">
    import './song-row.postcss';
    import type { Song } from '../../_model/music/song/song';
    export let delay : number = 0;  
    export let page : number = 0;
    export let song : Song;
</script>


<div class="song-row  page-{page}" style="animation-delay : {delay * 50}ms">
    <div class="song-row__content">
        <div class="song-row__cover">
            <img class="song-row__cover--image" src="{song.coverPath}" alt="Gorillaz"/>
        </div>
        <div class="song-row__infos">
            <span class="song-row__title">
                {song.title} 
            </span>
            {#if song.feat}
                <span class="song-row__feat">
                    ft.{song.feat}
                </span>
            {/if}
        </div>
        <div class="song-row__actions">
            <div class="song-row__duration">
                {song.duration}
            </div>
            <div class="song-row__play--svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
        </div>
    </div>
   
</div>