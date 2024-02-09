let billettArray = []; //empty array on init

let billett; //this is just a buffer object for temp storing before array push

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

function kjopBillett(){
    lagNyBillett();
    lagreBillettIArray();
    tomBestillingsSkjema();
    console.log(billettArray); //only for debugging
}



/*
funksjonar:

    validerFilm
    sjekkar at bruker har valgt noko anna enn "velg film"

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