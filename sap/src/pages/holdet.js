import React from 'react';
import ReactDOM from 'react-dom';
import Ghost from '../asset/img/players/playerCardGhost.png';
import PlayerCardOne from '../components/playerCardOne';
import PlayerCardTwo from '../components/playerCardTwo';
import PlayerCardTitle from '../components/playerCardTItle';
import Spacer from '../components/spacer';
ReactDOM.render(<Spacer/>, document.getElementById('root'));
ReactDOM.render(<PlayerCardOne/>, document.getElementById('root'));
ReactDOM.render(<PlayerCardTwo/>, document.getElementById('root'));
ReactDOM.render(<PlayerCardTitle/>, document.getElementById('root'));


function Holdet() {
 
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
    <div className="row text-left teamHeader">
      <div className="offset-1 col-10 offset-md-2 col-md-8">
        <h1 className="teamHeading">
          SAT AF PIGEONS <br />
          HOLDET
        </h1>
        <div className="headerLine mb-3" />
      </div>
    </div>
  </div>

  <div className="container-fluid mobileTeam">
    
    <PlayerCardTitle title='TEAM'/>

    <div className="row">
      <PlayerCardOne playerPosition='Sports Director' playerName='Danijel Deletic' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Head Manager' playerName='Yassine Macine' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Assistant Manager' playerName='Daniel Flamgaard' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Coach' playerName="Seringe N'dione" imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Lead Physio' playerName='Ibrahim Mansaray' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Team Manager' playerName='Ylber Farizi' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Hospitality Manager' playerName='Dalibor Deletic' imgsrc={Ghost}/>
    </div>

    <div className="container-fluid mobile-holdet">
    <PlayerCardTitle title='GOALKEEPERS'/>
      <div className="row">
      <PlayerCardOne playerPosition='Goalkeeper' playerName='Allan Oure' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Goalkeeper' playerName='Emil At Larsen' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Goalkeeper' playerName='Murad Yasin' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Goalkeeper' playerName='Thomas Gall' imgsrc={Ghost}/>
      </div>

      <PlayerCardTitle title='DEFENDERS'/>
      <div className="row">
      <PlayerCardOne playerPosition='Defender' playerName='Adhurim Sejfuli ' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Defender' playerName='Berzan Kucukyldiz' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Defender' playerName='Sihahmet Kayiran' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Defender' playerName='Hicham Addouche' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Defender' playerName='Fariman Khazer' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Defender' playerName='Hocine Derrar' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Defender' playerName='Mads Oddershede' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Defender' playerName='Magnus Suhr' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Defender' playerName='Matin Corleone' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Defender' playerName='Magnus Sonne' imgsrc={Ghost}/>
      </div>

      <PlayerCardTitle title='WINGERS'/>
      <div className="row">
      <PlayerCardOne playerPosition='Winger' playerName='Burak Bozdemir' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Winger' playerName='Daniel Frenstrup' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Winger' playerName='Mads Phonbamrung Hansen' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Winger' playerName='Josef Moussa' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Winger' playerName='Jacob Corneliusen' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Winger' playerName='Oscar Hartkopf' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Winger' playerName='Mohsen Charrat' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Winger' playerName='Saad Abbouch' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Winger' playerName='Daniel Flamgaard' imgsrc={Ghost}/>
      </div>
     
      <PlayerCardTitle title='PIVOTS'/>
      <div className="row">
      <PlayerCardOne playerPosition='Pivot' playerName='Youssef Sadouk' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Pivot' playerName='Frederik Frankman' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Pivot' playerName='Frederick Larsen' imgsrc={Ghost}/>
      <PlayerCardOne playerPosition='Pivot' playerName='Danijel Deletic' imgsrc={Ghost}/>
      <PlayerCardTwo playerPosition='Pivot' playerName='Abdou Goddard' imgsrc={Ghost}/>
      </div>
      <Spacer/>
      <div className="scrollTop" onclick="scrollToTop();">
        <i className="fas fa-chevron-up" />
      </div>
     </div>
     </div>
     </div>
        )
}

export default Holdet;