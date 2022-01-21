import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonLabel,
    IonPage,
    IonRouterLink,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { IonContext } from '@ionic/react/dist/types/contexts/IonContext';

import { arrowForward } from 'ionicons/icons';
import { useState } from 'react';
import './Homepage-reg-email.css';


const Splashscreen: React.FC = () => {
    return (

        <IonPage>
            <IonContent fullscreen>
                <div>
                <IonImg src="assets/splash.png"></IonImg>    
                </div>
            </IonContent>
            
            
        </IonPage >
    );
};

export default Splashscreen;
