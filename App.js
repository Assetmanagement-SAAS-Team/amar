import react from 'react'
// import './App.css';
import Calculator from './Calculator';
import  {Route , Switch } from 'react-router-dom';
import {DemoCarousel} from './DemoCarousel';

function App() {
  return (
    <>
    <Switch>
     
     <Route exact path="/" component={Calculator}  />
     <Route exact path="/car" component={DemoCarousel}  />
     <Route component={Error} />
        
    </Switch>
   </>
  );
}

export default App;
