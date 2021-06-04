import React from 'react';
import ReactDOM from 'react-dom';
import ownerPic from '../asset/img/bestyrelsePics/owner.jpg';
import BestyrelseCard from '../components/bestyrelseCard';
import BestyrelseCardTwo from '../components/BestyrelseCardTwo';
import Spacer from '../components/spacer';
ReactDOM.render(<Spacer/>, document.getElementById('root'));
ReactDOM.render(<BestyrelseCard/>, document.getElementById('root'));
ReactDOM.render(<BestyrelseCardTwo/>, document.getElementById('root'));


  function Bestyrelse() {

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
  <div class="ownershipBody">
    <div className="scrollTop" onClick={scrollToTop}>
        <i className="fas fa-chevron-up" />
      </div>
    <div className="container-fluid">
      <div className="row text-left ownershipHeader">
        <div className="offset-md-2 col-md-8">
          <h1 className="ownershipHeading">SAT AF PIGEONS <br />BESTYRELSE</h1>
          <div className="headerLine mb-3" />
        </div>
      </div>
    </div>
    <div className="container d-flex justify-content-center card-container">
      <div className="row">

      <BestyrelseCard name="Danijel 'Drux' Deletic" collapse1='#multiCollapseExample1' collapse2='multiCollapseExample1' position='Formand & co-founder' imgsrc={ownerPic} description='Den passioneret kulturentreprenør, der med hårdt arbejde, vilde idéer og stærke visioner får tingene til at ske.' tlf='+45 60187989 ' email=' info@satafpigeons.dk '/>
      <BestyrelseCardTwo name="Daniel Flamgaard" collapse1='#multiCollapseExample2' collapse2='multiCollapseExample2' position='Næstformand & co-founder ' imgsrc={ownerPic} description='Holdets kreative overhoved, der sikrer gode vibes i hele truppen med sit empatiske væsen og flair for sportspsykologi sørger for vi mentalt klar. ' tlf='+45  28830424' email=' info@satafpigeons.dk '/>
      <BestyrelseCard name="Asger Tverskov" collapse1='#multiCollapseExample3' collapse2='multiCollapseExample3' position='Kasserer & co-founder ' imgsrc={ownerPic} description='Bestyrelsens altmuligmand, der med hårdt arbejde og struktur, sørger for økonomi og den overordnede administration af holdet spiller. ' tlf='+45  41782686' email=' info@satafpigeons.dk '/>
      <BestyrelseCardTwo name="Frederick Larsen" collapse1='#multiCollapseExample4' collapse2='multiCollapseExample4' position='Bestyrelsesmedlem' imgsrc={ownerPic} description='Med sit store hjerte for sport og kultur, er Frederik en drivkraft i at få holdet til at spille attraktivt. Frederiks har ligeledes stor indflydelse på Pigeons SoMe strategier.' tlf='+45 28147042' email=' info@satafpigeons.dk '/>
      <BestyrelseCard name="Mathias Laursen" collapse1='#multiCollapseExample5' collapse2='multiCollapseExample5' position='Bestyrelsesmedlem' imgsrc={ownerPic} description='Mathias er holdets branding specialist. Han sørger for, at holder ser snorlige og altid friske ud. Han er en stor ildsjæl, som også bidrager til Pigeons CSR-arbejde.' tlf='+45 31141199 ' email=' info@satafpigeons.dk '/>
      <BestyrelseCardTwo name="Jeppe Mortensen" collapse1='#multiCollapseExample9' collapse2='multiCollapseExample9' position='Strategic Advisor' imgsrc={ownerPic} description='Holdets strategiske sparringspartner, der understøtter bestyrelsen på områder såsom fundraising, kommunikation og kommerciel aktivering.' tlf='+45 26819897' email=' info@satafpigeons.dk '/>
      <BestyrelseCard name="Christian Møller" collapse1='#multiCollapseExample6' collapse2='multiCollapseExample6' position='Marketing Manager' imgsrc={ownerPic} description='Christian sørger for, at holdets markedsføring er ‘state of the art’. Christian er merchandise ansvarlig og holdets webshop-ekspert.' tlf='+45 23843430 ' email=' info@satafpigeons.dk '/>
      <BestyrelseCardTwo name="Salman Khan" collapse1='#multiCollapseExample7' collapse2='multiCollapseExample7' position='SoMe Manager' imgsrc={ownerPic} description='En energibombe med SoMe flair. Salman kommer med en masse erfaringer fra elite basket kulturen, hvilke han flittigt deler ud af til holdet.' tlf='+45 42429505 ' email=' info@satafpigeons.dk '/>
      <BestyrelseCard name="Benjamin Wendt Severinsen" collapse1='#multiCollapseExample8' collapse2='multiCollapseExample8' position='SoMe Manager' imgsrc={ownerPic} description='Tidligere fodboldtalent som har den klassiske: “jeg fik en skade” historie. Han sørger for at please fansenes behov og udtænker planer for, hvordan holdets SoMe-follower tal skal vokse fremadrettet.' tlf='+45 26652871 ' email=' info@satafpigeons.dk '/>
      </div>
    </div>
  </div>




          )
  }

  export default Bestyrelse;