const add= require('./add.js');


const yargs=require('yargs');
const titleOptions={
  description: 'Note Title',
  required: true,
  alias: 't'
}

var argv=yargs
.command('addNote','add a new Note',{
  title:titleOptions,
  body:{
    description: 'Note Body',
    required: true,
    alias:'b'
  }
})
.command('removeNote','remove a note',{
  title:titleOptions
})
.command('readNote','Read a note',{
  title:titleOptions
})
.command('getAll','Read all note')
.argv;
var command=argv._[0];

if(command==="addNote"){
  var note= add.addNote(argv.title,argv.body);

  if (note) {
    console.log("note added");
    add.printNote(note);
  }else {
    console.log("Note already exists");
  }
 }

 if (command==="removeNote") {
   var delNote=add.removeNote(argv.title);
   console.log(delNote);
if(delNote){
  console.log("Note : "+ argv.title + " Deleted");
}else {
  console.log("Item not found");
}

 }
 if (command==="readNote") {
   var readNote = add.readNote(argv.title);
   if (readNote) {
     console.log("Note Found");
     add.printNote(readNote);
   }else {
    console.log('Note not found');
   }

 }
 if (command==="getAll") {
add.getAll();
 }
