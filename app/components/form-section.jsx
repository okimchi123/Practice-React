export default function FormSection() {
    const signUp = (formData) =>{
        const email = formData.get("email")
        const password = formData.get("password")
        alert(email + password)
    }
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-25 p-5 border bg-gray-300">
        <h1>Signup form</h1>
        <form action={signUp} className="flex flex-col items-start gap-1">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="joe@schmoe.com"
            className="bg-white p-2 rounded-md"
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="bg-white p-2 rounded-md mb-3" />
          <button className="p-3 bg-white rounded-md self-center hover:bg-gray-200    ">Submit</button>
        </form>
      </section>
    </>
  );
}
