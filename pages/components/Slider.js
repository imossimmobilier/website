import { useState, useEffect } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../public/assets/images/logo.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "./_Progress";
const items = [
  {
    text: "Merci à Keyvan et toute équipe d’IMOSS immobilier pour leur professionnalisme. Nous avons été très bien accompagnés de la visite de appartement jusqu’au jour de la signature. Tout est mis en place pour que le client soit écouté et rassuré tout au long de la vente.Bonne continuation à vous !",
    name: "Thibault I.",
  },
  {
    text: "Je remercie grandement Imoss Immobilier et plus particulièrement Keyvan, pour la vente de mon appartement. Très professionnel, réactif et accessible. L'accompagnement est tout simplement parfait. N'hésitez absolument pas à faire appel à Imoss",
    name: "Olivier C.",
  },
  {
    text: "L'agence lmoss et plus particulièrement lsmael nous a accompagnés dans la vente de notre appartement. Nous avons eu le projet de votre notre bien pendant une période compliquée où les transactions se faisaient rares. lsmael nous a toujours tenu informé des demandes qu'il avait et même quand il ne se passait rien. Il a été force de propositions pour que nous propositions un bien moins « typé ». Nous remercions l'agence lmoss, plus particulièrement Caty et Ismael pour leur soutien. Leur accompagnement et leur professionnalisme",
    name: "Francis C.",
  },
  {
    text: "Je remercie lmoss Immobilier pour la vente de mon appartement. Sada, Keyvan et Caty, mes trois interlocuteurs sur différents aspects de la vente, ont été très professionnels et toujours réactifs. En suivant leurs conseils, mon appartement a été vendu au meilleur prix possible, dans un délai rapide, car ils avaient pu sélectionner au mieux les acheteurs potentiels. Bref, je recommande vivement leurs services !",
    name: "Fabien D.",
  },
  {
    text: "Équipe professionnelle et compétente, ils sont disponibles et efficaces en ayant su rapidement vendre notre appartement",
    name: "Michel D.",
  },
  {
    text: "Aspects positifs : Professionnalisme, Qualité, Réactivité Keyvan et Ismaël se sont tout d'abord occupé de l'estimation de mes 2 logements. J'ai été surprise par leur connaissance du marché et leur professionnalisme. Je leur ai tout de suite fait confiance pour réaliser mes 2 projets de ventes. Grâce à eux, l'achat de ma maison a pu se réaliser, mon prêt relais a été accepté et je vais pouvoir le solder en peu de temps. Merci les gars !",
    name: "Ines B.",
  },
  {
    text: "Meilleur agent immo que nous connaissons : professionnel, entreprenant, persévérant, charmant et tout et tout…L'affaire a été suivie sans relâche par Ismaël himself, toujours dispo n'importe quand... dès que nous avons besoin d'une précision, d'un conseil, il était toujours présent",
    name: "Tuân-Phong K.",
  },
  {
    text: "Merci à Keyvan pour l'accompagnement durant notre vente. Keyvan (ainsi que le reste de l'équipe) a su nous écouter, nous rassurer et grâce à son expérience, il a pu positionner le bien au prix et trouver les acquéreurs après des sélections en amont, ce qui a permis d'avoir des visiteurs dont les dossiers étaient parfaitement réfléchis et étudiés Merci encore et je recommande sans hésitation",
    name: "Frederic M.",
  },
  {
    text: "Un grand merci à Imoss immobilier qui m'a aidé dans mon projet difficile. Et grâce à Ismael, j'ai réussi à vendre ma maison et acheter un appartement quasiment en même temps. L’agence a su gérer les deux dossiers et je les en remercie encore.",
    name: "Thomas G.",
  },
];

export default function Slider() {
  const [progress, setProgress] = useState(1 / items.length);
  const step = 1 / items.length;

  useEffect(() => {
    if (progress > 1) {
      setProgress(step);
    } else if (progress < step) {
      setProgress(1);
    }
  }, [progress]);

  return (
    <div className="container">
      <div className="row pt-5">
        <h1 className=" text-center fw-bold" style={{ color: "#6bb04d" }}>
          ILS NOUS ONT FAIT CONFIANCE
        </h1>
        <h4 className="text-center mt-4" style={{ color: "#6f6f6f" }}>
          Et ils en parlent mieux que nous !
        </h4>
      </div>
      <div className="row py-5">
        <div className="px-3">
          <Progress progress={progress} />
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {items.map((item, index) => (
              <div
                className={`carousel-item ${index == 0 ? "active" : ""}  p-5`}
              >
                <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                  <p
                    className="w-50 text-center"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "400",
                      letterSpacing: "1px",
                      color: "#333",
                    }}
                  >
                    {item.text}
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      src={logo.src}
                      alt=""
                      className="img-fluid"
                      style={{ height: 60 }}
                    />
                    <p className="ms-3 fs-4 m-0" style={{ color: "#6bb04d" }}>
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            onClick={() => setProgress((x) => x - step)}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="ms-2"
              style={{ fontSize: 36, color: "#6bb04d" }}
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            onClick={() => setProgress((x) => x + step)}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="ms-2"
              style={{ fontSize: 36, color: "#6bb04d" }}
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
