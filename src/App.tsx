import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './App.module.css'

// NOTE: The css is irrelevant to the example. The only thing that matters are the sticky prop and the offset prop in each ParallaxLayer component

export default function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer
          // make it sticky from the start to almost the end of the page
          sticky={{ start: 0, end: 2 }}
          offset={0}
          speed={0.2}
          style={{ ...alignCenter, justifyContent: 'center' }}
        >
          <p className={styles.scrollText}>Scroll down</p>
        </ParallaxLayer>

        {/* // * STICKY LAYER */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: 'flex-start' }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        {/* // ? NOT STICKY LAYER */}
        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        {/* // ? NOT STICKY LAYER */}
        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: 'flex-end' }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
