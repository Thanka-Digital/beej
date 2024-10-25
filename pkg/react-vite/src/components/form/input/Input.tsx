import { cn } from "@/helpers/styles/cn";

interface InputProps
  extends FormComponentVariantProps,
    React.HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  id?: string;
}

export default function Input(props: InputProps) {
  const {
    className = "",
    label = "",
    id = "",
    textColor,
    bgColor,
    // variant,
    borderColor,
    ...rest
  } = props;

  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "w-full rounded-md border p-2 disabled:cursor-not-allowed",
          textColor,
          bgColor,
          borderColor,
          className
        )}
        {...rest}
      />
    </div>
  );
}
