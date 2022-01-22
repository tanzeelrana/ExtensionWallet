import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
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
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

import { arrowForward, caretDownCircleOutline, cogOutline, notificationsOutline, personCircle, search } from 'ionicons/icons';
import { useState } from 'react';
import './HomePage.css';

{/* <ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="secondary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>Default Buttons</ion-title>
</ion-toolbar> */}

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar >
                    <IonButtons slot="secondary">
                        <IonButton>
                            <IonAvatar>
                                <img src="assets/Group397.png" />
                            </IonAvatar>
                        </IonButton>
                    </IonButtons>
                    <IonButtons slot="primary">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={notificationsOutline} />
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={cogOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonChip outline color="dark">
                        <IonIcon icon='caret-down-outline'></IonIcon>
                        <IonLabel>JohnDoe.near</IonLabel>
                        <IonIcon icon={caretDownCircleOutline}></IonIcon>
                    </IonChip>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Contacts</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>

                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>web3 Apps</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>

                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Start creating Your NFT Today</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonButton size='default' color='primary'>Create NFT<IonIcon icon={arrowForward} slot="end" /></IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default HomePage;
