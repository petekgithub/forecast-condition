import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-pink-100 h-[100vh] w-full">
      <h1>Welcome</h1>
      <Link to={"/forecast"}>
        <button
          type="button"
          className="justify-center items-center h-42 w-36 rounded bg-yellow-200 m-1 border-2 border-sky-900"
        >
          Let's See Forecast Results
        </button>
      </Link>
    </main>
  );
};

export default Home;
