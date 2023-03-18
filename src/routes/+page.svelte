<script lang="ts">
	import { onDestroy } from "svelte";
	import type { Unsubscriber } from "svelte/store";
	import AlbumCover from "../_component/album-cover/album-cover.svelte";
	import SongRow from "../_component/song-card/song-card.svelte";
	import type { Song } from "../_model/music/song/song";
  import SongList from "../_component/song-list/song-list.svelte";
	import { pageScrollerService } from "../_services/page-scroller.service";
  import { musicProviderService , availableMusicProviders } from '../_services/music-provider.service';
  import type MusicProviderInfo from "../_model/music/providers/providers.ts";
  let page : number = 0;
  const pageScrollerServiceUnsub : Unsubscriber = pageScrollerService._pageNumber.subscribe((value : number) => {
      page = value;
    });
    let choosedProvider : MusicProvider;
    const choosenProviderUnsub : Unsubscriber = musicProviderService._musicProvider.subscribe((value : MusicProvider) => {
        choosedProvider = value;
    });

  function disablePageScroller() {
    if ( page === 1 ) pageScrollerService._scrollerActiv.set(false);
  }
  function enablePageScroller() {
    pageScrollerService._scrollerActiv.set(true);
  }
  function toNextPage() {
    pageScrollerService.scrollTo(true);
  }
  onDestroy(() => {
    pageScrollerServiceUnsub();
    choosenProviderUnsub();
  });

  const songList : Song[] = [{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "/images/gorillaz/cracker-island/song-cover/crocadillaz.jpg",
    duration : "2:34",
  } ,{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "/images/gorillaz/cracker-island/song-cover/crocadillaz.jpg",
    duration : "2:34",
  },{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "/images/gorillaz/cracker-island/song-cover/crocadillaz.jpg",
    duration : "2:34",
  },{
    id : 0,
    year : 2023,
    feat : "Damon Albarn",
    title : "Cracker Island",
    album : "Gorillaz",
    artist : "Gorillaz",
    coverPath : "/images/gorillaz/cracker-island/song-cover/crocadillaz.jpg",
    duration : "2:34",
  } ]
  const songs = songList.concat(songList,songList);
  </script>

<AlbumCover {page}/>
<div on:keydown={() => null} on:click={toNextPage} class="to-next page-{page}">
  <div class="to-next__wrapper">
      <span class="flex">
        <h2>Discover the album on</h2>
        <span class="to-next__providers">
          {#each availableMusicProviders as provider}
            <span style="color : {provider.color}" class="to-next__provider" class:to-next__provider--selected={provider.name === choosedProvider.name}>
              {provider.name}
            </span>
          {/each}      
        </span>
      </span>
      <span class="to-next__icon">
        <i class="fa-solid fa-chevron-down"></i>
      </span>
  </div>
</div>
<SongList {page} {songs} on:mouseenter={disablePageScroller} on:mouseleave={enablePageScroller} />



<style>
  .to-next {
    @apply
    z-20
    absolute
    bottom-0
    left-0
    right-0
    flex
    justify-center
    items-center
    text-2xl
    font-semibold
    text-zinc-300
    cursor-pointer
    ;
    animation : hop-in 1s forwards;
  }

  .to-next__wrapper {
    @apply
    animate-bounce
    flex
    flex-col
    items-center
    ;
  }
  .to-next__providers {
    @apply
    pl-2
    ;
  }
  .to-next__icon {
    @apply
    py-1;
  }
   .to-next__provider:not(.to-next__provider--selected) {
    @apply
    hidden;
   }
   .to-next.page-1{
    animation : hop-out 1s forwards;
   }
   .to-next__provider--selected {
   }
</style>