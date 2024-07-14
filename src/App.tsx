import { Component } from 'react';
import Home from './pages/Home/Home';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

interface IProps {}
interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
  }
}

export default App;
