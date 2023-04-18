// chiedere all'utente la sue email
// l'email inserita è nella lista?
// se l'email è nella lista allora l'utente potrà accedere 
// se invece l'email è "sconosciuta" l'utente non potrà accedere
let login = prompt("Scrivimi la tua email");
let emailValida = ["davide.taribelli@gmail.com","luca.lambiase@gmail.com", "mario.rossi99@gmail.com" ];
let accesso = false; //variabile booleana


for (let i = 0; i < emailValida.length ; i++) {

    const emailUtente = emailValida[i];
    
    if(login == emailUtente){  //se l'email è corretta la variabile diventa true terminando il ciclo 
        accesso = true;
    }
}

if (accesso == true) {  // se è true allora riesci ad accedere, altrimenti no

    alert(`Sei riuscito ad accedere`);

}else{
    alert(`Non sei riuscito ad accedere`);
}




    


