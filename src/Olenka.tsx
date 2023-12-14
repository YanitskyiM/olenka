import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export function Olenka() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <h1 className="text-7xl font-bold max-w-3xl mb-8">
        <a href="https://www.instagram.com/mazurolena/" target="_blank">
          <b className='text-9xl underline'>Olenka</b>
        </a>{" "}
        <br /> is the best girl in the world
      </h1>
    </>
  );
}
