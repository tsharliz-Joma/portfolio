'use client';
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useMediaQuery } from 'react-responsive';
import { X } from 'lucide-react';

const AboutCard = React.forwardRef(({ content, className, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const scrollPositionRef = React.useRef(null);
  const isDesktop = useMediaQuery({ minWidth: '640px' });

  React.useEffect(() => {
    scrollPositionRef.current = window.scrollY;
  }, []);

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
          style={{
            backgroundImage: isDesktop
              ? `url('/static/img/${props.modalBg}-desktop.svg')`
              : `url('/static/img/${props.modalBg}-mobile.svg')`,
          }}
          className={`bg-skytopia-mobile bg-cover bg-no-repeat container relative inset-0 w-screen bg-transparent overflow-y-auto`}
        >
          <div className='absolute top-0 right-0 flex justify-end w-full h-auto'>
            <div className='bg-white rounded m-2'>
              <X onClick={closeModal} />
            </div>
          </div>
          <div className='flex items-center justify-center min-h-screen '>
            <Dialog.Panel className='w-full bg-white transform rounded-md p-6 shadow-lg'>
              <div className='flex flex-col'>
                <p className='text-3xl font-bold'>{content.title}</p>
                <p className='text-sm'>{content.description}</p>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});

AboutCard.displayName = 'About Card';
export default AboutCard;
