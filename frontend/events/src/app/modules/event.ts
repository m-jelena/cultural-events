export class Event {
    id! :string ;
    title = ''; // Naziv dogadjaja
    key = '';   // www.kulturnidogadjaji.com/:key
    publishingDate: Date = new Date();  // Datum postavljanja
    description = '';   // Opis dogadjaja
    content = '';   // Tekstualni sadrzaj
    imageUrl = '';  // Slika objave  
    eventType = '';     // Vrsta dogadjaja
    eventPlace = '';    // Mesto odrzavanja 
    eventSpace = '';    // Porstot u kome se dogadjaj odrzava 
    dateOfEvent = '';   // Datum odrzavanja
    timeOfEvent = '';   // Vreme pdrzavanja
    ageLimit = '';  // Starosno ogranicenje
    author = '';    // Autor objave

}