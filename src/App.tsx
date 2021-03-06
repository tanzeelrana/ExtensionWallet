import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CreateAccount from './components/CreateAccount';
import HomepageRegEmail from './components/Homepage-reg-email';
import SecureAccount from './components/SecureAccount';
import Verification from './components/Verification';
import SeedPhrase from './components/SeedPhrase';
import HomePage from './components/HomePage';
import RecentExperiences from './components/RecentExperiences';
import Splashscreen from './components/Splashscreen';
import WelcomeBack from './components/WelcomeBack';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/home-page" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/page/welcome-back" exact={true}>
              <WelcomeBack />
            </Route>
            <Route path="/page/create-account" exact={true}>
              <CreateAccount />
            </Route>
            <Route path="/page/homepage-reg-email" exact={true}>
              <HomepageRegEmail />
            </Route>
            <Route path="/page/splash-screen" exact={true}>
              <Splashscreen />
            </Route>
            <Route path="/page/home-page" exact={true}>
              <HomePage />
            </Route>
            <Route path="/page/secure-account" exact={true}>
              <SecureAccount />
            </Route>
            <Route path="/page/verification" exact={true}>
              <Verification />
            </Route>
            <Route path="/page/seed-phrase" exact={true}>
              <SeedPhrase />
            </Route>
            <Route path="/page/recent-experiences" exact={true}>
              <RecentExperiences/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
