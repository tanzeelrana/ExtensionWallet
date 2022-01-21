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
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  badgeColor?: string;
  badgeValue?: string;
}

const appPages: AppPage[] = [
  {
    title: 'Create Account',
    url: '/page/create-account',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    badgeColor: 'primary',
    badgeValue: '1k'
  },
  {
    title: 'Homepage Reg Email',
    url: '/page/homepage-reg-email',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    badgeColor: 'secondary',
    badgeValue: '2k'
  },
  {
    title: 'Secure Account',
    url: '/page/secure-account',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    badgeColor: 'tertiary',
    badgeValue: '5k'
  },
  {
    title: 'Verification',
    url: '/page/verification',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
    badgeColor: 'success',
    badgeValue: '1k'
  },
  {
    title: 'Seed Phrase',
    url: '/page/seed-phrase',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
    badgeColor: 'warning',
    badgeValue: '50k'
  },
  {
    title: 'Spam',
    url: '/page/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
    badgeColor: 'danger',
    badgeValue: '100k'
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
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

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
