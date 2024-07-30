const Faculty = () => {
  const facultyMembers = [
    {
      name: "John Doe",
      position: "Principal",
      qualification: "M.Ed.",
      experience: "20 years",
      specialization: "Educational Administration",
      bio: "Dr. John Doe has been leading Springdale Public School for the past 10 years. He is passionate about fostering a positive learning environment and implementing innovative teaching methods.",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years",
      specialization: "Physics Education",
      bio: "Ms. Jane Smith has been instrumental in developing our science curriculum. She believes in hands-on learning and regularly organizes science fairs and workshops.",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualification: "M.A. in English Literature",
      experience: "10 years",
      specialization: "Creative Writing",
      bio: "Ms. Emily Johnson heads our English department. She has published several short stories and encourages students to express themselves through writing.",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years",
      specialization: "Applied Mathematics",
      bio: "Mr. Michael Brown makes mathematics engaging through real-world applications. He coaches our Math Olympiad team and has led them to several state-level victories.",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years",
      specialization: "Environmental Science",
      bio: "Ms. Sophia Davis leads our school's Eco Club. She integrates environmental awareness into her lessons and organizes annual field trips to nature reserves.",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years",
      specialization: "Web Development",
      bio: "Mr. David Wilson is a former software engineer who brings industry experience to our computer science classes. He runs coding bootcamps during summer breaks.",
    },
  ];

  return (
    <div
      id="faculty"
      className="container mx-auto px-4 py-12 bg-gradient-to-r from-indigo-500 to-cyan-500 "
    >
      <h1 className="text-5xl font-bold mb-12 text-center">Our Faculty</h1>

      <p className="mb-12 text-lg leading-relaxed text-center text-white">
        At Springdale Public School, we are proud of our dedicated and
        experienced faculty. Our teachers are passionate about education and
        committed to nurturing the potential of every student.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-md bg-white text-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
            <p className="text-gray-600 mb-4">{member.position}</p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
              <dt className="font-semibold">Qualification:</dt>
              <dd>{member.qualification}</dd>
              <dt className="font-semibold">Experience:</dt>
              <dd>{member.experience}</dd>
              <dt className="font-semibold">Specialization:</dt>
              <dd>{member.specialization}</dd>
            </dl>
            <p className="text-sm">{member.bio}</p>
          </div>
        ))}
      </div>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">
          Join Our Team
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-white">
          We are always looking for passionate educators to join our team. If
          you're interested in making a difference in students' lives, check our
          careers page for current openings.
        </p>
        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Open Positions
        </button>
      </section>
    </div>
  );
};

export default Faculty;
