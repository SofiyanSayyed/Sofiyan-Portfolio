import './app.scss';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Works from './components/works/Works'

const App = () => {

  return <div>
    <section>
      <Navbar/>
      <Hero/>
    </section>
    <section>
      <Works/>
    </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
  </div>;
};

export default App;
