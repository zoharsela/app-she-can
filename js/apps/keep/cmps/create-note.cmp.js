import { keepService } from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'
import { eventBus, EVENT_ADD_NOTE } from '../../../services/event-bus.js'

export default {
  props: ["notes"],
  name: 'create-note',
  template: `
    <section class="container">
    <button class="add-note-btn" @click="isToAddnoteText = true; changeNoteType('noteText')""><i class="icon fas fa-font"></i></button>
    <button class="add-note-btn" @click="isToAddNoteImg=true; changeNoteType('noteImg')"><i class="icon far fa-images"></i></button>
    <button class="add-note-btn" @click="isToAddNoteVideo=true; changeNoteType('noteVideo')"><i class="icon fab fa-youtube"></i></button>
    <button class="add-note-btn" @click="isToAddNoteTodos=true; changeNoteType('noteTodos')"><i class="icon fas fa-list-ul"></i></button>
    <input placeholder="Title" v-if="isToAddnoteText" type="text" v-model="noteToAdd.info.title"/>
    <input placeholder="Enter your text here" v-if="isToAddnoteText" type="text" v-model="noteToAdd.info.txt">
    <input placeholder="Enter comma separated list" v-if="isToAddNoteTodos" type="text" v-model="noteToAdd.info.txt">
    <input placeholder="Enter image url" v-if="isToAddNoteImg" type="text" v-model="noteToAdd.info.url"/>
    <input placeholder="Enter video url" v-if="isToAddNoteVideo" type="text" v-model="noteToAdd.info.url"/>
    <button class="add-note-btn" @click="addNote"><i class="icon far fa-save"></i></button>
       </section>
`,
  data() {
    return {
      isToAddnoteText: false,
      isToAddNoteImg: false,
      isToAddNoteVideo: false,
      isToAddNoteTodos: false,
      noteToAdd: {
        type: null,
        info: {
          title: null,
          txt: null,
          url: null,
          todos: []
        },
        style: {
          backgroundColor: null
        }
      },
    };
  },
  methods: {
    addNote() {
      if (this.noteToAdd.type === 'noteTodos') {
        const todos = this.noteToAdd.info.txt.split(',')
        for (let i = 0; i < todos.length; i++) {
          this.noteToAdd.info.todos.push({ txt: todos[i], isDone: false })
        }
      }
      this.noteToAdd.id = utilService.makeId();
      this.noteToAdd.isPinned = false;
      this.noteToAdd.createdAt = new Date().getTime();
      this.noteToAdd.isEdited = false;
      this.noteToAdd.lastEdited = null;
      eventBus.$emit(EVENT_ADD_NOTE, this.noteToAdd)
      this.$emit('closeAdder')
    },
    changeNoteType(type) {
      this.noteToAdd.type = type;
      switch (type) {
        case 'noteVideo':
          this.isToAddNoteImg = false;
          this.isToAddnoteText = false;
          this.isToAddNoteTodos = false;
          break;
        case 'noteText':
          this.isToAddNoteImg = false;
          this.isToAddNoteVideo = false;
          this.isToAddNoteTodos = false;
          break;
        case 'noteImg':
          this.isToAddnoteText = false;
          this.isToAddNoteVideo = false;
          this.isToAddNoteTodos = false;
          break;
        case 'noteTodos':
          this.isToAddnoteText = false;
          this.isToAddNoteVideo = false;
          this.isToAddNoteImg = false;
          break;
      }
    },
  },
};