// global speichern

// notitzen anzeigen lassen
let notes = ['banana','rasen mähen'];

function renderNotes(){
 //ich muss defenieren wo Sie anzuzeigen ist 
    let contentRef = document.getElementById('content')
 //wann werden Sie angezeigt
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++){
    contentRef.innerHTML += getNoteTempalte(indexNote);
}
}

function getNoteTempalte(indexNote){
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
    

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
function deleteNote(indexNote){
    notes.splice(indexNote, 1);
//welche notiz muss gelöscht werden
    renderNotes();
//anzeige Updaten
}


//notitzen archivieren