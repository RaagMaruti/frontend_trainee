"use client"

import { useContext } from "react";
import { ProfileContext } from "../app/page.js";

import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t, i18n } = useTranslation();
  // context variables are global but read-only
  const username = useContext(ProfileContext);
  return (
		<div>
			<p>
				<u>{username}</u>: {t("hello", "default if nothing loaded")}
			</p>
		</div>
	);
}
