import { eventBus, EVENT_ADD_NOTE } from '../../../services/event-bus.js'

export default {
  props: ["notes"],
  name: 'bar-note',
  template: `
    <section class="container">
        <button class="add-note-btn fas fa-font" @click="changeNoteType('noteText')""></button>
        <button class="add-note-btn far fa-images" @click="changeNoteType('noteImg')"></button>
        <button class="add-note-btn fab fa-youtube" @click="changeNoteType('noteVideo')"></button>
        <button class="add-note-btn fas fa-list-ul" @click="changeNoteType('noteTodos')"></button>
        <input ref="noteInput" @keyup.enter="addNote" class="add-input" :placeholder="getTextForInput" type="text" v-model="addInput"/>
        <button class="add-note-btn search-bar fas fa-search"></button>
        <input class="add-input" placeholder="Looking for something specific?" @input.stop="emitFilter" type="text" v-model="searchTerm"/>
        </section>
        `,
  data() {
    return {
      addInput: null,
      searchTerm: null,
      noteToAdd: {
        type: '',
        info: {
          txt: null,
          url: null,
          todos: []
        },
      },
    }
  },
  mounted() {
    this.$refs.noteInput.focus();
  },
  computed: {
    getTextForInput() {
      switch (this.noteToAdd.type) {
        case 'noteText':
          return 'Enter your text here'
        case 'noteImg':
          return 'Enter Image Url'
        case 'noteVideo':
          return 'Enter YouTube Url'
        case 'noteTodos':
          return 'Enter Comma Separated List'
        default:
          return 'Pick note type'
      }
    }
  },
  methods: {
    getVModel() {
      switch (this.noteToAdd.type) {
        case 'noteText':
          return 'txt';
        case 'noteImg':
          return 'url';
        case 'noteVideo':
          return 'url'
        case 'noteTodos':
          return 'txt'
      }
    },
    addNote() {
      if (!this.noteToAdd.type) return;
      var vModel = this.getVModel()
      this.noteToAdd.info[vModel] = this.addInput
      if (this.noteToAdd.type === 'noteTodos') {
        const todos = this.noteToAdd.info.txt.split(',')
        for (let i = 0; i < todos.length; i++) {
          this.noteToAdd.info.todos.push({ txt: todos[i], isDone: false })
        }
        this.noteToAdd.info.txt = null
      }
      eventBus.$emit(EVENT_ADD_NOTE, this.noteToAdd)
      this.addInput = null
      this.noteToAdd = {
        type: 'noteText',
        info: {
          txt: null,
          url: null,
          todos: []
        }
      }
    },
    changeNoteType(type) {
      this.noteToAdd.type = type;
    },
    emitFilter() {
      this.$emit('filtered', this.searchTerm);
    },
  }
}
