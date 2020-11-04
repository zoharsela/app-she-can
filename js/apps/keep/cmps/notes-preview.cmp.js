export default {
    props: ['note'],
    name: 'notes-preview',
    template: `<section class="note-list">
                <h2 v-if="note.info.title">{{note.info.title}}</h2>
                <h4 v-if="note.info.txt">{{note.info.txt}}</h4>
            </section>
  `,
}