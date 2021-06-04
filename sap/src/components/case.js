import React from 'react';


const Case = props=>{
    return(
        <div className="col-lg-4 col-sm-6 mb-4">
        <div className="casesBox">
          <a className="casesLink" data-bs-toggle="modal" data-bs-target={props.targetModal}>
            <div className="casesHover">
              <div className="casesHoverContent">READ MORE</div>
            </div>
            <picture>
            <source className="img-fluid" srcSet={props.imgSrcAlt} type="image/webp" />
            <source className="img-fluid" srcSet={props.imgSrc} type="image/png" /> 
            <img className="img-fluid" src={props.imgSrc} alt=" Futsal Pigeons Projekt" />
            </picture>
          </a>
          <div className="casesCaption">
            <div className="casesCaptionHeading">{props.caseHeading}</div>
            <p className="casesText"> {props.caseDesc}</p>
          </div>
        </div>
      </div>
    );
}

export default Case;