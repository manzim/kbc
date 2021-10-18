import { Route, Switch } from 'react-router-dom';

import Kbc from './components/GamePage/Kbc';
import LandingPage from './components/LandingPage/LandingPage';


function Content() {
  return (
    <div>
      <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      {/* <Route path="./" exact={true} component={LandingPage} />  */}
      <Route path="/kbc" exact={true} component={Kbc} />
    </Switch>
    </div >
  )
}

function AppComponent() {
  return (
    <div>
      <Content />
    </div>
  )
}

function App() {
  return (
    <>
    <div className="App">
        <AppComponent />
      </div>
    </>
  );
}

export default App;
