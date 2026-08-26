import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StaticWorld from './components/world/StaticWorld';
import Pricing from './components/Pricing';
import LeadForm from './components/form/LeadForm';
import Faq from './components/Faq';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <StaticWorld />
        <Pricing />
        <LeadForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
