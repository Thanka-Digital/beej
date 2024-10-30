import { toast } from "sonner";
import { Link } from "react-router-dom";

// LAYOUTS
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";

// COMPONENTS
import Button from "@/components/form/button/Button";
import Tooltip from "@/components/global/tooltip/Tooltip";

// CUSTOM HOOKS
import { useModal } from "@/hooks/portal/useModal";

export default function HomePage() {
  const { openPortal, PortalModal } = useModal({
    message: "Open the toast?",
    positive: {
      text: "Yes",
      colorScheme: "success",
      className: "font-semibold text-white",
      onClick: () => toast.success("Toast opened"),
    },
    negative: {
      text: "No",
      colorScheme: "danger",
      className: "font-semibold text-white",
      onClick: () => {},
    },
  });

  return (
    <main>
      <MaxWidthWrapper className="flex flex-col items-center justify-center w-screen h-screen gap-2">
        <h1 className="text-3xl font-bold">
          Start by editing files in pages folder
        </h1>

        <Tooltip message="Click to open modal">
          <Button
            className="font-semibold rounded-md"
            padding="base"
            colorscheme="danger"
            variant="ghost"
            onClick={openPortal}
          >
            Hover me
          </Button>
        </Tooltip>

        <Link to="/test" className="underline text-primary">
          Go to test page to view context in action
        </Link>

        <PortalModal />
      </MaxWidthWrapper>
    </main>
  );
}
