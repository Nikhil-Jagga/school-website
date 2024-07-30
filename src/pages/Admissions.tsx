function Admissions() {
  return (
    <div
      id="admissions"
      className="container mx-auto px-4 py-12 bg-gradient-to-r from-indigo-500 to-cyan-500 "
    >
      <h1 className="text-5xl font-bold mb-12 text-center">Admissions</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Admission Process
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          We welcome new students to join our vibrant learning community. Here's
          how you can apply:
        </p>
        <ol className="list-decimal list-inside space-y-4 leading-relaxed bg-white p-6 rounded">
          <li>Download the admission form from our website.</li>
          <li>Fill out the form completely and accurately.</li>
          <li>Gather all required documents as mentioned in the form.</li>
          <li>
            Submit the completed form along with the documents at the school
            office.
          </li>
          <li>Pay the application fee at the time of submission.</li>
          <li>
            Attend the entrance test/interview if required for your grade level.
          </li>
          <li>Await the results of your application.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Admission Criteria
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          Admission to Springdale Public School is based on the following
          criteria:
        </p>
        <ul className="list-disc list-inside space-y-4 leading-relaxed p-6 bg-white rounded">
          <li>
            Academic merit (based on previous school records and/or entrance
            test results)
          </li>
          <li>Availability of seats in the desired grade level</li>
          <li>Performance in the entrance test (for certain grades)</li>
          <li>Interview performance (if applicable)</li>
          <li>Extracurricular achievements (for senior grades)</li>
        </ul>
        <p className="mt-6 text-lg leading-relaxed text-yellow-400">
          *Please note that meeting the criteria does not guarantee admission.
          Final decisions are at the discretion of the school administration.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Important Dates
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-gray-800 bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Event
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Admission Form Availability
                </td>
                <td className="border border-gray-300 px-4 py-2">March 1st</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Last Date for Submission
                </td>
                <td className="border border-gray-300 px-4 py-2">March 31st</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Entrance Test
                </td>
                <td className="border border-gray-300 px-4 py-2">April 15th</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Announcement of Results
                </td>
                <td className="border border-gray-300 px-4 py-2">April 30th</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Download Admission Form
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center text-white">
          You can download the admission form by clicking the button below:
        </p>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
            Download Admission Form
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-200 text-center">
          Note: This is a demo button. In a real application, it would link to
          the actual form download.
        </p>
      </section>
    </div>
  );
}

export default Admissions;
