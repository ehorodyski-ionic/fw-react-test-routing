import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import { messages } from "../data/messages";
import "./Home.css";

const Home: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<string>("Loading message");

  useIonViewWillEnter(() => {
    const { message } = messages.find((x) => x.id === id) || {
      message: "No message found",
    };
    setMessage(message);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Message {id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Message {id}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="ion-padding">{message}</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
