import Button from "@/components/form/button/Button";

export interface IModalProps {
  message: string;
  positive: {
    text: string;
    textColor?: FormComponentVariantProps["textColor"];
    bgColor?: FormComponentVariantProps["bgColor"];
    borderColor?: FormComponentVariantProps["borderColor"];
    onClick: () => void;
  };
  negative: {
    text: string;
    textColor?: FormComponentVariantProps["textColor"];
    bgColor?: FormComponentVariantProps["bgColor"];
    borderColor?: FormComponentVariantProps["borderColor"];
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

export default function Modal(props: IModalProps) {
  const { message, icon, positive, negative } = props;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/40">
      <div className="fixed z-20 p-5 transition-all -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="flex flex-col justify-center gap-2 py-8 bg-white rounded-md shadow-lg px-7 bg">
          <section className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center gap-2">
              {icon}
              <p className="font-semibold text-black">{message}</p>
            </div>
            <div className="flex items-center justify-end w-full gap-2">
              <Button
                className="px-4 py-1 rounded-md"
                textColor={negative.textColor ?? "text-white"}
                bgColor={negative.bgColor ?? "bg-danger"}
                borderColor={negative.borderColor ?? "border-danger"}
                onClick={negative.onClick}
              >
                {negative.text}
              </Button>
              <Button
                className="px-4 py-1 rounded-md"
                textColor={negative.textColor ?? "text-white"}
                bgColor={negative.bgColor ?? "bg-success"}
                borderColor={negative.borderColor ?? "border-success"}
                onClick={positive.onClick}
              >
                {positive.text}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
