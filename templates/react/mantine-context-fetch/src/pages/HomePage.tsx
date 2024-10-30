import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "@mantine/core";

// LAYOUTS
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";

// CUSTOM HOOKS
import { useModal } from "@/hooks/portal/useModal";

export default function HomePage() {
  const { open, PortalModal } = useModal({
    title: "Open the toast?",
    message: "This will open a toast",
    positive: {
      text: "Yes",
      className: "font-semibold text-white",
      onClick: () => toast.success("Toast opened"),
    },
    negative: {
      text: "No",
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

        <Tooltip label="Click to open modal">
          <Button
            className="font-semibold rounded-md"
            color="red"
            variant="subtle"
            onClick={open}
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
