/**
 * Created by zll on 2019/7/12.
 */
//打印字符串
const yargs = require('yargs');
const nodes = require('./notes.js');
// console.log('Start app.');

// console.log(process.argv);

// console.log('yargs',yargs.argv);
const argv = yargs.argv;
var command = process.argv[2];

if(command==='add'){
    var note = nodes.addNote(argv.title,argv.body);
    if(note){
        console.log('add success');
        console.log(`title:${note.title}`);
        console.log(`body:${note.body}`);
    }
}else if(command === 'list'){
    nodes.getAll();

}else if(command =='read'){
    nodes.getNote(argv.title);
}else if(command=='remove'){
    nodes.removeNote(argv.title);
}else{
    console.log('command not find');
}