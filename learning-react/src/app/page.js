"use client";

import { createContext } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Counter from "../components/Counter";
import "./i18n";

export const ProfileContext = createContext();

function Element() {
  return <>hello</>;
}

export default function Page() {
  const username = "raag";
  return (
    <div style={{ padding: "1em" }}>
      <ProfileContext.Provider value={username}>
        <WelcomeMessage
          prop={{ weight: "bold", color: "coral" }}
          node={<p>hello</p>}
          arr={[1, 2, 3, 4]}
          func={() => {}}
          ele={<Element />}
        />
      </ProfileContext.Provider>
      <Counter />
    </div>
  );
}
