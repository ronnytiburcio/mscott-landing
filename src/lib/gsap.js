// Single registration point for GSAP + ScrollTrigger.
// Import gsap/ScrollTrigger from this file everywhere else so the plugin
// is only ever registered once.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
