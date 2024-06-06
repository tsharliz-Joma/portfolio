"use client";
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {Mail} from "lucide-react";

const ContactCard = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <div className="bg-red rounded-xl p-6">
      <div>
        <p className="text-[18px] text-white font-bold">Get in touch!</p>
      </div>
      <div className="flex items-center justify-between pt-4">
        <input
          className="w-3/5 bg-white border border-gray-300 text-black rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="w-1/3 font-bold bg-white text-[18px] text-black rounded-[10px] tracking-[1.5px] py-2 px-4 hover:bg-black hover:text-white transition duration-300 ease-in-out focus:outline-none"
          onClick={onOpen}>
          Send
        </button>
      </div>

      <Modal open={isOpen} onClose={onClose}>
        <ModalHeader>
          <p className="text-lg font-bold">Message Sent</p>
        </ModalHeader>
        <ModalBody>
          <Mail
            size={40}
            color="red"
            style={{margin: "0 auto", marginBottom: "16px"}}
          />
          <p style={{textAlign: "center"}}>
            Your message has been sent successfully!
          </p>
        </ModalBody>
        <ModalFooter>
          <Button auto flat color="error" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ContactCard.displayName = "Contact Card";
export default ContactCard;
