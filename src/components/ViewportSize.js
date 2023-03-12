import { useViewportSize } from "../hooks/viewportSize";

function ViewportSize() {
  const { width, height } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default ViewportSize