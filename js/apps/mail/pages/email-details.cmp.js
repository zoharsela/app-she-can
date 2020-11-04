import { emailService } from '../services/email-service.js'

export default {
    template: `
    <section class="email-details-container">
        <h3>Subject: {{email.subject}}</h3>
        <div class="email-body">
        <p>{{email.body}}</p>
    </div>
    `,
    data() {
        return {
            email: null
        }
    },
    created() {
        const id = this.$route.params.emailId
        emailService.getEmailById(id)
            .then(email => this.email = email)
    }
}