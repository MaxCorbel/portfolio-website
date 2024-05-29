'use client';

import { FaceSmileIcon, FaceFrownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function MouseTracker() {
  const [tracking, setTracking] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <div id="mouse-tracker">
      <button
        id='track-toggle-button'
        className="hover:bg-slate-300 text-black"
        onClick={() => {
          if (tracking) {
            setTracking(false);
            document.onmousemove = null;
          } else {
            setTracking(true);
            document.onmousemove = (event) => {
              setMouse({ x: event.clientX, y: event.clientY });
            }
          }
        }}
      >
        {tracking ? 'Disable' : 'Enable'}
      </button>
      <div
        id="display-div"
        className="bg-white text-black"
      >
        <p id="display-div-text">{`${mouse.x}, ${mouse.y}`}</p>
      </div>
    </div>
  );
}

function DragDiv() {
  const [dragging, setDragging] = useState(false);
  const dragElement = (element: HTMLElement) => {
    let x1 = 0, y1 = 0, x2 = 0, y2 = 0
    const closeDragElement = () => {
      setDragging(false);
      document.onmouseup = null;
      document.onmousemove = null;
    };
    const dragMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      setDragging(true);
      x2 = event.clientX;
      y2 = event.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };
    const elementDrag = (event: MouseEvent) => {
      event.preventDefault();
      x1 = x2 - event.clientX;
      y1 = y2 - event.clientY;
      x2 = event.clientX;
      y2 = event.clientY;
      element.style.top = `${(element.offsetTop - y1)}px`;
      element.style.left = `${(element.offsetLeft - x1)}px`;
    };
    const header = document.getElementById(`${element.id}-header`)
    if (header?.onmousedown) {
      header.onmousedown = dragMouseDown;
    } else {
      element.onmousedown = dragMouseDown;
    }
  };
  return (
    <div id="drag-div">
      <div id="drag-target" className="absolute bg-transparent text-center text-fuchsia-500 cursor-grab top-1/2 left-1/2">
        <div
          id="drag-target-header"
          onMouseDown={() => {
            dragElement(document.getElementById('drag-target')!);
          }}
        >
          {dragging ? <FaceSmileIcon className='h-40 w-40' /> : <FaceFrownIcon className='h-40 w-40' />}
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  // return (
  //   <main></main>
  // );
  // * V2
  return (
    <main
      id="main"
      className="flex min-h-full min-w-full flex-col bg-emerald-500"
    >
      <MouseTracker />
      <DragDiv />
    </main>
  );
  // * V1
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-center text-white">
  //     <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
  //       <h1 className="font-ubuntu text-5xl font-normal text-white hover:font-bold hover:text-fuchsia-500 hover:text-[4.75rem] tracking-tight sm:text-[5rem]">
  //         Welcome!
  //       </h1>
  //       {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
  //         <Link
  //           className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
  //           href="https://create.t3.gg/en/usage/first-steps"
  //           target="_blank"
  //         >
  //           <h3 className="text-2xl font-bold">First Steps →</h3>
  //           <div className="text-lg">
  //             Just the basics - Everything you need to know to set up your
  //             database and authentication.
  //           </div>
  //         </Link>
  //         <Link
  //           className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
  //           href="https://create.t3.gg/en/introduction"
  //           target="_blank"
  //         >
  //           <h3 className="text-2xl font-bold">Documentation →</h3>
  //           <div className="text-lg">
  //             Learn more about Create T3 App, the libraries it uses, and how to
  //             deploy it.
  //           </div>
  //         </Link>
  //       </div> */}
  //     </div>
  //   </main>
  // );
}
