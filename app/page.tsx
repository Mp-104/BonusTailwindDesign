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

      
      <div className="h-screen bg-slate-600 flex justify-center items-center">
        <p>Hallo där</p>

        {/** Card Design */}
        <div className="bg-cyan-300 max-w-sm md:flex-col">
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Roundel_of_Russia.svg" 
          alt="air force"
          className="h-80 w-80 object-fill" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur amet incidunt dolores omnis ad illum sequi modi porro ducimus totam id sit, recusandae maxime, quia tenetur aliquid, perferendis autem possimus!</p>
          
        </div>

        {/*
        <div  className="bg-cyan-300 max-w-sm ">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Coat_of_arms_of_the_Soviet_Union_%281956%E2%80%931991%29.svg/1024px-Coat_of_arms_of_the_Soviet_Union_%281956%E2%80%931991%29.svg.png" 
          className="h-full w-full object-fill"
          />

        </div>
        */}
        
        
      </div>
    

    </>
  );
}
