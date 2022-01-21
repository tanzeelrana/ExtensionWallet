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
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRouterLink,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

import { arrowForward, closeCircleSharp, playForward, } from 'ionicons/icons';
import './Homepage-reg-email.css';


const HomepageRegEmail: React.FC = () => {

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar >
                    <IonTitle ><img src="assets/HomepageHeader.png"></img></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCardHeader>
                    <IonCard>
                        <IonSegment >
                            <IonSegment value ="email" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                                <IonSegmentButton value="email">
                                    <IonLabel>Email</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="phone">
                                    <IonLabel>Phone</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonSegment>
                    </IonCard>
                </IonCardHeader>
                <IonCard>
                    <IonCardContent>
                        <IonInput placeholder=' Ex. (337) 378 8383' id="number" type='number'></IonInput>
                        <div className="center-button">
                            <IonButton size='default' color='medium'>Continue<IonIcon icon={arrowForward} slot="end" /></IonButton>
                        </div>
                        <div style={{textAlign : "center", paddingTop: "5%"}}>
                            <IonLabel><p> by clicking continue you must agree to near labs</p> </IonLabel>
                            <div style={{textAlign : "center"}}>
                            <IonRouterLink href="#"> Terms & Conditions </IonRouterLink>
                            <IonLabel> and </IonLabel>
                            <IonRouterLink href="#"> Privacy Policy </IonRouterLink>
                            </div>
                        </div>
                        <div className="horizontal-line" />
                        <div className="center-button">
                            <IonLabel color = "black"><p>Already have NEAR account?</p></IonLabel>
                        </div>
                        <div className="center-button">
                            <IonButton id="button" size='default' color='dark'>Log in with NEAR<IonIcon icon={arrowForward} slot="end" /></IonButton>
                        </div>
                    </IonCardContent>

                </IonCard>
            </IonContent>
        </IonPage >
    );
};

export default HomepageRegEmail;
