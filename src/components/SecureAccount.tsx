import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { arrowForward, closeCircleSharp, } from 'ionicons/icons';
import './SecureAccount.css';

const SecureAccount: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle className="center" >Secure your account</IonTitle>
          <IonIcon size='large' slot='end' icon={closeCircleSharp}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Keep your apps safe from other with access to your computer.
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>

            <IonLabel>Password</IonLabel>
            <IonInput  id="text" type='password'></IonInput>
            <br />
            <IonLabel>Confirm Password</IonLabel>
            <IonInput id="text" type='password'></IonInput>
            <br />
            <div className="center">
              <IonButton size='default' color='medium'>Continue<IonIcon icon={arrowForward} slot="end" /></IonButton>
              <br />
              <br />
              <IonLabel>By creating a NEAR account, you agree to the NEAR </IonLabel>
              <IonLabel>Wallet <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.</IonLabel>
            </div>
          </IonCardContent>
          <IonFooter>
            <br />
            <div className="center">
              <IonLabel><b>Already have NEAR account?</b></IonLabel>
              <IonButton id="button" size='default' color='dark'>Log in with NEAR<IonIcon icon={arrowForward} slot="end" /></IonButton>
            </div>
            <br />
          </IonFooter>
        </IonCard>
      </IonContent>
    </IonPage >
  );
};
export default SecureAccount;

