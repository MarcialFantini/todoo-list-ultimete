
import './App.css';
import { ListOfTodos } from './components/ListOfTodos';
import { FormTodo } from './components/FormTodo';
import { ShareTodo } from './components/ShareTodo';
import { useEffect, useState } from 'react';
import { Initial, New } from './utils/steps';
import { TitleAndBtn } from './components/TitleAndBtn'

function App() {


  const [stateGlobal, setStateGlobal] = useState({
    step: Initial,
    select: 0,
    todos: [],
    visible: []
  })


  useEffect(() => {
    console.log(stateGlobal)
  }, [stateGlobal])

  return (
    <div className="App">

      {stateGlobal.step === New ? <FormTodo
        setStateGlobal={setStateGlobal}
        stateGlobal={stateGlobal}
      /> : null}
      {stateGlobal.step === Initial ? <div>
        <ShareTodo
          stateGlobal={stateGlobal}

          setStateGlobal={setStateGlobal}
        >
          <TitleAndBtn
            setStateGlobal={setStateGlobal}
            stateGlobal={stateGlobal}
          />
        </ShareTodo>
        <ListOfTodos

          setStateGlobal={setStateGlobal}
          stateGlobal={stateGlobal}
        />
      </div> : null}


    </div>
  );
}

export default App;
