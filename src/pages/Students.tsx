/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

const Students = () => {
  const { activities, achievements, studentCouncil } = useSelector(
    (state: any) => state.students
  );

  return (
    <div
      id="students"
      className="container mx-auto px-4 py-12 bg-gradient-to-r from-indigo-500 to-cyan-500 "
    >
      <h1 className="text-5xl font-bold mb-12 text-center">
        Student Life at Springdale Public School
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Extracurricular Activities
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          At Springdale, we believe in nurturing well-rounded individuals. Our
          students have access to a wide range of extracurricular activities:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity: any, index: any) => (
            <div
              key={index}
              className="border p-6 rounded-lg bg-white text-gray-800 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-fuchsia-600">
                {activity.name}
              </h3>
              <p className="">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Student Achievements
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          We're proud of our students' accomplishments both in and out of the
          classroom:
        </p>
        <ul className="list-disc list-inside space-y-4 leading-relaxed bg-white p-6 rounded">
          {achievements.map((achievement: any, index: any) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Student Council
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          Our Student Council plays a vital role in school life, representing
          the student body and organizing events:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 bg-white text-gray-800">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Position
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {studentCouncil.map((member: any, index: any) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {member.position}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {member.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {member.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Students;
