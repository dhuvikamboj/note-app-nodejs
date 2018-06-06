console.log('add.js started');
const fs=require('fs');

var printNote = (note)=>{

  console.log("-----------");
  console.log("Note Title: "+note.title);
  console.log("Note Body:" + note.body);
}

var fetchNotes=()=>{
  try{
    var notesString=fs.readFileSync('data.json');
    notes= JSON.parse(notesString);
return notes;
  } catch(e){
  return [];
  }
}
var saveNote =(notes) =>{
  fs.writeFileSync('data.json',JSON.stringify(notes));
}

var addNote=(title, body) => {
  var notes=fetchNotes();
  var note={
    title,
    body
  };

var duplicateNotes=notes.filter((note) => {
return note.title===title;
});

if (duplicateNotes.length===0){
  notes.push(note);
  saveNote(notes)
  return note;
}
}
var removeNote=(title)=>{
  var notes=fetchNotes();
  var filteredNotes=(notes.filter(note => note.title!==title));
saveNote(filteredNotes);
return notes.length!==filteredNotes.length
}


var readNote=(title)=>{
  var notes=fetchNotes();
  var filteredNotes=(notes.filter(note => note.title===title));

  return filteredNotes[0];
}


var getAll=()=>{
    var notes=fetchNotes();
    for(i in notes){
      console.log(`Note: ${i+1}`)
      printNote(notes[i]);
    }
}

module.exports={
  addNote,
  removeNote,
  readNote,
  printNote,
  getAll
};
