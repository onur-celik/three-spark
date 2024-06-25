import * as THREE from 'three';

export class Plane {
  public mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = -1;
    this.mesh.receiveShadow = true;
  }
}