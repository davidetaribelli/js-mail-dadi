// chiedere all'utente la sue email
// l'email inserita è nella lista?
// se l'email è nella lista allora l'utente potrà accedere 
// se invece l'email è "sconosciuta" l'utente non potrà accedere

let emailValida = ["davide.taribelli@gmail.com","luca.lambiase@gmail.com", "mario.rossi99@gmail.com" ];

let login = prompt("Scrivimi la tua email");

for (let i = 0; i < emailValida.length ; i++) {

    const emailUtente = emailValida[i];
    // controllo se quello che è stato inserito è uguale a uno dei valori di emailUtente
    if(login == emailUtente){
        alert(`Sei riuscito ad accedere`);
    } else if (login != emailUtente){
        alert(`Non sei riuscito ad accedere`);
    }
}


