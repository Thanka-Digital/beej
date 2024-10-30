import { cn } from "@/helpers/styles/cn";
import { Button } from "@mantine/core";

export interface IModalProps {
  title: string;
  message: string;
  positive: {
    text: string;
    colorScheme?: string; // TODO: change to theme color types later
    variant?: string; // TODO: change to theme variant types later
    className?: string;
    onClick: () => void;
  };
  negative: {
    text: string;
    colorScheme?: string;
    variant?: string;
    className?: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

export default function CustomModal(props: IModalProps) {
  const { message, icon, positive, negative } = props;

  return (
    <div>
      <div className="flex flex-col justify-center gap-2">
        <section className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center gap-2">
            {icon}
            <p className="font-semibold text-black">{message}</p>
          </div>
          <div className="flex items-center justify-end w-full gap-2">
            <Button
              className={cn("px-4 py-1 rounded-md", negative.className)}
              color={negative.colorScheme ?? "red"}
              variant={negative.variant ?? "filled"}
              onClick={negative.onClick}
            >
              {negative.text}
            </Button>
            <Button
              className={cn("px-4 py-1 rounded-md", positive.className)}
              color={positive.colorScheme ?? "green"}
              variant={positive.variant ?? "filled"}
              onClick={positive.onClick}
            >
              {positive.text}
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
