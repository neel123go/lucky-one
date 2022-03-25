import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';
import QuestionAnswer from './Components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className="App">
      <h1 className='my-4 text-center'>Clock World</h1>
      <Shop></Shop>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;