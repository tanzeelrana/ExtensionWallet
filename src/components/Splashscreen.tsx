import {
    IonContent,
    IonImg,
    IonPage,
} from '@ionic/react';

import './Homepage-reg-email.css';


const Splashscreen: React.FC = () => {
    return (

        <IonPage>
            <IonContent fullscreen>
                <div>
                <IonImg src="assets/splashscreen.png">
                </IonImg>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Splashscreen;
