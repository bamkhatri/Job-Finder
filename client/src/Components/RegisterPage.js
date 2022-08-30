import { useState, useEffect } from 'react'
import Logo from './Logo'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from './FormRow'

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  const [values, setValues] = useState(initialState)
  return (
    <Wrapper className='full-page'>
      <form onSubmit={onSubmit} className='form'>
        <Logo />
        <h3>Login</h3>
        <FormRow
          className='form-row'
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />

        <FormRow
          className='form-row'
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          className='form-row'
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}
export default Register
