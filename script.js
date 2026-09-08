// global speichern

// notitzen anzeigen lassen
let notes = ['banana','rasen mähen'];

function renderNotes(){
 //ich muss defenieren wo Sie anzuzeigen ist 
let contentRef = document.getElementById('content')
 //wann werden Sie angezeigt
contentRef.innerHTML = "";
for (let indexNote = 0; indexNote < notes.length; indexNote++){
    const note = notes[indexNote];
    contentRef.innerHTML += getNoteTemplate(note);
}
}

function getNoteTempalte(note){
    return `<p>+ ${note}</p>`;
}



   

// notitzen hinzufügen

// notitzen löschen

//notitzen archivieren