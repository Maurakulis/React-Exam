import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import UsersContext, { USERS_ACTION_TYPES } from '../../contexts/UsersContext'

const Register = () => {
  const navigate = useNavigate()

  const { dispatch } = useContext(UsersContext)

  const values = {
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const validationShema = Yup.object({
    email: Yup.string()
      .email('This input must be a valid email')
      .required('Input must be filled'),
    password: Yup.string()
      .required('Input must be filled'),
    passwordConfirm: Yup.mixed()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Input must be filled'),
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationShema,
    onSubmit: (values) => {
      dispatch({
        type: USERS_ACTION_TYPES.REGISTER,
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      })
      navigate('/home')
    },

  })
  return (
    <main>
      <section className="register">
        <form onSubmit={formik.handleSubmit}>
          <h2>Create a Monkecount</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.email && formik.errors.email &&
              <span>{formik.errors.email}</span>
            }
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.password && formik.errors.password &&
              <span>{formik.errors.password}</span>
            }
          </div>
          <div>
            <label htmlFor="password_repeat">Repeat password</label>
            <input type="password" name='passwordConfirm' id="passwordConfirm"
              value={formik.values.passwordConfirm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            {
              formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
              <span>{formik.errors.passwordConfirm}</span>
            }
          </div>

          <input type="submit" value="Register" id="submit" />
        </form>
      </section>
    </main>
  )
}

export default Register