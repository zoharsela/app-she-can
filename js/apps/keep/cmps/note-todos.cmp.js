import { keepService } from '../services/keep-service.js'
import { eventBus, EVENT_DO_TODO, EVENT_UPDATE_NOTE } from '../../../services/event-bus.js'

export default {
    name: 'note-todos',
    props: ['note'],
    template: `
        <section class="note-todos">
        <p class="note-type">//TODOS</p>
          <h2 v-if="note.info.title">{{note.info.title}}</h2>
          <h4 v-if="note.info.todos"></h4>
            <ul>
                <li v-for="(todo, idx) in note.info.todos" :key="idx" @click="doTodo(note.id, idx)">
                <span @click.stop="doTodo(note.id, idx)" v-if="todo.isDone"><i class="far fa-check-square"></i></span>
                <span @click.stop="doTodo(note.id, idx)" v-if="!todo.isDone"><i class="far fa-square"></i></span>
                <span @click.stop="isToEdit=true" class="todo" contenteditable>{{todo.txt}}</span>
                </li>
                </ul>
                <button class="update-note-btn" v-if="isToEdit" @click="updateNote">Save Changes</button>
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
        updateNote() {
            var newTodos = document.querySelectorAll('.note-todos .todo')
            for (let i = 0; i < newTodos.length; i++) {
                this.note.info.todos[i].txt = newTodos[i].innerText
            }
            eventBus.$emit(EVENT_UPDATE_NOTE, this.note)
            this.isToEdit = false;
        },
    },
    computed: {
    }
}


