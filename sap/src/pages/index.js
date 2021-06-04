import React from "react";
import { Link } from "react-router-dom";
import forsideVideo from "../asset/vids/forsideVid.mp4";
import forsideVideoAlt from "../asset/vids/forsideVidAlt.webm";
import Poster from "../asset/img/Ompics/omPic1.png";
import Volta from "../asset/img/globalPics/voltaShirt.png";
import VoltaAlt from "../asset/img/globalPics/voltaShirt.webp";
import articlePic1 from "../asset/img/globalPics/artikelPic1.jpg";
import articlePic2 from "../asset/img/globalPics/artikelPic2.jpg";
import articlePic3 from "../asset/img/globalPics/13.jpg";
import articlePic4 from "../asset/img/globalPics/artikelPic4.png";
function Index() {

setTimeout(() => { 
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    document.querySelector(".cookie-container").classList.add("active");
  }
}, 1000);
function refreshPage() { 
  document.querySelector(".cookie-container").classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
  window.location.reload();
}


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

      <div className="cookie-container">
        <div className="cookie-btn-center">
          <h4 className="cookieHeader">Ja, vi bruger cookies</h4>
          <p className="cookieText">
            Vi bruger cookies på dette website for at give dig den bedste oplevelse på vores
            website. For at finde ud af mere, læs vores
            <a href="privatlivs.html">privatlivspolitik</a>
            &amp; <a href="privatlivs.html">cookie politik</a>.
         </p>
          <button className="cookie-btn" id="RefreshPage" onClick={refreshPage}>
            Accepter
          </button>
        </div>
      </div>


      {/* FORSIDE VIDEO START */}
      <div id="frontPageVideo" className="videoPadding">
        <video muted autoPlay poster={Poster}>
          <source type="video/mp4" src={forsideVideo} />
          <source type="video/webm" src={forsideVideoAlt} />
        </video>
        <div className="frontPageVideoContent d-flex align-items-center">
          <div className="container text-center">
          <h1>
              SAT AF PIGEONS
            </h1>
          
            
          </div>
        </div>
        <div className="scroll-down">
          <div className="container text-center">
            <div className="move bounce">
              <a href="#newCollectionID" className="btn-scroll op-3">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FORSIDE VIDEO SLUT */}
      <div className="container-fluid" id="newCollectionID">
        <div className="row">
          <div className="col-md-1 newCollectionHeader my-auto noPadding">
            <h3>FIFA 21 VOLTA</h3>
          </div>
          <div className="col-sm-12 newCollectionTabletXl">
            <h3 className="tabletXlHeading">FIFA 21 VOLTA</h3>
          </div>
          <div className="col-lg-5 col-sm-6  noPadding tabletNonePicture">
            <picture>
              <source
                className="img-fluid newCollectionPicture"
                srcSet={VoltaAlt}
                type="image/webp"
              />
              <source
                className="img-fluid newCollectionPicture"
                srcSet={Volta}
                type="image/png"
              />
              <img
                className="img-fluid newCollectionPicture"
                src={Volta}
                alt="Volta Futsal Pigeons trøjen"
              />
            </picture>
          </div>
          <div className="col-lg-6 col-sm-6 noPadding text-center newCollectionText">
            <h2 className="pt-1">SAT AF PIGEONS x FIFA 21</h2>
            <p>
              {" "}
              <strong>
                Sat Af Pigeons indgår historisk aftale med spilgigant!{" "}
              </strong>
            </p>
            <p>
              Som det første danske amatørhold har ’Sat Af Pigeons’ indgået en
              aftale med verdens største producent af sportsvideospil: ’EA
              Sports’. I aftalen har ‘Sat Af Pigeons’ fået lov til at designe et
              unikt spillesæt til FIFA21’s VOLTA spilfunktion og den populære
              ‘Fifa Ultimate Team’ feature. Samarbejdet estimeres til at sikre
              eksponering af ‘Sat Af Pigeons’ til mere end 80 millioner
              mennesker verden over og er et af de største internationale
              partnerskaber nogensinde i dansk breddeidræt.
            </p>
            <div className="newCollection">
              <button className="newCollection__Btn">
                {" "}
                <Link to="">LÆS MERE HER</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="newsArticle news">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 articleFrontPage">
              <p className="articleFrontPage__headingDate articleFrontPage__headingDate--dateOne ">
                <span>Marts 2021</span>
                

              </p>
              <h1 className="articleFrontPage__heading articleFrontPage__heading--headingOne">
                <span>SEJR OVER BRØNDBY I </span> <span>SÆSONAFSLUTNING</span>
                
              </h1>

              <div className="articleOne">
                <button type="button" className="articleOne__Btn">
                  <Link to="/artikel">LÆS ARTIKEL</Link>
                </button>
                
              </div>
              <div className="articleFrontPage__img articleFrontPage__img--imgOne">
                <img src={articlePic1}/>
              </div>
              

            </div>
            <div className="col-lg-4 articleFrontPage">
              <p className="articleFrontPage__headingDate articleFrontPage__headingDate--dateTwo">
                <span>Oktober 2020</span>
                
              </p>
              <h1
                className="articleFrontPage__heading articleFrontPage__heading--headingTwo">
                <span>INTERVIEW I EUROMAN</span>
                
              </h1>
              <div className="articleTwo">
                <a
                  className="articleLink"
                  target="blank"
                  href="https://www.euroman.dk/kultur/drux-og-flam-fra-sat-af-designer-troeje-til-fifa-21-jeg-har-oplevet-ret-mange-store-ting-i-de-sidste-ti-aar-hvis-jeg-selv-skulle-sige-det-men-det-her-overgaar-alt-andet ">
                  <button
                    type="button"
                    className="articleTwo__Btn">
                    <Link to="/artikel">LÆS ARTIKEL</Link>
                  </button>
                
                </a>
              </div>
                <div className="articleFrontPage__img articleFrontPage__img--imgTwo">
                <img
                  src={articlePic2}
                />
              </div>
              
            </div>
            <div className="col-lg-4 articleFrontPage">
              <p className="articleFrontPage__headingDate articleFrontPage__headingDate--dateThree">
                <span>Januar 2021</span>
                
              </p>
              <h1
                className="articleFrontPage__heading articleFrontPage__heading--headingThree"
              >
                <span>INTET PIGEONS UDEN </span> <span>ASGER TVERSKOV</span>
                
              </h1>
              <div className="articleThree">
                <button
                  type="button"
                  className="articleThree__Btn"
                >
                  <Link to="/artikel">LÆS ARTIKEL</Link>
                </button>
                
              </div>
              <div className="articleFrontPage__img articleFrontPage__img--imgThree">
                <img
                  src={articlePic3}
                />
              </div>
              
            </div>
          </div>
          <div className="row spacerFrontPage ">
            <div className="col-lg-8 articleFrontPage">
              <p className="articleFrontPage__headingDate articleFrontPage__headingDate--dateFour">
                <span>Januar 2021</span>
              </p>
              <h1 className="articleFrontPage__heading articleFrontPage__heading--headingFour">
                <span>
                  ADIDAS EVENT:<span>SAT AF PIGEONS VS</span> GADENS ALLSTARS
                </span>
              </h1>
              <div className="articleFour">
                <button type="button" className="articleFour__Btn">
                  <Link to="/artikel">LÆS ARTIKEL</Link>
                </button>
              </div>
              <div className="articleFrontPage__img articleFrontPage__img--imgFour">
                <img src={articlePic4} alt="Sat Af Pigeons Futsal København" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
