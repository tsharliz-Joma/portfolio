'use client'
import React from "react";
import {MailIcon} from "@heroicons/react/outline";
import {Dialog} from "@headlessui/react";

const ContactCard = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-red rounded-xl p-6">
      <div>
        <p className="text-[18px] ext-white font-bold">Get in touch!</p>
      </div>
      <div className="flex items-center justify-between pt-4">
        <input
          className="w-3/5 bg-white border border-gray-300 text-black rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="w-1/3 font-bold bg-white text-[18px] text-black rounded-[10px] tracking-[1.5px] py-2 px-4 hover:bg-black hover:text-white transition duration-300 ease-in-out focus:outline-none"
          onClick={handleOpen}>
          Send
        </button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
          <Dialog.Title className="text-2xl font-bold mb-4">
            Message Sent
          </Dialog.Title>
          <MailIcon className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <p className="text-center">
            Your message has been sent successfully!
          </p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 focus:outline-none hover:bg-red-600"
            onClick={handleClose}>
            Close
          </button>
        </div>
      </Dialog>
    </div>
  );
};

ContactCard.displayName = "Contact Card";
export default ContactCard
