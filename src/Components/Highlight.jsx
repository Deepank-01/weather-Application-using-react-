import React from 'react';

const Highlight = ({ data }) => {
  return (
    <div className='bg-slate-600 text-slate-200 flex flex-col items-center gap-3 p-2'>
      <h2 className='mt-4 text-2xl font-bold'>{data.title}</h2>

      <div className='mt-4'>
        <span className='text-5xl font-bold'>{data.val}</span>
        <span className='text-2xl'>{data.unit}</span>
      </div>

      {data.direction && (
        <div className='mt-4 flex justify-between'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
          <h2 className='text-xl ml-2'>E</h2>
        </div>
      )}

      {data.title === 'Humidity' && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
      )}
    </div>
  );
};

export default Highlight;
