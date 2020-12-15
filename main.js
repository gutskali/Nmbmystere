// // Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// // entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// // joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// // indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// // s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// // partie.
// //Bonus : Le jeu doit également rappeler au joueur les 
// // nombres déjà proposés

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let m = 1;
while(m == 1){
let n = getRandomInt(101);
console.log(n);
let r ="";
for(let i = 1;i <= 9; i++){
    if(r == ""){
     r =window.prompt('Entrer un nombre entre 1 et 100');
    }
    if (n > r){
         r =window.prompt('tour : '+i+'Plus grand que :'+r);
    }if(n < r){
        r =window.prompt('tour : '+i+'Plus petit que :'+r);
    }if (n == r){
        console.log('Succes en '+i+' tentatives.');
        break;
    }if(i === 9)
        console.log('Perdu.')      
}
m = window.prompt('Voulez vous rejouer : 1 oui, 0 non.');

}