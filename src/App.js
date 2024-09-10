import './App.css';
import ArrayWithUseState from './Components/HooksExamples/UseStateHookExamples/ArrayWithUseState';
import FirstStateWithHooks from './Components/HooksExamples/UseStateHookExamples/FirstStateWithHooks';
import HandlePerviousState from './Components/HooksExamples/UseStateHookExamples/HandlePeviousState';
import ObjectWithUseState from './Components/HooksExamples/UseStateHookExamples/ObjectWithUseSatet';
import ProductsWithUseState from './Components/HooksExamples/UseStateHookExamples/ProductsWithUseState';
import Counter from './Components/HooksExamples/UseStateHookExamples/StateClassEx';
import StringWithHooks from './Components/HooksExamples/UseStateHookExamples/StringWithHooks';

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
      <ListRenederingEx /> 
      <FormHandlingEx />

      <FragmantEx />
      <RefsExample /> 
      <ContextProvider value={
              {
                name: "Mo2men",
                age: 22
              }
      }>
        <CompC /> 
      </ContextProvider>
        <CompB /> 

      <GETHTTPEx />
      <PostExample />
      <Counter /> 
      <FirstStateWithHooks />
      <StringWithHooks /> 
      <HandlePerviousState />
      <ObjectWithUseState /> 
      <ArrayWithUseState />*/}
      <ProductsWithUseState />

    </div>
  );
}

export default App;
