import { keepService } from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'
import setBgcColor from './note-bgc-color.cmp.js'

export default {
  props: ["notes"],
  name: 'create-note',
  template: `
    <section class="add-note container">
    <button class="add-note-btn" @click="isToAddnoteText = true; changeNoteType('noteText')""><i class="icon fas fa-font"></i></button>
    <button class="add-note-btn" @click="isToAddNoteImg=true; changeNoteType('noteImg')"><i class="icon far fa-images"></i></button>
    <button class="add-note-btn" @click="isToAddNoteVideo=true; changeNoteType('noteVideo')"><i class="icon far fa-play-circle"></i></button>
    <button class="add-note-btn" @click="isToAddNoteTodos=true; changeNoteType('noteTodos')"><i class="icon fas fa-list-ul"></i></button>
    <set-bgc-color v-if="isToPickColor" @color="setColor"></set-bgc-color>
    <button class="add-note-btn" @click="isToPickColor =!isToPickColor"><i class="icon fas fa-fill-drip"></i></button>
    <button class="add-note-btn" @click='addNote'><i class="icon far fa-save"></i></button>
    <input placeholder="Title" v-if="isToAddnoteText" type="text" v-model="noteToAdd.info.title"/>
    <input placeholder="Enter your text here" v-if="isToAddnoteText" type="text" v-model="noteToAdd.info.txt">
    <input placeholder="Enter comma separated list" v-if="isToAddNoteTodos" type="text" v-model="noteToAdd.info.todos.txt">
    <input placeholder="Enter image url" v-if="isToAddNoteImg" type="text" v-model="noteToAdd.info.url"/>
    <input placeholder="Enter video url" v-if="isToAddNoteVideo" type="text" v-model="noteToAdd.info.url"/>
       </section>
`,
  data() {
    return {
      isToPickColor: false,
      isToAddnoteText: false,
      isToAddNoteImg: false,
      isToAddNoteVideo: false,
      isToAddNoteTodos: false,
      noteToAdd: {
        id: null,
        type: null,
        isPinned: false,
        info: {
          title: null,
          txt: null,
          url: null,
          todos: [
            { id: null, txt: null, doneAt: null },
            { id: null, txt: null, doneAt: null }]
        },
        style: {
          backgroundColor: null
        }
      },
    };
  },
  components: {
    setBgcColor
  },
  methods: {
    addNote() {
      keepService.addNote(this.noteToAdd);
      this.noteToAdd = {
        id: utilService.makeId,
        type: null,
        isPinned: false,
        info: {
          title: null,
          txt: null,
          url: null,
          todos: [
            { id: null, txt: null, doneAt: null },
            { id: null, txt: null, doneAt: null }]
        },
        style: {
          backgroundColor: null
        }
      }
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
    setColor(color) {
      this.isToPickColor = false;
      this.noteToAdd.style.backgroundColor = color;
    }
  },
};