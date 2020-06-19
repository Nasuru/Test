import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { MyGifts } from './MyGifts';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import img1 from './assets/pic1.png';
import img2 from './assets/pic2.png';
import img3 from './assets/pic3.jpg';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={img1}
            alt="First Slide"/>
            <Carousel.Caption>
                <Button variant="primary" size="lg" active>Make a Gift</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={img2}
            alt="Second Slide"/>
            <Carousel.Caption>
              <Button variant="primary" size="lg" active>I Said Make a Gift</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={img3}
            alt="Second Slide"/>
            <Carousel.Caption>
              <Button variant="primary" size="lg" active>If You Don't Make a Gift, I Will Literally Stab You</Button>{' '}
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/my-gifts" component={MyGifts}/>
            <Route path="/login" component={Login}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
