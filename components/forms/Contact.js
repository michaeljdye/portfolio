import { useState } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { ErrorMessage as ErrMessage } from '@hookform/error-message'
import styled from '@emotion/styled'
import { SectionHeading } from '../headings'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Recaptcha from 'react-google-recaptcha'
import { ButtonPrimary } from '../buttons'
import { below } from '../../utils/breakpoints'

const Contact = () => {
  const [submissionState, setSubmissionState] = useState('pending')
  const { register, errors, handleSubmit } = useForm()

  let recaptchaInstance
  const executeCaptcha = e => {
    e.preventDefault()
    recaptchaInstance.execute()
  }

  const onSubmit = async formData => {
    try {
      const { next, ok } = await fetch(
        'https://formspree.io/p/1529852799980928026/f/contactForm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      ).then(response => response.json())

      if (ok) return setSubmissionState('submitted')

      return setSubmissionState('failed')
    } catch (error) {
      return setSubmissionState('failed')
    }
  }

  return (
    <ContactSection id='contact'>
      <Head>
        <script
          src='https://www.google.com/recaptcha/api.js'
          async
          defer
        ></script>
      </Head>
      <SectionHeading>
        ready, set, <h2>Contact</h2>
      </SectionHeading>
      {submissionState === 'pending' ? (
        <form
          method='POST'
          action='https://formspree.io/p/1529852799980928026/f/contactForm'
        >
          <div className='form-input'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='John Smith'
              ref={register({ required: 'This is required' })}
            />
            <ErrorMessage
              errors={errors}
              name='name'
              render={({ message }) => <p>{message}</p>}
              as='small'
            />
          </div>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='John@Email.com'
              ref={register({ required: 'This is required' })}
            />
            <ErrorMessage
              errors={errors}
              name='name'
              render={({ message }) => <p>{message}</p>}
              as='small'
            />{' '}
          </div>
          <div className='form-textarea'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='Lorem ipsum dolor sit amet.'
              ref={register({ required: 'This is required' })}
            ></textarea>
            <ErrorMessage
              errors={errors}
              name='name'
              render={({ message }) => <p>{message}</p>}
              as='small'
            />{' '}
          </div>
          <ButtonPrimary dark icon={faPaperPlane}>
            Send
          </ButtonPrimary>
          <Recaptcha
            ref={e => (recaptchaInstance = e)}
            sitekey='6LcWIvsZAAAAAGcTrG0Uv7QEKiAcJ01otF0EBQ_h'
            size='normal'
            onChange={handleSubmit(onSubmit)}
          />
        </form>
      ) : submissionState === 'submitted' ? (
        'Thanks!'
      ) : (
        'Something went wrong.'
      )}
    </ContactSection>
  )
}

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.1) url(/images/pattern-light-triangle.jpg);
  background-blend-mode: overlay;
  padding: 40px 0 var(--defaultPadding);

  form {
    width: 750px;
    max-width: 90%;
  }

  label {
    display: block;
    text-transform: uppercase;
    padding: 0 0 10px;
  }

  input,
  textarea {
    background: var(--colorWhite);
    width: 100%;
    border: none;
    border-top: 2px solid var(--colorPrimary);
    padding: 10px 0 10px 20px;

    &::placeholder {
      font-size: 1.2rem;
      color: var(--colorTextLight);
    }
  }

  .form-input {
    --gap: 40px;
    display: inline-block;
    width: calc(50% - var(--gap));
    margin-bottom: 20px;

    ${below.phone`
      --gap: 0;
      width: 100%;
    `}

    & + .form-input {
      margin-left: calc(var(--gap) * 2);
    }
  }

  .form-textarea {
    margin-bottom: 20px;
  }

  textarea {
    display: inline-block;
    height: 50px;
  }

  button {
    background: none;
    margin-bottom: 20px;
    padding: 8px 15px;
    border: 1px solid var(--colorPrimary);
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
  }
`

const ErrorMessage = styled(ErrMessage)`
  color: red;
`

export default Contact
