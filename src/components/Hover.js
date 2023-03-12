import { useHover } from "../hooks/hover";

function Hover() {
  const { hovered, ref } = useHover();
    console.log(ref)
  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default Hover