import { Brand, Cta, Navbar } from "./components"
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from "./containers"
import './app.css'
function App() {
  return (
    <div id="App">
      <div id="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
