import React from 'react';

function Kontakt() {

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
        <div className="row text-left contactHeader">
            <div className="offset-sm-1 offset-md-2 col-md-8">
              <h5 className="contactMiniTitle">Kontakt os</h5>
              <h1 className="contactTitle">SEND EN DIGITAL BREVDUE!</h1>
              <div className="headerLine mb-3" />
            </div>
          </div>
        </div>
        <section className="contactSection" id="contactSection">
          <div className="container">
            <div className="offset-md-1 col-md-10">
              <div className="row">
                <div className="col-md-7 col-lg-7 col-sm-12">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <input type="text" className="form-control" placeholder="NAVN" />
                      </div>
                      <div className="col-sm-6">
                        <input type="email" className="form-control" placeholder="EMAIL" />
                      </div>
                      <div className="col-sm-12">
                        <input type="text" className="form-control" placeholder="EMNE" />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows={5} id="comment" placeholder="BESKED" defaultValue={""} />
                    </div>
                    <div className="contact">
                    <button className="contact__Btn" type="submit">SEND BESKED</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-5 col-lg-5">
                  <div className="contactAddress">
                    <h3 style={{color: '#F5DD98'}}>Sat Af Pigeons</h3>
                    <p>Pile Alle 5G, st. th. <br />2000 Frederiksberg <br />CVR: 39895684</p>
                  </div>
                  <div className="contactInformation">
                    {/* Information-1 */}
                    <div className="infoContact">
                      <h4>
                        Telefon nummer :
                        <br />
                        <span>+45 60187989</span>
                      </h4>
                    </div>
                    {/* Information-2 */}
                    <div className="infoContact">
                      <h4>
                        E-mail :
                        <br />
                        <span>info@satafpigeons.dk</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


        )
    
}

export default Kontakt;