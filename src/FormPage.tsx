function FormPage() {
  const submit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const targetUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    fetch(`${targetUrl}`, {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={submit}
        className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
      >
        <div>
          <h2 className="text-base font-semibold leading-7 text-white">
            Personal Information
          </h2>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div className="sm:col-span-3">
            <label
              htmlFor="FName"
              className="block text-sm font-medium leading-6 text-white"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="FName"
                id="FName"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="LName"
              className="block text-sm font-medium leading-6 text-white"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="LName"
                id="LName"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="Message"
              className="block text-sm font-medium leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="Message"
                name="Message"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button className="glow-on-hover" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
