import React from 'react';


const PlayerCardTitle = props=>{
    return(
      
        <div className="row text-left">
      <div className="offset-md-2 col-md-8">
        <h2 className="positionHeading">{props.title}</h2>
      </div>
    </div>

    );
}

export default PlayerCardTitle;