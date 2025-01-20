const projectId = "7dzx18r8";
const dataset = "production";

// async function fetchImg(q) {
//   const url = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
//   const result = await fetch(url)
//     .then((res) => res.json())
//     .then(({ result }) => {
//       return result;
//     })
//     .catch((err) => console.log(err));

//   for (let i = 0; i < result.length; i++) {
//     let poster = `https://cdn.sanity.io/images/${projectId}/${dataset}/`;
//     imageUrl = result[i].image.asset._ref;
//     imageUrl = imageUrl.replaceAll("-", ".");
//     imageUrl = imageUrl.slice(6);
//     imageUrl = imageUrl.replace(".", "-");
//     try {
//       console.log(result[i].text);
//       document.getElementById(result[i]).src = poster + imageUrl;
//     } catch (error) {
//       //   console.log(err);
//     }
//   }
// }

// const queryMedia = `*[_type == "media"] | order(text asc)`;
// fetchImg(queryMedia);

async function fetchComponents(q) {
  const url = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      return result;
    })
    .catch((err) => console.log(err));

  const components = result.components;

  body = document.querySelector("body");  
  components.forEach((c) => {
    section = document.createElement("section");
    body.appendChild(section);
    p = document.createElement("p");
    section.appendChild(p);
    document.querySelector("p").innerHTML = c.name;
    console.log(c.name)
  });

  // for (let i = 0; i < result.length; i++) {
  //   try {
  //     console.log(result[i].text);
  //     document.getElementById(result[i]).innerHTML = result[i].content;
  //   } catch (err) {
  //     //   console.log(err);
  //   }
  // }
}

const queryComponents = `*[_type == "home"][0]{components}`;
fetchComponents(queryComponents);
