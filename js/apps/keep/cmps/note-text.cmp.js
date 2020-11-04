export default {
    // name: 'name-text',
    props: ['note'],
    template: `
        <section class="note-text">
           <p class="note-type">//TEXT</p>
            <h2 v-if="note.info.title">{{note.info.title}}</h2>
            <h4 v-if="note.info.txt">{{note.info.txt}}</h4>
        </section>
    `,
}