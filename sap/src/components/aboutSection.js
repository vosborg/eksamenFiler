import React from 'react';
import logo from '../asset/img/globalPics/logoGuld.png';


const AboutSection = props=>{
    return(
        <section className="aboutSection">
      <div className="row">
        <div className="offset-sm-1 col-sm-10">
          
          <div className="row about">

            <div className="col-sm-6 about__text about__text--light">

              <h2 className="pt-5 about__header">{props.title}</h2>

              <p className>
              {props.text}
              </p>
            </div>

            <span className="about__logo"><img srcSet={logo} alt="Sat Af Pigeons København Futsal hold logo" /></span>
            <div className="col-sm-6 noPadding">

              <picture>
                <source className="img-fluid about__img" srcSet={props.imgsrc} type="image/webp" />
                <source className="img-fluid about__img" srcSet={props.imgsrc} type="image/png" />
                <img className="img-fluid about__img" src={props.imgsrc} alt="Sat Af Pigeons Futsal Logo" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default AboutSection;