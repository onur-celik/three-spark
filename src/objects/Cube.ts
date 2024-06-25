import * as THREE from 'three';

export class Cube {
  public mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
  }
}