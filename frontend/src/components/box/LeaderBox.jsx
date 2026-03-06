import team1 from "../../assets/leader/team-1.jpg";
import team2 from "../../assets/leader/team-2.jpg";
import team3 from "../../assets/leader/team-3.jpg";

const LeaderBox = () => {
  const leaders = [
    {
      id: 1,
      image: team1,
      name: "Alex Sams",
      position: "Founder & CEO",
      thought:
        "Driving the vision for a globally accessible and sustainable e-commerce experience.",
    },
    {
      id: 2,
      image: team2,
      name: "Sarah Chen",
      position: "Head of Design",
      thought:
        "Ensuring every product is a perfect blend of modern aesthetics and functionality.",
    },
    {
      id: 3,
      image: team3,
      name: "David Lee",
      position: "Operations Lead",
      thought:
        "Managing the global supply chain for efficiency and ethical labor practices.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 pt-10">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition flex flex-col items-center"
          >
            <img
              src={leader.image}
              alt="Leaders photo"
              className="w-36 h-36 object-cover rounded-full border-4 border-red-400 mb-4"
            />
            <h1 className="text-xl font-semibold">{leader.name}</h1>
            <h1 className="text-red-500 font-semibold">{leader.position}</h1>
            <p className="font-extralight text-slate-500">{leader.thought}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeaderBox;
