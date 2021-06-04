import React from 'react';


const CaseModal = props=>{
    return(
        <div className="modal fade" id={props.modalID} tabIndex={-1} aria-labelledby={props.modalLabel1} aria-hidden="true">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content">
        <div className="modal-header">       
          <h5 className="modal-title" id={props.modalLabel2}>{props.modalHeading}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <section className="modalSection">
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row darkRow">
                <div className=" col-md-4">
                  <h2>Challenges</h2>
                </div>
                <div className="offset-md-2 col-md-6">
                  <p>
                  {props.modalDesc1}
                </p>
                </div>
              </div>
              <div className="row lightRow">
                <div className=" col-md-4">
                  <h2>Solutions</h2>
                </div>
                <div className="offset-md-2 col-md-6">
                  <p>
                  {props.modalDesc2}
                  </p>
                </div>
              </div>
              <div className="row darkRow">
                <div className=" col-md-4">
                  <h2>Results</h2>
                </div>
                <div className="offset-md-2 col-md-6">
                  <p>
                  {props.modalDesc4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="modal-footer caseButton">
          <button type="button" className="caseButton__Btn" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    );
}

export default CaseModal;