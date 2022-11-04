const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const materials = [
    new THREE.MeshStandardMaterial({ opacity: 0.5, color: 0xff0044 }),
    new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
];
console.log(THREE.Scene);
const mesh = new THREE.SceneUtils.createMultiMaterialObject(
    new THREE.BoxGeometry(1, 1, 1),
    materials
);
scene.add(mesh);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();