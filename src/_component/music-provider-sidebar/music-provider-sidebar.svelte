<script lang="ts">
    import './music-provider-sidebar.postcss';
    import { musicProviderService , availableMusicProviders } from '../../_services/music-provider.service';
    import type { Unsubscriber } from 'svelte/store';
    import { onDestroy , onMount } from 'svelte';
    import type { MusicProvider } from '../_model/music/music-provider/music-provider';
    let availableProviders = availableMusicProviders;
    let choosedProvider : MusicProviderInfo;
    const choosenProviderUnsub : Unsubscriber = musicProviderService._musicProvider.subscribe((value : MusicProviderInfo) => {
        choosedProvider = value;
    });
    onMount(() => {
    });
    onDestroy(() => {
        choosenProviderUnsub();
    });
    function onChooseMusicProvider(musicProvider : MusicProviderInfo) {
        musicProviderService.setMusicProvider(musicProvider);
    }   
   
</script>

<div class="music-provider-sidebar">
    <div class="music-provider-sidebar__items-wrapper">
        <div class="music-provider-sidebar__item">
        </div>
        {#each availableProviders as musicProvider , i}
            <div class="music-provider-sidebar__item"
            on:click="{() => onChooseMusicProvider(musicProvider)}"
            on:keydown="{() => null}"
            class:music-provider-sidebar__item--active="{musicProvider.name === choosedProvider.name}"
            >
                <img src={musicProvider.logo}  title="{musicProvider.name}" alt="Logo of {musicProvider.name}"/>
            </div>
        {/each}
    </div>
</div>
