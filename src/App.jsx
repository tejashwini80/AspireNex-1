import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skills";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skill/>
      <Project/>
      <Contact/>
    </>
  );
}
export default App;
