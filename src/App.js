import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Components from './components';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Components />
      </ErrorBoundary>
    </div>
  );
}

export default App;
