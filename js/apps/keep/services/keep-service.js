import { utilService } from '../../../services/util-service.js'

export const keepService = {
    getNoteById,
    getNotes,
    addNote,
    removeNote,
    updateNote
}

const KEY = 'notesDB'
var gNotes;
var DEFAULT_NOTES = [{
    id: utilService.makeId(),
    type: "NoteText",
    isPinned: true,
    createdAt: 1604486514773,
    info: {
        title: 'whoot',
        txt: "Fullstack Me Baby!"
    },
},
{
    id: utilService.makeId(),
    type: "NoteImg",
    isPinned: false,
    createdAt: 1604486494659,
    info: {
        url: "http://some-img/me",
        title: "Me playing Mi"
    },
    style: {
        backgroundColor: "#00d"
    }
},
{
    type: "NoteTodos",
    id: utilService.makeId(),
    isPinned: false,
    createdAt: 1604486482321,
    info: {
        title: "How was it:", todos: [
            { txt: "Do that", doneAt: null },
            { txt: "Do this", doneAt: 187111111 }]
    }
},
{
    type: "NoteVideo",
    id: utilService.makeId(),
    isPinned: true,
    createdAt: 1604486467965,
    info: {
        url: "https://www.youtube.com/watch?v=Ffz_8eXyfxU",
        title: "Leonard Cohen Greatest Hits"
    }
}
];

function getNotes() {
    let notes = utilService.loadFromStorage(KEY);
    if (!notes || !notes.length) {
        gNotes = DEFAULT_NOTES
        saveNotes();
    }
    return Promise.resolve(notes)
}

function addNote(note) {
    gNotes.unshift(note)
    saveNotes()
}

function removeNote(id) {
    const noteIdx = getNoteIdx(id)
    gNotes.splice(noteIdx, 1)
    saveNotes()
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