import noteText from './note-text.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'
import { eventBus, EVENT_DELETE_NOTE } from '../../../services/event-bus.js'


export default {
  props: ['note'],
  name: 'notes-preview',
  template: `<section class="note-preview flex-column" :style="{ backgroundColor: noteBgc }">
               <button @click="deleteNote(note.id)">X</button>
                <span class="note-time-created">{{timeCreation}}</span>
                <span class="note-date-created">{{dateCreation}}</span>
                 <component :is="note.type" :note="note"></component>
            </section>
  `,
  components: {
    noteText,
    noteImg,
    noteTodos,
    noteVideo
  },
  computed: {
    noteBgc() {
      if (!this.note.style) return
      return this.note.style.backgroundColor
    },
    timeCreation() {
      if (!this.note.createdAt) return
      return new Date(this.note.createdAt).toLocaleTimeString()
    },
    dateCreation() {
      if (!this.note.createdAt) return
      return new Date(this.note.createdAt).toLocaleDateString()
    },
  },
  methods: {
    deleteNote() {
      eventBus.$emit(EVENT_DELETE_NOTE, this.note.id)
    },
  }
}