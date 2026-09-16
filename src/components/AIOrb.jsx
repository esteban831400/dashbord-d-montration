import { Component, Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// Réseau de nœuds en fil de fer qui tourne lentement — évoque l'IA sans
// tomber dans l'image de synthèse générique. Couleur accent uniquement.
function RotatingNetwork() {
  const groupRef = useRef(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.18
    groupRef.current.rotation.x += delta * 0.06
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.55} />
      </mesh>
      <points>
        <icosahedronGeometry args={[1.5, 1]} />
        <pointsMaterial color="#6ee7b7" size={0.05} sizeAttenuation />
      </points>
      <mesh>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

// Repli CSS pur si WebGL n'est pas disponible sur la machine (projecteur,
// laptop bridé en clientèle) : jamais planter la démo pour un effet de style.
function OrbFallback({ className }) {
  return (
    <div className={className}>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 animate-pulse rounded-full bg-accent-500/20 blur-2xl" />
        <div className="absolute inset-6 rounded-full border border-accent-500/40" />
        <div className="absolute inset-12 rounded-full border border-accent-500/30" />
      </div>
    </div>
  )
}

class OrbErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (this.state.failed) return this.props.fallback
    return this.props.children
  }
}

export default function AIOrb({ className = 'h-72 w-72' }) {
  return (
    <OrbErrorBoundary fallback={<OrbFallback className={className} />}>
      <Suspense fallback={<OrbFallback className={className} />}>
        <div className={className}>
          <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}
            gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={1} />
            <RotatingNetwork />
          </Canvas>
        </div>
      </Suspense>
    </OrbErrorBoundary>
  )
}
