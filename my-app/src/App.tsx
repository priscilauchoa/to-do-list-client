import React from 'react';
import "./global.css"
import { useFetchTask, Response } from './components/Task/hooks/useFetchTask';

function App() {

  const data: Response = useFetchTask(
    'https://github.com'
  );

  if (!data.loading) console.log(data);

  return (
    <div className="App">

    </div>
  );
}

export default App;
