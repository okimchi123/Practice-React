export default function FormSection() {
  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(password)
  }

  return (
    <section className="flex flex-col px-6 py-3 mt-10 bg-white shadow-md rounded-sm">
      <h1 className="text-[22px] ">Signup form</h1>
      <form action={signUp} className="flex flex-col items-start ">

        <label htmlFor="email">Email:</label>
        <input className="bg-gray-200 px-4 py-2 rounded-md" id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input className="bg-gray-200 px-4 py-2 rounded-md" id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea className="bg-gray-200 w-[100%] px-2 py-2" id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset className="flex flex-col">
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" />
            Full-time
        </label>
        </fieldset>

        <button className="py-2 px-4 bg-blue-700 text-white rounded-md text-xs mt-3 ">Submit</button>

      </form>
    </section>
  )
}
