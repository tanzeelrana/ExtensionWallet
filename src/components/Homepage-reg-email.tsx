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

import { arrowForward } from 'ionicons/icons';
import { useState } from 'react';
import './Homepage-reg-email.css';


const HomepageRegEmail: React.FC = () => {
    const [emailActive, setEmailActive] = useState<boolean>(true);
    const [phoneActive, setPhoneActive] = useState<boolean>(false);

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
                        <IonSegment value={emailActive ? "email" : "phone"}>
                            <IonSegmentButton
                                value="email"
                                onClick={() => {
                                    setPhoneActive(false);
                                    setEmailActive(true);
                                }}
                            >
                                <IonLabel>Email</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton
                                value="phone"
                                onClick={() => {
                                    setEmailActive(false);
                                    setPhoneActive(true);
                                }}
                            >
                                <IonLabel>Phone</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCard>
                </IonCardHeader>
                <IonCard>
                    <IonCardContent>
                        {emailActive ? <IonInput placeholder=' Ex. johndoe@gmail.com' id="email" type='text'></IonInput> : <IonInput placeholder=' Ex. (337) 378 8383' id="phone" type='number'></IonInput>}
                        <div className="center-button">
                            <IonButton size='default' color='medium'>Continue<IonIcon icon={arrowForward} slot="end" /></IonButton>
                        </div>
                        <div style={{ textAlign: "center", paddingTop: "5%" }}>
                            <p>
                                <IonLabel> by clicking continue you must agree to near labs</IonLabel>
                                <div style={{ textAlign: "center" }}>
                                    <IonRouterLink href="#"> Terms & Conditions </IonRouterLink>
                                    <IonLabel> and </IonLabel>
                                    <IonRouterLink href="#"> Privacy Policy </IonRouterLink>
                                </div>
                            </p>
                        </div>
                        <div className="horizontal-line" />
                        <div className="center-button">
                            <IonLabel color="black"><p>Already have NEAR account?</p></IonLabel>
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
