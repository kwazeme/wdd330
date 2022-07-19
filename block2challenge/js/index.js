import notesAPI from "./notesAPI.js";

// Get all notes in localStorage
const noteList = notesAPI.getAllNotes();
// console.log(noteList);
const listView = document.querySelector(".note-index");
// Clean DOM to receive noteList
listView.innerHTML = '';
// Initialise loop for the notes
noteList.forEach(function(note) {
const div = document.createElement('div');
div.setAttribute('class', 'note-List');
div.setAttribute('data-key', note.id);
// create Note-List display
div.innerHTML = `
<section class="notes__list-item">
    <div class="notes__small-title">${note.title}</div>
    <div class="notes__small-body">
            ${note.body}
        </div>
        <br>
        <div class="notes__small-updated">Last Updated
            ${new Date(note.updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" }))}

        </div>
    </div>
    </section>`;
// Add to Note-List DOM
listView.append(div);
});

// Get Link to edit page for new note capture/update
const editLink = document.querySelector("#create-note");
editLink.addEventListener("click", function () {
    document.location.replace('./edit.html');
    
});

// Create filter note options
let filter = document.getElementById('search-text');
filter.addEventListener("input", function(){

    let filterText = filter.value;
    let noteItems = document.getElementsByClassName('note-index');
    Array.from(noteItems).forEach(function(note){
        let noteText = note.getElementsByTagName("section")[0].innerText;
        if(noteText.includes(filterText)){
            note.style.display = "block";
        }
        else{
            note.style.display = "none";
        }
    })
})

// // Sort note-List
// const sortNotes = (noteList, sortBy) => {
//     if (sortBy === 'byEdited'){
//         return noteList.sort((a,b) => {
//             if (a.updated > b.updated){
//                 return -1;
//             } else if (a.updated < b.updated){
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//     } else if (sortBy === 'byCreated') {
//         return noteList.sort( (a,b) => {
//             if (a.createdAt > b.createdAt){
//                 return -1;
//             } else if (a.createdAt < b.createdAt){
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//     } else if (sortBy === 'alphabetical'){
//         return noteList.sort( (a,b) => {
//             if (a.title.toLowerCase() < b.title.toLowerCase()){
//                 return -1;
//             } else if (a.title.toLowerCase() > b.title.toLowerCase()){
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//     } else {
//         return noteList;
//     }
// }
// const filterByDropdown = document.querySelector("#filter-by");
// filterByDropdown.addEventListener("change", sortNotes)
