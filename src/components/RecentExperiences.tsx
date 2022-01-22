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
    IonItemDivider,
} from '@ionic/react';

import { add, download, arrowForward, caretDownCircleOutline, chevronDownOutline, chevronForwardCircleOutline, chevronForwardOutline, cogOutline, notificationsOutline, personCircle, search } from 'ionicons/icons';
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
                                    <IonItem>
                                        <IonLabel>
                                            <p>Exchanges</p>
                                        </IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot="end" />
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <IonThumbnail slot="start">
                                        <img src="assets/Group481.png" />
                                    </IonThumbnail>
                                    <IonItem>
                                        <IonLabel>
                                            <p>Games</p>
                                        </IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot="end" />
                                    </IonItem>
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
                                    <IonItem>
                                        <IonLabel>
                                            <p>Marketpllaces</p>
                                        </IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot="end" />
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <IonThumbnail slot="start">
                                        <img src="assets/Group483.png" />
                                    </IonThumbnail>
                                    <IonItem>
                                        <IonLabel>
                                            <p>Defi</p>
                                        </IonLabel>
                                        <IonIcon icon={chevronForwardOutline} slot="end" />
                                    </IonItem>
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
