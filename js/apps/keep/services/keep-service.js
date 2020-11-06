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
    isPinned: false,
    createdAt: 1604486514773,
    isEdited: true,
    lastEdited: 1604496524773,
    info: {
        txt: "Lama lo VeLama Ken",
    },
    style: {
        backgroundColor: '#f07c65',
    }
},
{
    id: utilService.makeId(),
    type: "noteTodos",
    isPinned: false,
    createdAt: 1604486482321,
    isEdited: false,
    lastEdited: null,
    info: {
        txt: null,
        todos: [
            { id: utilService.makeId(3), txt: "Find Job", isDone: false },
            { id: utilService.makeId(3), txt: "Get Life", isDone: false },
            { id: utilService.makeId(3), txt: "Be Polania", isDone: true }]
    },
    style: {
        backgroundColor: '#8293e8',
    }
},
{
    id: utilService.makeId(),
    type: "noteImg",
    isPinned: false,
    createdAt: 1604486494659,
    isEdited: false,
    lastEdited: null,
    info: {
        url: "https://images.unsplash.com/photo-1516636052745-e142aecffd0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    },
    style: {
        backgroundColor: "#c9e882"
    }
},
{
    id: utilService.makeId(),
    type: "noteVideo",
    isPinned: true,
    createdAt: 1608886467965,
    isEdited: false,
    lastEdited: null,
    info: {
        url: "https://www.youtube.com/watch?v=zLAhRiUeJ8E&ab_channel=OhWonderMusicVEVO",
    },
    style: {
        backgroundColor: '#f0658c',
    }
},
{
    id: utilService.makeId(),
    type: "noteTodos",
    isPinned: true,
    createdAt: 1604486482321,
    isEdited: true,
    lastEdited: 1607486482321,
    info: {
        txt: null,
        todos: [
            { id: utilService.makeId(3), txt: "Buy Milk", isDone: false },
            { id: utilService.makeId(3), txt: "Call Bituach Leumi", isDone: true }]
    },
    style: {
        backgroundColor: '#e3d76b',
    }
},
{
    id: utilService.makeId(),
    type: "noteText",
    isPinned: false,
    createdAt: 1604686514773,
    isEdited: true,
    lastEdited: 1603496524773,
    info: {
        txt: "What if JS could listen to what i say and just follow",
    },
    style: {
        backgroundColor: '#fff',
    }
},
{
    id: utilService.makeId(),
    type: "noteVideo",
    isPinned: false,
    createdAt: 1604486467965,
    isEdited: false,
    lastEdited: null,
    info: {
        url: "https://www.youtube.com/embed/28jL8w_9M1U",
    },
    style: {
        backgroundColor: '#82e8cd',
    }
},

{
    id: utilService.makeId(),
    type: "noteImg",
    isPinned: true,
    createdAt: 1624386494659,
    isEdited: false,
    lastEdited: null,
    info: {
        url: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    },
    style: {
        backgroundColor: "#fff"
    },
},
{
    id: utilService.makeId(),
    type: "noteTodos",
    isPinned: false,
    createdAt: 1602486482321,
    isEdited: false,
    lastEdited: null,
    info: {
        txt: null,
        todos: [
            { id: utilService.makeId(3), txt: "Living is easy", isDone: false },
            { id: utilService.makeId(3), txt: "With Eyes close", isDone: false },
            { id: utilService.makeId(3), txt: "Misunderstanding all you see", isDone: true }]
    },
    style: {
        backgroundColor: '#e3d76b',
    }
},
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
    note.id = utilService.makeId();
    note.isPinned = false;
    note.createdAt = new Date().getTime();
    note.isEdited = false;
    note.lastEdited = null;
    note.style = {
        backgroundColor: null
    }
    gNotes.unshift(note)
    saveNotes()
    return Promise.resolve(gNotes)
}

function deleteNote(id) {
    const noteIdx = getNoteIdx(id)
    gNotes.splice(noteIdx, 1)
    saveNotes()
    return Promise.resolve(gNotes)
}

function getNoteIdx(id) {
    const noteIdx = gNotes.findIndex(note => note.id === id)
    return noteIdx
}

function updateNote(note) {
    note.isEdited = true;
    note.lastEdited = new Date().getTime()
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
    return Promise.resolve(gNotes)
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

