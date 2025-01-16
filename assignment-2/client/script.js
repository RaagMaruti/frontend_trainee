const projectId = "7dzx18r8";
const dataset = "production";

function compare(a, b) {
  if (a.text < b.text) {
    return -1;
  }
  if (a.text > b.text) {
    return 1;
  }
  return 0;
}

async function fetchText(q) {
  const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      return result;
    })
    .catch((err) => console.log(err));

  result.sort(compare);
  for (let i = 0; i < result.length; i++) {
    try {
      document.getElementById(result[i]).innerHTML = result[i].content;
      console.log(result[i].text);
    } catch (err) {
      //   console.log(err);
    }
  }
}

const queryHeading = encodeURIComponent(`*[_type == "heading"]`);
fetchText(queryHeading);

const queryParagraph = encodeURIComponent(`*[_type == "paragraph"]`);
fetchText(queryParagraph);

async function fetchImg(q) {
  const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${q}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      return result;
    })
    .catch((err) => console.log(err));

  result.sort(compare);
  for (let i = 0; i < result.length; i++) {
    let poster = `https://cdn.sanity.io/images/${projectId}/${dataset}/`;
    imageUrl = result[i].image.asset._ref;
    imageUrl = imageUrl.replaceAll("-", ".");
    imageUrl = imageUrl.slice(6);
    imageUrl = imageUrl.replace(".", "-");
    try {
      document.getElementById(result[i]).src = poster + imageUrl;
      console.log(result[i].text);
    } catch (error) {
      //   console.log(err);
    }
  }
}

const queryMedia = encodeURIComponent(`*[_type == "media"]`);
fetchImg(queryMedia);

// let arr = ["a1", "a2", "a3", "a4"]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     document.getElementById(arr[i]).innerHTML = arr[i]
// }
