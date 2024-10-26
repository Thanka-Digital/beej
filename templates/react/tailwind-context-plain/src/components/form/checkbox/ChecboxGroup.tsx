import { cn } from "@/helpers/styles/cn";
import CheckboxInput from "./Checkbox";

interface ICheckboxGroupProps
  extends Pick<
    FormComponentVariantProps,
    "accentColor" | "textColor" | "borderColor"
  > {
  name: string;
  checkboxOptions: { label: string; id: string; value: string }[];
  className?: string;
  flexDirection?: "flex-row" | "flex-col";
}

export default function CheckboxGroup(props: ICheckboxGroupProps) {
  const {
    flexDirection = "flex-row",
    className = "",
    accentColor,
    textColor,
    borderColor,
    name,
    checkboxOptions,
  } = props;

  return (
    <div className={cn("flex gap-2", flexDirection, className)}>
      {checkboxOptions.map((opt) => (
        <CheckboxInput
          key={opt.id}
          label={opt.label}
          id={opt.id}
          name={name}
          value={opt.value}
          accentColor={accentColor}
          borderColor={borderColor}
          textColor={textColor}
        />
      ))}
    </div>
  );
}
