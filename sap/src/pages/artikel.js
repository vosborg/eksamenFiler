import React from 'react';
import artikelEks from '../asset/img/artikelpics/artikelEks.png';
import Quotes from '../asset/img/artikelpics/Quotes-icon.png';
import eksempel1 from '../asset/img/globalPics/13.jpg';
import {Link} from 'react-router-dom';


function Artikel() {

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

    <div>
      <div className="scrollTop" onClick={scrollToTop}>
        <i className="fas fa-chevron-up" />
      </div>
 
      <div className="container-fluid">
        <div className="row text-left articleHeader">
          <div className="offset-1 col-10 offset-md-2 col-md-8">
            <h5 className="articleDate">JANUAR 2021,</h5>
            <h1 className="articleHeading">
              THE YEAR AHEAD: <br />
              CHALLENGES AND <br />
              OPPORTUNITIESS
            </h1>
            <div className="headerLine mb-3" />
        </div>
      </div>
      <div className="offset-1 col-10 articleHeaderPic">
        <picture>
          <source className="articlePic" srcSet={artikelEks} type="image/webp" />
          <source className="articlePic" srcSet={artikelEks} type="image/png" /> 
          <img className="articlePic" src={artikelEks} alt="Artikel Billede" />
      </picture>
    </div>
    <div className="row text-left articleStart">
      <div className="offset-md-3 col-md-6 offset-1 col-10">
        <div className="writerInformation">
          <p>
            af <b>Imad Elsankari</b> <br />
            I går kl 18:22
          </p>
        </div>
        <div className="articleText">
          <p>
            Mikkel og Mohammed på 20 år er de seneste eksportvarer, der har
            taget turen fra talentfabrikken FC Nordsjælland og ud i
            fodboldeuropa. Mikkel fra akademiet i Farum. Mohammed fra
            akademiet i Ghana.
          </p>
          <p>
            Som store profiler i Superligaen forlod Mikkel Damsgaard og
            Mohammed Kudus i sommer Superligaen med retning mod Sampdoria i
            denitalienske Serie A og Ajax i den hollandske Æresdivision.
          </p>
          <p>
            Med afgangen af de to spillere, der stod for 21 af Nordsjællands
            scoringer i sidste sæson, var det naturligt at forvente et stort
            hul i FC Nordsjællands trup. Men det lader til at hullet er ved at
            blive fyldt op igen med ny afrikansk talentmasse.
          </p>
          <p>
            18-årige Kamaldeen Sulemana og 19-årige Mohammed Diomande har i
            den første halvsæson lagt fra land med sammenlagt syv mål og tre
            assister i Superligaen. Og netop Kamaldeen og Diomande er af Uefa
            blevet udnævnt som to af de 50 talenter, man i år bør holde øje
            med i europæisk fodbold.
          </p>
          <div className="articleQuote offset-md-1 col-md-10">
            <picture>
              <source className="articleQuoteSign" srcSet={Quotes} type="image/webp" />
              <source className="articleQuoteSign" srcSet={Quotes} type="image/png" /> 
              <img className="articleQuoteSign" alt="#" src={Quotes} />
            </picture>
            <h1 className="articleStatement">
              Hvis man har to spillere med på listen, så er der i hvert fald
              nogle ting, der bliver gjort rigtigt i vores setup.
            </h1>
            <p className="articleQuoteFrom">
              - JAN LAURSEN, SPORTSCHEF I FC NORDSJÆLLAND.
            </p>
          </div>
          <p>
            Hvor stor betydning det har at komme på en sådan liste er for DR
            Sportens fodboldkommentator svært at vurdere. Det er dog sikkert,
            at det ikke skader en kommende salgssituation. Tværtimod.
          </p>
          <p>
            - Det er simpelthen kroner og ører værd. Det er noget, der kan
            være med til at presse prisen op. Disse lister er med til at
            blåstemple spillere. Det er både uden den store betydning, men
            alligevel er det et godt sted at stå, siger Andreas Kraul.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row lastNewsHeader">
      <div className="col-md-12">
        <h2 className="text-center lastNewsHeading">SENESTE NYHEDER</h2>
      </div>
    </div>
    <div className="row lastNewsSection d-flex justify-content-center">
      <div className="col-md-3">
        <picture>
          <source srcSet={eksempel1} type="image/webp" />
          <source srcSet={eksempel1} type="image/jpg" /> 
          <img src={eksempel1} alt="Mand i Pigeons Futsal trøje" />
        </picture>
        <h3 className="lastNewsDate">December 2020</h3>
        <h2 className="lastNewsTitle">
          TRUE INNOVATION <br />REQUIRES DIVERSITY
        </h2>
      <div className="lastNews">
        <button type="button" className="lastNews__Btn">
          <Link to="/artikel">LÆS ARTIKEL</Link>
        </button>
        </div>
      </div>
      <div className="col-md-3 lastNews-2">
        <picture>
          <source srcSet={eksempel1} type="image/webp" />
          <source srcSet={eksempel1} type="image/jpg" /> 
          <img src={eksempel1} alt="Mand i Pigeons Futsal trøje" />
        </picture>
        <h3 className="lastNewsDate">December 2020</h3>
        <h2 className="lastNewsTitle">
          ATHLETES VOICE; <br />
          THOUGHTS
        </h2>
      <div className="lastNews">
        <button type="button" className="lastNews__Btn">
          <Link to="/artikel">LÆS ARTIKEL</Link>
        </button>
</div>
      </div>
      <div className="col-md-3">
        <picture>
          <source srcSet={eksempel1} type="image/webp" />
          <source srcSet={eksempel1} type="image/jpg" /> 
          <img src={eksempel1} alt="Mand i Pigeons Futsal trøje" />
        </picture>
        <h3 className="lastNewsDate">December 2020</h3>
        <h2 className="lastNewsTitle">JOHN DOE: TIMING IS <br />EVERYTHING</h2>
      <div className="lastNews">
        <button type="button" className="lastNews__Btn">
          <Link to="/artikel">LÆS ARTIKEL</Link>
        </button>
        </div>
      </div>
      <div className="lastNewsMargin" />
    </div>
  </div>
</div>



        )
}

export default Artikel;