import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonFooter,
  IonGrid,
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

import { arrowForward, closeCircleSharp, } from 'ionicons/icons';
import './CreateAccount.css';

const CreateAccount: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle className="center" >Create NEAR account</IonTitle>
          <IonIcon size='large' slot='end' icon={closeCircleSharp}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel>FullName</IonLabel>
            <IonInput placeholder='Ex. John doe' id="text" type='text'></IonInput>
            <br />
            <IonLabel>Account ID</IonLabel>
            <IonInput placeholder="yourname" id="text" type='text'></IonInput>
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
export default CreateAccount;

