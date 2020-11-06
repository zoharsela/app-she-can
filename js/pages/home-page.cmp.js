export default {
    template: `
         <section class="homepage container">
            <div class="hero-img">
                <h1 class="hero-title">You were born a UNICORN</h1>
                <h2 class="hero-subtitle">Why not live like one?</h2>
                <h4 class="hero-desc">
                Stop chasing after your own tail with 1001 applications,<br>
                when all you need is one. 
                Get your shit done, or don't. <br>
                Do whatever the fuck you want. 
                but DO IT RIGHT.<br> because yes, you can.</h4>
                <button @click="scrollTo" class="hero-button">Start Living Right</button>
            </div>
            <div class="second-part-homepage">
               <img class="unicorn-img" src="assets/img/homepage/unicorn.png"/>
                <h2><span class="app-name">SheKeep</span> to organize your notes,<br>
                high functionality <span class="app-name">SheMail,</span><br> 
                <span class="app-name">SheReads</span> for the peace of mind.<br>
                you're one, doing like three. <br>our app, three in one.</h2>
            </div>
            <div class="third-part-homepage">
                <h1>Yes she can</h1>
                <h2>But now it's easier.</h2>
            </div>
         </section>
    `,
    mounted() {
    },
    methods: {
        scrollTo() {
            window.scrollTo({ top: 860, behavior: 'smooth' });
        }
    }
}