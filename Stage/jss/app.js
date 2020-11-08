//IMPORTANT STUFF
const SCENE = new THREE.Scene();
const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;
const MAXPARTICLES = 5;
const RENDERER = new THREE.WebGLRenderer();
RENDERER.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(RENDERER.domElement);

//CAMERA
let camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR
);

camera.position.x = 0;
camera.position.y = 0;
//camera.position.z = 40;
camera.position.z = 0;


camera.lookAt(new THREE.Vector3(0, 0, 0));  

//FIREFLY
let particlesGeometry = new THREE.Geometry();
for (let i = 0; i < MAXPARTICLES; i++) {
  let particle = new THREE.Vector3(
    random(-69, 69),
    random(-9, 9),
    random(-11, 11)
  );
  particlesGeometry.vertices.push(particle);
}
let particleMaterial = new THREE.ParticleBasicMaterial({
  color: 0xFFA500,
  size: 0.3,
 
});
let ringMesh = new THREE.ParticleSystem(particlesGeometry, particleMaterial);
ringMesh.sortParticles = true;
SCENE.add(ringMesh);

//TREE 1 (Round)
  //BARK
let bark1Geometry = new THREE.CylinderGeometry(0.03,0.03,0.4,32);
let bark1Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
let bark1Mesh = new THREE.Mesh(bark1Geometry, bark1Material);
SCENE.add(bark1Mesh);

bark1Mesh.position.y = 0
bark1Mesh.position.x = 0
bark1Mesh.position.z = -0.5
  //LEAVES
let leaves1Geometry = new THREE.SphereGeometry(0.1, 6, 6);
let leaves1Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
let leaves1Mesh = new THREE.Mesh(leaves1Geometry, leaves1Material);
SCENE.add(leaves1Mesh);

leaves1Mesh.position.y = 0.2
leaves1Mesh.position.x = 0
leaves1Mesh.position.z = -0.5

//TREE 2 (Round) 
  //BARK
let bark2Geometry = new THREE.CylinderGeometry(0.03,0.03,0.3,32);
let bark2Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
let bark2Mesh = new THREE.Mesh(bark2Geometry, bark2Material);
SCENE.add(bark2Mesh);

bark2Mesh.position.y = -0.1
bark2Mesh.position.x = -0.5
bark2Mesh.position.z = -0.3
  //LEAVES
let leaves2Geometry = new THREE.SphereGeometry(0.1, 6, 6);
let leaves2Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
let leaves2Mesh = new THREE.Mesh(leaves2Geometry, leaves2Material);
SCENE.add(leaves2Mesh);

leaves2Mesh.position.y = 0.1
leaves2Mesh.position.x = -0.5
leaves2Mesh.position.z = -0.3

//TREE 3 (Pointy)
  //BARK
let bark3Geometry = new THREE.CylinderGeometry(0.02,0.02,0.3,32);
let bark3Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
let bark3Mesh = new THREE.Mesh(bark3Geometry, bark3Material);
SCENE.add(bark3Mesh);

bark3Mesh.position.y = -0.1
bark3Mesh.position.x = -0.4
bark3Mesh.position.z = -0.6
  //LEAVES
let leaves3Geometry = new THREE.CylinderGeometry(0, 0.07, 0.4, 4, 2);
let leaves3Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
let leaves3Mesh = new THREE.Mesh(leaves3Geometry, leaves3Material);
SCENE.add(leaves3Mesh);

leaves3Mesh.position.y = 0.1
leaves3Mesh.position.x = -0.4
leaves3Mesh.position.z = -0.6

//TREE 4 (Pointy)
  //BARK
  let bark4Geometry = new THREE.CylinderGeometry(0.02,0.02,0.3,32);
  let bark4Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark4Mesh = new THREE.Mesh(bark4Geometry, bark4Material);
  SCENE.add(bark4Mesh);
  
  bark4Mesh.position.y = -0.1
  bark4Mesh.position.x = -0.6
  bark4Mesh.position.z = -0.09
    //LEAVES
  let leaves4Geometry = new THREE.CylinderGeometry(0, 0.07, 0.4, 4, 2);
  let leaves4Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/pointyleavesTexture.png'), side: THREE.DoubleSide});
  let leaves4Mesh = new THREE.Mesh(leaves4Geometry, leaves4Material);
  SCENE.add(leaves4Mesh);
  
  leaves4Mesh.position.y = 0.1
  leaves4Mesh.position.x = -0.6
  leaves4Mesh.position.z = -0.09

//MOBY HUGE
  //SHAFT
  let bark7Geometry = new THREE.CylinderGeometry(0.1,0.1,0.4,32);
  let bark7Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/barkTexture.png'), side: THREE.DoubleSide} );
  let bark7Mesh = new THREE.Mesh(bark7Geometry, bark7Material);
  SCENE.add(bark7Mesh);
  
  bark7Mesh.position.y = 0.2
  bark7Mesh.position.x = 0.2
  bark7Mesh.position.z = 0.5

  //LEAVES
  let leaves5Geometry = new THREE.SphereGeometry(0.1, 6, 6);
  let leaves5Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves5Mesh = new THREE.Mesh(leaves5Geometry, leaves5Material);
  SCENE.add(leaves5Mesh);
  
  leaves5Mesh.position.y = 0
  leaves5Mesh.position.x = 0.4
  leaves5Mesh.position.z = 0.5

  let leaves6Geometry = new THREE.SphereGeometry(0.1, 6, 6);
  let leaves6Material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('images/leavesTexture.png'), side: THREE.DoubleSide});
  let leaves6Mesh = new THREE.Mesh(leaves6Geometry, leaves6Material);
  SCENE.add(leaves6Mesh);
  
  leaves6Mesh.position.y = 0
  leaves6Mesh.position.x = 0
  leaves6Mesh.position.z = 0.5
  

//SKYBOX (THIS IS THE MEAT OF MY CODE)
let stageGeometry = new THREE.BoxBufferGeometry(300,100,300);
let stageGround = 
[
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/groundTexture.jpg'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide}),
  new THREE.MeshBasicMaterial ({map: new THREE.TextureLoader().load('images/backgroundTexture.png'), side: THREE.DoubleSide})

];
let stageMaterials = new THREE.MeshFaceMaterial(stageGround);
let stageCube = new THREE.Mesh(stageGeometry, stageMaterials);
SCENE.add(stageCube);
stageCube.position.x=0
stageCube.position.y=0
stageCube.position.z=0 // this can vary from the position of your camera

//ENDS HERE

//RANDOM NUMBER GENERATOR
function random(min, max) {
  if (isNaN(max)) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

//LIGHT
let light = new THREE.AmbientLight( "#FFFFFF" );
SCENE.add( light );



//RENDER LOOP
function render() {
    requestAnimationFrame(render);
    ringMesh.rotation.y += -0.00200;
    ringMesh.rotation.x += 0.00200;
    ringMesh.rotation.z += -0.00200;
    //stageCube.rotation.y += -0.0020;
    //sphere1.rotation.y += -0.0020;
    //cylinder5.rotation.y += -0.0020;
    camera.rotation.y += 0.0020;
    
    
    RENDERER.render(SCENE, camera);
  }
  render();

//RESIZE
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  RENDERER.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", resize, false);