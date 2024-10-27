import { cn } from "@/helpers/styles/cn";

interface IRadioInputProps
  extends Pick<
      FormComponentVariantProps,
      "accentColor" | "borderColor" | "textColor"
    >,
    React.HTMLProps<HTMLInputElement> {
  className?: string;
  label: string;
  name: string;
  id: string;
}

export default function RadioInput(props: IRadioInputProps) {
  const {
    className = "",
    label,
    id,
    name,
    textColor,
    accentColor,
    // variant,
    borderColor,
    ...rest
  } = props;

  return (
    <div className="flex gap-1">
      <input
        id={id}
        type="radio"
        name={name}
        className={cn(
          "rounded-md border p-2 disabled:cursor-not-allowed",
          borderColor,
          accentColor,
          className
        )}
        {...rest}
      />
      <label htmlFor={id} className={cn("font-medium", textColor)}>
        {label}
      </label>
    </div>
  );
}
