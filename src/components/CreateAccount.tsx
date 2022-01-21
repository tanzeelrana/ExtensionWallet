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
import './CreateAccount.css';

const CreateAccount: React.FC = () => {

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar >
          <IonTitle >Create NEAR account</IonTitle>
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
            <IonInput placeholder='Ex. John doe' id="text" type='password'></IonInput>
            <br />
            <IonLabel>Account ID</IonLabel>
            <IonInput placeholder="yourname" id="text" type='password'></IonInput>
            <br />
            <div className="d-flex justify-content-center">
              <IonButton size='default' color='medium'>Continue<IonIcon icon={arrowForward} slot="end" /></IonButton>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <IonLabel>By creating a NEAR account, you agree to the NEAR </IonLabel>

            </div>
            <div className="d-flex justify-content-center">
              <IonLabel>Wallet <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.</IonLabel>
            </div>

          </IonCardContent>
          <IonFooter>
            <br />
            <div className="d-flex justify-content-center">
              <IonLabel><b>Already have NEAR account?</b></IonLabel>
            </div>

            <div className="d-flex justify-content-center">
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

