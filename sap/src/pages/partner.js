import React from 'react';
import ReactDOM from 'react-dom';
import sponsor1 from '../asset/img/sponsor/EnergeticLogoHvid.png';
import sponsor2 from '../asset/img/sponsor/adidasLogoHvid.png';
import sponsor3 from '../asset/img/sponsor/OliOliLogoHvid.png';
import sponsor4 from '../asset/img/sponsor/SportmasterLogoHvid.png';
import tabs1 from '../asset/img/partnerPics/tabs-1.jpg'
import tabs1Alt from '../asset/img/partnerPics/tabs-1.webp'
import tabs2 from '../asset/img/partnerPics/eksponeringPic.jpg'
import tabs2Alt from '../asset/img/partnerPics/eksponeringPic.webp'
import tabs3 from '../asset/img/partnerPics/tabs-3.jpg'
import tabs3Alt from '../asset/img/partnerPics/tabs-3.webp'
import tabs4 from '../asset/img/partnerPics/rejsenPic.jpg'
import tabs4Alt from '../asset/img/partnerPics/rejsenPic.webp'
import PartnerTabs from '../components/partnerTabs';
ReactDOM.render(<PartnerTabs/>, document.getElementById('root'));

function Partner() {

  window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 100);
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
    
  }

  return (

      <div className="ForsideBackground">
<div className="scrollTop" onClick={scrollToTop}>
        <i className="fas fa-chevron-up" />
      </div>
  <div className="container-fluid">
    <div className="row text-left partnerHeader">
      <div className="offset-1 col-10 offset-md-2 col-md-8">
        <h1 className="partnerHeading">
          SAT AF PIGEONS <br />
          PARTNERS
        </h1>
        <div className="headerLine mb-3" />
      </div>
    </div>
    <div className="row text-left partnerStart">
      <div className="offset-md-2 col-md-8">
        <div className="row">
          <div className="col-md-6 partnerDivText">
            <h5>KREATIVITET. &nbsp; FÆLLESKAB. &nbsp; TILLID.</h5>
            <h2 className="mt-4">Partnerskaber Med Fælles Mål &amp; Forståelse</h2>
            <p className="mt-4">
              Pigeons er specialister i brandaktivering og har mange års erfaring med egenproduceret content.
            </p>
            <p>
              Vi tilbyder unikke aktiveringsmetoder, der udvider eksponeringen af dit brand og hjælper din virksomhed med at nå dens kommercielle mål. Dette gælder alt fra produktionen af cool content til udviklingen af banebrydende kampagner.
            </p>
            <p>
              Sammen kan vi idéudvikle og brainstome den rette aktivering af projektet byggende på fælles forståelse og tillid.  
            </p>
            <p>
              Klar på at drible og lave lir med os? Bliv partner og lad os skabe meningsfulde momenter sammen.  
            </p>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="offset-md-2 col-md-12 text-center">
                <img src={sponsor1} alt="EnergeticX Sponsor" />
              </div>
              <div className="offset-md-2 col-md-12 mt-5 text-center">
              <img src={sponsor2} alt="Adidas Sponsor" />
              </div>
              <div className="offset-md-2 col-md-12 mt-5 text-center">
              <img src={sponsor3} alt="OliOli Sponsor" />
              </div>
              <div className="offset-md-2 col-md-12 mt-5 text-center">
              <img src={sponsor4} alt="Sportsmaster Sponsor" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="offset-md-2 col-md-12 text-center">
              <img src={sponsor1} alt="EnergeticX Sponsor" />
              </div>
              <div className="offset-md-2 col-md-12 mt-5 text-center">
              <img src={sponsor2} alt="Adidas Sponsor" />
              </div>
              <div className="offset-md-2 col-md-12 mt-5 text-center">
              <img src={sponsor3} alt="OliOli Sponsor" />
              </div>
              <div className="offset-md-2 col-md-12 mt-5 text-center">
              <img src={sponsor4} alt="Sportsmaster Sponsor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="becomeSponsorHeading text-center">
    <h1>BLIV EN DEL AF TEAMET</h1>
  </div>
  {/* ======= Tabs Section ======= */}
  <section id="tabs" className="tabs">
    <div className="container" data-aos="fade-up">
      <ul className="nav nav-tabs row d-flex">
        <li className="nav-item col-3 kasse">
          <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
            <h4>AKTIVERING</h4>
          </a>
        </li>
        <li className="nav-item col-3 kasse">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
            <h4>EKSPONERING</h4>
          </a>
        </li>
        <li className="nav-item col-3 kasse">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
            <h4>NETVÆRK</h4>
          </a>
        </li>
        <li className="nav-item col-3 kasse">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
            <h4>REJSEN</h4>
          </a>
        </li>
      </ul>
      
      <div className="tab-content">
         
      <PartnerTabs partnerID='tab-1' partnerHeader='Hvordan skal vi aktivere jeres brand?' partnerDesc1='Vores sponsorteam har mange års erfaring med brandaktivering. Vi arbejder på tværs af flere platforme og er eksperter i produktionen af anderledes, kreative kampagner. ' partnerDesc2='Send os jeres ønsker og vi putter et nyt spin på jeres brandaktivering.' imgSrc={tabs1} imgSrcAlt={tabs1Alt}/>
      <PartnerTabs partnerID='tab-2' partnerHeader='Skal vi tage jeres brand til nye højder?' partnerDesc1=' Vi kan udvikle eksponeringen af jeres brand. Afhængigt af jeres ønsker, vil Sat Af Pigeons anvende klubbens store SoMe tilstedeværelse til aktivering af jeres brand. Vi tilbyder et unikt mix af digitalt og fysisk content, der vil løfte jeres brand på tværs af forskellige platforme og målgrupper. ' partnerDesc2='Pigeons brandet har mere end <strong>50.000 følgere</strong> på sine   SoMe-profiler og vores seneste FIFA-partnerskab sikrede eksponering til millionvis af mennesker verden over. 
                Et samarbejde med Pigeons signalerer, at jeres virksomhed er first-mover og klar på nytænkning.' imgSrc={tabs2} imgSrcAlt={tabs2Alt}/>
      <PartnerTabs partnerID='tab-3' partnerHeader='Pigeons sørger for de rette omstændigheder til et elite netværk.' partnerDesc1='Pigeons hurtige vej til toppen af dansk sport skyldes, at vi arbejder med de bedste folk i branchen. Vores partnere, bestyrelse og kommercielle team er eksperter i deres respektive felt, og sammen løfter vi hinandens kompetencer.' partnerDesc2='Vores netværk er inkluderende, villige til at videndele og altid klar på at byde velkommen til nye medlemmer. Dertil får I muligheden for at komme med i Pigeons eksklusive netværksklub, hvor vi mødes til underholdende og lærerige sociale arrangementer. ' imgSrc={tabs3} imgSrcAlt={tabs3Alt}/>
      <PartnerTabs partnerID='tab-4' partnerHeader='Vil I med på rejsen? ' partnerDesc1='Hos Sat Af Pigeons drømmer vi stort. Vores mål er inden for 5 år at blive danske mestre, spille i Champions League, have vores spillere til at repræsentere det danske futsallandshold og være med til at skabe en positiv forandring i samfundet og kulturmiljøet.' partnerDesc2='Men for at nå vores drømme, har vi brug for de rigtige partnere. Partnere der ikke accepterer status quo og deler vores professionelle visioner.' imgSrc={tabs4} imgSrcAlt={tabs4Alt}/>
      </div>
    </div>

  </section>
  {/* End Tabs Section */}
</div>

      
        )
}

export default Partner;