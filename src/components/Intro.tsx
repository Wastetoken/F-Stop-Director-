import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [hudText, setHudText] = useState('INITIALIZING OPTICAL SYSTEM');
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || isDone) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.2;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, -2.8, 4.5);
    camera.lookAt(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 12);
    scene.add(ambientLight);
    const keyLight = new THREE.PointLight(0xffffff, 50, 40);
    keyLight.position.set(1, 1, 4);
    scene.add(keyLight);
    const ambient = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(ambient);

    const rimLight = new THREE.PointLight(0xffffff, 35, 30);
    rimLight.position.set(-2, 2, 3);
    scene.add(rimLight);
    const backLight = new THREE.PointLight(0xffffff, 20, 20);
    backLight.position.set(0, 0, -4);
    scene.add(backLight);
    const irisGlow = new THREE.PointLight(0xffd090, 0, 8);
    irisGlow.position.set(0, 0, 0);
    scene.add(irisGlow);

    const particleCount = 4000;
    const particleGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 20;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const particles = new THREE.Points(particleGeo, new THREE.PointsMaterial({ color: 0x8b7d3a, size: 0.015, transparent: true, opacity: 0.4 }));
    scene.add(particles);

    let mixer: THREE.AnimationMixer | null = null;
    let model: THREE.Group | null = null;
    let phase = 'loading';
    let phaseTime = 0;
    let animDuration = 2.5;

    const loader = new GLTFLoader();
    loader.load('https://pub-a56d70d158b1414d83c3856ea210601c.r2.dev/aperture.glb',
      (gltf) => {
        model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const size = new THREE.Vector3();
        box.getSize(size);

        const scale = 2.8 / Math.max(size.x, size.y, size.z);
        model.scale.setScalar(scale);
        
        // Offset the model to center its geometry exactly at (0,0,0)
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale;
        model.position.z = -center.z * scale;

        // Tilt the model to face the camera's angled perspective (0, -2.8, 4.5)
        model.rotation.x = Math.PI / 4;

        scene.add(model);
        
        // Update camera to look at the new center
        camera.lookAt(0, 0, 0);
        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = true;
          action.play();
          animDuration = gltf.animations[0].duration;
        }
        phase = 'anim';
        setHudText('APERTURE CALIBRATING');
      },
      (xhr) => {
        const p = Math.min((xhr.loaded / xhr.total) * 100, 100);
        setProgress(p);
      }
    );

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.033);
      if (mixer) mixer.update(delta);
      if (model && phase === 'anim') model.rotation.z += delta * 0.8;
      particles.rotation.y += delta * 0.095;

      if (phase === 'anim') {
        const prog = Math.min(phaseTime / animDuration, 1);
        setProgress(prog * 100);
        irisGlow.intensity = prog * 2;
        if (phaseTime >= animDuration + 0.05) {
          phase = 'fly';
          phaseTime = 0;
        }
      }

      if (phase === 'fly') {
        const t = Math.min(phaseTime / 4.2, 1);
        const ease = t * t * t;
        camera.position.z = 4.5 + (-4 - 4.5) * ease;
        camera.fov = 50 + ease * 90;
        camera.updateProjectionMatrix();
        irisGlow.intensity = 12 + ease * 7;
        if (model) model.rotation.z += delta * (0.008 + ease * 18);
        
        // Exact timing transition for black screen fade in
        if (t > 0.55) {
          // This allows for a smoother fade to black before the phase switch
        }

        if (t >= 1.0) {
          phase = 'black';
          phaseTime = 0;
        }
      }

      if (phase === 'black') {
        if (phaseTime > 0.2 && phaseTime < 0.6) setLogoOpacity(Math.min((phaseTime - 0.2) / 0.2, 1));
        if (phaseTime > 0.7) setLogoOpacity(Math.max(1 - (phaseTime - 0.7) / 0.3, 0));
        if (phaseTime > 1.2) {
          setIsDone(true);
          onComplete();
        }
      }

      phaseTime += delta;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, [isDone, onComplete]);

  return (
    <div id="intro-overlay" ref={containerRef} style={{ opacity: isDone ? 0 : 1, transition: 'opacity 0.7s ease' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
      <div id="intro-vignette" style={{ opacity: progress > 50 ? 1 : 0, transition: 'opacity 1s ease' }} />
      <div id="intro-logo" style={{ opacity: logoOpacity, fontSize: '9vw' }}>F-STOP</div>
      <div id="intro-hud" style={{ opacity: 1 }}>{hudText}</div>
      <div id="intro-progress" style={{ opacity: isDone ? 0 : 1 }}>
        <div id="intro-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
