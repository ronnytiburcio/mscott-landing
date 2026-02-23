import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Friction from './components/Friction';
import Authority from './components/Authority';
import Systems from './components/Systems';
import Founder from './components/Founder';
import Decision from './components/Decision';
import Footer from './components/Footer';

/* ─── Noise Overlay (feTurbulence grain) ─── */
function NoiseOverlay() {
  return (
    <div className="noise-overlay">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Friction />
        <Authority />
        <Systems />
        <Founder />
        <Decision />
      </main>
      <Footer />
    </>
  );
}
