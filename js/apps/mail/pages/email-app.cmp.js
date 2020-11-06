import { emailService } from '../services/email-service.js'
// import { userMsg } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
import emailPreview from '../cmps/email-compose.cmp.js';
import emailSideNav from '../cmps/email-side-nav.cmp.js';
// import longText from '../cmps/long-text.js';

export default {
    name: 'emailApp',
    template: `
     <section class="email-app container">
         <email-filter @filtered="setFilter"></email-filter>
         <div class="email-app-container flex">
            <nav class="flex">
            <div class="email-app-side-container flex">
            <button @click="newEmail"><i class="fas fa-plus"></i></button>
            <email-side-nav :emails="emails"></email-side-nav>
            </div>
            </nav>
            <email-list @selected="setSelectedEmail" :emails="emailsToShow" v-if="emails" @readEmail=""></email-list>
            <email-compose @closeCompose="newEmail" :addNewEmail="isEmailCompose"></email-compose>
        </div>
        <!-- <user-msg/> -->
    </section>
  `,
    data() {
        return {
            emails: null,
            filterBy: null,
            selectedEmail: null,
            isEmailCompose: null
        }
    },
    created() {
        this.isEmailCompose = false;
        emailService.getEmails()
            .then(emails => this.emails = emails)
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setSelectedEmail(email) {
            this.selectedEmail = email;
        },
        newEmail() {
            this.isEmailCompose = !this.isEmailCompose;
        },
        markAsRead(emailId, countUnread){
        var countUnread = emailService.changeToIsRead(emailId)
    }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const txt = this.filterBy.text.toLowerCase();
            return this.emails.filter(email => {
                let currFilter = this.filterBy.status;
                if (currFilter === 'byAll') {
                    currFilter = email.isRead
                }
                else if (currFilter === 'byRead') {
                    currFilter = true
                } else currFilter = false;
                return email.subject.toLowerCase().includes(txt) ||
                    email.senderName.toLowerCase().includes(txt) ||
                    email.body.toLowerCase().includes(txt) &&
                    email.isRead === currFilter
            })

        }
    },
    components: {
        emailList,
        emailFilter,
        emailCompose,
        emailPreview,
        emailSideNav
        // emailStatus
    }
}