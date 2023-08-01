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

    this.animateCube();

    renderer.render( scene, camera );
};

var createACube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: "green" } );
    cube = new THREE.Mesh( geometry, material );
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    scene.add( cube );
};

var animateCube = function() {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    cube.position.z -= 0.1;
};

window.onload = this.init;