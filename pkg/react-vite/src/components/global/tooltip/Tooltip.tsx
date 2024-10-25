import { cn } from "@/helpers/styles/cn";
import { autoPlacement, useFloating } from "@floating-ui/react";
import { PropsWithChildren, useState } from "react";

interface ITooltipProps {
  message: string;
}

export default function Tooltip(props: PropsWithChildren<ITooltipProps>) {
  const { children, message } = props;
  const [open, setOpen] = useState(false);
  const { floatingStyles, refs } = useFloating({
    open,
    middleware: [autoPlacement()],
  });

  return (
    <>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={cn(
          "px-2 py-1 text-xs text-black bg-white rounded-md"
          // open ? "block" : "hidden"
        )}
      >
        {message}
      </div>
      <div ref={refs.setReference}>
        {children}
        {/* <TooltipTrigger></TooltipTrigger> */}
      </div>
    </>
  );
}
