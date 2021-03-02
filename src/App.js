import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Posts from "./components/Posts";
import Project from "./components/Project";
import SingleProject from "./components/SingleProject";
import NotFound from "./components/NotFound";
import Tnavbar from "./components/Tnavbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Tnavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/posts/:slug" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route exact path="/sketches/:_id" component={SingleProject} />
        <Route path="/sketches" component={Project} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
