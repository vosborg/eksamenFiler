import React from 'react';


const BestyrelseCardTwo = props=>{
    return(
        <div className="col-lg-4 col-md-6 col-sm-12 card-space">
        <div className="card cardOwnership">
          <picture>
            <source className="card-img-top" srcSet={props.imgsrc} type="image/webp" />
            <source className="card-img-top" srcSet={props.imgsrc} type="image/jpg" /> 
            <img className="card-img-top" src={props.imgsrc} alt="Pigeons futsal hold Owner" />
          </picture> 
          <div className="card-body">
            <h5>{props.name}</h5>
            <span>{props.position}</span>
            <p className="card-text">
            {props.description}
              <br />
              &nbsp;
            </p>
            <p className="d-flex justify-content-center">
              <div className="ownership">
              <button className="ownership__Btn" type="button" data-bs-toggle="collapse" data-bs-target={props.collapse1} aria-expanded="false" aria-controls={props.collapse2}>
                <i className="fas fa-chevron-down" />
              </button>
              </div>
            </p>
            <div className="col">
            <div className="collapse multi-collapse" id={props.collapse2}>
                <div className="card card-body">
                  <p>
                  {props.email}
                    <br /> {props.tlf}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BestyrelseCardTwo;