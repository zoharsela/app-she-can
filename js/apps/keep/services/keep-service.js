import { utilService } from '../../../services/util-service.js'

export const keepService = {
    getNoteById,
    getNotes,
    addNote,
    deleteNote,
    updateNote,
    saveNotes,
    getTodoDone,
    togglePin
}

const KEY = 'notesDB'
var gNotes = [{
    id: utilService.makeId(),
    type: "noteText",
    isPinned: true,
    createdAt: 1604486514773,
    info: {
        title: 'whoot',
        txt: "Fullstack Me Baby!"
    },
    style: {
        backgroundColor: null,
    }
},
{
    id: utilService.makeId(),
    type: "noteImg",
    isPinned: false,
    createdAt: 1604486494659,
    info: {
        url: "https://images.unsplash.com/photo-1516636052745-e142aecffd0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    },
    style: {
        backgroundColor: "#c9e882"
    }
},
{
    id: utilService.makeId(),
    type: "noteTodos",
    isPinned: false,
    createdAt: 1604486482321,
    info: {
        todos: [
            { id: utilService.makeId(3), txt: "Do that", isDone: false },
            { id: utilService.makeId(3), txt: "Do this", isDone: true }]
    },
    style: {
        backgroundColor: null,
    }
},
{
    type: "noteVideo",
    id: utilService.makeId(),
    isPinned: true,
    createdAt: 1604486467965,
    info: {
        url: "https://www.youtube.com/embed/28jL8w_9M1U",
    },
    style: {
        backgroundColor: null,
    }
}
];

function getNotes() {
    let notes = utilService.loadFromStorage(KEY);
    if (!notes || !notes.length) {
        notes = gNotes;
        saveNotes()
    }
    gNotes = notes;
    return Promise.resolve(gNotes)
}

function addNote(note) {
    gNotes.unshift(note)
    saveNotes()
    return gNotes
}

function deleteNote(id) {
    const noteIdx = getNoteIdx(id)
    gNotes.splice(noteIdx, 1)
    saveNotes()
    return gNotes
}

function getNoteIdx(id) {
    const noteIdx = gNotes.findIndex(note => note.id === id)
    return noteIdx
}

function updateNote(note) {
    const noteIdx = getNoteIdx(note.id)
    gNotes.splice(noteIdx, 1, note)
    saveNotes()
    return Promise.resolve(gNotes)
}

function getNoteById(id) {
    const note = gNotes.find(note => note.id === id)
    return Promise.resolve(note)
}

function togglePin(noteId) {
    const note = getNoteById(noteId)
        .then(note => {
            note.isPinned = !note.isPinned
            saveNotes()
        })
}

function saveNotes() {
    utilService.storeToStorage('notesDB', gNotes)
}

function getTodoDone(noteId, idx) {
    getNoteById(noteId)
        .then(note => {
            note.info.todos[idx].isDone = !note.info.todos[idx].isDone;
            saveNotes()
        });
}


// private functions

