
export default {
    name: 'emailSideNav',
    template: `
    <section class="choose-category-header">
        <div class="choose-category flex">
            <router-link to="/email/inbox" exact>
                <button class="button-reset side-nav-link"><i class="fas fa-inbox"></i>Inbox</button>
            </router-link>
            <router-link to="/email/sent" exact>
                <button class="button-reset side-nav-link"><i class="fas fa-paper-plane"></i>Sent</button>
            </router-link>
            <router-link to="/email/draft" exact>
                <button class="button-reset side-nav-link"><i class="fas fa-sticky-note"></i>Draft</button>
            </router-link>
            <router-link to="/email/star" exact>
                <button class="button-reset side-nav-link"><i class="fas fa-star"></i>Starred</button>
            </router-link>
            <router-link to="/email/deleted" exact>
                <button class="button-reset side-nav-link"><i class="fas fa-trash"></i>Deleted</button>
            </router-link>
        </div>
    </section>
    `,
}