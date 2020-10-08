const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'hassnainahmed111222@gmail.com',
        subject:'Thank you for Joining!',
        text:'Welcome to the app, '+name+'. let me know how you get along with app'
    })
}

const sendCancelEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'hassnainahmed111222@gmail.com',
        subject:'Cancel Account',
        text:'Please do let us know why you cancel your account'+name
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail 
}