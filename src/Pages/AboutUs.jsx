import { FaUserGraduate } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <section className="bg-orange-950 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">About Us</h2>
        <div className="text-lg text-gray-400 mb-6">
          <p>
            Welcome to Lingo Bingo! Our mission is to make language learning engaging, interactive, and accessible for everyone. We believe that learning a new language should be fun, and we’ve created this platform to help you expand your vocabulary and improve your communication skills in a new language.
          </p>
          <p className="mt-4">
            Our team is passionate about helping learners at every stage of their language journey. Whether you're a beginner or looking to refine your skills, Lingo Bingo offers a variety of lessons and features to keep you motivated and on track.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-400 mb-6">
          We aim to break down the barriers of language learning by providing simple, yet effective, resources that cater to learners of all ages. By focusing on vocabulary building and providing tools like personalized learning paths, we ensure that every learner gets the support they need to succeed.
        </p>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" bg-white p-6 rounded-lg shadow-md">
            <div className='flex justify-center'><FaUserGraduate size={40} /></div>
            <h4 className="text-xl font-semibold text-gray-700">Md.Tanin</h4>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className=" bg-white p-6 rounded-lg shadow-md">
          <div className='flex justify-center'><FaUserGraduate size={40} /></div>
            <h4 className="text-xl font-semibold text-gray-700">MD.Nayeem</h4>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className=" bg-white p-6 rounded-lg shadow-md">
          <div className='flex justify-center'><FaUserGraduate size={40} /></div>
            <h4 className="text-xl font-semibold text-gray-700">Mr.Hablu</h4>
            <p className="text-gray-600">UX/UI Designer</p>
          </div>
        </div>
      </div>
    </section>

    );
};

export default AboutUs;