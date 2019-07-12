/**
 * Created by zll on 2019/7/12.
 */
console.log('start nodes.js');
const fs = require('fs');

//从文件中获取节点
var fetchNode = ()=>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
}
//保存节点到文件
var saveNote = (notes)=>{

    fs.writeFileSync('notes-data.json',JSON.stringify(notes));

}

//增加节点，如果新增返回新增节点。
var addNote = (title,body)=>{
    var notes = fetchNode();
    var note = {
        title,
        body
    };

    //筛选出相同的节点
    var duplicateNotes = notes.filter((note)=>note.title===title);
    //没有相同的节点
    if(duplicateNotes.length ===0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
}

var getAll = ()=>{
    console.log('Get All notes');
};

var getNote = (title)=>{

    console.log('getting note',title);
};

var removeNote = (title)=>{
    console.log('Removing note',title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};