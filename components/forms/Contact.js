import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import { SectionHeading } from '../headings'

const Contact = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async formData => {
    const data = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json())

    console.log(data)
  }

  return (
    <ContactSection>
      <SectionHeading>
        Ready, set, <h2>Contact</h2>
      </SectionHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='John Smith'
            ref={register}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='John@Email.com'
            ref={register}
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder='Lorem ipsum dolor sit amet.'
            ref={register}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(/images/pattern-light-triangle.jpg);
  padding: 20px 0;

  label {
    display: block;
    text-transform: uppercase;
    padding: 0 0 10px;
  }

  input,
  textarea {
    background: var(--colorWhite);
    border: none;
    border-top: 2px solid var(--colorPrimary);
    margin-bottom: 10px;
  }

  .form-input {
    --gap: 40px;
    display: inline-block;
    width: calc(50% - var(--gap));

    & + .form-input {
      margin-left: var(--gap);
    }
  }

  textarea {
    width: 100%;
  }

  button {
    background: none;
    padding: 5px 10px;
    border: 1px solid var(--colorPrimary);
    text-transform: uppercase;
    font-weight: 500;
  }
`

export default Contact
