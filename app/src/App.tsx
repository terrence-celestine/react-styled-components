import "./App.css";
import Header from "./components/Header/Header";
import { Button, GreenButton } from "./components/Button/Button";
function App() {
  return (
    <>
      <Header />
      <Button buttonText="Click Me" />
      <GreenButton buttonText="2nd Button" />
    </>
  );
}

export default App;
