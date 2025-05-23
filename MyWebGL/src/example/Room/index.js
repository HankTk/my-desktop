// Original and the models by Bruno Simon: https://threejs-journey.com

import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './styles.css'
import Room from './Room'

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <Room />
    </Suspense>
    <Loader />
  </>,
)
