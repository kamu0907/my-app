import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from "./screentransition/Home";
import { Page1 } from "./screentransition/Page1";
import { Page2 } from "./screentransition/Page2";
import { Page3 } from "./screentransition/Page3";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link>
        <br />

        <Routes>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/page1"  element={<Page1 />}></Route>
          <Route path="/page2"  element={<Page2 />}></Route>
          <Route path="/page3"  element={<Page3 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;