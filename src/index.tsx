import * as React from 'react';
import { render } from 'react-dom';

const unusedvar = 'unusedvar';

function unusedFunction() {
  return 'empty';
}

const App = (): React.ReactElement => (
  <div>
    <p>hello world</p>
  </div>
);

export default App;

render(<App />, document.getElementById('root'));