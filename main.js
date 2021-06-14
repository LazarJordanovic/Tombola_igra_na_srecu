const tomBrojevi=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
                16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
                46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
                61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,
                77,78,79,80,81,82,83,84,85,86,87,88,89,90];
const dugme = document.querySelector('.dugme');
const main = document.querySelector('main');
const broj = document.querySelector('.broj');
const stampa = document.querySelector('.ispis');
const izbaci = document.querySelector('.stampa');
const brojevi = document.querySelector('.brojevi');
let ispis;
let izbaceniBrojevi = [];
let print = " ";
let i;

dugme.addEventListener('click',getBroj);

function getBroj(){
    
    let znak= '';
    for( i=1; i<2; i++){
        let random = Math.floor(Math.random()*tomBrojevi.length);
        znak += tomBrojevi[random];
	    ispis = tomBrojevi.splice(random,1);
        izbaceniBrojevi.push(ispis);
        for ( i=0; i<izbaceniBrojevi.length;i++){
            ispis += izbaceniBrojevi[i]+" ";
            //   FUNKCIJA ZA ISPIS BROJEVA U DIV ELEMENTU(MADA NIJE BAS NAJSAVRSENIJA)!!!
            	//  if (i>10) {
            //      izbaceniBrojevi[10] =novired;
            //      }
            //      if (i>20) {
            //         izbaceniBrojevi[20] = novired;
            //         }
            switch (i) {
                case 10:
                    izbaceniBrojevi[i]=novired;
                    break;
                case 20:
                    izbaceniBrojevi[i] = novired;
                    break;
                case 30:
                    izbaceniBrojevi[i] = novired;
                    break;
                case 40:
                    izbaceniBrojevi[i] = novired;
                    break;
                case 50:
                    izbaceniBrojevi[i] = novired;
                    break;
                case 60:
                    izbaceniBrojevi[i] = novired;
                    break;
                case 70:
                    izbaceniBrojevi[i] = novired;
                    break;
                case 80:
                    izbaceniBrojevi[i] = novired;
                    break;
                case 90:
                    izbaceniBrojevi[i] = novired;
                    break;
            
                default:
                    izbaceniBrojevi[i] = "";
                    document.getElementsByClassName("brojevi").innerHTML = "Kraj izvlacenja";
                    break;
            }
            
           
        }
        //  console.log(ispis);
        //  console.log(izbaceniBrojevi);
        
    }
    broj.innerHTML=znak;
    brojevi.innerHTML=izbaceniBrojevi;
}
function pokreniPonovo() {
    window.location.assign("file:///C:/Users/home1/Desktop/Web%20Aplikacije/Tombola%20app/index.html");
  }

