"use client";
import * as React from "react";
import {Dialog, Transition} from "@headlessui/react";
// import {XMark} from "@heroicons/react/24/outline";

const AboutCard = React.forwardRef(({content, ...props}, ref) => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div ref={ref} className="absolute flex w-full h-auto rounded-3xl  border-black border-2 ">
      <div className="flex w-full h-[400px] p-4">
        <button
          className="w-full rounded px-4 py-2 text-xl"
          onClick={openModal}>
          {content.title}
        </button>
      </div>

      <Transition show={open} as={React.Fragment}>
        <Dialog
          open={open}
          onClose={closeModal}
          className="container fixed inset-0 w-full bg-[#0000007F] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen ">
            <Dialog.Panel className="w-full bg-white transform rounded-md p-6 shadow-lg">
              <div className="flex flex-col">
                <h4 className="text-lg font-bold">{content.title}</h4>
                <p className="text-sm">{content.description}</p>
              </div>
              <button className="ml-auto mt-4" onClick={closeModal}>
                {/* <XMark className="h-6 w-6" /> */}
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});

AboutCard.displayName = "About Card";
export default AboutCard;
