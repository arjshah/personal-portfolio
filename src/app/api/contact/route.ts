import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, company, type, message, timeline } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'arjunshah3010@gmail.com',
    subject: `Consultation Request from ${name} - ${company}`,
    text: `
Name: ${name}
Email: ${email}
Company: ${company}
Type: ${type}
Timeline: ${timeline || 'Not specified'}

Message:
${message}
    `,
    html: `
      <h3>New Consultation Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
} 