<script lang="ts">
	import { onDestroy } from "svelte";
	import type { Unsubscriber } from "svelte/store";
	import AlbumCover from "../_component/album-cover/album-cover.svelte";
	import SongRow from "../_component/song-row/song-row.svelte";
	import type { Song } from "../_model/music/song/song";
  import SongList from "../_component/song-list/song-list.svelte";
	import { pageScrollerService } from "../_services/page-scroller.service";

  let page : number = 0;
  const pageScrollerServiceUnsub : Unsubscriber = pageScrollerService._pageNumber.subscribe((value : number) => {
      page = value;
    });

  function disablePageScroller() {
    if ( page === 1 ) pageScrollerService._scrollerActiv.set(false);
  }
  function enablePageScroller() {
    pageScrollerService._scrollerActiv.set(true);
  }
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
    coverPath : "/images/gorillaz/cracker-island/song-cover/baby-queen.png",
    duration : "2:34",
  } ,{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "/images/gorillaz/cracker-island/song-cover/cracker-island.png",
    duration : "2:34",
  },{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "/images/gorillaz/cracker-island/song-cover/tarantula.png",
    duration : "2:34",
  },{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "/images/gorillaz/cracker-island/song-cover/new-gold.png",
    duration : "2:34",
  } ]
  const songs = songList.concat(songList,songList);
  </script>

<AlbumCover {page}/>
<SongList {page} {songs} on:mouseenter={disablePageScroller} on:mouseleave={enablePageScroller} />

