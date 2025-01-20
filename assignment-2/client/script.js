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
  logoLink.href = result["logo"]["url"];
  let logoImg = document.createElement("img");
  logoLink.appendChild(logoImg);
  logoImg.src = result["logo"]["image"]["asset"]["url"];

  let div = document.createElement("div");
  section.appendChild(div);

  //links
  let links = document.createElement("ul");
  div.appendChild(links);
  result["links"].forEach((l) => {
    let li = document.createElement("a");
    links.appendChild(li);
    li.innerHTML = l["name"];
    li.href = l["url"];
  });

  // cta
  let button = document.createElement("button");
  div.appendChild(button);
  button.className = "cta";
  let a = document.createElement("a");
  button.appendChild(a);
  a.innerHTML = result["cta"]["name"];
  a.href = result["cta"]["url"];
}

const queryHeader = `
  *[_type == "header"][0]{
  name, 
  cta->{name, 
        url}, 
  links[]->{name, 
        url}, 
  logo->{name, 
        url, 
        image{asset->{url}}}
  }
`;
fetchHeader(queryHeader);

async function fetchComponents(q) {
  const url = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      return result;
    })
    .catch((err) => console.log(err));

  // console.log(result.components);

  result.components.forEach((comp) => {
    if (comp._type == "hero") {
      const getHero = async () => {
        let q = `*[_type == "home"][0]{
          components[0]->{
          tagline, paragraph,
          cta->{name, url},
          image{asset->{url}}}
        }`;
        const url = `https://${projectId}.apicdn.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
        const result = await fetch(url)
          .then((res) => res.json())
          .then(({ result }) => {
            return result;
          })
          .catch((err) => console.log(err));

        const hero = result.components;
        console.log(hero);

        let body = document.querySelector("body");
        let section = document.createElement("section");
        body.appendChild(section);
        section.className = comp._type;

        // div1
        let div1 = document.createElement("div");
        section.appendChild(div1);

        let tagline = document.createElement("p");
        let paragraph = document.createElement("p");
        let cta = document.createElement("p");
        let button = document.createElement("button");
        let a = document.createElement("a");

        div1.appendChild(tagline);
        div1.appendChild(paragraph);
        div1.appendChild(cta);
        div1.appendChild(button);
        button.appendChild(a);

        tagline.className = "tagline";
        tagline.innerHTML = hero.tagline;

        paragraph.className = "paragraph";
        paragraph.innerHTML = hero.paragraph;

        button.className = "cta";
        a.innerHTML = hero.cta.name;
        a.href = hero.cta.url;

        //div2
        let div2 = document.createElement("div");
        section.appendChild(div2);
        img = document.createElement("img");
        div2.appendChild(img);
        img.src = hero.image.asset.url;
      };
      getHero();
    }
  });

  // body = document.querySelector("body");
  // components.forEach((c) => {
  //   section = document.createElement("section");
  //   section.className = c.name;
  //   body.appendChild(section);

  //   switch (c.name) {
  //     case "hero":
  //       break;
  //   }
  // });
}

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
