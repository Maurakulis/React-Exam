import { useFormik } from "formik"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import * as Yup from 'yup'
import UsersContext from "../../contexts/UsersContext"


const Login = () => {
  const navigate = useNavigate()
  const [failedLogIn, setFailedLogIn] = useState(false)
  const { users, setCurrentUser } = useContext(UsersContext)

  const values = {
    email: '',
    password: '',
  }

  const validationShema = Yup.object({
    email: Yup.string()
      .email('This input must be a valid email')
      .required('Input must be filled'),
    password: Yup.string()
      .required('Input must be filled'),
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationShema,

    onSubmit: (values) => {
      const loggedInUser = users.find(user => user.email === values.email && user.password === values.password)
      if (loggedInUser) {
        setCurrentUser(loggedInUser)
        setFailedLogIn(false)
        navigate('/home')
      } else {
        setFailedLogIn(true)
      }
    }
  })

  return (
    <main>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <h2>Login to MonkeBook</h2>

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

          <input type="submit" value="Register" id="submit" />
          {
            failedLogIn && <span>Incorrect inputs</span>
          }

        </form>
      </section>
    </main>
  )
}

export default Login