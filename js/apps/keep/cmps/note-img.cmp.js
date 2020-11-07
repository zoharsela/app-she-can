export default {
    props: ['note'],
    template: `
        <section class="note-img">
          <span class="note-type">//IMAGE</span> 
           <img class="note-img" :src="note.info.url"/>
        </section>
    `,
}