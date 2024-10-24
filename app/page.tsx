import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className="
      h-screen bg-slate-800
      ">

        <div className="flex justify-center items-center p-4 md:justify-evenly">

          <div className="bg-cyan-800 p-4">
            <p className="bg-cyan-500 p-4">Test</p>
            <p className="bg-cyan-600 p-4">Test</p>
            <p className="bg-cyan-500 p-4">Test</p>
          </div> 
          
          <div className="bg-cyan-800 p-4">
            <p className="bg-cyan-500 p-4">Test</p>
            <p className="bg-cyan-600 p-4">Test</p>
            <p className="bg-cyan-500 p-4">Test</p>
          </div>

          <div className="bg-cyan-800 p-4">
            <p className="bg-cyan-500 p-4">Test</p>
            <p className="bg-cyan-600 p-4">Test</p>
            <p className="bg-cyan-500 p-4">Test</p>
          </div>

        
        </div>

        <div className="flex justify-center items-center w-auto">
          <button className="
          bg-sky-500 px-4 py-2 font-bold text-lg rounded-lg hover:bg-red-400 transition duration-1000 hover:-translate-y-2">Click me</button>
        </div>

      </div>
    </>
  );
}
