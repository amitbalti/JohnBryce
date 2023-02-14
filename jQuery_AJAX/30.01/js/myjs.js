// url: https://restcountries.com/

// $(function () {
//   //   console.log("amit");
//   //   console.log(mockData["flags"].png);
//   // <img src=${mockData["flags"].png} width=100 />
//   $("#container").html(`
//         <div class="Box">
//             <img src=${mockData.flags.png} width=100 /> <br />
//             ${mockData.name.common} <br />
//             ${mockData.capital} <br/>
//             ${mockData.population} <br/>
//             ${mockData.continents}
//         </div>
//     `);
// });

const url = "https://restcountries.com/v3.1/all";
// const total = 50;
let total = 0;
$(function () {
  getData();
});

$(function () {
  $("#myRange").on("input", (value) => {
    $("#totalCountries").html(`${value.target.value}`);
    total = value.target.value;
    // console.log(total);
  });
});

const getData = () => {
  $.get(url, (data) => {
    for (let counter = 0; counter < total; counter++) {
      const randomNum = Math.floor(Math.random() * data.length);
      $("#container").append(`
                    <div class="Box">
                        <img src=${data[randomNum].flags.png} width=100 /><br/>
                        ${data[randomNum].name.common} <br/>
                        ${data[randomNum].capital} <br/>
                        ${data[randomNum].population} <br/>
                        ${data[randomNum].continents}
                    </div>
                `);
    }
  });
};

/*const mockData = {
  name: {
    common: "Iceland",
    official: "Iceland",
    nativeName: {
      isl: {
        official: "Ísland",
        common: "Ísland",
      },
    },
  },
  tld: [".is"],
  cca2: "IS",
  ccn3: "352",
  cca3: "ISL",
  cioc: "ISL",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    ISK: {
      name: "Icelandic króna",
      symbol: "kr",
    },
  },
  idd: {
    root: "+3",
    suffixes: ["54"],
  },
  capital: ["Reykjavik"],
  altSpellings: ["IS", "Island", "Republic of Iceland", "Lýðveldið Ísland"],
  region: "Europe",
  subregion: "Northern Europe",
  languages: {
    isl: "Icelandic",
  },
  translations: {
    ara: {
      official: "آيسلندا",
      common: "آيسلندا",
    },
    bre: {
      official: "Island",
      common: "Island",
    },
    ces: {
      official: "Island",
      common: "Island",
    },
    cym: {
      official: "Iceland",
      common: "Iceland",
    },
    deu: {
      official: "Island",
      common: "Island",
    },
    est: {
      official: "Islandi Vabariik",
      common: "Island",
    },
    fin: {
      official: "Islanti",
      common: "Islanti",
    },
    fra: {
      official: "République d'Islande",
      common: "Islande",
    },
    hrv: {
      official: "Island",
      common: "Island",
    },
    hun: {
      official: "Izland",
      common: "Izland",
    },
    ita: {
      official: "Islanda",
      common: "Islanda",
    },
    jpn: {
      official: "アイスランド",
      common: "アイスランド",
    },
    kor: {
      official: "아이슬란드 공화국",
      common: "아이슬란드",
    },
    nld: {
      official: "IJsland",
      common: "IJsland",
    },
    per: {
      official: "جمهوری ایسلند",
      common: "ایسلند",
    },
    pol: {
      official: "Republika Islandii",
      common: "Islandia",
    },
    por: {
      official: "Islândia",
      common: "Islândia",
    },
    rus: {
      official: "Исландия",
      common: "Исландия",
    },
    slk: {
      official: "Islandská republika",
      common: "Island",
    },
    spa: {
      official: "Islandia",
      common: "Islandia",
    },
    srp: {
      official: "Исланд",
      common: "Исланд",
    },
    swe: {
      official: "Island",
      common: "Island",
    },
    tur: {
      official: "İzlanda",
      common: "İzlanda",
    },
    urd: {
      official: "آئس لینڈ",
      common: "آئس لینڈ",
    },
    zho: {
      official: "冰岛",
      common: "冰岛",
    },
  },
  latlng: [65.0, -18.0],
  landlocked: false,
  area: 103000.0,
  demonyms: {
    eng: {
      f: "Icelander",
      m: "Icelander",
    },
    fra: {
      f: "Islandaise",
      m: "Islandais",
    },
  },
  flag: "🇮🇸",
  maps: {
    googleMaps: "https://goo.gl/maps/WxFWSQuc3oamNxoE6",
    openStreetMaps: "https://www.openstreetmap.org/relation/299133",
  },
  population: 366425,
  gini: {
    2017: 26.1,
  },
  fifa: "ISL",
  car: {
    signs: ["IS"],
    side: "right",
  },
  timezones: ["UTC"],
  continents: ["Europe"],
  flags: {
    png: "https://flagcdn.com/w320/is.png",
    svg: "https://flagcdn.com/is.svg",
    alt: "The flag of Iceland has a blue field with a large white-edged red cross that extends to the edges of the field. The vertical part of this cross is offset towards the hoist side.",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/is.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/is.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [64.15, -21.95],
  },
  postalCode: {
    format: "###",
    regex: "^(\\d{3})$",
  },
};
*/
