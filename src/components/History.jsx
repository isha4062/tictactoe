import React from 'react';

function History({ history, moveTo, currentMove }) {
  return (
    <div className='history-wrapper'>
    <ul className='history'>
      {history.map((_, move) => (
        <li key={move}>
          <button
            className={`btn-move ${move === currentMove ? 'active' : ''}`}
            type="button"
            onClick={() => {moveTo(move)}}
            style={{ fontWeight: move === currentMove ? 'bold' : 'normal' }}
          >
            {move === 0 ? `Start game again` : `Go to move #${move}`}
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default History;
