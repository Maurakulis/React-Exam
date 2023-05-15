import { useFormik } from 'formik'
import { useContext } from 'react'
import * as Yup from 'yup'
import PostsContext, { POSTS_ACTION_TYPES } from '../../contexts/PostsContext'
import { useNavigate } from 'react-router'

const AddNewPost = () => {
  const { dispatch } = useContext(PostsContext)
  const navigate = useNavigate()

  const values = {
    title: '',
    description: '',
    imageUrl: '',
  }

  const validationShema = Yup.object({
    title: Yup.string()
      .min(2, 'Title must be at leat 2 symbols length ')
      .max(20, 'Title must be less than 20 symbols length')
      .required('Input must be filled'),
    description: Yup.string()
      .min(5, 'Title must be at leat 5 symbols length ')
      .max(250, 'Title must be less than 250 symbols length')
      .required('Input must be filled'),
    imageUrl: Yup.string().required('Input must be filled'),
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema: validationShema,
    onSubmit: (values) => {
      dispatch({
        type: POSTS_ACTION_TYPES.ADD,
        title: values.title,
        description: values.description,
        imageUrl: values.imageUrl,
      })
      navigate('/home')
    }
  })

  return (
    <main>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <h2>Add your Monkepost here</h2>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            {
              formik.touched.title && formik.errors.title &&
              <span>{formik.errors.title}</span>
            }
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            {
              formik.touched.description && formik.errors.description &&
              <span>{formik.errors.description}</span>
            }
          </div>
          <div>
            <label htmlFor="imageUrl">Image Url</label>
            <input type="url" id="imageUrl" name="imageUrl"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} />
            {
              formik.touched.imageUrl && formik.errors.imageUrl &&
              <span>{formik.errors.imageUrl}</span>
            }
          </div>
          <input type="submit" value="Add new" />
        </form>
      </section>
    </main>
  )
}

export default AddNewPost