var scene;
var camera;
var renderer;

var cube;


var init = function() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    this.createACube();

    camera.position.z = 5;

    this.render();

};

var render = function() {
    requestAnimationFrame( render );
    
    this.createLight();

    this.createPlane();    

    this.animateCube();


    renderer.render( scene, camera );
};

var createACube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( { color: "green" } );
    cube = new THREE.Mesh( geometry, material );
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    scene.add( cube );
};

var createPlane = function() {
    var planeGeometry = new THREE.PlaneGeometry(20, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc});
    plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.y = -1;

    scene.add(plane);
};

var animateCube = function() {
    cube.rotation.x += 0.0;
    cube.rotation.y += 0.01;
    // cube.position.z -= 0.01;
};

var createLight = function() {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(5, 10, 5);
    spotLight.castShadow = true;
    scene.add(spotLight);
}

window.onload = this.init;
