function App() {
  try{
    const a = 1
    a = 2222;

  }catch(err) {
    console.log(err)    
  } finally {
    console.log("일 끝났어!")
  }

  return (
    <div className="App">
      a
    </div>
  );
}

export default App;
