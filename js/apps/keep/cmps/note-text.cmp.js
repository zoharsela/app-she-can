import { eventBus, EVENT_UPDATE_NOTE } from '../../../services/event-bus.js'
export default {
    props: ['note'],
    template: `
        <section class="note-text" @blur="updateNote()">
            <template>
                 <p class="note-type">//TEXT</p>
                <h2 @click="isToEdit=true" v-if="note.info.title" contenteditable>{{note.info.title}}</h2>
                <h4 @click="isToEdit=true" v-if="note.info.txt" contenteditable >{{note.info.txt}}</h4>
                <button class="update-note-btn" v-if="isToEdit" @click="updateNote">Save Changes</button>
            </template>
        </section>
    `,
    data() {
        return {
            isToEdit: false
        }
    },
    methods: {
        updateNote() {
            this.note.info.title = document.querySelector('.note-text h2').innerText
            this.note.info.txt = document.querySelector('.note-text h4').innerText
            eventBus.$emit(EVENT_UPDATE_NOTE, this.note)
            this.isToEdit = false;
        },
    }
}