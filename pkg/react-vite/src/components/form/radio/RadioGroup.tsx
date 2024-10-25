import { cn } from "@/helpers/styles/cn";
import RadioInput from "./Radio";

interface IRadioGroupProps
  extends Pick<
    FormComponentVariantProps,
    "accentColor" | "textColor" | "borderColor"
  > {
  name: string;
  radioOptions: { label: string; id: string; value: string }[];
  className?: string;
  flexDirection?: "flex-row" | "flex-col";
}

export default function RadioGroup(props: IRadioGroupProps) {
  const {
    flexDirection = "flex-row",
    className = "",
    accentColor,
    textColor,
    borderColor,
    name,
    radioOptions,
  } = props;

  return (
    <div className={cn("flex gap-2", flexDirection, className)}>
      {radioOptions.map((opt) => (
        <RadioInput
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
