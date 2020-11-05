import { keepService } from '../services/keep-service.js'
import { eventBus, EVENT_DO_TODO } from '../../../services/event-bus.js'

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
                <span @click.stop="doTodo(note.id, idx)" :class="isTodoDone(todo)">{{todo.txt}}</span>
                </li>
            </ul>
        </section>
    `,
    methods: {
        doTodo(noteId, todoIdx) {
            console.log(todoIdx);
            eventBus.$emit(EVENT_DO_TODO, noteId, todoIdx);
        },
        isTodoDone(todo) {
            return todo.isDone ? 'done' : 'not-done';
        },
    },
    computed: {
    }
}


