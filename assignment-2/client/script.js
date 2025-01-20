const projectId = "7dzx18r8";
const dataset = "production";

async function fetchHeader(q) {
  const url = `https://${projectId}.apicdn.sanity.io/v2025-01-20/data/query/${dataset}?query=${q}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      return result;
    })
    .catch((err) => console.log(err));

  let body = document.querySelector("body");
  let section = document.createElement("section");
  body.appendChild(section);
  section.className = result["name"];

  // logo
  let logoLink = document.createElement("a");
  section.appendChild(logoLink);
  logoLink.href = result["logo"].url;
  let logoImg = document.createElement("img");
  logoLink.appendChild(logoImg);
  logoImg.src = result["logo"].image.asset.url;
  logoImg.style.height = "1.5em";

  let div = document.createElement("div");
  section.appendChild(div);

  //links
  let links = document.createElement("ul");
  div.appendChild(links);
  result["links"].forEach((l) => {
    let li = document.createElement("a");
    links.appendChild(li);
    li.innerHTML = l.name;
    li.href = l.url;
  });

  // cta
  let button = document.createElement("button");
  div.appendChild(button);
  button.className = "cta";
  let a = document.createElement("a");
  button.appendChild(a);
  a.innerHTML = result["cta"].name;
  a.href = result["cta"].url;
}

const queryHeader = `*[_type == "header"][0]{name, cta->{name, url}, links[]->{name, url}, logo->{name, url, image{asset->{url}}}}`;
fetchHeader(queryHeader);

async function fetchFooter(q) {
  const url = `https://${projectId}.apicdn.sanity.io/v2025-01-20/data/query/${dataset}?query=${q}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      return result;
    })
    .catch((err) => console.log(err));

  console.log(result);
}

// const queryFooter = `*[_type == "footer"][0]`;
// fetchFooter(queryFooter);

// async function fetchComponents(q) {
//   const url = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
//   const result = await fetch(url)
//     .then((res) => res.json())
//     .then(({ result }) => {
//       return result;
//     })
//     .catch((err) => console.log(err));

//   const components = result["components"];

//   body = document.querySelector("body");
//   components.forEach((c) => {
//     section = document.createElement("section");
//     section.className = c.name;
//     section.innerHTML = c.name;
//     body.appendChild(section);

//     switch (c.name) {
//       case "hero":
//         break;
//     }

//     console.log(c.name);
//   });
// }

// const queryComponents = `*[_type == "home"][0]{components}`;
// fetchComponents(queryComponents);
