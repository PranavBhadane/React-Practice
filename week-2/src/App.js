
import './App.css';
import ParentComponent from './DataBinding_And_EventHandling Day 1/ParentComponent';
import PropsDemoComponent from './DataBinding_And_EventHandling Day 1/PropCCDemo';
import CountDemo from './DataBinding_And_EventHandling Day 1/DemoStateEventCount';
import DemoEventSecond from './DataBinding_And_EventHandling Day 1/DemoEventSecond';
import StateDemoFirstCC from './DataBinding_And_EventHandling Day 1/StateDemoFirstCC';
import Form from './DataBinding_And_EventHandling Day 1/FormStateHandling2';
import ItemForm from './DataBinding_And_EventHandling Day 1/ItemForm';
import { HooksStateComp } from './Hooks/HooksStateComp';
import { CounterEffectDemo } from './Hooks/UseEffectCounter';
import ChildOne from './Hooks/ChildOne';

import React,{createContext, useContext} from "react";
export const Context = createContext();


function App() {
  return (
    <div className="App">
      {/* <ParentComponent/>
      <PropsDemoComponent techno="React" module="Data Binding"/>
      <CountDemo/>
      <DemoEventSecond/>
      <StateDemoFirstCC />
      <Form/>
      <ItemForm/>
      <HooksStateComp/> */}
      <CounterEffectDemo/>
      <Context.Provider value={{data:"this is globle"}} ><ChildOne/></Context.Provider>

    </div>
  );
}

export default App;
