import { useContext } from "react";
import { ProfileContext } from "../pages/Home";

export default function Profile() {
  // context variables are global but read-only
  const username = useContext(ProfileContext);
  return (
    <div>
      <p>
        Hello <b>{username}</b>, how are you ?
      </p>
    </div>
  );
}
