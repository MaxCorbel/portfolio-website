'use client';

import Image from 'next/image';

export default function HomePage() {
  // return (
  //   <main className="h-full w-full">
  //     <div className="flex justify-between items-center w-full h-20 px-4 bg-slate-300 text-black">
  //       <div className="flex-auto bg-slate-500 text-center">01</div>
  //       <div className="flex-auto text-center">
  //         <h1 className="font-inter font-medium text-5xl text-fuchsia-900">Max Corbel</h1>
  //       </div>
  //       <div className="flex-auto bg-slate-500 text-center">03</div>
  //     </div>
  //   </main>
  // )
  return (
    <main className="h-full w-full">
      <div className="flex flex-col items-center">
        <Image
          src="/graduated.png"
          width={504}
          height={672}
          className="hidden md:block rounded-full"
          alt="Picture of Max Corbel in graduate robes standing outside of Williams-Brice Stadium."
        />
      </div>
      <div>
        <h1 className="font-inter md:text-2l">
          Welcome!
        </h1>
      </div>

      <div className="flex justify-evenly flex-row bg-blue-400">
        <div className="bg-red-400 text-center">TEST 1</div>
        <div className="text-center">TEST 2</div>
        <div className="bg-red-400 text-center">TEST 3</div>
        <div className="text-center">TEST 4</div>
      </div>
    </main>
  );
}
