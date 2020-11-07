import { eventBus } from '../../../services/event-bus.js'
import { emailService } from '../services/email-service.js'
export default {
    props: ['email'],
    name: 'emailPreview',
    template: `
            
    <section class="email-preview" @click.stop="goToEmail">
        <div class="email-line flex" :class="{read: email.isRead}" v-if="!emaildeleted">
            <i v-if="!email.isStarred" @click.stop.prevent="starClicked" class="far fa-star"></i>
            <i v-if="email.isStarred" @click.stop.prevent="starClickedRemove" class="fas fa-star"></i>
           <h4>{{email.senderName}} | <span>{{email.subject}} | <small>{{emailText}}</small> <small>{{email.sentAt}}</small></span></h4>
           <button  class="button-reset email-list-btn flex" @click.stop.prevent="deleteEmail(email.id)"> <i class="fas fa-trash"></i></button>
           <button class="button-reset email-list-btn flex" @click.stop.prevent="markedEmail"><i v-if="!email.isRead" class="far fa-envelope" :class="{read: email.isRead}"></i>
           <i v-if="email.isRead" class="far fa-envelope-open"></i></button>
        </div>
    </section>
           <!-- </router-link> -->
    `,
    data() {
        return {
            isOpen: false,
            emailsCategory: this.$route.params.emailsCategory,
            emaildeleted: false
        }
    },
    methods: {
        // open() {
        //     this.isOpen = !this.isOpen;
        // },
        goToEmail(){
            this.$router.push('/email/'+this.emailsCategory+'/'+this.email.id)
        },
        markedEmail() {
            emailService.changeToIsRead(this.email.id)
        },
        deleteEmail(emailId) {
            this.emaildeleted = true;
            emailService.deleteEmail(emailId)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully Deleted'))
                // .then(() => eventBus.$emit('email-deleted', gEmails))
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
    },
    created(){ 
        console.log('previewCreated', this.$route.params.emailsCategory);
    }
}

//far fa-paper-plane
// :class="onStarClicked"