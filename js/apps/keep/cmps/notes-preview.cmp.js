import noteText from './note-text.cmp.js'
import { keepService } from '../services/keep-service.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'
import setBgcColor from './note-bgc-color.cmp.js'
import { eventBus, EVENT_DELETE_NOTE } from '../../../services/event-bus.js'


export default {
  props: ['note'],
  name: 'notes-preview',
  template: `<section class="note-preview flex-column" :style="{ backgroundColor: noteBgc }">
              <div class="note-control">
               <button class="delete-btn" @click="deleteNote(note.id)"><i class="icon fas fa-times"></i></button>
               <button class="button-reset" @click="isToPickColor =!isToPickColor"><i class="icon fas fa-fill-drip"></i></button>
               <set-bgc-color v-if="isToPickColor" @color="setColor"></set-bgc-color>
              </div>
               <div class="note-time">
                  <span class="note-time-created">{{timeCreation}}</span>
                  <span class="note-date-created">{{dateCreation}}</span>
                </div>
                 <component :is="note.type" :note="note"></component>
            </section>
  `,
  components: {
    noteText,
    noteImg,
    noteTodos,
    noteVideo,
    setBgcColor
  },
  data() {
    return {
      isToPickColor: false
    }
  },
  computed: {
    noteBgc() {
      if (!this.note.style) return
      return this.note.style.backgroundColor
    },
    timeCreation() {
      if (!this.note.createdAt) return
      var time = new Date(this.note.createdAt)
      return time.getHours() + ":" + time.getMinutes()
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
    setColor(color) {
      this.isToPickColor = false;
      this.note.style.backgroundColor = color;
      keepService.updateNote(this.note)
    }
  }
}