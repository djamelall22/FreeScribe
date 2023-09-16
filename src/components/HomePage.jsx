export const HomePage = () => {
  return (
    <main className='flex-1 flex flex-col p-4 justify-center gap-3 sm:gap-4 md:gap-5 text-center pb-20'>
      {/* title */}
      <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl '>
        Free
        <span className=' text-blue-400'>Scribe</span>
      </h1>
      {/* subtitle */}
      <h3 className='font-medium md:text-lg '>
        Record{' '}
        <span className='text-blue-400'>
          <i className='fa-solid fa-arrow-right'></i>
        </span>{' '}
        Transcribe{' '}
        <span className='text-blue-400'>
          <i className='fa-solid fa-arrow-right'></i>
        </span>{' '}
        Translate
      </h3>
      {/* btn and input */}
      <button className='flex items-center text-base justify-between gap-4 w-72 mx-auto my-4 max-w-full'>
        <p>Record</p>
        <i className='fa-solid fa-microphone'></i>
      </button>
    </main>
  );
};
