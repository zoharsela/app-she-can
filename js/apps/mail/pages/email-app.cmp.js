import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
// import longText from '../cmps/long-text.js';

export default {
    name: 'emailApp',
    template: `
     <section class="email-app">
         <button @click="newEmail"><i class="fas fa-plus"></i></button>
        <email-filter @filtered="setFilter"></email-filter>
        <email-list @selected="setSelectedEmail" :emails="emailsToShow" v-if="emails"></email-list>
        <email-compose v-if="addNewEmail"></email-compose>
    </section>
  `,
    data() {
        return {
            emails: null,
            filterObj: null,
            selectedEmail: null,
            addNewEmail: false
        }
    },
    created() {
        // this.addNewEmail = false;
        emailService.getEmails()
            .then(emails => this.emails = emails)
    },
    methods: {
        setFilter(filterObj) {
            this.filterObj = filterObj
        },
        setSelectedEmail(email) {
            this.selectedEmail = email;
        },
        newEmail() {
            this.addNewEmail = true;
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterObj) return this.emails;
            const txt = this.filterObj.filterText.toLowerCase();
            return this.emails.filter(email => email.subject.toLowerCase().includes(txt))
                // .filter(email => this.email.isRead === true)
                // .filter(email => this.email.isRead === false);
        }
    },
    components: {
        emailList,
        emailFilter,
        emailCompose
    }
}