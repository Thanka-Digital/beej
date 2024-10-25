import { cn } from "@/helpers/styles/cn";

interface ITextareaProps
  extends FormComponentVariantProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  id?: string;
}

export default function Textarea(props: ITextareaProps) {
  const {
    className = "",
    label = "",
    id = "",
    textColor,
    bgColor,
    borderColor,
    ...rest
  } = props;

  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          "w-full rounded-md border disabled:cursor-not-allowed p-2",
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
