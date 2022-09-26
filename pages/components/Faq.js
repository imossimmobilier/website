import img from "../../public/assets/images/header.jpg";

const items = [
  {
    head: "Qui Sommes Nous ?",
    text: "Nous sommes 2 anciens agents immobiliers d’un grand réseau international. Une agence dans laquelle nous avons fait partie du TOP 10 des meilleurs vendeurs de France (parmi 5500 collaborateurs à l’échelle nationale). À cette suite, nous avons décidé de fonder notre propre agence immobilière. Notre équipe est composée de 8 personnes. ",
  },
  {
    head: "Je Veux Estimer Mon Logement Mais Je N’ai Pas De Projet De Vente ?",
    text: "Faire une estimation ne veut pas dire vendre de suite ou à court terme. Nous avons vendu des logements en 2022, que nous avions estimés en 2018. Nous avons l’habitude de rester en contact et tenir informés nos clients de l’évolution du marché 1 fois par trimestre par e-mail. Ceci vous permettra de rester à jour des tendances du marché, mais surtout de connaître l’évolution de la valeur de votre bien au fil des mois/années. Le jour où vous serez prêt(e) à vendre, nous nous tiendrons à votre disposition. ",
  },
  {
    head: "Quels Sont Les Retours De Vos Clients Sur Votre Méthodologie ?",
    text: "Ce qui revient le plus, c’est notre pédagogie et notre accompagnement. Tout est expliqué et justifié. De plus, nous les tenons régulièrement au courant des statistiques de leurs annonces, afin de trouver des solutions régulièrement pour que leur bien se vende le plus vite possible… mais surtout le plus cher possible.",
  },
  {
    head: "Pourquoi Pourrions-Nous Être Satisfait De Vous ?",
    text: "Contrairement à d’autres agences, nous nous voyons surtout comme des entrepreneurs au service des personnes qui nous font confiance. À ce titre, nous leurs sommes redevables : nous nous rendons disponibles 7/7, là où d’autres seront uniquement disponibles du lundi ou Vendredi, le plus vite possible… mais surtout le plus cher possible.",
  },
  {
    head: "Qu’avez-Vous De Plus Que Les Autres Agences ?",
    text: "Nous sommes l’agence numéro 1 en référencement sur Seloger.com. Nos annonces s’affichent en première position sur les résultats d’une recherche. Ensuite, nous aidons les potentiels acheteurs à se projeter, notamment grâce à une présentation unique de votre biensous format vidéo, mais notamment grâce au home staging 3D, ce qui permet aux acheteurs de se projeter dans le logement après une visite, que ce soit un logement avec/sans travaux ou meublé/vide.",
  },
  {
    head: "Je Ne Suis Pas Fermé À L’exclusivité, Mais Je Ne Veux Pas M’engager 3 Mois, Que Proposez-Vous ?",
    text: "Nous sommes conscients que 3 mois est un délai assez long, surtout quand il s’agit d’une exclusivité. Nous avons adapté notre mandat exclusif pour satisfaire tous nos clients. Nous avons l’habitude de proposer de commencer avec notre mandat Prestige pour une duréede 30-45 jours dans un premier temps. Dans le cas où le bien n’est pas vendu dans ce délai, le mandat s’arrêtera automatiquement et le client aura deux possibilités: renouveler le mandat de 15, 20, 30 jours (selon son envie) ou basculer sur un mandat simple. Ceci permet à nos clients de tester notre qualité de services, sans être engagé trop longtemps.",
  },
  {
    head: "Qu’est-Ce Que Le Mandat Prestige ?",
    text: "Le mandat prestige de chez IMOSS Immobilier est le mandat exclusif adapté à nos clients. Ceci comprend tout le packaging de nos moyens de promotion. C’est-à-dire le tournage et présentation vidéo avec notre équipe, le home staging 3D, la prise en charge des diagnostics, la relance du bien dans notre fichier d’acheteurs qualifiés au sein d’IMOSS et des agences partenaires que nous avons à travers toute l’île-de-France, les crédits boost SeLoger qui affichent votre annonce en tête de liste parmi tous les logementsde la ville/arrondissement concernée, et ce, 24/24 et 7j7.",
  },
  {
    head: "Comment Faire Pour Que Vous Vous Occupiez De Mon Bien ?",
    text: "C’est très simple, il suffit de remplir le formulaire ci-dessus. Une estimation sur place sera programmée et faite sous 24h, puis nous nous chargerons du reste. À très vite chez Imoss ! » ",
  },
];

export default function Faq() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img src={img.src} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <div className="accordion" id="accordionExample">
            {items.map((item, index) => (
              <div className="accordion-item">
                <h2 className="accordion-header" id={`h${index}`}>
                  <button
                    className={`accordion-button ${
                      index == 0 ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded={index == 0 ? "true" : "false"}
                    aria-controls="collapseOne"
                    style={{ backgroundColor: "#6BB04D", color: "white" }}
                  >
                    {item.head}
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className={`accordion-collapse collapse ${
                    index == 0 ? "show" : ""
                  }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
