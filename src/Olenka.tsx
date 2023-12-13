import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
export function Olenka() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <h1>
        <a href="https://www.instagram.com/mazurolena/" target="_blank">
          <b style={{ fontSize: "5rem" }}>Olenka</b>
        </a>{" "}
        <br /> is the best girl in the world
      </h1>
    </>
  );
}
