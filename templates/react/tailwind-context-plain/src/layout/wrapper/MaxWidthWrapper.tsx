import { cn } from "@/helpers/styles/cn";
import { PropsWithChildren } from "react";

interface IMaxWidthWrapperProps extends PropsWithChildren {
  className?: string;
}

export default function MaxWidthWrapper({
  children,
  className = "",
}: IMaxWidthWrapperProps) {
  return <div className={cn("max-w-[90%] mx-auto", className)}>{children}</div>;
}
