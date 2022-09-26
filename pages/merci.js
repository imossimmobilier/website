import styles from "./merci.module.css";
import logo from "../public/assets/images/logo.webp";
import Script from "next/script";

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function merci() {
  return (
    <div
      className={`${styles.divContainer} d-flex justify-content-center align-items-center flex-column`}
    >
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9EZFR4MB3V"
      ></Script>
      <Script
        onReady={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "G-9EZFR4MB3V");
        }}
      ></Script>
      <img
        height="180"
        width="180"
        src="https://mlgwdol7z2oi.i.optimole.com/cb:Af-w~355a0/w:1024/h:1024/q:mauto/https://www.temfackeric.com/wp-content/uploads/2022/09/Logo-IMOSS-IMMOBILIER_Logo_MotifCouleur_Marge_MotifFondBlanc.png"
      ></img>
      <h1
        className="fw-bold"
        style={{
          fontFamily: "Montserrat",
          letterSpacing: "-2px",
          color: "#333",
        }}
      >
        MERCI !
      </h1>
      <p
        className={`${styles.textAfterMERCI}`}
        style={{
          fontFamily: "Montserrat",
          fontSize: 15,
          color: "#333",
          fontWeight: "600",
        }}
      >
        Vous avez soumis le formulaire avec succès.
      </p>
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: 15,
          color: "#333",
          fontWeight: "600",
        }}
      >
        {" "}
        Nous avons bien reçu votre formulaire.
      </p>
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: 15,
          color: "#333",
          fontWeight: "600",
        }}
      >
        Dans quelques instants, vous recevrez un mail de confirmation
      </p>

      <p
        className={`${styles.textAfterMERCI}`}
        style={{
          fontFamily: "Montserrat",
          fontSize: 15,
          color: "#333",
          fontWeight: "600",
        }}
      >
        Merci de votre confiance.
      </p>
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: 15,
          color: "#333",
          fontWeight: "600",
        }}
      >
        L’équipe Imossimmobilier
      </p>
      <h2
        className={`${styles.textAfterMERCI} fw-bold`}
        style={{
          fontFamily: "Montserrat",
          textTransform: "uppercase",
          letterSpacing: "-3px",
          color: "#333",
          fontWeight: "600",
        }}
      >
        Partager
      </h2>
      <div className="d-flex flex-row">
        <a href="https://www.facebook.com/Imoss.immobilier">
          <div
            className={`${styles.fbDiv} d-flex justify-content-center align-items-center`}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className=""
              style={{ fontSize: 26, color: "white" }}
            />
          </div>
        </a>
        <a href="https://www.instagram.com/imoss.immobilier/">
          <div
            className={`${styles.inDiv} d-flex justify-content-center align-items-center`}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className=""
              style={{ fontSize: 26, color: "white" }}
            />
          </div>
        </a>

        <a href="https://www.youtube.com/channel/UCUmx7OtA7wO4kqyq2bbmH2Q">
          <div
            className={`${styles.youDiv} d-flex justify-content-center align-items-center`}
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className=""
              style={{ fontSize: 26, color: "white" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
