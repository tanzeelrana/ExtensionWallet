import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonLabel,
    IonPage,
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import './Homepage-reg-email.css';

const WelcomeBack: React.FC = () => {
    return (

        <IonPage>
            <IonHeader>
                <div className='center-image'>
                <IonImg src="assets/welcomeBackImg.png" style={{opacity: "70%"}}>
                </IonImg>
                <div className='center-image'>
                <IonImg src="assets/HomepageHeader.png" style={{opacity: "100%", width: "30%"}}></IonImg>
                </div>
                <IonLabel className="center-button" color='dark'><h3>a web3 gateway to hidden experiences</h3></IonLabel>
                </div>
            </IonHeader>
            <IonContent>
                <div>
                    <IonLabel className="center-button" color='dark'><h1>Welcome back!</h1></IonLabel>
                </div>
                <div className="center-button">
                    <IonLabel color='medium'>
                        <h2>Please enter the password to<br/>unlock this wallet</h2>
                    </IonLabel>
                </div>
                <div className='password-div'>
                <IonLabel color='medium'>
                    <h2>Password</h2>
                </IonLabel>
                <IonInput id="password" type='password' />
                </div>
                <div className="center-button">
                    <IonButton id="button" size='default' color='medium'>Unlock<IonIcon icon={arrowForward} slot="end" /></IonButton>
                </div>

            </IonContent>
        </IonPage >
    );
};

export default WelcomeBack;
