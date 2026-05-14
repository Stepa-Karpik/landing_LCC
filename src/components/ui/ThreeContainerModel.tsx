import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import modelUrl from "../../assets/3D_models/container.glb?url";

type ThreeContainerModelProps = {
  activeIndex: number;
  total: number;
  className?: string;
};

const poses = [
  { x: 0.6, y: -0.12, z: 0, rx: -0.00, ry: -0.78, rz: 0.02 },
  { x: -0.5, y: -0.36, z: 0, rx: 0.5, ry: 10.12, rz: -0.02 },
  { x: 0.8, y: -0.32, z: 0, rx: -0.32, ry: -0.9, rz: 0.01 },
  { x: -0.5, y: -0.4, z: 0, rx: 0.04, ry: 10.12, rz: -0.03 },
];

export function ThreeContainerModel({ activeIndex, total, className }: ThreeContainerModelProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const activeRef = useRef(activeIndex);
  const totalRef = useRef(total);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    totalRef.current = total;
  }, [total]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(0, 1.2, 8.6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    const key = new THREE.DirectionalLight(0xffffff, 4.6);
    key.position.set(4, 5, 5);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -8;
    key.shadow.camera.right = 8;
    key.shadow.camera.top = 8;
    key.shadow.camera.bottom = -8;
    key.shadow.camera.near = 0.1;
    key.shadow.camera.far = 28;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 3.1);
    fill.position.set(-5, 2, 3);
    scene.add(fill);

    const ambient = new THREE.HemisphereLight(0xffffff, 0x77806d, 3.0);
    scene.add(ambient);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 7),
      new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.085 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -1.34, 0);
    floor.receiveShadow = true;
    scene.add(floor);

    const loader = new GLTFLoader();
    let loaded: THREE.Group | null = null;
    loader.load(modelUrl, (gltf) => {
      const root = gltf.scene;
      const box = new THREE.Box3().setFromObject(root);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);

      root.position.sub(center);
      const maxSize = Math.max(size.x, size.y, size.z) || 1;

      root.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          if (object.material) {
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => {
              material.needsUpdate = true;
            });
          }
        }
      });

      const wrapper = new THREE.Group();
      wrapper.add(root);
      wrapper.scale.setScalar(2.08 / maxSize);
      scene.add(wrapper);
      loaded = wrapper;
      modelRef.current = wrapper;
    });

    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
    };

    let frame = 0;
    const clock = new THREE.Clock();
    const render = () => {
      resize();
      const model = modelRef.current;
      if (model) {
        const pose = poses[activeRef.current % Math.min(totalRef.current, poses.length)];
        const pulse = Math.sin(clock.elapsedTime * 0.7) * 0.035;
        model.position.lerp(new THREE.Vector3(pose.x, pose.y + pulse, pose.z), 0.055);
        model.rotation.x = THREE.MathUtils.lerp(model.rotation.x, pose.rx, 0.055);
        model.rotation.y = THREE.MathUtils.lerp(model.rotation.y, pose.ry, 0.055);
        model.rotation.z = THREE.MathUtils.lerp(model.rotation.z, pose.rz, 0.055);
      }

      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(frame);
      modelRef.current = null;
      if (loaded) {
        scene.remove(loaded);
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
}
