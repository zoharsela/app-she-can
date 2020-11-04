export default {
    name: 'note-todos',
    props: ['note'],
    template: `
        <section class="note-todos">
        <p>//TODOS</p>
          <h2 v-if="note.info.title">{{note.info.title}}</h2>
          <h4 v-if="note.info.todos"></h4>
            <ul>
                <li v-for="todo in note.info.todos">
                    <span>{{todo.txt}}</span>
                    <span v-if="todo.doneAt">*</span>
                </li>
            </ul>
        </section>
    `,
    computed: {

    },
}