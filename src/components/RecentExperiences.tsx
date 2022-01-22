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
    IonSearchbar,
} from '@ionic/react';

import { arrowForward, caretDownCircleOutline, chevronDownOutline, chevronForwardCircleOutline, chevronForwardOutline, cogOutline, notificationsOutline, personCircle, search } from 'ionicons/icons';
import { useState } from 'react';
import './RecentExperiences.css';

const RecentExperiences: React.FC = () => {

    const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

    const [searchText, setSearchText] = useState('');

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
                        <IonButton color='dark' fill='outline'>
                            <img src="assets/Group431.png" />
                            &nbsp;
                            Johndoe.near
                            <IonIcon icon={chevronDownOutline} slot="end" />
                        </IonButton>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonPopover isOpen={isPopoverOpen}>

                </IonPopover>
                <IonGrid>
                    <IonRow className='center'>
                        <IonCol>
                        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
                        </IonCol>
                    </IonRow>
                    <IonRow className='center'>
                        <IonCol>
                        <IonList>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img src="assets/defiswaplogo.png" />
                                </IonThumbnail>
                                <IonLabel>
                                    <h2>DeFi Swap</h2>
                                    <h3>Swap your digital assets</h3>
                                    <p>+200 Users</p>
                                </IonLabel>
                                <IonIcon icon={chevronForwardOutline} slot="end" />
                            </IonItem>

                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img src="assets/docusign.png" />
                                </IonThumbnail>
                                <IonLabel>
                                    <h2>Docu  sign</h2>
                                    <h3>by johndoe.near</h3>
                                    <p>+1K users</p>
                                </IonLabel>
                                <IonIcon icon={chevronForwardOutline} slot="end" />
                            </IonItem>
                        </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>
                                    <p>Popular Categories</p>
                                </IonLabel>
                                <IonIcon icon={chevronForwardOutline} slot="end" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <IonThumbnail slot="start">
                                        <img src="assets/Group480.png" />
                                    </IonThumbnail>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <IonThumbnail slot="start">
                                        <img src="assets/Group481.png" />
                                    </IonThumbnail>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <IonThumbnail slot="start">
                                        <img src="assets/Group482.png" />
                                    </IonThumbnail>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <IonThumbnail slot="start">
                                        <img src="assets/Group483.png" />
                                    </IonThumbnail>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default RecentExperiences;
