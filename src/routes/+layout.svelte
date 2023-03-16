<script lang="ts">
	import '../app.postcss';
	import { pageScrollerService } from '../_services/page-scroller.service';
	import Nav from '../_component/nav/nav.svelte';
	import type { Unsubscriber, Writable } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import AlbumCover from '../_component/album-cover/album-cover.svelte';
	/*#region layout lifecycle*/
	let amountOfScrolls : number = 0;
	let page : number = 0;
	const pageScrollerServiceUnsub : Unsubscriber = pageScrollerService._pageNumber.subscribe((value : number) => {
			amountOfScrolls = 0;
			page = value;
		});
	onDestroy(() => {
		pageScrollerServiceUnsub();
	});
	/*#endregion*/

	/*#region page scroller*/
	const pageNumber : Writable<number> = pageScrollerService._pageNumber;
	let lastScroll : number = 0;
	function onmousewheel($event : any) {
       	if ( $event.wheelDeltaY > 0 ) {
			if ( lastScroll < 0 )
				amountOfScrolls = 0;
			amountOfScrolls++;
			lastScroll = 1;
		} else {
			if ( lastScroll > 0 )
				amountOfScrolls = 0;
			amountOfScrolls++;
			lastScroll = -1;
		}
		if ( amountOfScrolls > 2 ) {
			pageScrollerService.scrollTo( 
				lastScroll < 0 ? true : false 
				);
    	}
	}
	/*#endregion*/
</script>
<!-- for creating this one page "parallax" effect-->
<svelte:window on:wheel={onmousewheel}/> 
<div class="page-background">
	<div class="elipsis bg-primary first page-{page}">
	</div> 
	<div class="elipsis bg-primary second page-{page}">
	</div>
	<div class="elipsis bg-secondary third page-{page}">
	</div>
	<!-- content -->
	<div class="blur-layer z-[3]"> 
		<Nav />
		<slot />
	</div>
	<!--  -->
	
</div>





<style lang="postcss">
	.page-background {
		@apply 
		bg-background
		flex flex-col
		h-screen
		overflow-hidden
		w-screen;
	}

	/*#region elipsis*/
	.elipsis {
		@apply
		absolute
		rounded-full
		transition-all duration-1000;
	}
	/* - first elipsis*/
	.elipsis.first {
		@apply w-[15vw] h-[15vw] z-[2] right-[10%] top-[45%];
	}
	.elipsis.first.page-1 {
		@apply right-[65%];
	}
	/* - second elipsis*/
	.elipsis.second {
		@apply w-[20vw] h-[20vw] z-[1] left-1/3 top-[40%];
	}
	.elipsis.second.page-1 {
		@apply left-[40%] top-[30%];
	}
	/* - third elipsis*/
	.elipsis.third {
		@apply w-[30vw] h-[30vw] z-[0] right-1/4 top-[10%];
	}
	.elipsis.third.page-1 {
		@apply right-[45%];
	}
	/*#endregion*/
	.blur-layer {
		@apply 
		bg-transparent
		flex flex-col
		absolute
		top-0
		left-0
		h-screen
		overflow-hidden
		backdrop-blur-[100px]
		w-screen;
		transition: all .3s ease-in-out;
	}
	
</style>
