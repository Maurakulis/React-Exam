const Register = () => {
  return (
    <main>
      <section className="register">
        <h2>Create an Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="Email" id="email" />
          <input type="password" placeholder="Password" id="password" />
          <input type="password" placeholder="Repeat Password" id="password_repeat" />
          <input type="submit" value="Register" id="submit" />
        </form>
      </section>
    </main>
  )
}

export default Register