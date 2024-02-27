// global variables -------------------------------------------------------------------------------

let billettArray = []; //empty array on init

let billett; //buffer object for temp storing of ticket values before array push

// error message toggle function ------------------------------------------------------------------

function toggleFeilmelding(id, ugyldigInput, feilmelding) {
    if (ugyldigInput){
        document.getElementById(id+"UgyldigMelding").innerHTML = feilmelding;
    } else {
        document.getElementById(id+"UgyldigMelding").innerHTML = "";
    }
}

const feilmelding = {
    film: "Du må velge en film",
    antall: "Du må velge et antall",
    navn: "Du må skrive inn et navn, kan kun inneholde bokstaver",
    telefonnr: "Du må skrive inn et telefonnummer, kan kun inneholde tall",
    epost: "Du må skrive inn en gyldig epost-adresse"
}

// input validation functions ---------------------------------------------------------------------

const regExp = {
    film: /[^ ]/,
    antall: /^[1-9][0-9]?$/,
    navn: /^[^0-9]+$/,
    telefonnr: /^[0-9]+$/,
    epost: /^([a-å]?[0-9]?)+@([a-å]?[0-9]?)+.[a-å]+/ //probably horrible regexp
}

function validerInput(id, regExp) {
    let input = document.getElementById(id).value;
    return regExp.test(input);
}

function validerFilm() {
    let inputGyldig = validerInput("film", regExp.film);
    toggleFeilmelding("film", !inputGyldig, feilmelding.film);
    return inputGyldig;
}

function validerAntall() {
    let inputGyldig = validerInput("antall", regExp.antall);
    toggleFeilmelding("antall", !inputGyldig, feilmelding.antall);
    return inputGyldig;
}

function validerFornavn() {
    let inputGyldig = validerInput("fornavn", regExp.navn);
    toggleFeilmelding("fornavn", !inputGyldig, feilmelding.navn);
    return inputGyldig;
}

function validerEtternavn() {
    let inputGyldig = validerInput("etternavn", regExp.navn);
    toggleFeilmelding("etternavn", !inputGyldig, feilmelding.navn);
    return inputGyldig;
}

function validerTelefonnr() {
    let inputGyldig = validerInput("telefonnr", regExp.telefonnr);
    toggleFeilmelding("telefonnr", !inputGyldig, feilmelding.telefonnr);
    return inputGyldig;
}

function validerEpost() {
    let inputGyldig = validerInput("epost", regExp.epost);
    toggleFeilmelding("epost", !inputGyldig, feilmelding.epost);
    return inputGyldig;
}


// ticket updating and storing functions ----------------------------------------------------------

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


// main functions ---------------------------------------------------------------------------------

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

function kjopBillett(){
    if (validerSkjema())
    {
        lagNyBillett();
        lagreBillettIArray();
        tomBestillingsSkjema();
        console.log(billettArray); //only for debugging
        printBillettArray();
    }
}

function slettAlleBilletter() {
    billettArray = [];
    document.getElementById("billettListe").innerHTML = "";
}

// ticket array display functions -----------------------------------------------------------------

function printBillettArray() {

    let printTable = (
        "<tr>" +
        "<th>Film</th><th>Antall</th>" +
        "<th>Navn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th>" +
        "</tr>"
    );
    for (let i of billettArray) {
        printTable += (
            "<tr>" +
            "<td>"+i.film+"</td><td>"+i.antall+"</td>" +
            "<td>"+i.fornavn+"</td><td>"+i.etternavn+"</td>" +
            "<td>"+i.telefonnr+"</td><td>"+i.epost+"</td>" +
            "</tr>"
        );
    }
    document.getElementById("billettListe").innerHTML = printTable;
}