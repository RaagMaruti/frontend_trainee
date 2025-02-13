const projectId = "7dzx18r8";
const dataset = "production";

async function fetchHeader(q) {
  const url = `https://${projectId}.apicdn.sanity.io/v2025-01-20/data/query/${dataset}?query=${q}`;
  await fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      let body = document.querySelector("body");
      let section = document.createElement("section");
      body.appendChild(section);
      section.className = result._type;

      // logo
      let logoLink = document.createElement("a");
      section.appendChild(logoLink);
      logoLink.href = result.logo.url;
      let logoImg = document.createElement("img");
      logoLink.appendChild(logoImg);
      logoImg.src = result.logo.image.asset.url;

      let div = document.createElement("div");
      section.appendChild(div);

      //links
      let links = document.createElement("ul");
      div.appendChild(links);
      result.links.forEach((l) => {
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
      a.innerHTML = result["cta"]["name"];
      a.href = result["cta"]["url"];
    })
    .catch((err) => console.log(err));
}

async function fetchComponents(q) {
  const compurl = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
  const result = await fetch(compurl)
    .then((res) => res.json())
    .then(({ result }) => {
      return result;
    })
    .catch((err) => console.log(err));
  const comps = result.components;
  console.log(comps)

  for (let i = 0; i < comps.length; i++) {
    if (comps[i]._type == "hero") {
      let q = `*[_type == "home"][0]{
          components[_type == "hero"][0]->{
          tagline, paragraph,
          cta->{name, url},
          image{asset->{url}}}
        }`;
      const url = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
      await fetch(url)
        .then((res) => res.json())
        .then(({ result }) => {
          const hero = result.components;
          console.log(hero)

          let body = document.querySelector("body");
          let section = document.createElement("section");
          body.appendChild(section);
          section.className = "hero";

          // div1
          let div1 = document.createElement("div");
          section.appendChild(div1);

          let tagline = document.createElement("p");
          div1.appendChild(tagline);
          tagline.className = "tagline";
          tagline.innerHTML = hero.tagline;

          let paragraph = document.createElement("p");
          div1.appendChild(paragraph);
          paragraph.className = "paragraph";
          paragraph.innerHTML = hero.paragraph;

          let button = document.createElement("button");
          div1.appendChild(button);
          button.className = "cta";

          let cta = document.createElement("p");
          div1.appendChild(cta);

          let a = document.createElement("a");
          button.appendChild(a);
          a.innerHTML = hero.cta.name;
          a.href = hero.cta.url;

          //div2
          img = document.createElement("img");
          section.appendChild(img);
          img.src = hero.image.asset.url;
        })
        .catch((err) => console.log(err));
    } else if (comps[i]._type == "clients") {
      let q = `*[_type == "home"][0]{
          components[_type == "clients"][0]->{
          paragraph,
          heading,
          images[]{asset->{url}}
          }
        }`;
      const url = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
      await fetch(url)
        .then((res) => res.json())
        .then(({ result }) => {
          const clients = result.components;

          let body = document.querySelector("body");
          let section = document.createElement("section");
          body.appendChild(section);
          section.className = "clients";

          //p
          let heading = document.createElement("p");
          section.appendChild(heading);
          heading.innerHTML = clients.heading;
          heading.className = "heading";

          //p
          let paragraph = document.createElement("p");
          section.appendChild(paragraph);
          paragraph.innerHTML = clients.paragraph;
          paragraph.className = "paragraph";

          //div for images
          let div = document.createElement("div");
          section.appendChild(div);

          clients.images.forEach((c) => {
            let img = document.createElement("img");
            div.appendChild(img);
            img.src = c.asset.url;
          });
        })
        .catch((err) => console.log(err));
    }
  }
}

const queryHeader = `
   *[_type == "header"][0]{
    _type,
    cta->{name, url}, 
    links[]->{name, url}, 
    logo->{url, image{asset->{url}}
   }
 }
`;

fetchHeader(queryHeader)
const queryComponents = `*[_type == "home"][0]{components}`;
fetchComponents(queryComponents);

// footer fetching code

// async function fetchFooter(q) {
//   const url = `https://${projectId}.apicdn.sanity.io/v2025-01-20/data/query/${dataset}?query=${q}`;
//   const result = await fetch(url)
//     .then((res) => res.json())
//     .then(({ result }) => {
//       return result;
//     })
//     .catch((err) => console.log(err));

//   console.log(result);

//   let body = document.querySelector("body");
//   let section = document.createElement("section");
//   body.appendChild(section);
//   section.className = result["name"];

//   // Big div 1 --
//   let bigDiv1 = document.createElement("div");
//   section.appendChild(bigDiv1);

//   // logo
//   let logoLink = document.createElement("a");
//   bigDiv1.appendChild(logoLink);
//   logoLink.href = result["logo"]["url"];
//   let logoImg = document.createElement("img");
//   logoLink.appendChild(logoImg);
//   logoImg.src = result["logo"]["image"]["asset"]["url"];

//   // copyright
//   let copyright = document.createElement("div");
//   bigDiv1.append(copyright);
//   copyright.innerHTML = result["copyright"];

//   let div = document.createElement("div");
//   bigDiv1.appendChild(div);

//   // socials
//   result.s
// }

// const queryFooter = `
//   *[_type == "footer"][0]{
//     name,
//     copyright,
//     contactMessage{title,
//                   placeholder},
//     logo->{name,
//           url,
//           image{asset->{url}}},
//     socials[]->{name,
//               image{asset->{url}}},
//     nav[]{title,
//           links[]->{name, url}}
//   }
// `;
// fetchFooter(queryFooter);
