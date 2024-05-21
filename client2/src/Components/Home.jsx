import animationData from "../assets/lotie/dev.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Mainpage() {
  const Dev = () => {
    return (
      <Player
        speed={0.5}
        autoplay
        loop
        src={animationData}
        style={{ height: "300px", width: "300px" }}
      ></Player>
    );
  };
  return (
    <div className="bg-[url('./assets/confetti-doodles.png')] h-full w-full bg-contain p-4 rounded-xl">
      <div className="flex justify-between">
        <div>
          <h4 className=" font-righteous  text-slate-50">
            Hi there 👋
            <span className=" text-sky-500  mx:text-2xl text-lg">
              {" "}
              I'm Nehemiah Mogambi
            </span>
          </h4>
          <h4 className=" font-orbitron  text-slate-50 uppercase text-2xl">
            A full stack web developer
          </h4>
        </div>
        <div>
          <svg fill="white" viewBox="0 0 16 16" height="60px" width="60px">
            <path d="M10.478 1.647a.5.5 0 10-.956-.294l-4 13a.5.5 0 00.956.294l4-13zM4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" />
          </svg>
        </div>
      </div>
      <div className="grid mx:flex">
        <div>{Dev()}</div>
        <div className=" flex items-center justify-center">
          <h3 className=" text-slate-50 font-serif  bg-violet-900 rounded-lg p-2 bg-opacity-40 text-pretty">
            I'm a passionate Full Stack web developer with experience developing
            Full Stack web applications with Javascript, Node.js , React.js,
            Mongo db, mySQL, tailwind css, html5, css and Cloud Technologies
            like firebase. I've mastered many Javascript libraries. I am
            strongly interested in learning new technologies and implementing
            them in my projects. I'm a self-motivated and hardworking individual
            who is always ready to learn new things and work in a team.
          </h3>
        </div>
      </div>
    </div>
  );
}
