import React, { Component, createRef, useEffect, useState} from 'react';
import * as THREE from 'three';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'


export default function Welcome2() {
    const divRef = createRef();
    const [Welcome_Bool, setWelcome_Bool] = useState();
    const scene = new THREE.Scene()
    useEffect(() => {
    
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

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function animate() {
      starGeo.verticesNeedUpdate = true
      camera.position.z +=0.01
      stars.rotation.y += 0.004
      renderer.render(scene,camera)
      requestAnimationFrame(animate)

      spdy =  (screenH / 2 - mouseY) / 100;
      spdx =  (screenW / 2 - mouseX) / 100;
      

      if (mouseDown){
        console.log(mouseX, mouseY)
        if (mouseX > screenW/2.3) {
          if (mouseX < screenW/1.7){
            if (mouseY > screenH/2.3) {
              if (mouseY < screenH/1.85) {
                console.log('button area!')
                spdy = spdy + 3*spdy
              }
            }
          }
        }
        stars.rotation.x = spdy;
        stars.rotation.y = spdx;
      }

    }
    animate()
  });
  return <div className="Welcome2"  style={{position:'absolute'}} />;
}