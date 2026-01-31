import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Staff from './components/Staff';
import Individuals from './components/Individuals';
import Contact from './components/Contact';
import ScrollGlow from './components/ScrollGlow';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <ScrollGlow />
            <Header />
            <main>
                <Hero />
                <Philosophy />
                <Gallery />
                <Individuals />
                <Staff />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
