import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'ao8yhuha',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2025-01-10', // use current date (YYYY-MM-DD) to target the latest API version
})

const data = await client.fetch(`count(*)`)
console.log(`Number of documents: ${data}`)





// import { createClient } from "@sanity/client";

// const client = createClient({
//     projectId: "ao8yhuha",
//     dataset: "production",
//     useCdn: true, // set to `false` to bypass the edge cache
//     apiVersion: "2025-01-10", // use current date (YYYY-MM-DD) to target the latest API version
//     requestTagPrefix: "website", // Added to every request
// });

// const query = '*[_type = "posts"]';
// // const params = {}

// client
//     .fetch(query, { headers: { "Access-Control-Allow-Origin": "*" } })
//     .then((posts) => {
//         console.log("All posts:");
//         posts.forEach((post) => {
//             console.log(`${post.title}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//

// fetch("https://ao8yhuha.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22posts%22%5D+&perspective=raw&tag=sanity.studio.vision", {
//     "headers": {
//         "accept": "application/json",
//         "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//         "priority": "u=1, i",
//         "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//         "sec-ch-ua-mobile": "?1",
//         "sec-ch-ua-platform": "\"Android\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "cross-site",
//         "cookie": "sanitySession=skSqRNbNwdOlaqRNqBAPPaaBQNtOva0mAyvwY2pyZC6aZ5vfJCZPlY5uU4ClBZTO5ABtxNNtYpkjDRbm"
//     },
//     "referrerPolicy": "same-origin",
//     "body": null,
//     "method": "GET"
// }).then(res => {
//     console.log(res)
// });
