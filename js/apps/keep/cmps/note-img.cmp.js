export default {
    // name: 'note-img',
    props: ['note'],
    template: `
        <section class="note-img">
          <p>//IMAGE</p>
           <h2 v-if="note.info.title">{{note.info.title}}</h2>
           <img class="note-img" :src="note.info.url"/>
        </section>
    `,
}