import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../services/event-bus.js'
import { utilService } from '../../../services/util-service.js'

export default {
    props: ['addNewEmail'],
    name: 'emailCompose',
    template: `
    <section class="email-compose flex" v-if="addNewEmail">
        <form @submit.prevent="sendEmail" class="compose-form flex">
            <div class="compose-header flex">
                <h3>New Message</h3>
                <span><button @click="close" class="close-btn button-reset"><i class="fas fa-times"></i></button></span>
            </div>
            <div class="compose-body flex">
            <input class="form-text flex" type="text" v-model.trim="email.to" placeholder="To:" required/>
            <input class="form-text flex" type="text" v-model.trim="email.subject" placeholder="Subject:" required/>
            <textarea class="form-text-body flex" type="text" v-model.trim="email.body"></textarea> 
            </div>
            <div class="form-btns flex">
                <button class="send-btn button-reset" @click.stop.prevent="sendEmail(email)"><i class="far fa-paper-plane"></i></button>
                <button class="draft-btn button-reset" @click.stop.prevent="saveDraft"><i class="far fa-save"></i></button>
                <button class="delete-btn button-reset" @click.stop.prevent="close"><i class="fas fa-trash"></i></button>
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            email: {
                id: utilService.makeId(),
                sentTo: 'Me',
                subject: '',
                body: '',
                isRead: false,
                sentAt: new Date().toLocaleTimeString().substring(0, 4),
                sentEmail: false,
                isDraft: false,
                isStarred: false,
                isDeleted: false
            },
        }
    },
    methods: {
        sendEmail() {
            if (this.isDraft) {
                this.email.isDraft = false;
            }
            this.email.sentEmail = true;
            emailService.sendEmail(this.email)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully Sent'))
            this.close()
        },
        close() {
            this.$emit('closeCompose')
        },
        saveDraft() {
            emailService.sendEmail(this.email)
            emailService.draftEmail(this.email.id)
            this.close()
        }
    }
} 
