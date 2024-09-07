import React from 'react';
import { countAtom } from './store/atom/count';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { evenSelectors } from './Selectors/selector';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRerender />
    </div>
  );
}

function EvenCountRerender() {
  const isEven = useRecoilValue( evenSelectors); // Updated for singular selector
  return <div>{isEven ? "The count is even" : "The count is odd"}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
