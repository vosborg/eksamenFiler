import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../asset/img/globalPics/logoGuld.png';
import omPic1 from '../asset/img/Ompics/omPic1.png';
import omPic2 from '../asset/img/Ompics/omPic2.png';
import omPic3 from '../asset/img/Ompics/omPic3.PNG';
import AboutSection from '../components/aboutSection.js';
import AboutSectionTwo from '../components/aboutSectionTwo.js';
import Spacer from '../components/spacer';
ReactDOM.render(<Spacer/>, document.getElementById('root'));
ReactDOM.render(<AboutSection/>, document.getElementById('root'));
ReactDOM.render(<AboutSectionTwo/>, document.getElementById('root'));

function Om() {

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
    

     <div className="omBody">

<div className="scrollTop" onClick={scrollToTop}>
        <i className="fas fa-chevron-up" />
      </div>
  <div className="container-fluid">
    <div className="row journeyHeader">
      <div className="offset-1 col-10 offset-md-2 col-md-8 aboutHeading">
        <h1 className="aboutHeader">
          SAT AF PIGEONS <br />
          REJSEN
        </h1>
        <div className="headerLine mb-3" />
      </div>
    </div>


    <AboutSection imgsrc={omPic1} title='HISTORIEN PT. 1' text=' Sat af Pigeons blev stiftet i 2018 af Tv-personlighederne
                ‘Drux og Flam’ sammen med deres Tv3 Sport kollega Asger
                Tverskov. Med udgangspunkt i Tv-programmet ‘Sat Af’ ønskede de
                at samle gadens dygtigste fodboldspillere og skabe Danmarks
                 mest attraktive fodboldbrand. Begge var de blevet trætte af at
                sidde foran en skærm, og savnede et mere aktivt socialliv og
                følelsen af fællesskab med fysisk forankring. Sat Af Pigeons
                blev et oplagt projekt til at drive denne udvikling.'/>
    <AboutSectionTwo imgsrc={omPic2} title='HISTORIEN PT. 2' text='Den indledende ambition for holdet var, at det skulle spille i
                  landets bedste række inden for 3 år. Men allerede efter 2 år
                  blev målet indfriet og efter første sæson i landets bedste
                  række, endte holdet blot 1-point uden for slutspillet. Med
                  fokus på udvikling og rekruttering af gadefodboldens mest
                  lovende talenter, blandet sammen med de hårdtarbejdende
                  vikinger, har Pigeons nu skabt et hold bestående af egne
                  spillere, der nu er klar til at repræsentere futsallandsholdet
                  og potentielt spille Champions League i fremtiden. Alt sammen
                  med fokus på leg, street tricks og flair med bolden som giver
                  publikumsvenlig og dræbende effektivt futsal.'/>
    <AboutSection imgsrc={omPic1} title='AMBITIONER OG FREMTIDEN' text='Holdets ambitioner er store og klare. Sat Af Pigeons vil
                transformere dansk fodbold igennem en ny tilgang til futsal.
                En tilgang som tager det bedste fra streetfodbold miljøet og
                kombinerer det med et vindende fællesskab. Derfor skal holdet
                inden for 5 år have vundet ligaen og spille med i Champions
                League. Det skal være et anerkendt og velkendt sportsbrand,
                der genkendes både i ind- og udland. Vores merchandise og logo
                skal være allestedsnærværende. Og vigtigst af alt: den danske
                fodboldkultur skal forbedres, så vi fremadrettet ser bedre
                teknisk fodbold i breddefodbolden og hos eliten.'/>
    <AboutSectionTwo imgsrc={omPic2} title='PIGEONS NAVNET' text=' Sat Af
              
                Udtrykket betyder, at man bliver afdriblet af en modspiller.
                Men det er også navnet på det prisvindende tv-program, der
                ligger bag tilblivelsen af holdet. Et program som mange i
                sportsverdenen har hyldet for dets revolutionerende
                sportsjournalistik. 
           
                Pigeons
                ‘Duerne’ (Pigeons) - Duen er symbolet på vores hold ‘Sat Af
                Pigeons’. Ligesom duerne er flyvende, bedøvende og at finde
                alle steder nær Copenhagen - Hellerup, Vesterbro, Nørrebro mv.
                Som sande duer ser vi stort på, om vores spillere er fra de
                finere kvartere eller fra blokken. Vi inkluderer alle og er
                komfortable uanset, hvordan den omkringliggende dynamik er. Og
                allervigtigst: vi er flyvende på en fodboldbane!'/>

    <AboutSection imgsrc={omPic1} title='PIGEONS LOGOET' text='De gule farver i Sat Af Pigeons logoet er inspireret af guld.
                Det handler om at sigte efter førstepladsen og altid have
                ambitionen om at vinde guld. Men selvom vi går efter guldet,
                så kysser duerne i vores logo hinanden. Dette er forbundet med
                duen som et fredssymbol, og som et tegn på den kærlighed, vi
                giver til spillet og vores medmennesker. Derfor flyver duerne
                også over en oldschool fodbold for at minde os om de gode
                gamle dage på legepladsen, hvor vi alle spillede timevis af
                bold i harmoni med hinanden. Endeligt repræsenterer de 3
                stjerner i logoet holdets ambitionsniveau. Første stjerne som
                et tegn på holdets indledende ønske om at spille i landets
                bedste række. Anden stjerne for målet om at få vores spillere
                på landsholdet. Tredje stjerne for drømmen om at spille
                Champions League.'/>
</div>
<Spacer/>
</div>
        )
}

export default Om;