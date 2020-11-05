import { eventBus } from '../../../services/event-bus.js'
import { emailService } from '../services/email-service.js'
export default {
    props: ['email'],
    name: 'emailPreview',
    template: `
    <section class="email-preview">
        <div class="email-line flex" :class="{read: email.isRead}">
            <router-link :to="'/email/' +email.id"  @click.stop="open"></router-link>
            <input type="checkbox" class="checkbox">
            <label for="checkbox"></label>
           <h4>{{email.senderName}} | <span>{{email.subject}} | <small>{{emailText}}</small></span></h4>
           <button  class="button-reset email-list-btn flex" @click.stop="deleteEmail(email.id)"> <i class="fas fa-trash"></i></button>
           <button class="button-reset email-list-btn flex"><i v-if="!email.isRead" class="far fa-envelope" @click.stop="markedEmail" :class="{read: email.isRead}"></i>
           <i v-if="email.isRead" class="far fa-envelope-open" @click.stop="markedEmail"></i></button>
        </div>
    </section>
    `,
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen;
        },
        markedEmail(){
            
            this.$emit(countUnread)
        },
        deleteEmail(emailId) {
            emailService.deleteEmail(emailId)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully Deleted'))
                .catch(err => console.log('something went wrong', err))
        }
    },
    computed: {
        emailText() {
            return this.email.body.length > 50 ? this.email.body.substring(0, 49) + '...' : this.email.body;
        }
    }
}

//far fa-paper-plane
