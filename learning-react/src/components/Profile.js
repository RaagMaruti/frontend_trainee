"use client";

import { useContext } from "react";
import { ProfileContext } from "../app/page.js";

import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t, i18n } = useTranslation();

  function handleClick(){
    const newLang = i18n.language === "en" ? "gu" : "en";
    i18n.changeLanguage(newLang);
  }

  // context variables are global but read-only
  const username = useContext(ProfileContext);
  return (
		<div style={{ margin: "1em" }}>
			{t("namste", { name: username }, { defaultValue: "lang not available" })}
			<br />
			{t("hello", { name: username }, { defaultValue: "lang not available" })}
			<br />
			{t("cash", {
				value: 20000.2,
				minimumFractionDigits: 3,
				currency: "INR",
			})}
			<br />
			{t("count", { count: 1 })}
			<br />
			{t("count", { count: 100 })}
			<br />

			{t("msgs")}
			<br />
			<button
				style={{ border: "1px solid black", padding: "2px" }}
				onClick={handleClick}
			>
				change language
			</button>
		</div>
	);
}
