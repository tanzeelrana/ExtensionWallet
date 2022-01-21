import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
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

import { arrowForward, closeCircleSharp, playForward, } from 'ionicons/icons';
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
        </IonCard>
      </IonContent>
    </IonPage >
  );
};

export default CreateAccount;

