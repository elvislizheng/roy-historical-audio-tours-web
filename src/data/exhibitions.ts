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
  "rosetta-stone": {
    id: "rosetta-stone",
    name: {
      en: "The Rosetta Stone",
      zh: "罗塞塔石碑",
    },
    description: {
      en: "The Rosetta Stone is one of the most famous objects in the British Museum. This ancient Egyptian stone tablet, dating from 196 BC, was the key to deciphering hieroglyphics and unlocking the secrets of ancient Egyptian civilization. The stone features the same text written in three scripts: Ancient Greek, Demotic, and hieroglyphics.",
      zh: "罗塞塔石碑是大英博物馆最著名的文物之一。这块可追溯至公元前196年的古埃及石碑，是破译象形文字和解开古埃及文明秘密的关键。石碑上刻有同一段文字的三种文字版本：古希腊文、世俗体和象形文字。",
    },
    imageUrl: "/images/exhibitions/rosetta-stone.jpg",
    latitude: 51.5195,
    longitude: -0.1269,
    stories: [
      {
        id: "rosetta-stone-story1",
        title: {
          en: "Discovery & Significance",
          zh: "发现与重要性",
        },
        duration: "2:30",
        audioUrl: {
          zh: "/audio/rosetta-stone/zh/story1-zh.mp3",
          en: "/audio/rosetta-stone/en/story1-en.mp3",
        },
        transcript: {
          zh: "想象一下，1799年，法国士兵在埃及罗塞塔镇挖掘防御工事时，发现了这块黑色玄武岩石碑。当时没人知道，它将成为解开古埃及文明的钥匙。石碑上刻有三种文字：古希腊文、世俗体和神秘的象形文字。在发现罗塞塔石碑之前，象形文字已经失传了近1400年，没人能读懂。但因为石碑上的三种文字是同一段内容，学者们终于有机会对比研究。1822年，法国学者商博良成功破译了象形文字。这一突破让我们能够阅读数千年的古埃及历史、宗教和日常生活记录。罗塞塔石碑不仅是一块石头，它是通往失落文明的大门。",
          en: "Imagine 1799—French soldiers digging fortifications in the town of Rosetta, Egypt, uncover a black basalt stone. No one knew it would become the key to unlocking ancient Egyptian civilization. The stone bears three scripts: Ancient Greek, Demotic, and mysterious hieroglyphics. Before the Rosetta Stone, hieroglyphics had been lost for nearly 1400 years—no one could read them. But with three versions of the same text, scholars finally had a chance to compare and decode. In 1822, French scholar Jean-François Champollion successfully deciphered the hieroglyphics. This breakthrough allowed us to read thousands of years of Egyptian history, religion, and daily life. The Rosetta Stone is not just a rock—it's a gateway to a lost civilization.",
        },
      },
      {
        id: "rosetta-stone-story4",
        title: {
          en: "One Letter That Changed Everything",
          zh: "改变一切的一个字母",
        },
        duration: "2:10",
        audioUrl: {
          zh: "/audio/rosetta-stone/zh/story2-zh.mp3",
          en: "/audio/rosetta-stone/en/story2-en.mp3",
        },
        transcript: {
          zh: "你知道吗？破译整个象形文字系统的关键，竟然是一个字母——P！商博良盯着石碑上的椭圆形框，这种框叫做「王名圈」，古埃及人专门用它来框住法老的名字。看，这个王名圈里装的是[托勒密]的名字。他知道希腊文里这个名字的拼写：P-T-O-L-E-M-Y。然后他注意到象形文字中的第一个符号——一个简单的方形图案。他猜测，这就是字母P！为了验证，他找到了另一块石碑，上面有[克丽奥佩特拉]的名字，同样被王名圈包围。你猜怎么着？那个代表P的方形符号，出现在了Cleopatra名字的第五个位置！完全吻合！这一刻，商博良意识到：王名圈是破译的钥匙，因为它明确标记了专有名词，而象形文字不仅仅是图画，它们也能表示声音！这个发现就像打开了潘多拉魔盒，整个象形文字系统的大门被推开了。一个字母P，加上王名圈的提示，解锁了三千年的秘密！",
          en: "Did you know? The key to deciphering the entire hieroglyphic system was just one letter—P! Champollion stared at the oval frames on the stone, called 'cartouches.' Ancient Egyptians used these special frames exclusively to enclose royal names—like a highlighting marker for pharaohs. Look, inside this cartouche is [Ptolemy]'s name. He knew the Greek spelling: P-T-O-L-E-M-Y. Then he noticed the first hieroglyphic symbol—a simple square shape. He guessed: this must be the letter P! To verify, he found another stone with [Cleopatra]'s name, also enclosed in a cartouche. Guess what? That square symbol for P appeared in the fifth position of Cleopatra—a perfect match! In that moment, Champollion realized: cartouches were the key, because they clearly marked proper names, and hieroglyphs weren't just pictures—they could represent sounds! This discovery was like opening Pandora's box—the entire hieroglyphic system unlocked. One letter P, plus the cartouche clue, cracked three thousand years of secrets!",
        },
      },
      {
        id: "rosetta-stone-story2",
        title: {
          en: "The Decipherment Journey",
          zh: "破译之旅",
        },
        duration: "2:15",
        audioUrl: {
          zh: "/audio/rosetta-stone/zh/story3-zh.mp3",
          en: "/audio/rosetta-stone/en/story3-en.mp3",
        },
        transcript: {
          zh: "破译罗塞塔石碑是一场激动人心的智力竞赛。多位学者投入其中，但最终成功的是法国学者商博良。他注意到石碑上的某些象形文字被椭圆形框包围——这些是法老的名字！通过将这些符号与希腊文中的名字对比，他发现象形文字不仅仅是图画，还包含表音符号。想象一下，当他第一次读出拉美西斯这个名字时的激动！这个突破打开了整个象形文字系统的大门。从此，考古学家可以阅读神庙墙壁上的铭文，解读纸莎草纸上的文字，了解古埃及的国王、祭司和普通人的生活。罗塞塔石碑的破译，让沉默了千年的文明重新开口说话。",
          en: "Deciphering the Rosetta Stone was a thrilling intellectual race. Multiple scholars worked on it, but French scholar Jean-François Champollion ultimately succeeded. He noticed certain hieroglyphs were enclosed in oval frames—these were pharaohs' names! By comparing these symbols with Greek names, he realized hieroglyphs weren't just pictures—they included phonetic symbols. Imagine his excitement reading the name Ramesses for the first time! This breakthrough unlocked the entire hieroglyphic system. From then on, archaeologists could read temple inscriptions, decipher papyrus texts, and understand the lives of ancient Egyptian kings, priests, and common people. The decipherment of the Rosetta Stone gave voice to a civilization silent for millennia.",
        },
      },
      {
        id: "rosetta-stone-story3",
        title: {
          en: "The Full Translation",
          zh: "石碑全文翻译",
        },
        duration: "3:30",
        audioUrl: {
          zh: "/audio/rosetta-stone/zh/story4-zh.mp3",
          en: "/audio/rosetta-stone/en/story4-en.mp3",
        },
        transcript: {
          zh: "罗塞塔石碑的全文是一份公元前196年的祭司法令，以下是译文：\n\n在年轻的国王、众神之主、永生之主、受拉神宠爱者、强大的赫拉克勒斯、托特之子、拉神之子、普塔神之子、父神[托勒密]之子，统治埃及第九年时，孟菲斯大祭司阿提图斯之子阿提图斯担任祭司长。\n\n国王[托勒密五世]继承了父亲的王位，他是众神之主，对神庙极为慷慨。他赠予黄金和白银，以及粮食和供品。他减免了人民的税收，使埃及重新繁荣。他赦免了囚犯，宽恕了被指控的人。他确保神庙获得足够的收入，也为军队提供了粮食。\n\n因动乱而欠国库的税款，他予以豁免。他释放了所有被关押多年的囚犯。他下令所有神庙的仪式应按传统方式进行，恢复了对神灵的供奉。他为神庙提供了保护，派遣军队平定了叛乱地区。\n\n当莱科波利斯叛乱时，他围困这座城市，切断了水源和粮食供应。在多次进攻后，他攻陷了城市，杀死了所有叛军，就像拉神和赫拉克勒斯战胜邪恶力量一样。那些背叛他父亲的叛军首领，他下令处决。\n\n为此，众神祭司决议：应当在所有神庙中为国王[托勒密]及其王后[阿尔西诺伊三世]建立雕像，称呼他为[托勒密，埃及的保护者]。每年应在他的生日和加冕日举行盛大庆典，每个月的第一天和第十七天也应举行仪式。所有祭司应佩戴王冠，并在神庙中展示法令。此法令应以神圣文字、世俗体和希腊文三种文字刻在石碑上，放置在一级、二级和三级神庙中。",
          en: "The complete text of the Rosetta Stone is a priestly decree from 196 BC. Here is the translation:\n\nIn the reign of the young king, lord of the diadems, great in glory, who has established order in Egypt, pious towards the gods, triumphant over his enemies, who has restored the civilized life of mankind, lord of the Thirty Years' Festivals, even as Hephaestus the Great, a king like the Sun, great king of the Upper and Lower regions, offspring of the Gods Philopatores, one whom Hephaestus has approved, to whom the Sun has given victory, the living image of Zeus, son of the Sun, [Ptolemy], living forever, beloved by Ptah.\n\nIn the ninth year, when Aetus son of Aetus was priest of [Alexander] and the Gods Philopatores and the God Epiphanes Eucharistos, in the fourth month of peret, the eighteenth day.\n\nDecree: The high priests and prophets and those who enter the inner shrine for the robing of the gods, and the feather-bearers and the sacred scribes gathered in the temple to honor King [Ptolemy V].\n\nWhereas King [Ptolemy], living forever, beloved by Ptah, son of King [Ptolemy] and Queen [Arsinoe], the Gods Philopatores, has bestowed many benefactions on the temples and on those who dwell in them, being from the beginning a god born of a god and goddess like Horus son of Isis and Osiris who avenged his father Osiris.\n\nHe has been generous to the temples with money and grain. He has remitted taxes owed to the crown by the people and the temples. He has freed those imprisoned and pardoned those under accusation. He has ordered that the revenues of the temples and the allowances given to them should be maintained.\n\nHe has remitted the debts owed to the crown by the people of Egypt and the priests. He has released all those imprisoned for many years. He has ordered that divine offerings should continue according to custom and that funds be provided for the temples. He has sent military forces and fleets against those who attacked Egypt by sea and land.\n\nWhen rebels fortified themselves in Lycopolis and gathered weapons and supplies, threatening the temples and the people of Egypt, he besieged the city with ramparts and trenches. When the Nile made a great rise, threatening to flood the area, he blocked the channels and stationed cavalry and infantry to guard them. After multiple assaults, he captured the city and slaughtered all the rebels within, just as Ra and Horus once defeated their enemies. The ringleaders who had rebelled against his father, he ordered to be executed.\n\nTherefore, the priests of all the temples throughout Egypt have decreed: To increase the honors already paid to King [Ptolemy] and Queen [Arsinoe III] in the temples, a statue of the king shall be set up in every temple, called [Ptolemy, Defender of Egypt]. The god of the temple shall present the king with the weapon of victory. These statues shall be worshipped three times daily.\n\nA festival and procession shall be held annually in honor of King [Ptolemy] on the day he received kingship from his father, and on his birthday. Every month on the 1st and 17th days shall be festival days with processions. All priests shall wear the crown and display this decree. The decree shall be inscribed on a stone stela in sacred hieroglyphics, demotic script, and Greek letters, and set up in temples of the first, second, and third ranks beside the image of the ever-living king.",
        },
      },
    ],
  },
};
