import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
// import longText from '../cmps/long-text.js';

export default {
    template: `
     <section class="email-app">
        <email-filter  @filtered="setFilter"></email-filter>
        <email-list :emails="emailsToShow" @selected="setSelectedEmail"></email-list>
    </section>
  `,
    Data() {
        return {
            emails: null,
            filterBy: null,
            selectedEmail: null,
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setSelectedEmail(email) {
            this.selectedEmail = email;
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const txt = this.filterBy.byTitle.toLowerCase();
            return this.emails.filter(email => email.title.toLowerCase().includes(txt))
        }
    },
    components: {
        emailList,
        emailFilter
    }
}