import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabs = [
    {
      label: 1,
      content: "tab 1 content here"
    }, 
    {
      label: 2,
      content: "tab 2 content here"
    }, 
    {
      label: 3,
      content: "tab 3 content here"
    }
  ];
  return (
    <div className="App">
      <Tabs tabs = {tabs}/>
    </div>
  );
}

export default App;
