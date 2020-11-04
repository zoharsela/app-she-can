import { keepService } from '../services/keep-service.js'

export default {
    name: 'note-todos',
    props: ['note'],
    template: `
        <section class="note-todos">
        <p class="note-type">//TODOS</p>
          <h2 v-if="note.info.title">{{note.info.title}}</h2>
          <h4 v-if="note.info.todos"></h4>
            <ul>
                <li v-for="todo in note.info.todos">
                <span v-if="todo.doneAt"><i class="far fa-check-square"></i></span>
                <span v-if="!todo.doneAt"><i class="far fa-square"></i></span>
                <span @click="doTodo(todo.id)">{{todo.txt}}</span>
                </li>
            </ul>
        </section>
    `,
    methods: {
        doTodo(id) {
            keepService.getTodoById(id)
                .then(todo => {
                    console.log(todo)
                    keepService.doTodo(todo)
                })
                .then(console.log('done'))

        }
    },
}