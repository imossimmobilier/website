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
                className={`text-white text-center mx-auto mt-5 fw-bold ${styles.heading}`}
              >
                FAITES ESTIMER GRATUITEMENT VOTRE BIEN IMMOBILIER
                <span>
                  <span className={styles.greenText}>EN 24H CHRONO</span>
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                </svg> */}
                </span>
              </h2>
            </div>
            <div className="row mt-5 justify-content-center">
              <p
                className="text-center text-white fw-400 m-0 p-0 fs-5 mt-5"
                style={{ fontWeight: "400" }}
              >
                Recevez une estimation détaillée sous 24h par nos experts et
                bénéficiez
              </p>
              <p
                className="text-center text-white fw-400 m-0 p-0 fs-5 "
                style={{ fontWeight: "400" }}
              >
                de conseils et d’un suivi personnalisé pour la vente de votre
                bien.
              </p>

              <Link href="#form" onClick={() => router.push("/#form")}>
                <a
                  className={`${styles.button1} d-flex justify-content-center align-items-center mt-5`}
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
