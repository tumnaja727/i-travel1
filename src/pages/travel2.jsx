import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/react';
import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router';
import './travel2.css';
import firebase from "../Firebase";

const Travel2 = () => {
  const [location2, setLocation] = useState([])

  useEffect(() => {
    firebase
    .firestore()
    .collection("location2")
    .onSnapshot((data) => {
      let docs = [];
      data.forEach((d) => docs.push(d));
      setLocation(docs.map((doc) => Object({ id: doc.id, ...doc.data() })));
    });
  //   .onSnapshot((docs) => {
  //     docs.forEach((doc) => {
  //       data.push({id: doc.id, ...doc.data() });
  //         // console.log(doc.id);
  //         // console.log(doc.data());
  //     });
  //     setLocation(data);
  // });
    // .then();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Travel2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Travel2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="tra">
          {location2.map((l, i) => (
            <div key={i} className="box">
              <IonCard>
                <div className="titletravel2">
                  {l.name}
                </div>
              <IonCardContent>
                {l.like}
              </IonCardContent>
              </IonCard>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Travel2;
