import { utilService } from '../../../services/util-service.js'

export const keepService = {
    getNoteById,
    getNotes,
    addNote,
    deleteNote,
    updateNote
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
},
{
    id: utilService.makeId(),
    type: "noteImg",
    isPinned: false,
    createdAt: 1604486494659,
    info: {
        url: "https://images.unsplash.com/photo-1516636052745-e142aecffd0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        title: "Me playing Mi"
    },
    style: {
        backgroundColor: "#ffd"
    }
},
{
    id: utilService.makeId(),
    type: "noteTodos",
    isPinned: false,
    createdAt: 1604486482321,
    info: {
        title: "How was it:",
        todos: [
            { txt: "Do that", doneAt: null },
            { txt: "Do this", doneAt: 187111111 }]
    }
},
{
    type: "noteVideo",
    id: utilService.makeId(),
    isPinned: true,
    createdAt: 1604486467965,
    info: {
        url: "https://www.youtube.com/embed/28jL8w_9M1U",
        title: "Leonard Cohen Greatest Hits"
    }
}
];

function getNotes() {
    return Promise.resolve(gNotes)
}

function addNote(note) {
    gNotes.unshift(note)
    saveNotes()
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

function saveNotes() {
    utilService.storeToStorage('notesDB', gNotes)
}

// private functions

_loadNotes()
function _loadNotes() {
    let notes = utilService.loadFromStorage(KEY);
    if (!notes || !notes.length) {
        notes = gNotes;
        saveNotes();
    }
}