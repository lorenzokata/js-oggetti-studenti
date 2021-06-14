// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creare un array
var studente = {
    nome : 'Lorenzo',
    cognome : 'Catalano',
    etá : 26
}
// Stampa array con cclo forin
for (var key in studente) {
    console.log(studente[key]);
}
// Array di oggetti studenti
var classe = [

    studente,

    {
        nome : 'Marco',
        cognome : 'Aurelio',
        etá : 40
    },

    {
        nome : 'Giovanni',
        cognome : 'Battista',
        etá : 60
    }
];
// Stampare nomi e cognomi da array di oggetti
for (var i = 0; i < classe.length; i++) {
    for (var key in classe[i]) {
        if (key != 'etá') {
            console.log(classe[i][key]);
        }
    }
}
// Applicazione della funzione nuoviStudenti
nuoviStudenti(classe,studente,1);
// Stampa classe
console.log(classe)

// Funzione che aggiunge n studenti alla classe
function nuoviStudenti(classe,studente,n) {


    for(var i = 0; i< n; i++){
        var nuovoStudente = {};

        for( var k in studente){

            nuovoStudente[k]= prompt('inserisci ' + k);
        }
        classe.push(nuovoStudente);
    }

}