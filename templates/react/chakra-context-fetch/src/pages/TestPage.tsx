import { AppContext, AppStateDispatch } from "@/providers/Context/context";
import { AppContextActionType } from "@/providers/reducers/type";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

export default function TestPage() {
  const user = useContext(AppContext);

  return (
    <div className="flex flex-col gap-3 p-4">
      <h1 className="mb-3 text-4xl font-bold">Test Page</h1>

      <p>User name: {user.user?.name as string}</p>
      <p>User address: {user.user?.address as string}</p>

      <div className="flex gap-4 mt-4">
        <UserWithDetailBtn />
        <RemoveUserBtn />
      </div>
    </div>
  );
}

function UserWithDetailBtn() {
  const userDispatch = useContext(AppStateDispatch);

  return (
    <Button
      onClick={() => {
        userDispatch({
          type: AppContextActionType.SET_USER,
          payload: { name: "User A", address: "L1" },
        });
      }}
      className=""
      variant="solid"
      colorPalette="blue"
    >
      Add user with few details
    </Button>
  );
}

function RemoveUserBtn() {
  const userDispatch = useContext(AppStateDispatch);

  return (
    <Button
      onClick={() => {
        userDispatch({ type: AppContextActionType.RESET_USER, payload: {} });
      }}
      colorscheme="success"
      variant="outline"
      className="rounded-md"
    >
      Reset user
    </Button>
  );
}
