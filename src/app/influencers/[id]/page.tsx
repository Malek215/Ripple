import InfluencerPage from "@/app/_components/influencer/influencer-page";

const influencers = [
  {
    _id: "661e45ed85a6eea351ffdf81",
    name: "Juventus",
    username: "juventus",
    bio: "An Italian Icon since 1897 ⚪️⚫️ Hit follow and be part of the journey! More 🏃‍♀️content ➡️ @juventuswomen",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUVwOZVj6JwQAQ=.jpeg",
    stats: {
      postsCount: 16503,
      followerCount: 60426963,
      followingCount: 75,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: [],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf82",
    name: "Mehmet Fatih Kalaycıoğlu",
    username: "mehmetbutcher",
    bio: "DANIŞMAN KONSEPT DANIŞMANI EĞİTMEN TV PROGRAMI YEMEK YAZARI BRAND COMSULTANT DÜNYA GEZGİNİ REKLAM İŞBİRLİĞİ WhatsApp +905011180575",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUVz+dVi6RzRw1P.jpeg",
    stats: {
      postsCount: 1465,
      followerCount: 817189,
      followingCount: 662,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: ["905011180575"],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf83",
    name: "옹성우 ongseongwu",
    username: "osw_onge",
    bio: "",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUVyeJUi6F1RQ1EPA==.jpeg",
    stats: {
      postsCount: 183,
      followerCount: 3717556,
      followingCount: 36,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: [],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf84",
    name: "Mohsen Chavoshi",
    username: "mohsenchavoshi",
    bio: "",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUWy+VSjadxRQRI.jpeg",
    stats: {
      postsCount: 288,
      followerCount: 5445563,
      followingCount: 188,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: [],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf85",
    name: "Хозяин Барин |сумки |кошельки",
    username: "hozyain___barin",
    bio: "⭐️8 лет дарим Вам кожаные эмоции 👜Самый большой ассортимент 📍15 магазинов (Влад, Хабар, Уссур, Находка, Блага, Мытищи) 👇Адреса бутиков, сайт/WB/100sp",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUWyeJWjKVxRwhK.jpeg",
    stats: {
      postsCount: 5321,
      followerCount: 53465,
      followingCount: 1679,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: [],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf86",
    name: "Nurlan Batyrov 🇰🇿",
    username: "batyroff",
    bio: "▪️По всем всем вопросам +7 776 165 7145 Ербол ▪️По рекламе +7 771 773-81-91 Даулет AMG",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUXwOVQjq1wQQ==.jpeg",
    stats: {
      postsCount: 4787,
      followerCount: 1204363,
      followingCount: 256,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: ["7 776 165 7145 ", "7 771 773-81-91 "],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf87",
    name: "МАСТЕРА МАНИКЮРА 💅NAILARTIST",
    username: "nailartist_manicure",
    bio: "🔹Галерея работ лучших мастеров 🔹Педикюр здесь @pedicurs 🔹Сотрудничество, реклама 🔹ТELEGRAM 👇",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUVzuNeiKZ2QwRP.jpeg",
    stats: {
      postsCount: 3497,
      followerCount: 353582,
      followingCount: 5,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: [],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf88",
    name: "Clara Galle🌀",
    username: "claaragalle",
    bio: "Hola, me llamo Clara pero no necesito ninguna yema para molar un huevo. 𝙩𝙝𝙞𝙨 𝙞𝙨 𝙣𝙤𝙩 𝙧𝙚𝙖𝙡 𝙡𝙞𝙛𝙚 @cramtalent",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUVzudSiqByQglF.jpeg",
    stats: {
      postsCount: 265,
      followerCount: 4424297,
      followingCount: 1208,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: [],
      url: [],
    },
    categories: ["Sports", "Football", "Music"],
  },
  {
    _id: "661e45ef85a6eea351ffdf89",
    name: "r.h. Sin",
    username: "r.h.sin",
    bio: "New York Times Best Selling Author. 📿 222",
    avatar:
      "https://cdn1.picuki.com/hosted-by-instagram/q/yep6IPkO1EBGZyPbcMUXyeRQjaF5QA==.jpeg",
    stats: {
      postsCount: 880,
      followerCount: 2048863,
      followingCount: 1810,
    },
    platform: "Instagram",
    contact: {
      email: [],
      phone: [],
      url: [],
    },
  },
];

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <InfluencerPage
        influencer={influencers[0]!}
        suggestedInfluencers={influencers.slice(1)}
      />
    </>
  );
}
