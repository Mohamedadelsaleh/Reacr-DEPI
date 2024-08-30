import './App.css';
import ClassComponentExample from './Components/ClassCompEx/ClassCompEx';
import ConditionalRenderingEx from './Components/ConditionalRenderingEx/ConditionalRenderingEx';
import DestructingClassEx from './Components/DestructingClassEx/DestructingClassEx';
import DestructingFunctionalEx from './Components/DestructingFunctionalEx/DestructingFunctionalEx';
import EventHandlingClassEx from './Components/EventHandlingClassEx/EventHandlingClassEx';
import EventHandlingEx from './Components/EventHandlingEx/EventHandlingEx';
import FunctionArrowEx from './Components/FunctionArrowEx/FunctionArrowEx';
import FunctionCompEx from './Components/FunctionCompEx/FunctionCompEx';
import JSXExample from './Components/JSXExample/JSXExample';
import PropsClass from './Components/PropsClassComponet/PropsClassComponet';
import PropsExample from './Components/PropsExample/PropsExample';
import StateExample from './Components/StateExample/StateExample';
import WithoutJSX from './Components/WithoutJSXExample/WithoutJSXExample';
import {ListRenederingEx} from "./Components/ListRenederingEx/ListRenederingEx"
import FormHandlingEx from './Components/FormHandlingEx/FormHandlingEx';

function App() {
  return (
    <div className="App">
      { /* <FunctionCompEx />
      <ClassComponentExample />
      <FunctionArrowEx /> 
      <WithoutJSX />
      <JSXExample />
      <PropsExample name="Hend" courses={ {course1: "HTML", course2: "CSS", course3: "JS"} }/>
      <PropsExample name="Mo2men" age={25}>
          <h4>This is Mo2men Component</h4>
      </PropsExample>
      <PropsExample name="Sara" products={["product 1", "product 2", "Product 3"]} />
      <PropsExample name="Ali">
        <span>This is Ali Component</span>
      </PropsExample>

      <PropsClass fname="ALia" lname="Mohamed"/>
      <PropsClass fname="Ehab" lname="Ahmed" school="AUC"/>
      <PropsClass fname="Fatima" lname="Omar"/> 
      <StateExample /> 
      <DestructingFunctionalEx fname="Abdel-Rahman" lname="Ahmed" age={25}/>
      <DestructingFunctionalEx fname="Eman" lname="Adel" age={22}/>
      <DestructingFunctionalEx fname="Yousef" lname="Omran" age={37}/>
      <DestructingClassEx fname="Asmaa" lname="Mohamed" age={21}/>
      <EventHandlingEx />
      <EventHandlingClassEx /> 
      <ConditionalRenderingEx /> 
      <ListRenederingEx /> */}
      <FormHandlingEx />
    </div>
  );
}

export default App;
