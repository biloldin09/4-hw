// import Count from "./Count";
// import Button from "./Button";
// import Cars from "./Cars";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName } from './redux/store';

function App() {
  const [name, setName] = useState('');
  const names = useSelector(state => state.names.names);
  const dispatch = useDispatch();

  const handleAddName = () => {
    if (name.trim()) {
      dispatch(addName(name));
      setName('');
    }
  };

  return (
    <div>
      {/* <Count />
      <Button />
      <Cars /> */}
      <h3>Names</h3>
      <input
        type="text"
        placeholder="write the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddName}>add</button>
      <ul>
        {names.map((name, index) => (
          <h6 key={index}>{name}</h6>
        ))}
      </ul>
    </div>
  );
}
export default App;
