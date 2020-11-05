import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    name: 'emailList',
    template: `
    <section class="email-list-container">
        <ul>
            <li v-for="(email, idx) in emails" :key="email.id">
                <email-preview :email="email">{{email.isRead}}
                    </email-preview>
                </li>
            </ul>
    </section>
    `,
    components: {
        emailPreview
    }
}