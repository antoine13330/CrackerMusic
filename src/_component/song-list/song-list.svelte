<script lang="ts">
    import './song-list.postcss';
    import { onMount } from 'svelte';
	import type { Song } from "../_model/music/song/song";
	import SongCard from "../song-card/song-card.svelte";
    export let page : number = 0;
    export let songs : Song[] = [];

    onMount(() => {
        // get the closet song-card__first class el and scroll to it 
        const firstSongCard = document.querySelector(`.song-card__first.page-${page}`);
        if(firstSongCard) {
            firstSongCard.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }

    });
</script>


<div class="song-list page-{page}" >
    <!-- <div class="song-list__album-info">
      <span class="song-list__song-count">
        12 songs
      </span>
      <span class="song-list__duration-count">
        57min 34s
      </span>
    </div> -->
    <div class="song-list__wrapper" on:mouseenter on:mouseleave>
        <div class="song-card page-{page} opacity-0">
        </div>
        <div class="song-card page-{page} opacity-0">
        </div>
        {#each songs as song, i}
            <SongCard {page} {song} delay={
            page != 1 ? i : songs.length - i
            } index={i}/>
        {/each}
        <div class="song-card page-{page} opacity-0">
        </div>
        <div class="song-card page-{page} opacity-0">
        </div>
    </div> 
  </div>