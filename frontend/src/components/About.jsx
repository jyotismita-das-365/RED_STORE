import aboutHistory from "../assets/aboutpic/about-history.jpg";
import aboutMission from "../assets/aboutpic/about-mission.jpg";
import LeaderBox from "./box/LeaderBox";

const About = () => {
  return (
    <>
      <div className="bg-red-100">
        <h1 className="text-5xl font-extrabold p-10 pt-24 pb-5 text-center">
          Our Story: Built on Passion
        </h1>
        <p className="pb-24 p-8 text-center text-xl">
          At RedStore, we believe that the right gear can elevate any journey.
          We are more than just a store; we are a community built for
          performance and style.
        </p>
      </div>

      <div className="p-5 pt-12">
        <h1 className="underline decoration-red-500 text-4xl font-bold">
          Our Mission
        </h1>
        <p className="text-xl text-slate-600 pt-5">
          Our purpose is to sustainably make the pleasure and benefits of
          **high-quality products** accessible to everyone. We strive to curate
          a collection that blends innovation, durability, and contemporary
          style.
        </p>
        <p className="text-xl text-slate-600 pt-5">
          We are committed to ethical sourcing and reducing our environmental
          impact, ensuring that your purchase is one you can feel good about.
        </p>
        <img src={aboutMission} alt="" />
        <img src={aboutHistory} alt="" />
      </div>

      <div className="p-5 pt-12">
        <h1 className="underline decoration-red-500 text-4xl font-bold">
          Our Journey
        </h1>
        <p className="text-xl text-slate-600 pt-5">
          Founded in **2015**, RedStore started as a small local venture by a
          group of passionate designers. Our initial focus was simple: create
          products that last.
        </p>
        <p className="text-xl text-slate-600 pt-5">
          Today, we have expanded globally, but our core values remain the same:
          **Quality, Integrity, and Customer Focus.** We continue to innovate,
          driven by the desire to meet the evolving needs of our customers.
        </p>
      </div>

      <div className="p-5 pt-12">
        <h1 className="underline decoration-red-500 text-4xl font-bold">
          Meet the Leadership Team
        </h1>
        <LeaderBox />
      </div>
    </>
  );
};

export default About;
