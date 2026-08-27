import useReveal from '../../hooks/useReveal';
import HeroCopy from '../scenes/HeroCopy';
import ProblemCopy from '../scenes/ProblemCopy';
import SystemCopy from '../scenes/SystemCopy';
import HandoffCopy from '../scenes/HandoffCopy';
import AboutCopy from '../scenes/AboutCopy';
import { hero, problem, system, handoff, about } from '../../content';

// StaticWorld owns section layout and background only. Copy lives in the
// scene components under src/components/scenes, which stay logic-free so
// they can be portaled into a scroll-scrubbed flight engine later.
function Scene({ id, scene, glowClassName, eager = false, strongScrim = false, children }) {
  const containerRef = useReveal();

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient fallback stays beneath the still: paints while the
            image loads and whenever it is missing. */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink-2" />
        <div className={`absolute inset-0 ${glowClassName}`} />
        {/* Diorama still. A scroll-world flight clip replaces this layer in
            a future build; the copy components above never change. */}
        <picture>
          <source media="(max-width: 767px)" srcSet={`/world/stills/scene-${scene}-m.webp`} />
          <img
            src={`/world/stills/scene-${scene}.webp`}
            alt=""
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : 'auto'}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        {/* Legibility scrim between the art and the copy panel. */}
        {strongScrim && <div className="absolute inset-0 bg-ink/40" />}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/35 md:bg-gradient-to-r md:from-ink/85 md:via-ink/50 md:to-transparent" />
      </div>
      <div className="relative z-10 w-full px-6 py-28 md:px-16 lg:px-24">{children}</div>
    </section>
  );
}

export default function StaticWorld() {
  return (
    <>
      {/* Scene 1: establishing job site shot, glow low-right */}
      <Scene
        id={hero.id}
        scene={1}
        eager
        glowClassName="bg-[radial-gradient(circle_at_85%_90%,rgba(255,107,26,0.22),transparent_60%)]"
      >
        <HeroCopy data={hero} />
      </Scene>

      {/* Scene 2: phone on a workbench, cooler slate tint */}
      <Scene
        id={problem.id}
        scene={2}
        glowClassName="bg-[radial-gradient(circle_at_15%_10%,rgba(100,116,139,0.18),transparent_55%)]"
      >
        <ProblemCopy data={problem} />
      </Scene>

      {/* Scene 3: through the phone into the funnel world, accent beam diagonal */}
      <Scene
        id={system.id}
        scene={3}
        glowClassName="bg-[linear-gradient(115deg,transparent_40%,rgba(255,107,26,0.12)_50%,transparent_60%)]"
      >
        <SystemCopy data={system} />
      </Scene>

      {/* Scene 4: the office handoff, warm paper-tinted glow */}
      <Scene
        id={handoff.id}
        scene={4}
        glowClassName="bg-[radial-gradient(circle_at_20%_80%,rgba(246,241,232,0.10),transparent_55%)]"
      >
        <HandoffCopy data={handoff} />
      </Scene>

      {/* Scene 6: touchdown, sunrise over the finished kitchen */}
      <Scene
        id={about.id}
        scene={6}
        strongScrim
        glowClassName="bg-[linear-gradient(180deg,rgba(255,176,32,0.14)_0%,rgba(255,107,26,0.08)_35%,transparent_70%)]"
      >
        <AboutCopy data={about} />
      </Scene>
    </>
  );
}
