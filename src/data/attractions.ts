export interface LocalizedText {
  en: string;
  zh: string;
}

export interface Exhibition {
  id: string;
  name: LocalizedText;
  latitude: number;
  longitude: number;
}

export interface Attraction {
  id: string;
  name: LocalizedText;
  shortName: string;
  description: LocalizedText;
  address: LocalizedText;
  latitude: number;
  longitude: number;
  exhibitions: Exhibition[];
}

export const attractions: Attraction[] = [
  {
    id: "rom",
    name: {
      en: "Royal Ontario Museum",
      zh: "皇家安大略博物馆",
    },
    shortName: "ROM",
    description: {
      en: "Canada's largest museum of world cultures and natural history, featuring over 13 million artworks, cultural objects, and natural history specimens. The museum is renowned for its iconic Michael Lee-Chin Crystal addition.",
      zh: "加拿大最大的世界文化和自然历史博物馆，收藏超过1300万件艺术品、文化物品和自然历史标本。博物馆以其标志性的李明俊水晶建筑扩建而闻名。",
    },
    address: {
      en: "100 Queens Park, Toronto, ON M5S 2C6",
      zh: "多伦多女王公园100号，安大略省 M5S 2C6",
    },
    latitude: 43.6677,
    longitude: -79.3948,
    exhibitions: [
      {
        id: "t-rex",
        name: {
          en: "T. rex Exhibition",
          zh: "霸王龙展览",
        },
        latitude: 43.6682,
        longitude: -79.3946,
      },
      {
        id: "mummies",
        name: {
          en: "Egyptian Mummies",
          zh: "埃及木乃伊",
        },
        latitude: 43.6679,
        longitude: -79.395,
      },
      {
        id: "bat-cave",
        name: {
          en: "Bat Cave",
          zh: "蝙蝠洞",
        },
        latitude: 43.6675,
        longitude: -79.3944,
      },
      {
        id: "dinosaurs",
        name: {
          en: "Dinosaur Gallery",
          zh: "恐龙展厅",
        },
        latitude: 43.668,
        longitude: -79.3952,
      },
      {
        id: "gem-gold",
        name: {
          en: "Gems & Gold",
          zh: "宝石与黄金",
        },
        latitude: 43.6674,
        longitude: -79.3948,
      },
    ],
  },
  {
    id: "british-museum",
    name: {
      en: "British Museum",
      zh: "大英博物馆",
    },
    shortName: "British Museum",
    description: {
      en: "One of the world's greatest museums of human history, art and culture. The British Museum holds over 8 million works and is dedicated to human history, art and culture from ancient times to the present.",
      zh: "世界上最伟大的人类历史、艺术和文化博物馆之一。大英博物馆收藏超过800万件文物，致力于展示从古代到现代的人类历史、艺术和文化。",
    },
    address: {
      en: "Great Russell Street, London WC1B 3DG, United Kingdom",
      zh: "英国伦敦大罗素街 WC1B 3DG",
    },
    latitude: 51.5194,
    longitude: -0.127,
    exhibitions: [
      {
        id: "rosetta-stone",
        name: {
          en: "The Rosetta Stone",
          zh: "罗塞塔石碑",
        },
        latitude: 51.5195,
        longitude: -0.1269,
      },
    ],
  },
];
