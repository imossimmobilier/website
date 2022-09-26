import styles from "./_Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalculator,
  faPeopleArrows,
  faChess,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
const items = [
  {
    icon: faPeopleArrows,
    heading: "97% DE CLIENTS SATISFAITS",
    text: "97% de nos clients disent être satisfaits de notre méthode et savoir-faire : écoute, professionnalisme et résultats.",
  },
  {
    icon: faChess,
    heading: "17 ANNÉES D’EXPÉRIENCE",
    text: "Notre savoir-faire dans la vente de biens immobiliers nous provient de nos 17 années d’expérience cumulées au sein d'un réseau mondialement reconnu.",
  },
  {
    icon: faSortAmountUp,
    heading: "610 PROJETS RÉALISÉS",
    text: "À ce jour, l’agence a accompagné plus de 610 projets immobiliers. Achat, vente, et ce, grâce à nos stratégies novatrices et efficaces.",
  },
];
export default function Services() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center mt-5">
        <h1 className={`${styles.heading1} text-center`}>
          UNE EXPERTISE ET UN SAVOIR-FAIRE ÉPROUVÉS
        </h1>
        <p className="text-center mt-5 subtitle">
          Confiez-nous votre projet de vente, nous en ferons une affaire
          personnelle
        </p>
      </div>
      <div className="row mt-5">
        {items.map((item) => (
          <div className="col-4">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <div
                className={`${styles.iconContainer} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className=""
                  style={{ fontSize: 36, color: "white" }}
                />
              </div>

              <h5 className="fw-bold my-4 text-center">{item.heading}</h5>
              <p className="text-center w-75 ">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
