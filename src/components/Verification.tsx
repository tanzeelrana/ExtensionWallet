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
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { arrowForward, closeCircleSharp, } from 'ionicons/icons';
import './Verification.css';

const Verification: React.FC = () => {
  var isPhone = true;
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar >
          <IonTitle className="center" >Verification</IonTitle>
          <IonIcon size='large' slot='end' icon={closeCircleSharp}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              <div id="label">
                <IonLabel  >We've sent a 6-digit verification code to your</IonLabel><br />
                {isPhone && <><IonLabel>phone</IonLabel><br /><IonLabel><a href=".">+1 4747948894</a></IonLabel></>}
                {!isPhone && <><IonLabel>email address</IonLabel><br /><IonLabel><a href=".">johndoe@gmail.com</a></IonLabel></>}
              </div>
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div id="verification" className='mb-2'>
              <IonLabel>Enter verification code</IonLabel>
            </div>
            <div className='ml-3'>
              <input type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
              <input type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
              <input type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
              <input type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
              <input type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
              <input type="text" maxLength={1} size={1} min={0} max={9} pattern="[0-9]{1}" />
            </div>
            <br />
            <div className="center">
              <IonButton size='default' color='medium'>Continue<IonIcon icon={arrowForward} slot="end" /></IonButton>
            </div>
            <br />
          </IonCardContent>
          <IonFooter>
            <br />
            <div id="label">
              <IonLabel>Didn't receive your code?</IonLabel>
            </div>
            <br />
            <div id="label">
              <a href="/">Send to a different email address</a>
            </div>
            <br />
            <div id="label">
              <a href="/">Resend your code</a>
            </div>
            <br />
            <br />
          </IonFooter>
        </IonCard>
      </IonContent>
    </IonPage >
  );
};

export default Verification;

