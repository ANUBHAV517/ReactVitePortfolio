import React, { useState } from 'react';
import VirtualList from '../component/VirtualList';
import TextField from '../component/textfeild';

function List() {
  const list = Array.from({ length: 10000 }, (_, index) => {
    return index + 1;
  });
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  function handleFirstChange(e) {
    console.log('handle', e.target.value);
    setFirstText(e.target.value);
  }
  function handleSecondChange(e) {
    console.log('handle', e.target.value);
    setSecondText(e.target.value);
  }
  console.log('list', firstText);
  return (
    <>
      <VirtualList items={list} />
      {/* <div className="layout-row align-items-centre justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="first-text">
            <TextField labelText={'First Text'} onChange={handleFirstChange} />
          </div>
          <div data-testid="second-text">
            <TextField
              labelText={'Second Text'}
              onChange={handleSecondChange}
            />
          </div>
          <label className="mt-50 text-align-center">Appended Text is:</label>
          <label className="mt-10 finalText" data-testid="final-text">
            {`${firstText} ${secondText}`}
          </label>
        </section>
      </div> */}
    </>
  );
}

export default List;
