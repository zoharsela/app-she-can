import { utilService } from '../../../services/util-service.js'
const STORAGE_KEY = 'emailsDB';

var gEmails = getEmails();
// var gCountUnread = 0;


export const emailService = {
    getEmailById,
    changeToIsRead,
    deleteEmail,
    sendEmail,
    countEmailsRead,
    getEmailsCategory,
    starEmail
}

function getEmails() {
    gEmails = utilService.loadFromStorage(STORAGE_KEY);
    console.log(gEmails);
    if (!gEmails || !gEmails.length) {
        gEmails = _createEmail()
        utilService.storeToStorage(STORAGE_KEY, gEmails);
    }
    // gCountUnread = gEmails.length;
    return gEmails;
}

function _createEmail() {
    return [{
        id: utilService.makeId(),
        senderName: 'Asos Orders',
        sentTo: 'Me',
        subject: 'Thanks for your order!',
        body: 'Hi, your order has been received!',
        isRead: false,
        sentAt: 'Oct 28',
        sentEmail: false,
        isDraft: false,
        isStarred: true,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Linkedin',
        sentTo: 'Me',
        subject: 'You are getting noticed',
        body: 'See who is looking!',
        isRead: false,
        sentAt: 'Jun 28',
        sentEmail: false,
        isDraft: false,
        isStarred: true,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Coding Academy',
        sentTo: 'Me',
        subject: 'Congrats!',
        body: 'We are happy to start!',
        isRead: false,
        sentAt: 'May 28',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    },
    {
        id: utilService.makeId(),
        senderName: 'Coursera',
        sentTo: 'Me',
        subject: 'Recommended: Object Oriented Programming in JS',
        body: 'Recommendations for you',
        isRead: false,
        sentAt: 'Jun 28',
        sentEmail: false,
        isDraft: false,
        isStarred: false,
        isDeleted: false
    }
    ]
}

function getEmailById(emailId) {
    var email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}


function changeToIsRead(emailId) {
    console.log(emailId);
    const emailIsRead = gEmails.find(email => {
        return email.id === emailId
    })
    emailIsRead.isRead = !emailIsRead.isRead;
    utilService.storeToStorage(STORAGE_KEY, gEmails);
}

function deleteEmail(emailId) {
    console.log(gEmails);
    const idx = gEmails.findIndex(currEmail => currEmail.id === emailId);
    gEmails.splice(idx, 1);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve(gEmails);
}

function sendEmail(email) {
    email.id = utilService.makeId();
    gEmails.push(email);
    utilService.storeToStorage(STORAGE_KEY, gEmails);
    return Promise.resolve()
}

function countEmailsRead(){
    let unreadEmails = gEmails.filter(email => {
        return (!email.isRead && !email.sentEmail)
    })
    if(unreadEmails.length){
        return `You have ${unreadEmails.length} unread emails`;
    } else {
        return 'No unreads emails'
    }
}

function starEmail(emailId){
    return Promise.resolve(getEmailById(emailId)
    .then(email => {
        email.isStarred = !email.isStarred
        utilService.storeToStorage(STORAGE_KEY, gEmails);
    }))
}

function getEmailsCategory(emailsCategory = 'inbox'){
    console.log(emailsCategory);
    if(emailsCategory === 'inbox') {
        return Promise.resolve(gEmails);
    }
    if(emailsCategory === 'sent'){
        let sent = gEmails.filter(email => {
            return email.sentEmail
        })
        return Promise.resolve(sent);
    }
    if(emailsCategory === 'draft'){
        let draft = gEmails.filter(email => {
            return email.isDraft
        })
        return Promise.resolve(draft);
    }
    if(emailsCategory === 'star'){
        let star = gEmails.filter(email => {
            return email.isMarked
        })
        return Promise.resolve(star);
    }
    if(emailsCategory === 'deleted'){
        let deleted = gEmails.filter(email => {
            return email.isDeleted
        })
        return Promise.resolve(deleted);
    }
}
