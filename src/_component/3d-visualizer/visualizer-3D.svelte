<script lang="ts">
	import { onMount } from 'svelte';
	import type { BoxGeometry, DirectionalLight, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, SphereGeometry } from 'three';
    import { musicPlayerService } from '../../_services/music-player.service';
    import * as THREE from 'three';
    let visualizer : Element;
    const scene : Scene = new THREE.Scene();
    let camera : PerspectiveCamera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
    let baseRadius : number = 1;
    var sphere : SphereGeometry = new THREE.SphereGeometry(baseRadius, 32, 32);
    const material : MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x88c9d3 , wireframe : true });
    // add light to show the cube
    const light : THREE.AmbientLight = new THREE.AmbientLight(0x404040); 
    scene.add(light);

    let cube : Mesh = new THREE.Mesh(sphere, material);
    let renderer : THREE.WebGLRenderer;
    scene.add(cube);
    camera.position.z = 5; 

    const maxScale = 2; // l'échelle maximale de la sphère
const minScale = 1; // l'échelle minimale de la sphère
    function getScaleFromDecibels(decibel: number, currentScale: number): number {
  // calculez la nouvelle échelle en fonction des variations de décibels
  const dbScale = Math.pow(10, decibel / 20) * 0.01; // utilisez une échelle logarithmique pour limiter la taille de la sphère
  const newScale = baseRadius * (1 + dbScale); // calculez la nouvelle échelle en fonction du rayon de base et de l'échelle logarithmique

  // limitez l'échelle maximale et minimale
  const limitedScale = Math.min(maxScale, newScale);
  const finalScale = Math.max(minScale, limitedScale);

  return finalScale;
}

let currentScale = baseRadius; // l'échelle initiale de la sphère

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  currentScale = getScaleFromDecibels(decibel, currentScale);
  cube.scale.set(currentScale, currentScale, currentScale);  renderer.render(scene, camera);
};
    const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    };
    





    export const createScene = (el : Element) => {
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el  , alpha : true });
    resize();
    animate();
    }

    let decibel : number = 0;
    const dbUnsub = musicPlayerService._currDB.subscribe((_curr) => {
        decibel = _curr;
        console.log(decibel);
    });
    onMount(() => {

        window.addEventListener('resize', resize);
        // make background transparent
        scene.background = null;
        createScene(visualizer);


        musicPlayerService.setMusicPlayed({
			url: 'audio/gorillaz/cracker-island.mp3',
			id: 0,
			title: '',
			coverPath: '',
			artist: '',
			album: '',
			year: 0,
			feat: '',
			duration: ''
		})
    });

</script>


<canvas class="visualizer" bind:this={visualizer}>

</canvas>

