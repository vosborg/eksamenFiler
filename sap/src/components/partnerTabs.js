import React from 'react';


const PartnerTabs = props=>{
    return(
        <div className="tab-pane active show" id={props.partnerID}>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-2 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="partnerContentHeading">
              {props.partnerHeader}
            </h3>
            <p className="partnerContentText">
            {props.partnerDesc1}
            </p>
            <p className="partnerContentText">
            {props.partnerDesc2}
            </p>
            <p />
          </div>
          <div className="col-lg-6 order-1 order-lg-1 text-center" data-aos="fade-up" data-aos-delay={200}>
          <picture>
        <source className="img-fluid" srcSet={props.imgSrcAlt} type="image/webp" />
        <source className="img-fluid" srcSet={props.imgSrc} type="image/jpg" /> 
        <img className="img-fluid" src={props.imgSrc} alt="" />
      </picture>
          </div>
        </div>
      </div>
    );
}

export default PartnerTabs;