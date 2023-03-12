<script lang="ts">
	import { onDestroy} from "svelte";
	import type { Unsubscriber } from "svelte/store";
	import type { MusicProvider } from "../../_model/music/providers/providers";
    import { musicProviderService } from "../../_services/music-provider.service";
    let value : MusicProvider;
    const toUnsub : Unsubscriber = musicProviderService._musicProvider.subscribe((provider) => {
            value = provider;
        });
    onDestroy(() => {
        toUnsub();
    });

    function onChange(event: any) {
        musicProviderService.setMusicProvider(event.target.value);
    }

</script>

{#if value}
    <h1>{value}</h1>
    <select on:change={onChange}>
        <option value="Spotify">Spotify</option>
        <option value="Apple Music">Apple Music</option>
    </select>
{/if}