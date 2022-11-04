

function App() {
  return (
    <>
      <nav  className='text-[30px] text-center mt-5 flex-center text-white' >
        Airport Mangement System
      </nav>

      <div className="m-6 p-6 flex justify-center gap-3">
        
        <input className="rounded-xl w-[500px] hover:border-transparent " placeholder='Eneter text'></input>
        <button className=" text-2xl text-white border-2 border-white rounded-xl p-1 cursor-pointer   ">Search </button>
      </div>

    </>
    
  );
}

export default App;


