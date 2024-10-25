import { cn } from "@/helpers/styles/cn";

interface ISelectProps
  extends FormComponentVariantProps,
    React.HTMLProps<HTMLSelectElement> {
  className?: string;
  options?: ({ label: string; value: string } & dynamicObject)[];
  label?: string;
  id?: string;
}

export default function Select(props: ISelectProps) {
  const {
    className = "",
    label = "",
    id = "",
    options = [],
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
      <select
        id={id}
        className={cn(
          "w-full rounded-md border disabled:cursor-not-allowed p-2",
          textColor,
          bgColor,
          borderColor,
          className
        )}
        {...rest}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
