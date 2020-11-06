import { eventBus, EVENT_ADD_NOTE } from '../../../services/event-bus.js'

export default {
  props: ["notes"],
  name: 'create-note',
  template: `
    <section class="container">
        <button class="add-note-btn fas fa-font" @click="changeNoteType('noteText')""></button>
        <button class="add-note-btn far fa-images" @click="changeNoteType('noteImg')"></button>
        <button class="add-note-btn fab fa-youtube" @click="changeNoteType('noteVideo')"></button>
        <button class="add-note-btn fas fa-list-ul" @click="changeNoteType('noteTodos')"></button>
        <input ref="noteInput" @keyup.enter="addNote" class="add-input" :placeholder="getTextForInput" type="text" v-model="addInput"/>
        </section>
        `,
  data() {
    return {
      addInput: null,
      noteToAdd: {
        type: '',
        info: {
          title: null,
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
          return 'Pick Note Type'
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
          title: null,
          txt: null,
          url: null,
          todos: []
        }
      }
    },
    changeNoteType(type) {
      this.noteToAdd.type = type;
    },
  }
}
