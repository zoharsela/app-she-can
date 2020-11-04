export default {
    // name: 'note-img',
    props: ['note'],
    template: `
        <section class="note-img">
          <p class="note-type">//IMAGE</p>
           <img class="note-img" :src="note.info.url"/>
        </section>
    `,
}