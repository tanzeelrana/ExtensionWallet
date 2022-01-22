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
    IonList,
    IonListHeader,
    IonNote,
    IonPage,
    IonRouterLink,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonThumbnail,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

import { arrowForward, caretDownCircleOutline, chevronForwardCircleOutline, chevronForwardOutline, cogOutline, notificationsOutline, personCircle, search } from 'ionicons/icons';
import { useState } from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar >
                    <IonButtons slot="secondary">
                        <IonButton>
                            <IonThumbnail>
                                <img src="assets/Group397.png" />
                            </IonThumbnail>
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
                        <IonIcon icon={cogOutline}></IonIcon>
                        <IonLabel>JohnDoe.near</IonLabel>
                        <IonIcon icon={caretDownCircleOutline}></IonIcon>
                    </IonChip>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard style={{ "background-color": "#EAEFFF" }}>
                                <IonCardHeader>
                                    <IonItem style={{ "background-color": "#EAEFFF" }}>
                                        <IonLabel>Contacts</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot="end" />
                                    </IonItem>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonThumbnail>
                                        <img src="assets/Ellipse48.png" />
                                    </IonThumbnail>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard style={{ "background-color": "#885FFF" }}>
                                <IonCardHeader>
                                    <IonItem style={{ "background-color": "#885FFF" }}>
                                        <IonLabel>web3 Apps</IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot="end" />
                                    </IonItem>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonButton color="tertiary" style={{ "color": '#18D7A9' }}>12 Connected</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard style={{ "background-color": "#F7E9FF" }}>
                                <IonCardHeader>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size="4">
                                                <IonCardTitle>Start creating Your NFT Today</IonCardTitle>
                                            </IonCol>
                                            <IonCol size="8" className='center'>
                                                <img src="assets/Group339.png" />
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonButton size='default' color='primary'>Create NFT<IonIcon icon={arrowForward} slot="end" /></IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow className='center'>
                        <IonCol>
                            <IonSegment>
                                <IonSegmentButton value="collectibles">
                                    <IonLabel>Collectibles</IonLabel>
                                </IonSegmentButton>
                                <IonSegmentButton value="transactions">
                                    <IonLabel>Transactions</IonLabel>
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>

                    <IonList>
                        <IonItem>
                            <IonThumbnail slot="start">
                                <img src="assets/Rectangle228.png" />
                            </IonThumbnail>
                            <IonLabel>
                                <h2>Digital Ninga</h2>
                                <h3>by johndoe.near</h3>
                            </IonLabel>
                            <IonIcon icon={chevronForwardOutline} slot="end" />
                        </IonItem>

                        <IonItem>
                            <IonThumbnail slot="start">
                                <img src="assets/Rectangle228.png" />
                            </IonThumbnail>
                            <IonLabel>
                                <h2>Digital Ninga</h2>
                                <h3>by johndoe.near</h3>
                            </IonLabel>
                            <IonIcon icon={chevronForwardOutline} slot="end" />
                        </IonItem>

                        <IonItem>
                            <IonThumbnail slot="start">
                                <img src="assets/Rectangle228.png" />
                            </IonThumbnail>
                            <IonLabel>
                                <h2>Digital Ninga</h2>
                                <h3>by johndoe.near</h3>
                            </IonLabel>
                            <IonIcon icon={chevronForwardOutline} slot="end" />
                        </IonItem>
                    </IonList>
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default HomePage;
