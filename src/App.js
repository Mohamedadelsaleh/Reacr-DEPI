import React from 'react';
import './App.css';
import ComponenetC from './Components/HooksExamples/UseContextExamples/ComponenetC';
import FetchDataWithUseEffect from './Components/HooksExamples/UseEffectExamples/FetchDataWithUseEffect';
import SearchAboutPost from './Components/HooksExamples/UseEffectExamples/SearchAboutPost';
import SearchWithButton from './Components/HooksExamples/UseEffectExamples/SearchWithButton';
import SideEffectWithClass from './Components/HooksExamples/UseEffectExamples/SideEffectClassEx';
import SideEffectWithUseEffectHook from './Components/HooksExamples/UseEffectExamples/SideEffectWithUseEffectHook';
import UseEffectCleanUp from './Components/HooksExamples/UseEffectExamples/UseEffectCleanUp';
import UseEffectOneTime from './Components/HooksExamples/UseEffectExamples/UseEffectOneTime';
import UseEffectWithConditionalRendering from './Components/HooksExamples/UseEffectExamples/UseEffectWithConditionalRendering';
import RefsExample from './Components/HooksExamples/UseRefHookExs/ClassExample';
import UseRefHookEx from './Components/HooksExamples/UseRefHookExs/UseRefHookEx';
import ArrayWithUseState from './Components/HooksExamples/UseStateHookExamples/ArrayWithUseState';
import FirstStateWithHooks from './Components/HooksExamples/UseStateHookExamples/FirstStateWithHooks';
import HandlePerviousState from './Components/HooksExamples/UseStateHookExamples/HandlePeviousState';
import ObjectWithUseState from './Components/HooksExamples/UseStateHookExamples/ObjectWithUseSatet';
import ProductsWithUseState from './Components/HooksExamples/UseStateHookExamples/ProductsWithUseState';
import Counter from './Components/HooksExamples/UseStateHookExamples/StateClassEx';
import StringWithHooks from './Components/HooksExamples/UseStateHookExamples/StringWithHooks';
import SimpleExmple from './Components/HooksExamples/UseReducerHook/SimpleExmple';
import ComplexExample from './Components/HooksExamples/UseReducerHook/ComplexExample';

export const RoadContext = React.createContext();

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
      <ArrayWithUseState />
      <ProductsWithUseState />
      <SideEffectWithClass />
      <SideEffectWithUseEffectHook /> 
      <UseEffectWithConditionalRendering />
      <UseEffectOneTime /> 
      <UseEffectCleanUp /> 
      <FetchDataWithUseEffect />
      <SearchAboutPost />
      <SearchWithButton />
      <RefsExample />
      <UseRefHookEx />
      <RoadContext.Provider value={"ROOOOOOOOOOOOAD Massssssssssr"}>
          <ComponenetC />
      </RoadContext.Provider>
      <SimpleExmple />*/}
      <ComplexExample />
    </div>
  );
}

export default App;
