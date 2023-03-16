<script lang="ts">
	import { onDestroy } from "svelte";
	import type { Unsubscriber } from "svelte/store";
	import AlbumCover from "../_component/album-cover/album-cover.svelte";
	import SongRow from "../_component/song-row/song- row.svelte";
	import type { Song } from "../_model/music/song/song";
	import { pageScrollerService } from "../_services/page-scroller.service";

  let page : number = 0;
  const pageScrollerServiceUnsub : Unsubscriber = pageScrollerService._pageNumber.subscribe((value : number) => {
      page = value;
    });
  onDestroy(() => {
    pageScrollerServiceUnsub();
  });

  const songList : Song[] = [{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "src/lib/images/gorillaz/cracker-island/song-cover/baby-queen.png",
    duration : "2:34",
  } ,{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "src/lib/images/gorillaz/cracker-island/song-cover/cracker-island.png",
    duration : "2:34",
  } ]
  </script>

<AlbumCover {page}/>

<div class="song-list">
  <div class="song-list__wrapper">
    {#each songList as song}
      <SongRow {song}/>
    {/each}
  </div>

</div>


<style>
  .song-list {
    @apply w-full 
    h-2/3
    flex
    justify-center;   
  }
  .song-list__wrapper {
    @apply w-1/2
    h-full
    flex
    flex-col
    justify-center;
  }
</style>

