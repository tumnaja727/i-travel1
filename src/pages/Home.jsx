import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
//import { useParams } from 'react-router';
import './Home.css';
import firebase from "../Firebase";
import { Link, useHistory } from 'react-router';

const Home = () => {
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
      </IonHeader> */}

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <div className="logohome">
        </div> */}

        <ion-slides>

        <ion-slide>
          <div class="slide">
            <div className="logohome1">
            </div>
            <h2>Welcome</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
            <div className="logohome1">
            </div>
            <h2>Welcome</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
            <div className="logohome1">
            </div>
            <h2>Welcome</h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </div>
        </ion-slide>

        <ion-slide>
        <div class="final">
        <div className="logohome1">
            </div>
          <h2>Ready to Play?</h2>
          <IonButton routerLink="/Home2" fill="clear">travel1</IonButton>
        </div>
        </ion-slide>

      </ion-slides>
      
          {/* Home
        <IonButton routerLink="/travel1">travel1</IonButton>
        <button onClick={logout}>Logout</button>   */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
