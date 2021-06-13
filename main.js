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
            //   Ovde treba funkcija koje ce posle ispisanog 11 broja po redu,
            //   da nova 11 broja upise u seledecemo redu i tako do kraja izvlacenja 
            
            // if (izbaceniBrojevi[10]) {
            //     let noviRed = "<br>";
            // // noviRed += ispis;
                
            //  }
            if (brojevi == 11) {
                for (i=11; i< izbaceniBrojevi.length; i++)
                ispis += izbaceniBrojevi[i] +"<br>";
            }
        }
        //  console.log(ispis);
        //  console.log(izbaceniBrojevi);
        
    }
    broj.innerHTML=znak;
    brojevi.innerHTML=izbaceniBrojevi;
}

