function FormPage() {
    const submit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const targetUrl =
            "https://script.google.com/macros/s/AKfycbxjeanm6xHgYlnxq9t3CXY5xBZPSJhVwA8OpV6ZOUzs8mzGi40f6xQsDp5nigRxQuSE/exec";

        fetch(`${targetUrl}`, {
            method: "POST",
            body: formData,
        });
        console.log(e, formData);
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
                            htmlFor="first-name"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Country
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            About
                        </label>
                        <div className="mt-2">
              <textarea
                  id="about"
                  name="about"
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                        </div>
                    </div>

                    <button className="glow-on-hover"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormPage;
