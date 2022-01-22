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
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default RecentExperiences;
