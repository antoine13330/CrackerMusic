<script lang="ts">
    import './song-list.postcss';
	import type { Song } from "../_model/music/song/song";
	import SongRow from "../song-row/song-row.svelte";
    export let page : number = 0;
    export let songs : Song[] = [];
</script>


<div class="song-list page-{page}" >
    <div class="song-list__album-info">
      <span class="song-list__song-count">
        12 songs
      </span>
      <span class="song-list__duration-count">
        57min34s
      </span>
    </div>
    <div class="song-list__wrapper" on:mouseenter on:mouseleave>
      {#each songs as song, i}
        <SongRow {page} {song} delay={
        page != 1 ? i : songs.length - i
        }/>
      {/each}
    </div>
  
  </div>