import { emailService } from '../services/email-service.js'
import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    name: 'emailList',
    template: `
    <section class="email-list-container">
        <ul>
            <li v-for="(email, idx) in emails" @click="goToEmail(email.id)" :key="email.id">
                <email-preview :email="email">
                    </email-preview>
                </li>
            </ul>
    </section>
    `,
    methods: {
        emitEmail(email) {
            this.$emit('selected', email)
          },
        goToEmail(emailId) {
            this.$router.push(`/email/${emailId}`)
        },
        // getEmailsCategory(){
        // const {emailFilter } = this.$route.params
        //     if (emailId) {
        //         emailService.getEmailsCategory(inboxFilter)
        //             .then(emails => this.emails = emails)
        //     }},
        // getEmailsCategory(){
        //     console.log(this.$routs.params.inboxFilter);
        //     emailService.getEmailsCategory(this.$routs.params.inboxFilter)
        //     .then(emails => {
        //         this.emails = emails
        //     })
        // }
    },
    // created() {
    //    this.getEmailsCategory()
    // },
    components: {
        emailPreview
    }
}