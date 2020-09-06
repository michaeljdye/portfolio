const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API,
  domain: process.env.MAILGUN_DOMAIN,
})

export default ({ body: { name, email, message } }, res) => {
  const data = {
    from: `${name} <${email}>`,
    to: 'joeymdye@gmail.com',
    subject: 'Portfolio Contact Submission',
    text: message,
  }

  try {
    mailgun.messages().send(data, (error, { message }) => {
      if (error) {
        res.status(400).json({ success: false, message: 'Failed submission' })
      }

      res.json({ success: true, message })
    })
  } catch (error) {
    console.log(error)

    res.status(400).json({ success: false, message: 'Failed submission' })
  }
}
