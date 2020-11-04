export default {
    name: 'note-video',
    props: ['note'],
    template: `
        <section class="note-video">
            <p class="note-type">//VIDEO</p>
            <h2 v-if="note.info.title">{{note.info.title}}</h2>
            <iframe width="200" height="115" :src="'//www.youtube.com/embed/'+getVideoId"></iframe>
        </section>
    `,
    data() {
        return {
            videoUrl: this.note.info.url
        }
    },
    computed: {
        getVideoId() {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = this.videoUrl.match(regExp);
            return (match && match[2].length === 11) ?
                match[2] :
                null;
        },
    }
}
