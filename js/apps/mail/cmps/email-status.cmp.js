import { emailService } from '../services/email-service.js'

export default {
    name: 'emailStatus',
    template: `
    <section class="email-status-container">
        <h2>{{emailsUnreadCount}}</h2>
    </section>
    `,
    data() {
        return {
            emailsUnread: ''
        }
    },
    computed: {
        emailsUnreadCount() {
            return this.emailsUnread
        }
    },
    methods: {
        countEmails() {
            this.emailsUnread = emailService.countEmailsRead()
        }
    },
    created() {
        this.countEmails()
    }
}