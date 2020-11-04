import { emailService } from '../services/email-service.js'

export default {
    name: 'emailDetails',
    template: `
    <section class="email-details-container">
        <h4>Subject: {{email.subject}}</h3>
        <h3>From: {{email.senderName}} <span>Sent At: {{email.sentAt}}</span></h3>
        <div class="email-body">
        <p>{{email.body}}</p>
    </div>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        getEmailById() {
        const emailId = this.$route.params.id
        emailService.getEmailById(emailId)
            .then(email => this.email = email)
        }
    },
    created() {
        this.getEmailById()
        emailService.changeToIsRead(this.$route.params.id)
    }
}