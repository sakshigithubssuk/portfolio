import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skill from "./components/skill/skill";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/fotter/footer";
function App() {
  return (
    <div >
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
