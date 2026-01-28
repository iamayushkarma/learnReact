import { usePracticeContext } from "./context/practiceContext";

function ChildComponent() {
  const { value } = usePracticeContext();
  return <h1 className="text-3xl! mt-12">{value}</h1>;
}

export default ChildComponent;
