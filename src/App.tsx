import './App.css';
import { FileAnalyzer } from './FileAnalyzer';

function App() {
  return (
    <>
      <FileAnalyzer accept="image/png" />
      <FileAnalyzer accept="image/*" />
      <FileAnalyzer />
    </>
  );
}

export default App;
