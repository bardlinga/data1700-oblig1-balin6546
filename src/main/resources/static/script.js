let billettArray = []; //empty array on init

let billett; //buffer object for temp storing of values before array push

// error message toggle function ------------------------------------------------------------------

function toggleElementSynlighet(elementId, visIsTrue) {
    if (visIsTrue){
        document.getElementById(elementId).style.display = "inline";
    } else {
        document.getElementById(elementId).style.display = "none";
    }
}

// input validation functions ---------------------------------------------------------------------

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

function validerFornavn() {
    let fornavn = document.getElementById("fornavn").value;
    let fornavnRGEX = /^[^0-9]+$/;
    let fornavnGyldig = fornavn.length > 0 && fornavnRGEX.test(fornavn);
    toggleElementSynlighet("fornavnUgyldigMelding",!fornavnGyldig);
    return fornavnGyldig;
}

function validerEtternavn() {
    let etternavn = document.getElementById("etternavn").value;
    let etternavnRGEX = /^[^0-9]+$/;
    let etternavnGyldig = etternavn.length > 0 && etternavnRGEX.test(etternavn);
    toggleElementSynlighet("etternavnUgyldigMelding",!etternavnGyldig);
    return etternavnGyldig;
}

function validerTelefonnr() {
    let telefonnr = document.getElementById("telefonnr").value;
    let telefonnrRGEX = /^[0-9]+$/;
    let telefonnrGyldig = telefonnr.length > 0 && telefonnrRGEX.test(telefonnr);
    toggleElementSynlighet("telefonnrUgyldigMelding",!telefonnrGyldig);
    return telefonnrGyldig;
}

function validerEpost() {
    let epost = document.getElementById("epost").value;
    let epostRGEX = /^([a-å]?[0-9]?)+@([a-å]?[0-9]?)+.[a-å]+/;
    let epostGyldig = epostRGEX.test(epost);
    toggleElementSynlighet("epostUgyldigMelding",!epostGyldig);
    return epostGyldig;
}

function validerSkjema() {
    let inputSjekkArray = [
        validerFilm(),
        validerAntall(),
        validerFornavn(),
        validerEtternavn(),
        validerTelefonnr(),
        validerEpost(),
    ]
    return !inputSjekkArray.includes(false);
    // form validation done with bool array so all validation functions are
    // called even if a 'false' appears early on. This is to give a complete
    // update on error messages on which fields are in need of correction.
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
    if (validerSkjema())
    {
        lagNyBillett();
        lagreBillettIArray();
        tomBestillingsSkjema();
        console.log(billettArray); //only for debugging
    }
}



/*
funksjonar:

    visBillettArray
    viser oppdatert array på sida

    nullstillBillettArray
    tømmer arrayet for alle objekt
*/