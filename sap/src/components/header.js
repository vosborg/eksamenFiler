import React from "react";
import GoToTop from '../asset/js/GoToTop';
import logo from '../asset/img/globalPics/logoGuld.png';
import {Link} from 'react-router-dom';


export default class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementById("logoTop");
    if (distanceY > shrinkOn) {
      headerEl.classList.add("navbarScrolled");
    } else {
      headerEl.classList.remove("navbarScrolled");
    }
    
  }
  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navColor noPadding2" id="navbar">
        <div className="container-fluid noPadding">
          <Link to="/" className="navbar-brand">
              <img className="logoTop" id="logoTop" src={logo} alt="Alt Text!" />
          </Link>
          <div className="d-flex">
            <a className="smallLink" href="https://shop.satafpigeons.dk/"><button type="button" className="shopbtn small me-3">WEBSHOP</button></a>
            <button id="hamburgerSpacer" className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
              <span className="burger-tekst">Luk</span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">           
              <Link to="/artikel" class="nav-link linkHover">Nyheder</Link>
              </li> 
              <li className="nav-item dropdown">
                <a className="nav-link linkHover" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kampe
                  <span style={{color: '#f5dd98', fontWeight: 'bold'}}>+</span>
                </a>
                <ul className="dropdown-menu DDeffect growDown" aria-labelledby="navbarDropdownMenuLink">
                  <li className="DDHover">
                    <a className="dropdown-item" href="https://www.dbu.dk/resultater/hold/385650_335986/kampprogram">Kampprogram</a>
                  </li>
                  <li className="DDHover">
                    <a className="dropdown-item" href="https://shop.satafpigeons.dk/" target="_blank">Køb billetter</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link linkHover" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pigeons
                  <span style={{color: '#f5dd98', fontWeight: 'bold'}}>+</span>
                </a>
                <ul className="dropdown-menu DDeffect growDown" aria-labelledby="navbarDropdownMenuLink">
                  <li className="DDHover">
                  <Link to="/holdet" class="dropdown-item">Holdet</Link>
                  </li>
                  <li className="DDHover">
                  <Link to="/bestyrelse" class="dropdown-item">Bestyrelse</Link>
                  </li>
                  <li className="DDHover">
                  <Link to="/frivillig" class="dropdown-item">Frivillig</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link linkHover" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Om <span style={{color: '#f5dd98', fontWeight: 'bold'}}>+</span>
                </a>
                <ul className="dropdown-menu DDeffect growDown" aria-labelledby="navbarDropdownMenuLink">
                  <li className="DDHover">
                  <Link to="/om" class="dropdown-item">Om</Link>
                  </li>
                  <li className="DDHover">
                    <Link to="/value" class="dropdown-item">Mærkesager</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link linkHover" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Partners <span style={{color: '#f5dd98', fontWeight: 'bold'}}>+</span>
                </a>
                <ul className="dropdown-menu DDeffect growDown" aria-labelledby="navbarDropdownMenuLink">
                  <li className="DDHover">
                  <Link to="/partner" class="dropdown-item">Partner</Link>
                  </li>
                  <li className="DDHover">
                  <Link to="/cases" class="dropdown-item">Cases</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/kontakt" class="nav-link linkHover">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav justify-content-end">
          <li>
            <a href="https://shop.satafpigeons.dk/"><button type="button" className="shopbtn">WEBSHOP</button></a>
          </li>
        </ul>
      </nav>
    
      <GoToTop />

    </div>
    );
  }
}
