"use client";

import { useContext } from "react";
import { ProfileContext } from "../app/page.js";

import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t, i18n } = useTranslation();
  // context variables are global but read-only
  const username = useContext(ProfileContext);
  return (
    <div>
      <p>
        {t(
          "namste",
          { name: username },
          { defaultValue: "lang not available" }
        )}{" "}
        <br />
        {t(
          "hello",
          { name: username },
          { defaultValue: "lang not available" }
        )}{" "}
        <br />
      </p>
    </div>
  );
}
