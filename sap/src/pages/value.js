import React from "react";

function Value() {

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
    <div class="ForsideBackground">
    <div>
    <div className="scrollTop" onClick={scrollToTop}>
        <i className="fas fa-chevron-up" />
      </div>
       <section className="valueHeaderPic">
         <div className="container-fluid">
           <div className="row text-center">
             <h1 className="rellax" data-rellax-speed={-4}>HVAD VIL PIGEONS?</h1>
           </div>
         </div>
       </section>
       <div className="valueOverskrift text-center">
         <h1>Klubbens Mærkesager:</h1>
       </div>
       <div className="container">
         <div className="row">
           <div className="offset-md-1 col-md-5">
             <h5 className="valueNumber">01</h5>
             <h2 className="valueHeader">Mangfoldighed - vi viser det! </h2>
             <p className="valueText">
               Vi tror på sport og bevægelse til forståelse af kulturelle forskelle. Vi hylder mangfoldigheden og forenes omkring det der binder os alle sammen: vores kærlighed til streetball og gadens fællesskab. Vi ser ikke behov for at tale om mangfoldighed. Vi vil meget hellere vise det på og udenfor banen!
             </p>
           </div>
           <div className="col-md-5">
             <h5 className="valueNumber">02</h5>
             <h2 className="valueHeader">Kom op af sofaen og bevæg dig</h2>
             <p className="valueText">
               Smartphones, videomøder og samvær over nettet er en integreret del af alles hverdag. Vi drømmer om de gamle dage på blokken, hvor socialt samvær var fysisk med en bold og hudafskrabninger til følge. Vi ønsker at få de unge mere væk fra deres virtuelle liv og ud i den virkelige verden ved hjælp af bevægelse og sunde, fysiske fællesskaber. Dette er vi overbevist om både vil sikre bedre social og fysisk sundhed. 
             </p>
           </div>
         </div>
         <div className="row">
           <div className="offset-md-1 col-md-5">
             <h5 className="valueNumber">03</h5>
             <h2 className="valueHeader">Teknisk udvikling - vi savner den nye Laudrup!</h2>
             <p className="valueText">
               Fodbold skal være storslået og seværdigt. Det skal være ’joga bonito’ og ikke ’kick and rush’. Og vigtigst af alt… Det skal være underholdende. Dette er én af Sat Af Pigeons’ største mærkesager, og som vores klubnavn antyder, sætter vi fokus på at løfte det tekniske spil. Vilde driblinger skal værdsættes og ikke lægges en dæmper på. Dette er en væsentlig målsætning, hvis dansk fodbold skal gøres mere publikumsvenlig, og ungdommens interessen for sporten skal sikres. Vi vil gerne være med til at sikre flere typer som Sisto, Krohn-Dehli, M. Zidan og Laudrup i dansk fodbold. 
             </p>
           </div>
           <div className="col-md-5">
             <h5 className="valueNumber">04</h5>
             <h2 className="valueHeader">Mental sundhed</h2>
             <p className="valueText">
               Unges mentale sundhed er presset, og behovet for at være social er større end nogensinde. I Sat Af Pigeons sætter vi fokus på mental sundhed og går op i vores spillers velbefindende, der ofte undertrykkes i en macho fodboldverden. Følelser og mentale udfordringer skal ikke være et tabu, men kunne italesættes sammen med dine holdkammerater. Vi ønsker en åben og tolerant klub, der kan være frontrunner i kampen for bedre mental trivsel både blandt unge og i sportens verden. Pigeons vil huskes som klubben, der udtænkte alternative måder at støtte op om mental sundhed. 
             </p>
           </div>
         </div>
         <div className="row">
           <div className="offset-md-1 col-md-5">
             <h5 className="valueNumber">05</h5>
             <h2 className="valueHeader">Bæredygtighed - for en bedre fremtid</h2>
             <p className="valueText">
               Vi har alle et ansvar for at gøre kloden mere bæredygtig og skabe en bedre verden for den næste generation. I Sat Af Pigeons ønsker vi at bidrage til den grønne omstilling efter bedste evne. Derfor anvender Pigeons så vidt muligt vores partner adidas’ ‘Parley’ kollektion (lavet af genanvendt plastik fra havet), og holdets overskydende tøj og produkter sendes til vores samarbejdspartner - velgørenhedsorganisation ‘Dear Football’. Dette er Pigeons første træk af mange i kampen for større bæredygtighed, og i fremtiden vil holdet gennemføre flere initiativer, der sætter fokus på klimaet. 
             </p>
           </div>
           <div className="col-md-5">
             <h5 className="valueNumber">06</h5>
             <h2 className="valueHeader">Edgy og classy</h2>
             <p className="valueText">
               ’Sat Af Pigeons’ går op i, hvordan vi og vores brand ser ud - både på og udenfor banen. Vi vil være med til at skabe de nyeste trends og skubbe rammerne for urban culture. Pigeons merchandise og brand skal være at finde på gader og stræder over hele Danmark på niveau med andre store internationale sportsbrands.<br /><br />
               Men ’Classy people bedømmes ikke alene på deres stil og udseende. Deres karisma og klasse afspejler sig også i deres personlighed og væremåde blandt andre mennesker. Vores kultur bygger således på stil og klasse i alt fra vores visuelle identitet til måden hvorpå, at vi omgås hinanden og andre med stor respekt. Vi værdsætter de skæve personligheder og lever efter devisen om at nurse fremfor at shame. Det er ægte klasse!
             </p>
           </div>
         </div>
       </div>
     </div>
     
       </div>
  );
}

export default Value;