"use client";
import React, { createContext, useContext, forwardRef, useState, useCallback, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { cn } from "@/lib/utils";

const ModalContext = createContext(null);

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a <Modal /> tag");
  }

  return context;
};

const NextUiModal = forwardRef(({ className, ...props }, ref) => {
  return (
    <Modal ref={ref} className={cn("w-full", className)}>
      {children}
    </Modal>
  );
});
NextUiModal.displayName = "Next UI Modal";

export { NextUiModal };
