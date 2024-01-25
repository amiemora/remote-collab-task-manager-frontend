import "./App.css";
import AutoResizableBox from "./components/layout/AutoResizableBox";
import { Counter } from "./components/counter/Counter";
import List from "./components/callback/List";
import Memo from "./components/memo/Memo";
import Redcuer from "./components/reducer/Reducer";
import Ref from "./components/ref/Ref";
import ThemedComponent from "./components/theme/ThemedComponent";
import { ThemeProvider } from "./app/contexts/ThemeContext";
import TimerControlPanel from "./components/imperative/TimerControlPanel";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Counter />
        <Ref />
        <Redcuer />
        <ThemedComponent />
        <List />
        <Memo />
        <TimerControlPanel />
        <AutoResizableBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
