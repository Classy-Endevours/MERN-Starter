const NodeMailer = require('nodemailer');

const transporter = NodeMailer.createTransport({
    service: 'gmail',
    // host: 'mail.gmail.com',
    auth: {
        user: process.env.MAIL_SERVICE_ID,
        password: process.env.MAIL_SERVICE_PASSWORD
    },
    // port: 465,
    // secure: true, // use SSL
});

class MailService {

    send = ({to, subject, text, html}) => {
        return new Promise(async (resolve, reject) => {
            if(!to.length) reject('To cannot be empty!')
            const options = {
                from: process.env.MAIL_SERVICE_ID,
                to: to.join(),
                subject,
                text,
                html
            }
            try {
                const info = await transporter.sendMail(options)
                resolve(info)
            } catch (error) {
                reject(error)
            }
        })
    }
}

module.exports = new MailService()
