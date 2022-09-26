import Image from "next/image";
import styles from "./_Header.module.css";
import logo from "../../public/assets/images/logo1.webp";
import banner from "../../public/assets/images/bheader.webp";
import bg from "../../public/assets/images/header.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

// import the icons you need
import {
  faCalculator,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.bg}>
        {/* <img src={bg.src} alt="" className="img-fluid h-100" /> */}
        <div className={`${styles.overlay} p-2`}>
          <div className="container">
            <div className=" d-flex justify-content-between  px-lg-2 w-100 align-items-center">
              <img src={logo.src} className={`img-fluid ${styles.logo}`} />

              <Link href="#form">
                <a
                  className={`${styles.button} d-flex justify-content-center align-items-center`}
                >
                  <FontAwesomeIcon
                    icon={faCalculator}
                    className="me-2"
                    style={{ fontSize: 16, color: "white" }}
                  />
                  ESTIMATION OFFERTE
                </a>
              </Link>
            </div>

            <div className="row">
              <h2
                className={`text-white text-center mx-auto mt-lg-5 mt-4 fw-bold ${styles.heading} d-none d-lg-block`}
              >
                FAITES ESTIMER GRATUITEMENT VOTRE BIEN IMMOBILIER
                <span className={styles.greenText}>EN 24H CHRONO</span>
              </h2>
              <h2
                className={`text-white text-center mx-auto mt-lg-5 mt-4 fw-bold ${styles.heading} d-block d-lg-none`}
              >
                FAITES ESTIMER GRATUITEMENT VOTRE BIEN IMMOBILIER
                <p className={styles.greenText}>EN 24H CHRONO</p>
              </h2>
            </div>
            <div className="row mt-5 justify-content-center">
              <p
                className={`${styles.texts} text-center text-white fw-400 m-0 p-0 fs-5 mt-lg-5 mt-4`}
                style={{ fontWeight: "400" }}
              >
                Recevez une estimation détaillée sous 24h par nos experts et
                bénéficiez
              </p>
              <p
                className={`${styles.texts} text-center text-white fw-400 m-0 p-0 fs-5`}
                style={{ fontWeight: "400" }}
              >
                de conseils et d’un suivi personnalisé pour la vente de votre
                bien.
              </p>

              <Link href="#form" onClick={() => router.push("/#form")}>
                <a
                  className={`${styles.button1} d-flex justify-content-center align-items-center mt-lg-5 mt-3`}
                >
                  JE VEUX ESTIMER MON BIEN
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="ms-3"
                    style={{ fontSize: 22, color: "white" }}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row align-items-center"
        style={{ backgroundColor: "#063200", height: 100 }}
      >
        <div className="col-lg-6 col-12 mx-auto">
          <img
            src={`${banner.src}`}
            style={{}}
            className="img-fluid mx-auto "
          />
        </div>
      </div>
    </>
  );
};

export default Header;
