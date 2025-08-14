import './App.css';
import { ColourListComponent } from './ColourListComponent.js';
import HeaderComponent from './Function/HeaderComp.js';
import { ConditionalStatement } from './Function/ConditionalTwo.js';
import { NestedFunction } from './NestedFuc.js';
import { CondtionalOne } from './Function/ConditionalOne.js';
import MyFirst from './ClassComponents/myFirstCC.js';
import HellowLostDemoComp from './ClassComponents/HelloListDemoComp.js';
import ConditionalRendering from './ClassComponents/ConditionalRendering.js';
import ConditionalLogical from './ClassComponents/ConditionalLogical.js';
import StateChangeLC from './ClassComponents/StateChangeLC.js';
import StateDemoFirstCC from './ClassComponents/StateDemoFirstCC.js';
import { DemoComponent } from './ClassComponents/DemoComponent.js';
import ConditionalIf from './ClassComponents/Conditional_if_CC.js';
import MessageComponent from './ClassComponents/Sharper_1.js';
import { FcInlineStyleComponent } from './StylingDemos/FcInline.js';
import ClassComponentInline from './StylingDemos/ClassCompInline.js';
import DemoCSSModule from './StylingDemos/demo.js';
import usingExternalCss from './StylingDemos/UsingExternal.js';
import UsingExternalCss from './StylingDemos/UsingExternal.js';



function App() {

  let lang=[
    {name:"JavaScript", id:1},
    {name:"Python", id:2},
    {name:"Java", id:3},
    {name:"C++", id:4},
    {name:"C#", id:5},
    {name:"PHP", id:6}
  ]

  let depinfo = {
    deptCode: "CS101",
    deptName: "Computer Science",
    deptLocation: "Building A",
    deptHead: "Dr. Smith"
  }

  return (
    <div className="App">
       <HeaderComponent/>
      <header className="App-header">
       {/* <NestedFunction/> */}
       {/* <hr style={{ width: "80%", border: "1px solid white", margin: "20px 0" }} /> */}
       {/* <ColourListComponent/> */}
       <hr style={{width:"80%", border:"1px solid white", margin:"20px 0" }}/>
       {/* <h2>Conditional Statement Example</h2> */}
       {/* <ConditionalStatement/>
       <CondtionalOne favlang="Python" num={10}/> */}
       {/* <MyFirst/> */}
       {/* <HellowLostDemoComp languages={lang}/> */}
       {/* <ConditionalRendering technology="React"/>
       <ConditionalLogical favlang="JavaScript"/>
       <StateChangeLC/> */}
       {/* <StateDemoFirstCC/>
       <DemoComponent depinfo={depinfo}/>
       <ConditionalIf/>
       <MessageComponent/> */}
       {/* <FcInlineStyleComponent/>
        <hr style={{ width: "80%", border: "1px solid white", margin: "20px 0" }} />
        <ClassComponentInline/>
        <DemoCSSModule/> */}
        <UsingExternalCss/>

      </header>
    </div>
    
  );
}

export default App;
