import { keepService } from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'

export default {
  props: ["notes"],
  name: 'create-note',
  template: `
    <section class="">
            <input placeholder="Title" type="text" v-model="noteToAdd.info.title"/>
            <input placeholder="Text" @click="isToAddNote = true" type="text" v-model="noteToAdd.info.txt">
            <input placeholder="Add url" v-if="isToAddUrl" type="text" v-model="noteToAdd.info.url"/>
            <button @click="isToAddUrl=true; changeNoteType('noteImg')">Add Img Url</button>
            <button @click="isToAddUrl=true; changeNoteType('noteVideo')">Add Video Url</button>
            <button v-if="isToAddNote" @click='addNote'>Save Note</button>
       </section>
`,
  data() {
    return {
      isToAddNote: false,
      isToAddUrl: false,
      noteToAdd: {
        id: null,
        type: 'noteText',
        isPinned: false,
        info: {
          title: null,
          txt: null,
          url: null,
        },
      },
    };
  },
  methods: {
    addNote() {
      console.log(this.noteToAdd.info.title);
      keepService.addNote(this.noteToAdd);
      this.noteToAdd = {
        id: utilService.makeId,
        type: null,
        isPinned: false,
        info: {
          title: null,
          txt: null,
          url: null,
        },
      }
    },
    changeNoteType(type) {
      this.noteToAdd.type = type;
    },
  },
};