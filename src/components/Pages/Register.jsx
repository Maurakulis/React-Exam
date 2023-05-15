const Register = () => {
  return (
    <main>
      <section className="register">
        <form onSubmit="" id="register">
          <h2>Create a Monkecount</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email"
              id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password"
              id="password" />
          </div>
          <div>
            <label htmlFor="password_repeat">Repeat password</label>
            <input type="password"
              id="password_repeat" />
          </div>

          <input type="submit" value="Register" id="submit" />
        </form>
      </section>
    </main>
  )
}

export default Register