import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'

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
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' ref={register} />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' ref={register} />
        </div>
        <div>
          <textarea name='message' ref={register}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  background: url(/images/pattern-light-triangle.jpg);
  padding: 80px 0;
`

export default Contact
