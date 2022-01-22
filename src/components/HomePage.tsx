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
    IonItemDivider,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonPage,
    IonPopover,
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

import { add, arrowForward, caretDownCircleOutline, chevronDownOutline, chevronForwardCircleOutline, chevronForwardOutline, cogOutline, download, notificationsOutline, personCircle, pulse, search } from 'ionicons/icons';
import { useState } from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {

    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar >
                    <IonButtons slot="secondary">
                        <IonThumbnail>
                            <img src="assets/Group397.png" />
                        </IonThumbnail>
                    </IonButtons>
                    <IonButtons slot="primary">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={notificationsOutline} />
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={cogOutline} />
                        </IonButton>
                    </IonButtons>
                    <div className='center'>
                        <IonButton id="alignment-button" onClick={() => setIsPopoverOpen(!isPopoverOpen)} color='dark' fill='outline'>
                            <img src="assets/Group431.png" />
                            &nbsp;
                            Johndoe.near
                            <IonIcon icon={chevronDownOutline} slot="end" />
                        </IonButton>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonPopover trigger="alignment-button"  isOpen={isPopoverOpen}>
                    <IonList>
                        <IonListHeader>My Accounts</IonListHeader>
                        <IonItem button>
                            <IonAvatar>
                                <img src="assets/Group431.png" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>johndoe.near</h2>
                                <h3>0.34 NEAR</h3>
                            </IonLabel>
                        </IonItem>
                        <IonItem button>
                            <IonAvatar>
                                <img src="assets/Group4312.png" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>mike.near</h2>
                                <h3>0.12 NEAR</h3>
                            </IonLabel>
                        </IonItem>
                        <IonItem button>
                            <IonAvatar>
                                <img src="assets/Group253.png" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>john.near</h2>
                                <h3>2.34 NEAR</h3>
                            </IonLabel>
                        </IonItem>
                        <IonItemDivider></IonItemDivider>
                        <IonItem button>
                            <IonIcon icon={add}></IonIcon>
                            <IonLabel>
                                <h2>Create Account</h2>
                            </IonLabel>
                        </IonItem>
                        <IonItem button>
                            <IonIcon icon={download}></IonIcon>
                            <IonLabel>
                                <h2>Import Account</h2>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </IonPopover>
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
