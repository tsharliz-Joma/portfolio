'use client';
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import {XMark} from "@heroicons/react/24/outline";

const AboutCard = React.forwardRef(({ content, className, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const scrollPositionRef = React.useRef(window.scrollY);

  const openModal = () => {
    scrollPositionRef.current = window.scrollY;
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    window.scrollTo(0, scrollPositionRef.current);
  };

  return (
    <div
      ref={ref}
      style={{ backgroundColor: props.bg }}
      className={`${className} absolute flex items-center justify-center border-black border-2 w-full min-h-full rounded-b-3xl`}
    >
      <div
        className='flex items-center justify-center w-full'
        onClick={openModal}
      >
        <h2 className='font-bold text-[4rem] tracking-[3.5px] uppercase'>
          {content.title}
        </h2>
      </div>

      <Transition show={open} as={React.Fragment}>
        <Dialog
          open={open}
          onClose={closeModal}
          className='container relative inset-0 w-full bg-transparent overflow-y-auto'
        >
          <div className='flex items-center justify-center min-h-screen '>
            <Dialog.Panel className='w-full bg-white transform rounded-md p-6 shadow-lg'>
              <div className='flex flex-col'>
                <h4 className='text-lg font-bold'>{content.title}</h4>
                <p className='text-sm'>{content.description}</p>
              </div>
              <button className='ml-auto mt-4' onClick={closeModal}>
                {/* <XMark className="h-6 w-6" /> */}
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});

AboutCard.displayName = 'About Card';
export default AboutCard;