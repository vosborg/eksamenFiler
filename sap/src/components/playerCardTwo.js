import React from 'react';


const PlayerCardTwo = props=>{
    return(
        <div className="col-md-3 mobilePicture playerCardBox mb-5">
        <picture>
          <source className="PlayerCardPictures" srcSet={props.imgsrc} type="image/webp" />
          <source className="PlayerCardPictures" srcSet={props.imgsrc} type="image/png" />
          <img className="PlayerCardPictures" src={props.imgsrc} alt="Sat Af Pigeons Futsal hold København" />
        </picture>
        <div className="imgTitle">
          <h5>{props.playerPosition}</h5>
          <h1>{props.playerName}</h1>
        </div>
      </div>
    );
}

export default PlayerCardTwo;