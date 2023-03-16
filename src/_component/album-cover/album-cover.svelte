<script lang="ts">
    import './album-cover.postcss';
    import Cover from '$lib/images/gorillaz/cracker-island/album-cover/cover.png';
    export let page = 0;
 </script>


<section class="album-cover page-{page}">
        <div class="album-cover__content">
            <img class="album-cover__image"  src={Cover} alt="Gorillaz cracker island"/>
            <span class="album-cover__title">
                Cracker Island
            </span>
            <span class="album-cover__streams">
                1.205.632 streams
            </span>
        </div>
		
</section>