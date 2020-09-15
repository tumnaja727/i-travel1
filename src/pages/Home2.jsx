import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import { useParams } from 'react-router';
import './Home2.css';
import firebase from "../Firebase";
import { Link, useHistory } from 'react-router';

const Home2 = () => {
  const history = useHistory();

  const logout = () => {
    firebase.auth().signOut()
    .then((res) => {
      console.log(res);
      // alert("Logout!");
      history.push("/login");
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
    });
  };

  return (
    <IonPage>
       {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>  */}

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <div className="logohome">
        </div>  */}
        <div className="travel01">
          <div className="buttontravel01">
            <IonButton routerLink="/travel1" fill="clear" style={{ color: "black" }}>รอยพระพุทธบาทจริง</IonButton><br />
          </div>
        </div>
        <div className="travel02">
          <div className="buttontravel02">
            <IonButton routerLink="/travel2" fill="clear" style={{ color: "black" }}>รอยพระพุทธบาทจำลอง</IonButton><br />
          </div>
        </div>
        <div className="logout01">
        <button onClick={logout}>Logout</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home2;
