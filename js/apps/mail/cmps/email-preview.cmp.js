import { eventBus } from '../../../services/event-bus.js'
import { emailService } from '../services/email-service.js'
export default {
    props: ['email'],
    name: 'emailPreview',
    template: `
    <section class="email-preview">
        <div class="email-line flex" :class="{read: email.isRead}">
            <router-link :to="'/email/'+emailsCategory+'/'+email.id"  @click.stop="open"></router-link>
            <!-- <input type="checkbox" class="checkbox">
            <label for="checkbox"></label> -->
            <i v-if="email.isStarred" @click.stop="starClicked" class="far fa-star" :class="onStarClicked"></i>
            <i v-if="!email.isStarred" @click.stop="starClickedRemove" class="fas fa-star mr-5 ml-5" :class="onStarClicked"></i>
           <h4>{{email.senderName}} | <span>{{email.subject}} | <small>{{emailText}}</small> <small>{{email.sentAt}}</small></span></h4>
           <button  class="button-reset email-list-btn flex" @click.stop="deleteEmail(email.id)"> <i class="fas fa-trash"></i></button>
           <button class="button-reset email-list-btn flex" @click.stop="markedEmail"><i v-if="!email.isRead" class="far fa-envelope" :class="{read: email.isRead}"></i>
           <i v-if="email.isRead" class="far fa-envelope-open"></i></button>
        </div>
    </section>
    `,
    data() {
        return {
            isOpen: false,
            emailsCategory: this.$route.params.emailsCategory
        }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen;
        },
        markedEmail() {
            emailService.changeToIsRead(this.email.id)
        },
        deleteEmail(emailId) {
            emailService.deleteEmail(emailId)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully Deleted'))
                .catch(err => console.log('something went wrong', err))
        },
        starClicked() {
            emailService.starEmail(this.email.id)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully Marked'))
        },
        starClickedRemove() {
            emailService.starEmail(this.email.id)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully UnMarked'))
        }
    },
    computed: {
        emailText() {
            return this.email.body.length > 50 ? this.email.body.substring(0, 49) + '...' : this.email.body;
        },
        onStarClicked() {
            return {starred: (this.email.isStarred)}
        }
    }
}

//far fa-paper-plane
