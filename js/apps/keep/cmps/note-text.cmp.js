import { eventBus, EVENT_UPDATE_NOTE } from '../../../services/event-bus.js'
export default {
    props: ['note'],
    template: `
        <section class="note-text" @blur="updateNote()">
            <template>
                 <p class="note-type">//TEXT</p>
                <h4 @blur="updateNote" @click="isToEdit=true" v-if="note.info.txt" contenteditable >{{note.info.txt}}</h4>
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
            this.note.info.txt = event.target.innerText
            eventBus.$emit(EVENT_UPDATE_NOTE, this.note)
            this.isToEdit = false;
        },
    }
}

