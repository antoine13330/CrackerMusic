<script lang="ts">
	import '../app.postcss';
	import GorillazLogo3D from '$lib/images/gorillaz/logo/3D.png';
	import { pageScrollerService } from '../_services/page-scroller.service';
	import type { Unsubscriber, Writable } from 'svelte/store';
	import { onDestroy, onMount } from 'svelte';
	/*#region layout lifecycle*/
	let _pageScrollerUnsub : Unsubscriber;
	onMount(() => {
		_pageScrollerUnsub = pageScrollerService._pageNumber.subscribe((value : number) => {
			amountOfScrolls = 0;
			page = value;
		});
	});
	onDestroy(() => {
		_pageScrollerUnsub.;
	});
	/*#endregion*/

	/*#region page scroller*/
	let amountOfScrolls : number = 0;
	let page : number = 0;
	const pageNumber :  Writable<number> = pageScrollerService._pageNumber;
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
		if ( amountOfScrolls > 10 ) {
			pageScrollerService.scrollTo( 
				lastScroll > 0 ? true : false 
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
	<div class="elipsis bg-primary second">
	</div>
	<div class="elipsis bg-secondary third">
	</div>

	<!-- content -->
	<div class="blur-layer z-[3]"> 
		<nav>
			{$pageNumber}
			<img src={GorillazLogo3D} alt="Gorillaz 3D Logo" />
		</nav>
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
	nav { 
		@apply py-2 
		flex justify-center
		h-16;
	}
	nav img {
		@apply h-full;
	}
	.elipsis {
		@apply
		absolute
		rounded-full;
	}
	.elipsis.first {
		@apply w-[15vw] h-[15vw] z-[2] right-[10%] top-[45%];
	}
	.elipsis.second {
		@apply w-[20vw] h-[20vw] z-[1] left-1/3 top-[40%];
	}
	.elipsis.third {
		@apply w-[30vw] h-[30vw] z-[0] right-1/4 top-[10%];
	}
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
	}
	
</style>
