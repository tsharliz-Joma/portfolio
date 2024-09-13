"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const BackX = React.forwardRef(({ className, children, ...props }, ref) => {
  const router = useRouter();
  return <div></div>;
});
// const Back = React.forwardRef(({ className, children, ...props }, ref) => {
//   const router = useRouter();
//   return (
//     <div
//       className={cn(
//         "fixed cursor-pointer w-[22px] h-[22px] p-[1px] right-[8px] top-[15px] sm:w-[50px] sm:h-[50px] sm:right-[20px] sm:top-[20px]",
//         className
//       )}
//       onClick={() => router.back()}
//     >
//       <X className="w-full h-auto" />
//     </div>
//   );
// });

BackX.displayName = "Back";
export { BackX };
