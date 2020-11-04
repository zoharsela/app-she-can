import { keepService } from './services/keep-service.js'
import notesList from './cmps/notes-list.cmp.js'
import createNote from './cmps/create-note.cmp.js'
import { eventBus, EVENT_DELETE_NOTE } from '../../services/event-bus.js'

export default {
  template: `<section class="keep-app container">
                <create-note></create-note>
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
    }
  },
  created() {
    keepService.getNotes()
      .then(notes => {
        this.notes = notes
      })
    eventBus.$on(EVENT_DELETE_NOTE, this.deleteNote)
  },
  methods: {
    deleteNote(noteId) {
      keepService.deleteNote(noteId)
    },

  }
}