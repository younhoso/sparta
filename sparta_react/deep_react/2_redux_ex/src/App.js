import { createContext, useContext, useState } from "react";

const MyStore = createContext();

function App() {
  const [name, setName] = useState("test");
  return (
    <div className="App">
      <MyStore.Provider value={{name, setName}}>
        <MyStoreConsumer />
      </MyStore.Provider>
    </div>
  );
}

const MyStoreConsumer = () => {
  const {name, setName} = useContext(MyStore);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => {setName("aaaa")}}>이름 바꾸기</button>
    </div>
  )
}

export default App;
