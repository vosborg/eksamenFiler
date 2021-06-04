import React from 'react';
import frivilligPic from '../asset/img/frivilligPics/frivillig2.png';

function Frivillig() {

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
  <section className="voluntaryHeaderPic">
    <div className="container-fluid">
      <div className="row text-center">
        <h1>BLIV FRIVILLIG I SAT AF</h1>
      </div>
    </div>
  </section>
  <div className="container">
    <div className="row">
      <div className="col-md-5 offset-md-1">
        <h2 className="voluntaryHeading">Vi har brug for dig</h2>
        <p className="voluntaryText">
          Vi er hele tiden på udkig efter personer, der ønsker at blive en del af vores fællesskab. Uagtet om du har erfaring som frivillig eller ej, hører vi meget gerne fra dig. Har du lysten til at hjælpe og blive en del af vores projekt, så finder vi en opgave, der matcher dine kvalifikationer.    
          Vi har nemlig brug for din hjælp til at nå vores sportslige ambitioner, og sammen står vi meget stærkere i missionen om at opnå Pigeons drømme! 
        </p>
        <p className="voluntaryText">
          <strong>Sportslige afdeling </strong> <br />
          Har du lyst til at skrive artikler til vores hjemmeside og SoMe profiler, har du et skarpt analytisk og taktisk øje, som vil løfte vores kampanalyser, eller er du eventmanageren, der har det store overblik, når vi skal afvikle vores kampe?
        </p>
        <p className="voluntaryText">
          Ansvarsområderne i vores sportslige afdeling er mange, og vi søger hele tiden nye personer til vores træningsstab, holdledere, analytikere, kommunikationsmedarbejdere mv. Brænder du for sport og idræt, vil du ikke fortryde at blive frivillig i vores sportslige afdeling.    
        </p>
        <picture>
          <source className="voluntaryPic" srcSet={frivilligPic} type="image/webp" />
          <source className="voluntaryPic" srcSet={frivilligPic} type="image/png" /> 
          <img className="voluntaryPic" srcSet={frivilligPic} alt="Sat Af Pigeons København Futsal hold" />
        </picture>
      </div>
      <div className="col-md-5">
        <h2 className="voluntaryHeading">Sådan kan du hjælpe</h2>
        <p className="voluntaryText">
          Hos Pigeons søger vi hjælp den sportslige samt kommercielle og administrative afdeling. Brænder du for at gøre en forskel, finder vi dit rette ansvarsområde. 
        </p>
        <p className="voluntaryText">
          <strong>Kommercielle og administrative afdeling</strong> <br />
          Er du et bestyrelsestalent med gode strategiske evner, en IT-haj med forstand på hjemmesider, en regnskabskyndig person, et marketing- og PR-geni, en stærk fundraiser, eller har du anden relevant erfaring, der kan anvendes i driften af Pigeons? 
        </p>
        <p className="voluntaryText">
          <strong>Sælg pølser</strong> <br />
          Så er en frivilligstilling i Sat af Pigeons lige noget for dig. Vi giver dig indblik i driften af en passioneret idrætsklub og garanterer udvikling af dine professionelle kompetencer.
        </p>
        <p className="voluntaryText">
          Interesseret i at blive en Pigeon? <br /> Smid os en mail på:  <a className="voluntaryContact" href="mailto:info@satafpigeons.dk">info@satafpigeons.dk</a> 
        </p>
        <p className="voluntaryText">
          Vi glæder os til at høre fra dig! 
        </p>
      </div>
    </div>
  </div>
    </div>


        )
}

export default Frivillig;