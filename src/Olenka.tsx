import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
export function Olenka() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <h1>
        <b style={{fontSize: '5rem'}}>Olenka</b> <br /> is the best girl in the world
      </h1>
    </>
  );
}
