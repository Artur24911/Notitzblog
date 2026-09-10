// global speichern

// notitzen anzeigen lassen
let notes = ['banana','rasen mähen'];

let trashNotes = [];

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
    return `<p>+ ${notes[indexNote]}<button onclick="noteTrash(${indexNote})">X</button></p>`;
//wann muss die notiz gelöscht werden
}

function getTrashNoteTempalte(indexTrashNote){
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
//wann muss die notiz gelöscht werden
}

// notitzen hinzufügen
function addNote(){
//eingabe vom User
    let noteInputRef = document.getElementById('note-input');
    let noteInput = noteInputRef.value;
//eingabe auslesen

    notes.push(noteInput);
//eingabe speichern/Notizen hinzufügen

    renderNotes();
//eingabe anzeigen lassen

    noteInputRef.value = "";
}


// notitzen löschen

//anzeige Updaten
function noteTrash(indexNote){
   let trashNote = notes.splice(indexNote, 1);
//welche notiz muss gelöscht werden
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
//anzeige Updaten
}

function deleteNote(indexTrashNote){
    trashNotes.splice(indexTrashNote,1);
    renderTrashNotes();

}


//notitzen archivieren