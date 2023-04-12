    <script lang="ts">
    import './song-card.postcss';
    import type { Song } from '../../_model/music/song/song';
    import { musicPlayerService } from '../../_services/music-player.service.ts';
    export let delay : number = 0;  
    export let page : number = 0;
    export let song : Song;
    export let index : number = null;

    function onPlayMusic(song : Song) {
        musicPlayerService.setMusicPlayed(song);
    }
</script>


<div class="song-card  page-{page}" class:song-card__first={index === 0} style="animation-delay : {delay * 50}ms">
        <div class="song-card__cover">
            <img class="song-card__cover--image" src="{song.coverPath}" alt="Gorillaz"/>
        </div>
        <div class="song-card__content">
            <div class="song-card__infos">
                <span class="song-card__title">
                    {song.title} 
                </span>
                {#if song.feat}
                    <span class="song-card__feat">
                        ft.{song.feat}
                    </span>
                {/if}
            </div>
            <div class="song-card__actions">
                <div class="song-card__duration">
                    {song.duration}
                </div>
                <div class="song-card__actions--icon" on:click={() => {
                    onPlayMusic(song);
                }} on:keypress={() => {}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </div>
        </div>
    
</div>