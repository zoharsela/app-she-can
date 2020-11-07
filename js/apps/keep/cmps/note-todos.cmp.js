import { keepService } from '../services/keep-service.js'
import { eventBus, EVENT_DO_TODO, EVENT_UPDATE_NOTE } from '../../../services/event-bus.js'

export default {
    name: 'note-todos',
    props: ['note'],
    template: `
        <section class="note-todos">
        <p class="note-type">//TODOS</p>
          <h4 v-if="note.info.todos"></h4>
            <ul>
                <li v-for="(todo, idx) in note.info.todos" :key="idx">
                <span @click.stop="doTodo(note.id, idx)" v-if="todo.isDone"><i class="far fa-check-square"></i></span>
                <span @click.stop="doTodo(note.id, idx)" v-if="!todo.isDone"><i class="far fa-square"></i></span>
                <span @blur.stop="updateNote(idx)" @click.stop="isToEdit=true" class="todo" contenteditable>{{todo.txt}}</span>
                </li>
                </ul>
                </section>
                `,
    data() {
        return {
            isToEdit: false
        }
    },
    methods: {
        doTodo(noteId, todoIdx) {
            eventBus.$emit(EVENT_DO_TODO, noteId, todoIdx);
        },
        isTodoDone(todo) {
            return todo.isDone ? 'done' : 'not-done';
        },
        updateNote(todoIdx) {
            this.note.info.todos[todoIdx].txt = event.target.innerText
            eventBus.$emit(EVENT_UPDATE_NOTE, this.note)
            this.isToEdit = false;
        },
    },
    computed: {
    }
}
