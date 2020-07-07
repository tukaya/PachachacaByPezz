


import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import Home from './components/sections/home/Home';
import Blog from './components/sections/blog/Blog';
import WhoAreWe from './components/sections/WhoAreWe/About';
import VisionMission from './components/sections/visionMission/VisionMission';
import Albums from './components/sections/albums/Albums';
import Contact from './components/sections/contact/Contact';
import Newsletter from './components/sections/Newsletter/Newsletter';
import Donation from './components/sections/donation/Donate';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


 const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/about' component={WhoAreWe} />
            <Route exact path='/vision-mission' component={VisionMission} />
            <Route exact path='/albums' component={Albums} />
            <Route exact path='/Newsletter' component={Newsletter} />
            <Route exact path='/donation' component={Donation} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App