import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from "https://esm.sh/@sanity/client"

export const client = createClient({
	projectId: "7dzx18r8",
	dataset: "production",
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: "2025-01-13", // use current date (YYYY-MM-DD) to target the latest API version
	// token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
});

// uses GROQ to query content: https://www.sanity.io/docs/groq

const card = await client.fetch('*[_type == "card"]');
console.log()
// let count = 0
// for (let c of card) {
// 	console.log(++count + "numsssss")
// 	console.log(c)
// }

for (let c of card) {
	if (c.slug.current == "hero") {
		console.log(c.heading_ref);
	}
}




// colors
// headings - 4d4d4d
// para - 717171
// green - 4caf4f
// footer - 263238

// fonts - inter