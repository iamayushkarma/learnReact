import "./App.css";
import ReactCreateElement from "./modules/m01-jsx-fundamentals-and-advanced/ReactCreateElement";
import FunctionalComponent from "./modules/m02-components-patterns/FunctionalComponent";
import ClassComponent from "./modules/m02-components-patterns/ClassComponent";
import LifeCycleMethods from "./modules/m02-components-patterns/LifecycleMethods";
import ParentComponent from "./modules/m02-components-patterns/props/ParentComponent";
import Counter from "./modules/m03-state-management-comprehensive/Counter";
import StateWithObject from "./modules/m03-state-management-comprehensive/StateWithObject";
import StateWithArrays from "./modules/m03-state-management-comprehensive/StateWithArrays";
import UseReducer from "./modules/m03-state-management-comprehensive/UseReducre";
import UseEffect from "./modules/m04-effects-and-side-effects/UseEffect";
import UseRef from "./modules/m05-refs-and-dom-manipulation/UseRef";
import ParentContext from "./modules/m06-context-api/ParentContext";
import ReactMemo from "./modules/m07-performance-optimization/ReactMemo/ReactMemo";
import UseMemo from "./modules/m07-performance-optimization/UseMemo/UseMemo";
import Search from "./modules/m07-performance-optimization/UseCallback/Search";
import SimpleFromValidation from "./modules/m08-forms/SimpleFromValidation";
import FormValidationFormikYap from "./modules/m08-forms/FormValidationFormikYap";

function App() {
  return (
    <>
      {/* Module 01 */}
      {/* <ReactCreateElement /> */}

      {/* Module 02 */}
      {/* <FunctionalComponent />
      <ClassComponent heading="Counter by class component" />
      <LifeCycleMethods />
      <ParentComponent /> */}

      {/* Module 03 */}
      {/* <Counter />
      <StateWithObject />
      <StateWithArrays />
      <UseReducer /> */}

      {/* Module 04 */}
      {/* <UseEffect /> */}

      {/* Module 05 */}
      {/* <UseRef /> */}

      {/* Module 06 */}
      {/* <ParentContext /> */}

      {/* Module 07 */}
      {/* <ReactMemo />
      <UseMemo />
      <Search /> */}

      {/* Module 08 */}
      {/* <SimpleFromValidation /> */}
      <FormValidationFormikYap />
    </>
  );
}

export default App;
