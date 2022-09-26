import styles from "./_Derniers.module.css";
// import the icons you need
import { faHouseUser, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
  {
    icon: faHouseUser,
    heading: "STUDIO VENDU - 1 PIÈCE 25 M² ÉTAGE 3/5 - 272 000 €",
    text: "Situé rue Baudelique, à quelques pas du métro JULES JOFFRIN et SIMPLON, en RDC sur cours, venez découvrir le potentiel de ce studio.",
    img: "https://mlgwdol7z2oi.i.optimole.com/cb:Af-w~355a0/w:auto/h:auto/q:mauto/https://www.temfackeric.com/wp-content/uploads/2022/09/03259ldrblytevhp0lt9ad78nvtshz867zfgkztxw.webp",
  },
  {
    icon: faHouseUser,
    heading: "Studio vendu - 1 pièce 25 m² Étage 3/5 - 272 000 €",
    text: "Situé rue Baudelique, à quelques pas du métro JULES JOFFRIN et SIMPLON, en RDC sur cours, venez découvrir le potentiel de ce studio.",
    img: "https://mlgwdol7z2oi.i.optimole.com/cb:Af-w~355a0/w:auto/h:auto/q:mauto/https://www.temfackeric.com/wp-content/uploads/2022/09/22gzvnxf3sdfdwsmmnzfmwrlc9xeb8ak5oc4d0r4k.webp",
  },
  {
    icon: faHouseUser,
    heading: "Studio vendu - 1 pièce 25 m² Étage 3/5 - 272 000 €",
    text: "Situé rue Baudelique, à quelques pas du métro JULES JOFFRIN et SIMPLON, en RDC sur cours, venez découvrir le potentiel de ce studio.",
    img: "https://mlgwdol7z2oi.i.optimole.com/cb:Af-w~355a0/w:auto/h:auto/q:mauto/https://www.temfackeric.com/wp-content/uploads/2022/09/1zi6ynmdjqigh16g8bntgtn6we1n2h7t48egdrpec-1.webp",
  },
];

export default function Derniers() {
  return (
    <div className={`container mt-5 ${styles.topDiv} mb-5 pb-5`}>
      <div className="row my-5">
        <h3
          className="text-center mb-5 mt-2 fw-bold"
          style={{ color: "#6BB04D" }}
        >
          NOS DERNIERS BIENS VENDUS
        </h3>
        <h4 className="text-center mb-4" style={{ color: "#6f6f6f" }}>
          Découvrez les récentes ventes réalisées par l'agence Imoss
        </h4>
      </div>
      <div className="row">
        {items.map((item) => (
          <div className={`${styles.item} col-lg-4 col-12`}>
            <div
              className={`d-flex justify-content-center flex-column align-items-center  ${styles.divOfImage}`}
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className={`${styles.img} img-fluid`}
                  alt=""
                  data-lazy-src="https://mlgwdol7z2oi.i.optimole.com/cb:Af-w~355a0/w:auto/h:auto/q:mauto/https://www.temfackeric.com/wp-content/uploads/2022/09/22gzvnxf3sdfdwsmmnzfmwrlc9xeb8ak5oc4d0r4k.webp"
                  data-ll-status="loaded"
                ></img>
              </div>
              <div
                className={`bg-white ${styles.divofButtomContainer} shadow-lg p-4`}
              >
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faHouseUser}
                    className={`${styles.icon} me-4`}
                  />
                  <h6>{item.heading}</h6>
                </div>
                <div className="d-flex">
                  <p className={`${styles.text}`}>{item.text}</p>
                </div>
                <Link href="/">
                  <a
                    className={`${styles.button} d-flex justify-content-center align-items-center mx-auto `}
                  >
                    CONTACTER L'AGENCE
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="ms-2"
                      style={{ fontSize: 16, color: "white" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
