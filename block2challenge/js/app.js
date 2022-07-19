import notesView from "./notesView.js";
import notesAPI from "./notesAPI.js";

export default class app {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new notesView(root, this._handlers());

        this._refreshNotes();
    }

    _refreshNotes() {
        const notes = notesAPI.getAllNotes();

        this._setNotes(notes);

        if (notes.length > 0) {
            this._setActiveNote(notes[0]);
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisibility(notes.length > 0);
    }

    _setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note);
    }

    _handlers() {
        return {
            onNoteSelect: noteId => {
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "",
                    body: ""
                };

                notesAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title, body) => {
                notesAPI.saveNote({
                    id: this.activeNote.id,
                    title,
                    body
                });

                this._refreshNotes();
            },
            onNoteDelete: noteId => {
                notesAPI.deleteNote(noteId);
                this._refreshNotes();
            },
        };
    }
}
