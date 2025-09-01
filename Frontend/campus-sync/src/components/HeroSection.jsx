import Lottie from "lottie-react";
import Learning from "../Learning.json";
import { HiAcademicCap } from "react-icons/hi";
import { MdPeopleOutline } from "react-icons/md";
function HeroSection() {
  return (
    <section className="bg-gray-50 px-10 py-20">
      <div className="container mx-auto flex max-h-max items-center justify-between gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-blue-900">
            Welcome to <span className="text-blue-500">Campusly</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-lg text-gray-700 lg:mx-0">
            A smart platform for students and faculties to access resources,
            share notes, and collaborate effortlessly.
          </p>
          <div className="flex gap-6 px-1 py-4">
            <button className="flex items-center gap-0.5 rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg hover:bg-blue-700">
              <HiAcademicCap size="1.3em" />
              for Students
            </button>
            <button className="flex items-center gap-1 rounded-xl bg-gray-200 px-6 py-3 text-gray-600 hover:bg-gray-300">
              <MdPeopleOutline size="1.3em" />
              For facultys
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Lottie animationData={Learning} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
