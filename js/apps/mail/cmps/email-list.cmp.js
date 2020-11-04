import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-list-container">
           <ul>
                <li v-for="(email, idx) in emails" @click.native="goToEmail(email.id)" :key="email.id">
                </li>
            </ul>
    </section>
    `,
    methods: {
        emitBook(email) {
            this.$emit('selected', email)
          },
        goToEmail(emailId) {
            this.$router.push(`/email/${emailId}`)
        }
    },
    components: {
        emailPreview
    }
}