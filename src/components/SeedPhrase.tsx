import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { arrowForward, closeCircleSharp, copy, } from 'ionicons/icons';
import './SecureAccount.css';

const SeedPhrase: React.FC = () => {

  return (
    <IonPage className="center">
      <IonHeader>
        <IonToolbar >
          <IonTitle className="center" >Secure your account</IonTitle>
          <IonIcon size='large' slot='end' icon={closeCircleSharp}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent className="center">
        <IonCardHeader>
          <IonCardSubtitle>Keep your apps safe from other with access to your computer.
          </IonCardSubtitle>
        </IonCardHeader>
        <IonRow className="center">
          <IonCol className="center">
            <h2>Seed Phrase</h2>
          </IonCol>
        </IonRow>
        <IonRow className="center">
          <IonCard>
            <IonChip>
              <IonBadge color='light'>1</IonBadge>
              <IonLabel> &nbsp; gather</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>2</IonBadge>
              <IonLabel> &nbsp; engage</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>3</IonBadge>
              <IonLabel> &nbsp; father</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>4</IonBadge>
              <IonLabel> &nbsp; plant</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>5</IonBadge>
              <IonLabel> &nbsp; indego</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>6</IonBadge>
              <IonLabel> &nbsp; dental</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>7</IonBadge>
              <IonLabel> &nbsp; sick</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>8</IonBadge>
              <IonLabel> &nbsp; fungus</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>9</IonBadge>
              <IonLabel> &nbsp; river</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>10</IonBadge>
              <IonLabel> &nbsp; morning</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>11</IonBadge>
              <IonLabel> &nbsp; love</IonLabel>
            </IonChip>
            <IonChip>
              <IonBadge color='light'>12</IonBadge>
              <IonLabel> &nbsp; cow</IonLabel>
            </IonChip>
          </IonCard>
        </IonRow>

        <IonRow className="center">
          <IonCol>
            <div className="center">
              <IonButton size='default' color='tertiary' fill="outline">Copy Seed<IonIcon icon={copy} slot="start" /></IonButton>
              <br />
              <br />
              <IonButton size='default' color='tertiary' >Continue to Login<IonIcon icon={arrowForward} slot="end" /></IonButton>
            </div>
          </IonCol>
        </IonRow>

      </IonContent>
    </IonPage >
  );
};
export default SeedPhrase;

