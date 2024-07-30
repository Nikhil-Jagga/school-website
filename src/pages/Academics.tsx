function Academics() {
  return (
    <div
      id="academics"
      className="container mx-auto px-4 py-12 bg-gradient-to-r from-indigo-500 to-cyan-500"
    >
      <h1 className="text-5xl font-bold mb-12 text-center ">Academics</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Our Curriculum
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          At Springdale Public School, we offer a comprehensive curriculum
          designed to nurture well-rounded individuals. Our academic programs
          are divided into three levels:
        </p>
        <div className="space-y-8">
          {[
            {
              level: "Primary (Grades 1-5)",
              subjects: [
                "English",
                "Mathematics",
                "Science",
                "Social Studies",
                "Art",
                "Physical Education",
              ],
            },
            {
              level: "Secondary (Grades 6-10)",
              subjects: [
                "English",
                "Mathematics",
                "Science (Physics, Chemistry, Biology)",
                "Social Studies",
                "Computer Science",
                "Physical Education",
                "Art",
              ],
            },
            {
              level: "Senior Secondary (Grades 11-12)",
              streams: [
                {
                  name: "Science Stream",
                  subjects: [
                    "Physics",
                    "Chemistry",
                    "Biology",
                    "Mathematics",
                    "Computer Science",
                    "English",
                  ],
                },
                {
                  name: "Commerce Stream",
                  subjects: [
                    "Accountancy",
                    "Business Studies",
                    "Economics",
                    "Mathematics",
                    "English",
                  ],
                },
              ],
            },
          ].map((level, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-md bg-white"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-500">
                {level.level}
              </h3>
              {level.subjects ? (
                <ul className="list-disc list-inside space-y-2">
                  {level.subjects.map((subject, subIndex) => (
                    <li key={subIndex}>{subject}</li>
                  ))}
                </ul>
              ) : (
                level.streams.map((stream, streamIndex) => (
                  <div key={streamIndex} className="mb-4">
                    <h4 className="font-semibold text-indigo-600">
                      {stream.name}
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {stream.subjects.map((subject, subIndex) => (
                        <li key={subIndex}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Teaching Methodologies
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles. Our approach includes:
        </p>
        <ul className="list-disc list-inside space-y-4  leading-relaxed bg-white p-5 rounded">
          <li>Interactive classroom discussions</li>
          <li>Hands-on experiments and projects</li>
          <li>Technology-integrated learning</li>
          <li>Collaborative group work</li>
          <li>Individual mentoring and guidance</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-500">
          Educational Resources
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-justify text-white">
          To support our curriculum and teaching methodologies, we provide:
        </p>
        <ul className="list-disc list-inside space-y-4 p-6 leading-relaxed bg-white rounded">
          <li>Digital classrooms equipped with smart boards</li>
          <li>Interactive learning modules</li>
          <li>Access to online educational platforms</li>
          <li>Well-stocked library with both print and digital resources</li>
          <li>Modern science and computer labs</li>
        </ul>
      </section>
    </div>
  );
}

export default Academics;
