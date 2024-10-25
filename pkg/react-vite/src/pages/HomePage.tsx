import { toast } from "sonner";

// Hooks
import { useModal } from "@/hooks/portal/useModal";

// Components
import Input from "@/components/form/input/Input";
import Button from "@/components/form/button/Button";
import Select from "@/components/form/select/Select";
import Textarea from "@/components/form/textarea/Textarea";
import RadioGroup from "@/components/form/radio/RadioGroup";
import CheckboxGroup from "@/components/form/checkbox/ChecboxGroup";

// Layouts
import MaxWidthWrapper from "@/layout/wrapper/MaxWidthWrapper";
import Tooltip from "@/components/global/tooltip/Tooltip";

export default function HomePage() {
  const { openPortal, PortalModal } = useModal({
    message: "Are you sure you want to delete this item?",
    icon: <span className="text-3xl text-danger">🚨</span>,
    positive: {
      text: "Yes",
      onClick: () => toast.success("Deleted item"),
    },
    negative: {
      text: "No",
      onClick: () => toast.error("Cancelled deletion"),
    },
  });
  return (
    <main>
      <MaxWidthWrapper>
        <h1>Hello Vite + React!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Input type="email" disabled />
        <Textarea
          label="Comment"
          id="comment"
          placeholder="Text area"
          textColor="text-secondary"
          borderColor="border-info"
        />
        <Select
          options={[
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
          ]}
          label="Options"
          id="opt"
        />

        <RadioGroup
          name="rd"
          radioOptions={[
            { label: "Option 1", id: "opt1", value: "opt1" },
            { label: "Option 2", id: "opt2", value: "opt2" },
          ]}
          accentColor="accent-primary"
          textColor="text-danger"
          flexDirection="flex-col"
        />

        <CheckboxGroup
          name="chk"
          checkboxOptions={[
            { label: "Check 1", id: "chk1", value: "chk1" },
            { label: "Check 2", id: "chk2", value: "chk2" },
          ]}
          accentColor="accent-info"
          textColor="text-warning"
        />

        <Button
          className="mt-6 rounded-lg"
          onClick={() => toast.success("Clicked button")}
          bgColor="bg-primary"
          textColor="text-black"
          borderColor="border-success"
          // disabled={true}
        >
          Click Me
        </Button>

        <Button bgColor="bg-danger" textColor="text-white" onClick={openPortal}>
          Delete
        </Button>

        <Tooltip message="This is tooltip">Hover over me</Tooltip>

        <PortalModal />
      </MaxWidthWrapper>
    </main>
  );
}
