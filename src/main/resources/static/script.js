let billettArray = []; //empty array on init

let billett; //buffer object for temp storing of values before array push

// input validation functions -------------------------------------------------


function toggleElementSynlighet(elementId, vis) { // show or hide input error messages
    if (vis){
        document.getElementById(elementId).style.display = "inline";
    } else {
        document.getElementById(elementId).style.display = "none";
    }
}

function validerFilm() {
    let film = document.getElementById("film").value;
    let filmRGEX = / /;
    let filmGyldig = !filmRGEX.test(film);
    toggleElementSynlighet("filmUgyldigMelding",!filmGyldig);
    return filmGyldig;
}

function validerAntall() {
    let antall = document.getElementById("antall").value;
    let antallRGEX = /^[1-9][0-9]?$/;
    let antallGyldig = antallRGEX.test(antall);
    toggleElementSynlighet("antallUgyldigMelding",!antallGyldig)
    return antallGyldig;
}

function validerSkjema() {
    return validerFilm() && validerAntall();
}

// ticket updating and storing functions --------------------------------------
function lagNyBillett(){
    billett = {
        film: document.getElementById("film").value,
        antall: document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    }
}

function lagreBillettIArray() {
    billettArray.push(billett);
}

function tomBestillingsSkjema() {
    document.getElementById("bestillingsskjema").reset();
}

// main functions -------------------------------------------------------------
function kjopBillett(){
    lagNyBillett();
    lagreBillettIArray();
    tomBestillingsSkjema();
    console.log(billettArray); //only for debugging
}



/*
funksjonar:

    validerNavn
    sjekkar at navn er utfylt og berre inneheld bokstavar

    validerNummer
    sjekkar at nummer er fylt, er innanfor ein range og berre inneheld tall

    validerEpost
    sjekkar at epostfeltet er fylt og oppfyller krava til å være ein epost

    visBillettArray
    viser oppdatert array på sida

    nullstillBillettArray
    tømmer arrayet for alle objekt
*/