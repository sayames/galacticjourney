const canvas = document.getElementById('gameCanvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create and add the spaceship to the scene
const spaceshipGeometry = new THREE.BoxGeometry(1, 1, 1);
const spaceshipMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
scene.add(spaceship);

// Set initial camera position
camera.position.z = 5;

// Main game loop
function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Update game elements
function update() {
  // Controls for spaceship movement
  const speed = 0.1;
  if (keys['ArrowUp']) {
    spaceship.position.y += speed;
  }
  if (keys['ArrowDown']) {
    spaceship.position.y -= speed;
  }
  if (keys['ArrowLeft']) {
    spaceship.position.x -= speed;
  }
  if (keys['ArrowRight']) {
    spaceship.position.x += speed;
  }
}

// Render the scene
function render() {
  renderer.render(scene, camera);
}

// Handle user input
const keys = {};
document.addEventListener('keydown', (event) => {
  keys[event.key] = true;
});
document.addEventListener('keyup', (event) => {
  keys[event.key] = false;
});

// Initialize the game loop
gameLoop();
