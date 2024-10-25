import { cn } from "@/helpers/styles/cn";
import React from "react";

interface IButtonProps
  extends FormComponentVariantProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  processing?: boolean;
  processingText?: string;
}

export default function Button(props: IButtonProps) {
  const {
    type = "button",
    onClick,
    disabled = false,
    processing = false,
    processingText = "Processing...",
    className = "",
    textColor = "text-neutral",
    bgColor = "bg-primary",
    borderColor,
    children,
    ...rest
  } = props;

  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "flex gap-2 items-center px-4 py-2 disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-gray-400 disabled:text-gray-800 disabled:border-gray-400 disabled:hover:bg-gray-400 disabled:hover:text-gray-800 disabled:hover:border-gray-400",
        textColor,
        bgColor,
        borderColor && `border-2 ${borderColor}`,
        className
      )}
      {...rest}
    >
      {processing ? processingText : children}
    </button>
  );
}
