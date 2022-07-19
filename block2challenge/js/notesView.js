export default class notesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
            <div class="note__sidebar">
                <div class="notes__list"></div>
            </div>
            <div class="notes__preview">
            </div>
        `;

        const btnAddNote = document.querySelector(".notes__add");
        const inpTitle = document.querySelector(".title-input");
        const inpBody = document.querySelector(".body-input");

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        this.updateNotePreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="notes__list-item" data-note-id="${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes__small-updated">Last Updated
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                    <button class="del-note button">Double click to delete</button>
                </div>
            </div>
        `;
    }

    updateNoteList(notes) {
        const notesListContainer = this.root.querySelector(".notes__list");

        // Empty list
        notesListContainer.innerHTML = "";

        for (const note of notes) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            notesListContainer.insertAdjacentHTML("beforeend", html);
        }

        // Add select/delete events for each list item
        notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("You are about to delete the note. This cannot be undone. Do you want to proceed?");
            


                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            });
        });
    }

    updateActiveNote(note) {
        document.querySelector(".title-input").value = note.title;
        document.querySelector(".body-input").value = note.body;

        this.root.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.classList.remove("notes__list-item--selected");
        });

        this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
    }

    updateNotePreviewVisibility(visible) {
        this.root.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
    }

    // deleteNote(notes) {
    //     notesListContainer.querySelectorAll(".del-note").forEach(noteListItem => {
    //         noteListItem.addEventListener("click", () => {
    //             this.onNoteSelect(noteListItem.dataset.noteId);
    //         });
    //     const delNote = document.querySelector(".del-note");
    //     delNote.addEventListener("click", () => {
    //         const doDelete = confirm("You are about to delete the note. This cannot be undone. Do you want to proceed?");

    //         if (doDelete) {
    //             this.onNoteDelete(noteListItem.dataset.noteId);}
    //         });
    //     });
    // }

}
