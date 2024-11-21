import React, { useEffect } from "react";
import Slider from "../Components/Slider";
import Aos from "aos";
import 'aos/dist/aos.css'
import CountUp from "react-countup";
import { FaBook, FaLanguage, FaLightbulb, FaStar, FaUser, FaVideo } from "react-icons/fa";

const Home = () => {
  const userCount = 1500;
  const lessonCount = 10;
  const vocabularyCount = 200;
  const tutorialCount = 10;

  useEffect(() => {
    Aos.init({
      duration: 1000,  
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);  
  return (
    <div className="w-11/12 mx-auto">
      <Slider></Slider>
      <div className=" bg-slate-600 rounded-xl text-gray-200 p-5">
        <h1 className="flex justify-center text-3xl font-bold"> <span className="text-blue-500" data-aos="fade-right">Welcome to </span> <span data-aos="fade-left" className="ml-2 text-green-500">Lingo Bingo</span></h1>
        <p className="mt-5 text-center">
          Learning Spanish vocabulary with LINGO BINGO is both effective and
          enjoyable. Whether you’re a beginner or looking to brush up on your
          Spanish skills, our platform offers a comprehensive, user-friendly
          approach to mastering the language. Here's how we make learning
          Spanish vocabulary easy and fun. <strong className="text-white">Our Mission:-</strong> At LINGO BINGO, our
          mission is to provide an engaging and accessible platform that helps
          you master the Spanish language, focusing on building a strong
          foundation of vocabulary. We believe that a rich vocabulary is the key
          to fluency and confidence in any language, and with the right tools
          and resources, anyone can succeed in learning Spanish. We are
          committed to offering you a personalized and interactive experience,
          combining the power of technology and language learning techniques to
          make mastering Spanish both fun and rewarding.
        </p>
      </div>

      <div className=" bg-gray-100 py-10 px-5 rounded-lg mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Success at a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="count-box p-4 bg-white rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center items-center mb-4">
              <FaUser className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-2xl font-bold">
              <CountUp start={0} end={userCount} duration={5} />
            </p>
          </div>
          <div
            className="count-box p-4 bg-white rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center items-center mb-4">
              <FaBook className="text-4xl text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Lessons</h3>
            <p className="text-2xl font-bold">
              <CountUp start={0} end={lessonCount} duration={5} />
            </p>
          </div>
          <div
            className="count-box p-4 bg-white rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-center items-center mb-4">
              <FaLanguage className="text-4xl text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold">Vocabulary</h3>
            <p className="text-2xl font-bold">
              <CountUp start={0} end={vocabularyCount} duration={5} />
            </p>
          </div>
          <div
            className="count-box p-4 bg-white rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex justify-center items-center mb-4">
              <FaVideo className="text-4xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold">Tutorials</h3>
            <p className="text-2xl font-bold">
              <CountUp start={0} end={tutorialCount} duration={5} />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Learning Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-100 rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practice Every Day</h3>
              <p className="text-lg text-gray-700">
                Consistency is key! Try to practice a little bit every day to improve your vocabulary.
              </p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <FaStar className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Use Flashcards</h3>
              <p className="text-lg text-gray-700">
                Flashcards are a great tool to memorize new words. Create your own or use an app to help.
              </p>
            </div>
            <div className="p-6 bg-orange-100 rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learn in Context</h3>
              <p className="text-lg text-gray-700">
                Learning new words in sentences or real-life situations helps with retention.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 py-16 px-6 mb-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Features</h2>
        <div className="space-y-6">
          <div className="bg-slate-600 p-6 rounded-lg shadow-md">
            <h3 className=" font-semibold text-gray-50 mb-3">Interactive Quizzes</h3>
            <p className="text-gray-50">
              Soon, you’ll be able to take interactive quizzes to test your vocabulary knowledge and improve your retention.
            </p>
          </div>
          <div className="bg-slate-600 p-6 rounded-lg shadow-md">
            <h3 className=" font-semibold text-gray-50 mb-3">Offline Mode</h3>
            <p className="text-gray-50">
              Our upcoming offline mode will allow you to continue learning without an internet connection.
            </p>
          </div>
          <div className="bg-slate-600 p-6 rounded-lg shadow-md">
            <h3 className=" font-semibold text-gray-50 mb-3">Personalized Learning Paths</h3>
            <p className="text-gray-50">
              We’re working on personalized learning paths to better match your learning style and goals.
            </p>
          </div>
          <div className="bg-slate-600 p-6 rounded-lg shadow-md">
            <h3 className=" font-semibold text-gray-50 mb-3">Progress Tracking</h3>
            <p className="text-gray-50">
              We will soon introduce progress tracking, where you can monitor your learning milestones and improvements.
            </p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Home;
