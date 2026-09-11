// global speichern

// notitzen anzeigen lassen
let notesTitles = ['Ba','Aufgabe'];
let notes = ['banana','rasen mähen'];

let trashNotesTitles = [];
let trashNotes = [];

let archivNotesTitles = []
let archivNotes = []


let allNotes = {
    'notesTitles' : ['Ba', 'Aufgabe'],
    'notes' : ['Banana', 'rasen mähen'],
    'archivNotesTitles' : [],
    'archivNotes' : [],
    'trashNotesTitles' : [],
    'trashNotes' : [],
}

function moveNote(indexNote, startKey, destinationKey){
   let note = allNotes[startKey].splice(indexNote, 1);
//welche notiz muss gelöscht werden
    allNotes[destinationKey].push(note[0]);
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
     allNotes[destinationKey + "Titles"].push(notesTitle[0]);
   
     renderNotes();
    renderTrashNotes();
    renderArchivNotes();
//anzeige Updaten
}


function init(){
    renderNotes()
    getFromLocalStorage();
}

function saveToLocalStorage(){
    localStorage.setItem("myData", JSON.stringify(notes));
}

function getFromLocalStorage(){
    let myArr = JSON.parse(localStorage.getItem("myData"));

    if(myArr != ""){
        myArr.push(notes)
    }

    notes = myArr

}

function renderNotes(){
 //ich muss defenieren wo Sie anzuzeigen ist 
    let contentRef = document.getElementById('content')
 //wann werden Sie angezeigt
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++){
    contentRef.innerHTML += getNoteTempalte(indexNote);
}
}
function renderTrashNotes(){
 //ich muss defenieren wo Sie anzuzeigen ist 
    let trashContentRef = document.getElementById('trash-content')
 //wann werden Sie angezeigt
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++){
    trashContentRef.innerHTML += getTrashNoteTempalte(indexTrashNote);
}
}

function getNoteTempalte(indexNote){
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="moveNote(${indexNote},'notes' , 'trashNotes')">X</button></p>`;
//wann muss die notiz gelöscht werden
}

function getTrashNoteTempalte(indexTrashNote){
    return `<p>+ title: ${trashNotesTitles[indexNote]} -> ${trashNotes[indexTrashNote]}<button onclick="moveNote(${indexNote},'notes' , 'archivNotes')">X</button></p>`;
//wann muss die notiz gelöscht werden
}

// notitzen hinzufügen
function addNote(){
//eingabe vom User
    let noteInputRef = document.getElementById('note-input');
    let noteInput = noteInputRef.value;
//eingabe auslesen
    // noteInput.push(noteInputRef.value)

    if(noteInputRef.value != ""){
    notes.push(noteInput);
}
//eingabe speichern/Notizen hinzufügen
    saveToLocalStorage();
    renderNotes();
//eingabe anzeigen lassen

    noteInputRef.value = "";
}


// notitzen löschen

//anzeige Updaten
function noteTrash(indexNote){
   let trashNote = notes.splice(indexNote, 1);
//welche notiz muss gelöscht werden
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
     trashNotesTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
//anzeige Updaten
}

function deleteNote(indexTrashNote){
    allNotes.trashNotes.splice(indexTrashNote,1);
    allNotes.trashNotesTitles.splice(indexTrashNote,1);
    renderNotes();
    renderTrashNotes();


}


//notitzen archivieren