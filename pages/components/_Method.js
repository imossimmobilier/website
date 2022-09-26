import styles from "./_Method.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartLine,
  faHandshake,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    icon: faUsers,
    heading: "UNE STRATÉGIE POUR CHAQUE SITUATION",
    text: "Divorce, financement d’un projet, changement de vie, nous avons développé une stratégie adaptée pour chaque projet, décrivez-nous le vôtre !",
  },
  {
    icon: faChartLine,
    heading: "LA BONNE ESTIMATION",
    text: "Nous vous donnons la meilleure estimation pour la vente de votre bien immobilier grâce à nos 17 années d'expérience cumulées.",
  },
  {
    icon: faHandshake,
    heading: "SUIVI ET ACCOMPAGNEMENT",
    text: "Le vrai travail commence, avec un suivi quotidien de votre bien, de ses statistiques sur ses annonces et un point régulier pour vous tenir au courant",
  },
];

export default function Method() {
  return (
    <div className={`${styles.background} `}>
      <div className={`${styles.overlay} pb-4`}>
        <div className={`row  p-5 d-flex flex-column align-items-center`}>
          <h1 className={`${styles.heading} text-center fw-bold text-white `}>
            LA METHODE
          </h1>
          <h1 className={`${styles.fantasy} text-center `}>IMOSS</h1>

          <div className="col-lg-4 mx-auto mt-3 col-12">
            <div>
              <p className={`${styles.text} text-center text-white m-0`}>
                Une méthode éprouvée
              </p>
              <p className={`${styles.text} text-center text-white m-0`}>
                pour maximiser vos chances
              </p>
              <p className={`${styles.text} text-center text-white m-0`}>
                de vendre votre bien rapidement.
              </p>
            </div>
          </div>
        </div>
        <div className="container row mx-auto">
          {items.map((item) => (
            <div className="col-lg-4 col-12 mb-3 mb-lg-0">
              <div
                className={`${styles.itemContainer} d-flex justify-content-center flex-column align-items-center`}
              >
                <div
                  className={`${styles.iconContainer} d-flex justify-content-center align-items-center`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className=""
                    style={{ fontSize: 36, color: "white" }}
                  />
                </div>

                <p className="fw-normal my-4 text-center text-white fs-5">
                  {item.heading}
                </p>
                <p
                  className="text-center w-75 fs-6"
                  style={{ color: "#FFFFFF99" }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
