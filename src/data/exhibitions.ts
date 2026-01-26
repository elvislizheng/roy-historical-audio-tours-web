export interface LocalizedText {
  en: string;
  zh: string;
}

export interface Story {
  id: string;
  title: LocalizedText;
  duration: string;
  audioUrl: {
    zh: string;
    en: string;
  };
  transcript: {
    zh: string;
    en: string;
  };
}

export interface ExhibitionDetail {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  imageUrl: string;
  latitude: number;
  longitude: number;
  stories: Story[];
}

export const exhibitions: Record<string, ExhibitionDetail> = {
  "t-rex": {
    id: "t-rex",
    name: {
      en: "T. rex Exhibition",
      zh: "霸王龙展览",
    },
    description: {
      en: "Come face-to-face with one of the most fearsome predators that ever lived. This exhibition features a stunning T. rex skeleton and explores the latest scientific discoveries about these magnificent creatures.",
      zh: "与史上最凶猛的掠食者之一面对面。本展览展出令人惊叹的霸王龙骨架，并探索关于这些壮丽生物的最新科学发现。",
    },
    imageUrl: "/images/exhibitions/t-rex.jpg",
    latitude: 43.6682,
    longitude: -79.3946,
    stories: [
      {
        id: "t-rex-story1",
        title: {
          en: "Gossip & Fun Facts",
          zh: "八卦趣事版",
        },
        duration: "2:00",
        audioUrl: {
          zh: "/audio/t-rex/zh/story1-zh.mp3",
          en: "/audio/t-rex/en/story1-en.mp3",
        },
        transcript: {
          zh: "你眼前这只霸王龙，是白垩纪的终极王者……但是，你知道吗，它背后有个几十年的科学八卦？它到底是顶级猎手，还是只会捡尸体的懒惰家伙？想象一下，一只巨大的霸王龙在森林里慢慢追，鸭嘴龙飞快地跑开，它居然追不上。有人说，它的大牙只是用来撕死掉的动物。但你看这……牙齿竟然嵌入了猎物骨头，而且骨头在咬下时还在愈合！它亲手猎杀活体猎物！它的牙齿又粗又结实，像香蕉一样……直接咬碎骨头。而那对小短手？别笑！肌肉强壮，用来按住猎物！最后你可能没想到，这只霸王龙也会受伤、带病生存多年，它不是完美杀手，而是顶级幸存者。",
          en: "This T. rex looks like the ultimate king of the Late Cretaceous… but did you know there's a decades-long debate? Was it a predator or just a lazy scavenger? Imagine a giant T. rex chasing through the forest… the duck-billed dinosaur outruns it. Some thought its huge teeth were only for dead animals… but look! Bite marks in healing bones—proof it hunted live prey! Its teeth are thick, like bananas, capable of crushing bones. And those tiny arms? Strong enough to hold prey! Surprisingly, it also got injured and survived—it's not a perfect killer, just a survivor at the top.",
        },
      },
      {
        id: "t-rex-story2",
        title: {
          en: "Discovery & Excavation",
          zh: "发现挖掘版",
        },
        duration: "2:00",
        audioUrl: {
          zh: "/audio/t-rex/zh/story2-zh.mp3",
          en: "/audio/t-rex/en/story2-en.mp3",
        },
        transcript: {
          zh: "你知道这些霸王龙化石是怎么来到ROM的吗？这可是个侦探故事。科学家在蒙大拿州和南达科他州的岩石层中仔细搜索。看！一块牙齿微微露出，像在对你眨眼。挖掘开始，小心翼翼，刷子轻轻扫掉泥土，每块骨头都裹上石膏，像给宝贝穿上保护衣。你能想象搬运这些骨头回博物馆时的紧张吗？一不小心就碎了！回到实验室后，科学家像拼图一样拼接碎骨，用CT扫描和3D建模研究咬合力、骨骼结构和伤痕。科学家笑称，每次挖掘都像破案，每块骨头都讲述百万年前的故事。你现在看到的，就是这些故事的最终呈现。",
          en: "Do you know how these T. rex fossils ended up at ROM? It's like a detective story. Scientists searched rock layers in Montana and South Dakota. Look! A tooth peeking out, like winking at you. Excavation begins carefully—brushes sweep dirt away, each bone wrapped in plaster like a precious gift. Imagine transporting these fragile bones to the museum—one wrong move and they break! Back in the lab, bones are pieced together, CT scans and 3D models reveal bite force, skeletal structure, and injuries. Scientists joke every dig is like solving a mystery—every bone tells a story millions of years old. What you see now is the story's final chapter.",
        },
      },
      {
        id: "t-rex-story3",
        title: {
          en: "Research Methods",
          zh: "研究方法版",
        },
        duration: "2:00",
        audioUrl: {
          zh: "/audio/t-rex/zh/story3-zh.mp3",
          en: "/audio/t-rex/en/story3-en.mp3",
        },
        transcript: {
          zh: "你想知道科学家是怎么揭开霸王龙秘密的吗？第一步，他们拿起显微镜，仔细研究牙齿的磨损——不规则磨损显示，它咬过骨头，而不是只捡尸体。你能想象一块百万年前的骨头上，还留着咬痕吗？第二步，研究咬痕。在猎物化石上发现了完全匹配霸王龙牙齿的痕迹，而且骨头愈合了！它猎杀活体！第三步，CT扫描和3D建模，重建肌肉和头骨，就像给霸王龙做高科技'体检'，测出咬合力有多强，直接压碎骨头。所以结论来了：它既主动猎杀，也会适当食腐，但究竟是伏击型猎手还是长跑猎手？争议仍在继续！",
          en: "Ever wonder how scientists uncover T. rex's secrets? Step one: microscope analysis of teeth—irregular wear shows it bit bones, not just scavenged. Can you imagine bite marks on million-year-old bones? Step two: bite mark studies—prey bones show matching teeth marks, and healing! It hunted live prey. Step three: CT scans and 3D models, like giving T. rex a high-tech checkup—calculating bite force strong enough to crush bones. Conclusion: it hunted actively and scavenged—but ambush predator or long-chase hunter? Debate continues.",
        },
      },
    ],
  },
  mummies: {
    id: "mummies",
    name: {
      en: "Egyptian Mummies",
      zh: "埃及木乃伊",
    },
    description: {
      en: "Journey through ancient Egypt and discover the fascinating rituals of mummification. See real mummies and learn about the beliefs that shaped one of history's greatest civilizations.",
      zh: "穿越古埃及，探索迷人的木乃伊制作仪式。观看真正的木乃伊，了解塑造人类历史上最伟大文明之一的信仰。",
    },
    imageUrl: "/images/exhibitions/mummies.svg",
    latitude: 43.6679,
    longitude: -79.395,
    stories: [],
  },
  "bat-cave": {
    id: "bat-cave",
    name: {
      en: "Bat Cave",
      zh: "蝙蝠洞",
    },
    description: {
      en: "Enter a realistic recreation of a bat cave and learn about these fascinating nocturnal creatures. Experience the sights and sounds of a real bat habitat.",
      zh: "进入逼真的蝙蝠洞复制品，了解这些迷人的夜行动物。体验真实蝙蝠栖息地的景象和声音。",
    },
    imageUrl: "/images/exhibitions/bat-cave.svg",
    latitude: 43.6675,
    longitude: -79.3944,
    stories: [],
  },
  dinosaurs: {
    id: "dinosaurs",
    name: {
      en: "Dinosaur Gallery",
      zh: "恐龙展厅",
    },
    description: {
      en: "Explore the age of dinosaurs with over 25 complete skeletons. From the massive Barosaurus to the armored Stegosaurus, discover the diversity of prehistoric life.",
      zh: "探索恐龙时代，观赏超过25具完整骨架。从巨大的重龙到披甲的剑龙，发现史前生命的多样性。",
    },
    imageUrl: "/images/exhibitions/dinosaurs.svg",
    latitude: 43.668,
    longitude: -79.3952,
    stories: [],
  },
  "gem-gold": {
    id: "gem-gold",
    name: {
      en: "Gems & Gold",
      zh: "宝石与黄金",
    },
    description: {
      en: "Marvel at dazzling gems, minerals, and precious metals from around the world. Learn how these treasures formed deep within the Earth over millions of years.",
      zh: "惊叹于来自世界各地的璀璨宝石、矿物和贵金属。了解这些珍宝如何在数百万年间于地球深处形成。",
    },
    imageUrl: "/images/exhibitions/gem-gold.svg",
    latitude: 43.6674,
    longitude: -79.3948,
    stories: [],
  },
};
