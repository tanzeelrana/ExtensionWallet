import {
  IonBadge,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon?: string;
  mdIcon?: string;
  title: string;
  badgeColor?: string;
  badgeValue?: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home Page',
    url: '/page/home-page'
  },
  {
    title: 'Recent Experiences Page',
    url: '/page/recent-experiences'
  },
  {
    title: 'Create Account Modal',
    url: '/page/create-account',
  },
  {
    title: 'Homepage Reg Email Modal',
    url: '/page/homepage-reg-email'
  },
  {
    title: 'Secure Account Modal',
    url: '/page/secure-account'
  },
  {
    title: 'Verification Modal',
    url: '/page/verification'
  },
  {
    title: 'Seed Phrase Modal',
    url: '/page/seed-phrase'
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                  <IonBadge color={appPage.badgeColor}>{appPage.badgeValue}</IonBadge>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
