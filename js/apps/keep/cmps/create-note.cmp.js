import { keepService } from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'
import setBgcColor from './note-bgc-color.cmp.js'

export default {
  props: ["notes"],
  name: 'create-note',
  template: `
    <section class="add-note container">
    <input placeholder="Title" v-if="isToAddNote" type="text" v-model="noteToAdd.info.title"/>
    <input placeholder="Text" v-if="isToAddNote" type="text" v-model="noteToAdd.info.txt">
    <input placeholder="Add url" v-if="isToAddUrl" type="text" v-model="noteToAdd.info.url"/>
    <button @click="isToAddNote = true"><i class="icon fas fa-font"></i></button>
    <button @click="isToAddUrl=true; changeNoteType('noteImg')"><i class="icon far fa-images"></i></button>
    <button @click="isToAddUrl=true; changeNoteType('noteVideo')"><i class="icon far fa-play-circle"></i></button>
    <button v-if="isToAddNote" @click='addNote'><i class="far fa-save"></i></button>
    <set-bgc-color v-if="isToPickColor"></set-bgc-color>
            <button @click="isToPickColor =!isToPickColor"><i class="icon fas fa-fill-drip"></i></button>
       </section>
`,
  data() {
    return {
      isToPickColor: false,
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
        },
      }
    },
    changeNoteType(type) {
      this.noteToAdd.type = type;
    },
  },
};