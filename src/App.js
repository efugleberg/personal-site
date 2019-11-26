import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

// Components
import TopBar from "./components/TopBar/TopBar.js";
import Home from "./components/Home/Home.js";
import Bio from "./components/Bio/Bio.js";
import Contact from "./components/Contact/Contact.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Blog from "./components/Blog/Blog.js";
import Bookshelf from "./components/Bookshelf/Bookshelf.js";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Route exact path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/bookshelf" component={Bookshelf} />
      </div>
    </Router>
  );
}

export default withRouter(App);
