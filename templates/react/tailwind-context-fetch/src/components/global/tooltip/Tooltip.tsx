import { cn } from "@/helpers/styles/cn";
import {
  arrow,
  autoPlacement,
  FloatingArrow,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { PropsWithChildren, useRef, useState } from "react";

interface ITooltipProps
  extends Pick<FormComponentVariantProps, "bgColor" | "textColor"> {
  message: string;
  className?: string;
}

export default function Tooltip(props: PropsWithChildren<ITooltipProps>) {
  const {
    children,
    message,
    bgColor = "bg-black",
    textColor = "text-white",
    className = "",
  } = props;
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);
  const { floatingStyles, refs, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      autoPlacement(),
      arrow({
        element: arrowRef,
      }),
      offset(8),
    ],
  });
  const hover = useHover(context, {
    mouseOnly: true,
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div
        className={cn("w-fit", className)}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </div>
      {open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={cn(
            "px-2 py-1 text-xs rounded-md w-max",
            bgColor,
            textColor
          )}
          {...getFloatingProps()}
        >
          <FloatingArrow ref={arrowRef} context={context} />
          {message}
        </div>
      )}
    </>
  );
}
