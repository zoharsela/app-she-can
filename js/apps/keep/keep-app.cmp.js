import { keepService } from './services/keep-service.js'
import notesList from './cmps/notes-list.cmp.js'
import keepBar from './cmps/keep-bar.cmp.js'
import userMsg from '../../cmps/user-msg.cmp.js';
import { eventBus, EVENT_DELETE_NOTE, EVENT_UPDATE_NOTE, EVENT_DO_TODO, EVENT_TOGGLE_PIN, EVENT_ADD_NOTE } from '../../services/event-bus.js'

export default {
  template: `<section class="keep-app container">
                <keep-bar class="add-note" @filtered="setFilter"></keep-bar></div>
                <notes-list :notes="notesToShow"></notes-list>
                <user-msg/>
            </section>
  `,
  components: {
    notesList,
    keepBar,
    userMsg
  },
  data() {
    return {
      notes: null,
      filterBy: null,
    }
  },
  computed: {
    notesToShow() {
      if (!this.filterBy) return this.notes;
      return this.notes.filter(note => {
        if (!note.info.txt) return
        return note.info.txt.toLowerCase().includes(this.filterBy.toLowerCase())
      })
    },
  },
  created() {
    keepService.getNotes()
      .then(notes =>
        this.notes = notes)
    eventBus.$on(EVENT_DELETE_NOTE, this.deleteNote)
    eventBus.$on(EVENT_TOGGLE_PIN, this.togglePin)
    eventBus.$on(EVENT_ADD_NOTE, this.addNote)
    eventBus.$on(EVENT_UPDATE_NOTE, this.updateNote)
    eventBus.$on(EVENT_DO_TODO, (noteId, idx) => this.doTodo(noteId, idx));
  },
  methods: {
    deleteNote(noteId) {
      keepService.deleteNote(noteId)
        .then(() => eventBus.$emit('show-msg', 'Note was deleted successfully'))
    },
    addNote(noteToAdd) {
      keepService.addNote(noteToAdd)
        .then(() => eventBus.$emit('show-msg', 'Note was added successfully'))
    },
    sendAsMail() {

    },
    doTodo(noteId, idx) {
      keepService.getTodoDone(noteId, idx)
    },
    togglePin(noteId) {
      keepService.togglePin(noteId)
        .then(() => eventBus.$emit('show-msg', 'Note was changed successfully'))
    },
    updateNote(note) {
      keepService.updateNote(note)
        .then(notes => {
          this.notes = notes
          eventBus.$emit('show-msg', 'Note was edited successfully')
        })
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    }
  }
}
