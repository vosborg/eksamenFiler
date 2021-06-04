import React from 'react';
import ReactDOM from 'react-dom';
import projekt1 from '../asset/img/casesPics/projekt1.png';
import projekt1Alt from '../asset/img/casesPics/projekt1.webp';
import projekt2 from '../asset/img/casesPics/projekt2.png';
import projekt2Alt from '../asset/img/casesPics/projekt2.webp';
import projekt3 from '../asset/img/casesPics/projekt3.png';
import projekt3Alt from '../asset/img/casesPics/projekt3.webp';
import projekt4 from '../asset/img/casesPics/projekt4.png';
import projekt4Alt from '../asset/img/casesPics/projekt4.webp';
import projekt5 from '../asset/img/casesPics/projekt5.jpg';
import projekt5Alt from '../asset/img/casesPics/projekt5.webp';
import projekt6 from '../asset/img/casesPics/projekt6.png';
import projekt6Alt from '../asset/img/casesPics/projekt6.webp';
import Case from '../components/case';
import CaseModal from '../components/caseModal';

ReactDOM.render(<CaseModal/>, document.getElementById('root'));
ReactDOM.render(<Case/>, document.getElementById('root'));

function Cases() {

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
  <div className="row text-left casesHeader">
    <div className="offset-1 col-10 offset-md-2 col-md-8">
      <h1 className="casesHeading">
        SAT AF PIGEONS <br />
        PROJECTS
      </h1>
      <div className="headerLine mb-3" />
    </div>
  </div>
  <section className="caseSection" id="cases">
    <div className="container">
      <div className="row">
      <Case caseHeading='LITAUENS PLADS' caseDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laborum modi distinctio rerum odit quae minus ad corporis vel maiores eveniet quasi exercitationem voluptate! Vel obcaecati nulla provident animi magni.' targetModal='#casesModal1' imgSrc={projekt1} imgSrcAlt={projekt1Alt}/>
      <Case caseHeading='ADIDAS KAMPAGNE' caseDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laborum modi distinctio rerum odit quae minus ad corporis vel maiores eveniet quasi exercitationem voluptate! Vel obcaecati nulla provident animi magni.' targetModal='#casesModal2' imgSrc={projekt2} imgSrcAlt={projekt2Alt}/>
      <Case caseHeading='REDBULL TURNERING' caseDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laborum modi distinctio rerum odit quae minus ad corporis vel maiores eveniet quasi exercitationem voluptate! Vel obcaecati nulla provident animi magni.' targetModal='#casesModal3' imgSrc={projekt3} imgSrcAlt={projekt3Alt}/>
      <Case caseHeading='SAT AF PIGEONS PÅ STADIUM' caseDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laborum modi distinctio rerum odit quae minus ad corporis vel maiores eveniet quasi exercitationem voluptate! Vel obcaecati nulla provident animi magni.' targetModal='#casesModal4' imgSrc={projekt4} imgSrcAlt={projekt4Alt}/>
      <Case caseHeading='ÅBNINGSFEST' caseDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laborum modi distinctio rerum odit quae minus ad corporis vel maiores eveniet quasi exercitationem voluptate! Vel obcaecati nulla provident animi magni.' targetModal='#casesModal5' imgSrc={projekt5} imgSrcAlt={projekt5Alt}/>
      <Case caseHeading='SAT AF I EUROPA' caseDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, laborum modi distinctio rerum odit quae minus ad corporis vel maiores eveniet quasi exercitationem voluptate! Vel obcaecati nulla provident animi magni.' targetModal='#casesModal6' imgSrc={projekt6} imgSrcAlt={projekt6Alt}/>    
      </div>
      </div>
      </section>

      <CaseModal modalID='casesModal1' modalLabel1='exampleModalLabell' modalLabel2='exampleModalLabel1' modalHeading='LITAUENS PLADS' modalDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! '/>
      <CaseModal modalID='casesModal2' modalLabel1='exampleModalLabel2' modalLabel2='exampleModalLabel2' modalHeading='ADIDAS KAMPAGNE' modalDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! '/>
      <CaseModal modalID='casesModal3' modalLabel1='exampleModalLabel3' modalLabel2='exampleModalLabel3' modalHeading='REDBULL TURNERING' modalDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! '/>
      <CaseModal modalID='casesModal4' modalLabel1='exampleModalLabel4' modalLabel2='exampleModalLabel4' modalHeading='SAT AF PIGEONS PÅ STADIUM' modalDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! '/>
      <CaseModal modalID='casesModal5' modalLabel1='exampleModalLabel5' modalLabel2='exampleModalLabel5' modalHeading='ÅBNINGSFEST' modalDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' />
      <CaseModal modalID='casesModal6' modalLabel1='exampleModalLabel6' modalLabel2='exampleModalLabel6' modalHeading='SAT AF I EUROPA' modalDesc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! ' modalDesc3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, in animi. Aliquid, sunt facilis distinctio quis minima illum tenetur voluptatum facere tempore assumenda unde quasi necessitatibus amet. Distinctio vero sunt totam mollitia laborum autem, dolorum sed est beatae? Cumque, quibusdam cupiditate! Esse, totam. Aliquid corporis sit quas quia repellat corrupti! '/>
  <div className="cookie-container">
    <div className="cookie-btn-center">
      <h4 className="cookieHeader">Ja, vi bruger cookies</h4>
      <p className="cookieText">
        Vi bruger cookies på dette website for at give dig den bedste oplevelse på vores
        website. For at finde ud af mere, læs vores
        <a href="privatlivs.html">privatlivspolitik</a> &amp; <a href="privatlivs.html">cookie politik</a>.
      </p>
      <button className="cookie-btn" id="RefreshPage">
        Accepter
      </button>
    </div>
  </div>
</div>

        )
}

export default Cases;