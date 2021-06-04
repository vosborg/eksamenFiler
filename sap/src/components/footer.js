import React from 'react';
import {Link} from 'react-router-dom';
import sponsor1 from '../asset/img/sponsor/EnergeticLogoHvid.png';
import sponsor2 from '../asset/img/sponsor/adidasLogoHvid.png';
import sponsor3 from '../asset/img/sponsor/OliOliLogoHvid.png';
import sponsor4 from '../asset/img/sponsor/SportmasterLogoHvid.png';
import footerLogo from '../asset/img/footer/group-34.png';


function Footer() {
  return (
    <div>
          
          
  <div className="container-fluid">
    <div className="row footerSponsor pt-5 pb-5">
      <div className="offset-lg-2 col-lg-2 col-md-6 align-self-end sponsorLogo">
        <a href="https://www.facebook.com/EnergeticX.cph/">
        <img className="mx-auto d-block" src={sponsor1} alt="Sponsor"/>
        </a>
      </div>
      <div className="col-lg-2 col-md-6 sponsorLogo">
        <a href="https://www.adidas.dk/">
        <img className="mx-auto d-block align-self-end" src={sponsor2} alt="Sponsor"/>
        </a>
      </div>
      <div className="col-lg-2 col-md-6 align-self-end sponsorLogo">
        <a href="https://oliolipoke.dk/">
        <img className="mx-auto d-block" src={sponsor3} alt="Sponsor"/>
        </a>
      </div>
      <div className="col-lg-2 col-md-6 align-self-end sponsorLogo">
        <a href="https://sportmaster.dk/">
        <img className="mx-auto d-block" src={sponsor4} alt="Sponsor"/>
        </a>
      </div>
    </div>
  </div>
  <footer className="mainFooter">
    <div className="container-fluid spacerFooter">
      <div className="row">
        <div className="col-md-3 col-12 footer-logo">
        <img className="mx-auto d-block" src={footerLogo} alt="Sponsor"/>
        </div>
        <div className="col-12 someSmall">
          <h5>TAG MED PÅ REJSEN</h5>
          <div className="row SoMeList mb-1">
            <div className="col-12 instagram">
              <a className="SoMe" href="https://www.instagram.com/sat_af/?hl=da" target="_blank" rel="noreferrer noopener" ><i className="fab fa-instagram" /></a>
              <a className="SoMe" href="https://www.facebook.com/SatAf16" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-f" /></a>
              <a className="SoMe" href="https://twitter.com/ddsteezin?lang=da" target="_blank" rel="noreferrer noopener"><i className="fab fa-tiktok" /></a>
            </div>
          </div>
          <div className="offset-1 col-10 footerKontakt mt-3">
            <div className="row">
              <div className="offset-1 col-4">
                <h5><i className="fas fa-map-marker-alt" /> &nbsp; Sat Af Pigeons &nbsp; <br />Pile Alle 5G, st. th. <br />2000 Frederiksberg <br />CVR: 39895684</h5>
                <h5><i className="fas fa-mobile-alt" /> &nbsp; 41782686</h5>
                <h5><i className="far fa-envelope" /> &nbsp; info@satafpigeons.dk</h5>
              </div>
              <div className="offset-3 col-4">
                <div id="mc_embed_signup">
                  <form action="https://satafpigeons.us1.list-manage.com/subscribe/post?u=eb537b262df4e621a65f9eade&id=7269e83efa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" rel="noreferrer noopener" noValidate>
                    <div id="mc_embed_signup_scroll">
                      <label htmlFor="mce-EMAIL">Tilmeld nyhedsbrev</label>
                      <input type="email" defaultValue name="EMAIL" className="email" id="mce-EMAIL" placeholder="E-mail" required />
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_eb537b262df4e621a65f9eade_7269e83efa" tabIndex={-1} defaultValue /></div>
                      <div className="clear"><input type="submit" defaultValue="Tilmeld" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-md-0 col-md-3 offset-2 col-4">
          <h5>SAT AF PIGEONS</h5>
          <ul className="list-unstyled hurtigLinks">
            <Link to="/holdet"><li>Holdet</li></Link>
            <Link to="/bestyrelse"><li>Bestyrelsen</li></Link>
            <Link to="/partner"><li>Partners</li></Link>
            <Link to="/om"><li>Om</li></Link>
            <Link to="/kontakt"><li>Kontakt</li></Link>
          </ul>
        </div>
        <div className="offset-md-0 offset-2 col-md-3  col-4">
          <h5>VORES SERVICES</h5>
          <ul className="list-unstyled hurtigLinks">
           <a href="https://www.dbu.dk/resultater/pulje/335986/kampprogramFuld"> <li>Kampprogram</li> </a>
          <a href="https://www.dbu.dk/resultater/hold/385650_335986/stilling"><li>Tabeloversigt</li></a>  
            <Link to="/artikel"><li>Nyheder</li></Link>
            <a href="https://shop.satafpigeons.dk/"><li>Shop</li></a>
            <Link to="/frivillig"><li>Frivillig</li></Link>
          </ul>
        </div>
        <div className="col-3 someBig">
          <h5>TAG MED PÅ REJSEN</h5>
          <div className="row SoMeList mb-1">
            <div className="col-12">
              <a className="SoMe" href="https://www.instagram.com/sat_af/?hl=da" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram" /></a>
              <a className="SoMe" href="https://www.facebook.com/SatAf16" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-f" /></a>
              <a className="SoMe" href="https://twitter.com/ddsteezin?lang=da" target="_blank" rel="noreferrer noopener"><i className="fab fa-tiktok" /></a>
            </div>
          </div>
          <div className="col-12 footerKontakt mt-3">
            <h5><i className="fas fa-map-marker-alt" /> &nbsp; Sat Af Pigeons &nbsp; <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pile Alle 5G, st. th. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2000 Frederiksberg <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CVR: 39895684</h5>
            <h5><i className="fas fa-mobile-alt" /> &nbsp; +4560187989 </h5>
            <h5><i className="far fa-envelope" /> &nbsp; info@satafpigeons.dk</h5>
            {/* Begin Mailchimp Signup Form */}
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n #mc_embed_signup {\n background: transparent;\n clear: left;\n font: 14px Oswald, sans-serif;\n                      }\n                      #mc_embed_signup form{\n                        padding: 0px 0 10px 3%;\n                      }\n                      #mc_embed_signup input.email{\n                        min-width: 90px;\n                        min-height: 26px;\n                        font-size:12px;\n                      }\n                    \n                      #mc_embed_signup .button {\n                        clear: both;\n                        z-index: 3;\n                        font-size: 16px;\n                        letter-spacing: 1px;\n                        text-decoration: none;\n                        background-color: transparent;\n                        color: var(--tekstfarve);\n                        border: 2px solid var(--tekstfarve);\n                        cursor: pointer;\n                        font-family: acumin pro, sans-serif;\n                        transition: 0.3s ease-in-out;\n                      }\n                      #mc_embed_signup .button:hover {\n                        background-color: #ffffff;\n                        color: #1b1b1b;\n                      }\n                      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n                    " }} />
            <div id="mc_embed_signup">
              <form action="https://satafpigeons.us1.list-manage.com/subscribe/post?u=eb537b262df4e621a65f9eade&id=7269e83efa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <label htmlFor="mce-EMAIL">Tilmeld nyhedsbrev</label>
                  <input type="email" name="EMAIL" value="" className="email" id="mce-EMAIL" placeholder="E-mail" required />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_eb537b262df4e621a65f9eade_7269e83efa" tabIndex={-1} defaultValue /></div>
                  <div className="clear"><input type="submit" value="Tilmeld" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="credits text-center">
      <p className="creditstext">
        © 2021 SAT AF PIGEONS | All Rights Reserved |<Link to="/privatlivs" class="privateLink">Private Policy</Link>

      </p>
    </div>
  </footer>
</div>

        )
}


export default Footer;