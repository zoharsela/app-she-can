import { keepService } from './services/keep-service.js'
import notesList from './cmps/notes-list.cmp.js'
import createNote from './cmps/create-note.cmp.js'
import { eventBus, EVENT_DELETE_NOTE, EVENT_DO_TODO } from '../../services/event-bus.js'

export default {
  template: `<section class="keep-app container">
              <button class="button-reset" @click="isToCreate =!isToCreate"><i class="icon fas fa-plus"></i></button>
                <create-note v-if="isToCreate"></create-note>
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
    eventBus.$on(EVENT_DO_TODO, (noteId, idx) => this.doTodo(noteId, idx));
  },
  methods: {
    deleteNote(noteId) {
      keepService.deleteNote(noteId)
    },
    doTodo(noteId, idx) {
      keepService.getTodoDone(noteId, idx)
      // .then(notes => this.notes = notes)
    },
  }
}
