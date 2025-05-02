import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PortPage1 from './components/PortPage1';
import UpperBar from './components/UpperBar';
import PoetPage2 from './components/PoetPage2';
import PortPage3 from './components/PortPage3';
import PortPage4 from './components/PortPage4';
import PortPage5 from './components/PortPage5';
import PortPage6 from './components/PortPage6';
import PortPage7 from './components/PortPage7';
import PortPage8 from './components/PortPage8';
import PortPage9 from './components/PortPage9';
import PortPage10 from './components/PortPage10';
import PortPage11 from './components/PortPage11';
import PortPage12 from './components/PortPage12';
import PortPage13 from './components/PortPage13';
import PortPage14 from './components/PortPage14';
import PortPage15 from './components/PortPage15';
import PortPage16 from './components/PortPage16';
import PortPage17 from './components/PortPage17';
import PortPage18 from './components/PortPage18';
import PortPage19 from './components/PortPage19';
import PortPage20 from './components/PortPage20';
import PortPage21 from './components/PortPage21';
import PortPage22 from './components/PortPage22';
import PortPafe23 from './components/PortPafe23';
import PortPage24 from './components/PortPage24';
import PortPage25 from './components/PortPage25';
import PortPage26 from './components/PortPage26';
import PortPage27 from './components/PortPage27';
import PortPage28 from './components/PortPage28';
import PortPage29 from './components/PortPage29';
import PortPage30 from './components/PortPage30';
import PortPage31 from './components/PortPage31';
import PortPage32 from './components/PortPage32';
import PortPage33 from './components/PortPage33';
import PortPage34 from './components/PortPage34';
import PortPage35 from './components/PortPage35';

function App() {
  return (
    <>
      <UpperBar />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Blog />
          </Route>
          <Route path="/blog-1">
            <PortPage1 />
          </Route>
          <Route path="/blog-2">
            <PoetPage2 />
          </Route>
          <Route path="/blog-3">
            <PortPage3 />
          </Route>
          <Route path="/blog-4">
            <PortPage4 />
          </Route>
          <Route path="/blog-5">
            <PortPage5 />
          </Route>
          <Route path="/blog-6">
            <PortPage6 />
          </Route>
          <Route path="/blog-7">
            <PortPage7 />
          </Route>
          <Route path="/blog-8">
            <PortPage8 />
          </Route>
          <Route path="/blog-9">
            <PortPage9 />
          </Route>
          <Route path="/blog-10">
            <PortPage10 />
          </Route>
          <Route path="/blog-11">
            <PortPage11 />
          </Route>
          <Route path="/blog-12">
            <PortPage12 />
          </Route>
          <Route path="/blog-13">
            <PortPage13 />
          </Route>
          <Route path="/blog-14">
            <PortPage14 />
          </Route>
          <Route path="/blog-15">
            <PortPage15 />
          </Route>
          <Route path="/blog-16">
            <PortPage16 />
          </Route>
          <Route path="/blog-17">
            <PortPage17 />
          </Route>
          <Route path="/blog-18">
            <PortPage18 />
          </Route>
          <Route path="/blog-19">
            <PortPage19 />
          </Route>
          <Route path="/blog-20">
            <PortPage20 />
          </Route>
          <Route path="/blog-21">
            <PortPage21 />
          </Route>
          <Route path="/blog-22">
            <PortPage22 />
          </Route>
          <Route path="/blog-23">
            <PortPafe23 />
          </Route>
          <Route path="/blog-24">
            <PortPage24 />
          </Route>
          <Route path="/blog-25">
            <PortPage25 />
          </Route>
          <Route path="/blog-26">
            <PortPage26 />
          </Route>
          <Route path="/blog-27">
            <PortPage27 />
          </Route>
          <Route path="/blog-28">
            <PortPage28 />
          </Route>
          <Route path="/blog-29">
            <PortPage29 />
          </Route>
          <Route path="/blog-30">
            <PortPage30 />
          </Route>
          <Route path="/blog-31">
            <PortPage31 />
          </Route>
          <Route path="/blog-32">
            <PortPage32 />
          </Route>
          <Route path="/blog-33">
            <PortPage33 />
          </Route>
          <Route path="/blog-34">
            <PortPage34 />
          </Route>
          <Route path="/blog-35">
            <PortPage35 />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
