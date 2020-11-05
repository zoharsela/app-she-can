import { keepService } from './services/keep-service.js'
import notesList from './cmps/notes-list.cmp.js'
import createNote from './cmps/create-note.cmp.js'
import { eventBus, EVENT_DELETE_NOTE, EVENT_UPDATE_NOTE, EVENT_DO_TODO, EVENT_TOGGLE_PIN, EVENT_ADD_NOTE } from '../../services/event-bus.js'

export default {
  template: `<section class="keep-app container">
              <div class="add-note"><button class="button-reset add-note" @click="isToCreate =!isToCreate"><i class="icon far fa-sticky-note"></i></button>
                <create-note class="add-note" v-if="isToCreate" @closeAdder="closeAdder"></create-note></div>
                <notes-list :notes="notes"></notes-list>
            </section>
  `,
  components: {
    notesList,
    createNote
  },
  data() {
    return {
      notes: null,
      isToCreate: false
    }
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
    },
    addNote(noteToAdd) {
      keepService.addNote(noteToAdd)
    },
    doTodo(noteId, idx) {
      keepService.getTodoDone(noteId, idx)
    },
    togglePin(noteId) {
      keepService.togglePin(noteId)
    },
    closeAdder() {
      this.isToCreate = false;
    },
    updateNote(note) {
      keepService.updateNote(note)
        .then(notes => this.notes = notes)
    }
  }
}
