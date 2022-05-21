import './App.css';
import Card from "./Card"
function App() {
  const styles = {
    border: "1px solid red",
    padding: "20px",
    width: "200px",
    margin: "30px auto"
  }
  return (
    <div className="App">
      <Card style_porps={styles}/>
      <Card style_porps={styles}/>
      <Card style_porps={styles}/>
      <div class="add">
        <input id="add-input" />
        <button onClick="addCard()">추가하기</button>
      </div>
    </div>
  );
}

export default App;
