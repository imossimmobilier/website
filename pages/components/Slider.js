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
    text: "Très bon accompagnement de la part de Keyvan dans le cadre de notre acquisition immobilière. Vrai suivi dans toutes les étapes précédant la signature chez notaire",
    name: "Lebrun S.",
  },
  {
    text: "Nous avons fait 2 ventes avec à M. MIRI, je n'ai qu'un mot à dire : PARFAIT Je recommande son agence et ses services. Nous avons apprécié ses conseils, sa réactivité & sa disponibilité. Encore merci pour tout",
    name: "Aurelie M.",
  },
  {
    text: "Je recommande chaudement. La personne en charge de la vente de l’appartement de 90m2 que nous avons acheté à Saint-Ouen a été irréprochable (Keyvan). Toujours disponible et de très bon conseil vous pouvez compter sur lui.",
    name: "",
  },
  {
    text: "Je recommande chaudement. La personne en charge de la vente de l’appartement de 90m2 que nous avons acheté à Saint-Ouen a été irréprochable (Keyvan). Toujours disponible et de très bon conseil vous pouvez compter sur lui.",
    name: "",
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
