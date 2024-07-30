function AboutUs() {
  return (
    <div
      id="about"
      className="container mx-auto px-4 py-12 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
    >
      <h1 className="text-5xl font-bold mb-12 text-center">About Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-400">
          Our History
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students for
          over three decades. Our journey started with a vision to create an
          institution that nurtures the potential of every student.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-400">
          Our Vision & Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg bg-white text-gray-800 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Vision
            </h3>
            <p>
              To create a learning environment that fosters academic excellence,
              critical thinking, and ethical values.
            </p>
          </div>
          <div className="border p-6 rounded-lg bg-white text-gray-800 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Mission
            </h3>
            <p>
              To empower students with the knowledge, skills, and values needed
              to thrive in a dynamic world.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-400">
          Principal's Message
        </h2>
        <blockquote className="italic border-l-4 border-gray-300 pl-6 text-lg leading-relaxed">
          "At Springdale, we believe in nurturing the potential of every student
          and guiding them towards a successful future."
        </blockquote>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-yellow-400">
          Our Facilities
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>
            Sports facilities including a playground, gymnasium, and swimming
            pool
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
