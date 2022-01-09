import React, { createRef, useEffect } from 'react';
import * as THREE from 'three';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
export default function Welcome2() {
  const divRef = createRef();
  useEffect(() => {
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );

    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // divRef.current.appendChild(renderer.domElement);
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // camera.position.z = 5;

    
    // function animate() {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    // }
    // animate();

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.z = 1
    camera.rotation.x = Math.PI/2

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)


    const starGeo = new THREE.BufferGeometry()
    const points = []
    for(let i=0;i<5000;i++){
      const star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() *600 - 300,
        )
      star.velocity = 0
      star.acceleration = 0.02
      points.push(star)
    }
    starGeo.setFromPoints( points)

    let sprite = new THREE.TextureLoader().load('logo192.png')
    console.log(sprite)
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
    })


    const stars = new THREE.Points(starGeo, starMaterial)
    scene.add(stars)

    var screenW = window.innerWidth;
    var screenH = window.innerHeight; /*SCREEN*/
    var spdx = 0
    var spdy = 0
    var mouseX = 0
    var mouseY = 0
    var mouseDown = false; /*MOUSE*/
    document.addEventListener('mousemove', function(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      }, false);
      document.body.addEventListener("mousedown", function(event) {
      mouseDown = true
      }, false);
      document.body.addEventListener("mouseup", function(event) {
      mouseDown = false
      }, false);

    function animate() {
      // console.log(starGeo.attributes)
      starGeo.verticesNeedUpdate = true
      camera.position.z +=0.01
      stars.rotation.y += 0.004
      renderer.render(scene,camera)
      requestAnimationFrame(animate)

      spdy =  (screenH / 2 - mouseY) / 100;
      spdx =  (screenW / 2 - mouseX) / 100;
      if (mouseDown){
        stars.rotation.x = spdy;
        stars.rotation.y = spdx;
      }

    }
    animate()
  }, [divRef]);
  return <div className="Welcome2" ref={divRef} style={{position:'absolute'}} />;
}