// 料理写真はメニューの料理名に照合して掲載。
const MENU_DATA = [
  {
    "id": "course",
    "title": "コース料理",
    "items": [
      {
        "id": "course-fukurin",
        "name": "福林コース",
        "desc": "",
        "price": 3000,
        "badge": "おすすめ",
        "dishes": [
          "前菜4種",
          "エビチリソース",
          "我が家の酢豚",
          "揚げ物2種（鶏唐揚げ・春巻き）",
          "手作り焼き餃子",
          "麻婆豆腐",
          "チャーハン",
          "玉子スープ",
          "日替わりデザート"
        ],
        "minPeople": 2
      },
      {
        "id": "course-shofuku",
        "name": "招福コース",
        "desc": "",
        "price": 3500,
        "badge": "",
        "dishes": [
          "前菜5種",
          "大きなエビチリソース",
          "我が家の酢豚",
          "揚げ物2種（鶏唐揚げ・春巻き）",
          "手作り焼き餃子",
          "海鮮三種炒め",
          "ピーマンと牛肉の炒め",
          "チャーハン",
          "フカヒレスープ",
          "日替わりデザート"
        ],
        "minPeople": 2
      },
      {
        "id": "course-family",
        "name": "家族コース",
        "desc": "",
        "price": 5800,
        "badge": "ご家族向け",
        "dishes": [
          "前菜3種",
          "油淋鶏（揚げ鶏肉のネギ醤油かけ）",
          "チャーハン",
          "麻婆豆腐",
          "エビのチリソース炒め",
          "焼き餃子",
          "玉子スープ"
        ],
        "minPeople": 2
      }
    ]
  },
  {
    "id": "main-1",
    "title": "一品料理",
    "items": [
      {
        "id": "main1_ikatoubanjan",
        "name": "イカと野菜の豆板醤炒め",
        "desc": "",
        "price": 1380,
        "badge": "",
        "photo": "assets/dishes/main1_ikatoubanjan.webp"
      },
      {
        "id": "main1_ebichili",
        "name": "エビのチリソース炒め",
        "desc": "",
        "price": 1300,
        "badge": "",
        "photo": "assets/dishes/main1_ebichili.webp"
      },
      {
        "id": "main1_hoikoro",
        "name": "回鍋肉",
        "desc": "豚の辛味噌炒め",
        "price": 1100,
        "badge": "",
        "photo": "assets/dishes/main1_hoikoro.webp"
      },
      {
        "id": "main1_subuta",
        "name": "酢豚",
        "desc": "",
        "price": 1100,
        "badge": "",
        "photo": "assets/dishes/main1_subuta.webp"
      },
      {
        "id": "main1_happosai",
        "name": "海鮮八宝菜",
        "desc": "ハッボウ菜",
        "price": 1000,
        "badge": "",
        "photo": "assets/dishes/main1_happosai.webp"
      },
      {
        "id": "main1_porkpepper",
        "name": "ピーマンと豚肉の炒め",
        "desc": "",
        "price": 1000,
        "badge": "",
        "photo": "assets/dishes/main1_porkpepper.webp"
      },
      {
        "id": "main1_beefpepper",
        "name": "ピーマンと牛肉の炒め",
        "desc": "",
        "price": 1100,
        "badge": "",
        "photo": "assets/dishes/main1_beefpepper.webp"
      },
      {
        "id": "main1_yurinchi",
        "name": "油淋鶏",
        "desc": "揚げ鶏肉のねぎ醤油かけ",
        "price": 980,
        "badge": "",
        "photo": "assets/dishes/main1_yurinchi.webp"
      },
      {
        "id": "main1_tomatotamago",
        "name": "トマトと玉子炒め",
        "desc": "",
        "price": 1000,
        "badge": "",
        "photo": "assets/dishes/main1_tomatotamago.webp"
      },
      {
        "id": "main1_karaage5",
        "name": "若鶏の唐揚げ",
        "desc": "5個",
        "price": 700,
        "badge": "",
        "photo": "assets/dishes/main1_karaage5.webp"
      },
      {
        "id": "main1_malanabe",
        "name": "豚肉入りマーラー鍋",
        "desc": "",
        "price": 1200,
        "badge": "",
        "photo": "assets/dishes/main1_malanabe.webp"
      },
      {
        "id": "main1_mapotofu",
        "name": "マーボー豆腐",
        "desc": "",
        "price": 980,
        "badge": "",
        "photo": "assets/dishes/main1_mapotofu.webp"
      },
      {
        "id": "main1_kurozusubuta",
        "name": "黒酢酢豚",
        "desc": "店長おすすめ",
        "price": 1280,
        "badge": "",
        "photo": "assets/dishes/main1_kurozusubuta.webp"
      },
      {
        "id": "main1_gomokutamago",
        "name": "五目と玉子炒め",
        "desc": "",
        "price": 1000,
        "badge": "",
        "photo": "assets/dishes/main1_gomokutamago.webp"
      },
      {
        "id": "main1_ebiten",
        "name": "エビの天ぷら",
        "desc": "",
        "price": 1300,
        "badge": "",
        "photo": "assets/dishes/main1_ebiten.webp"
      },
      {
        "id": "main1_ebimayo",
        "name": "エビのマヨネーズ炒め",
        "desc": "",
        "price": 1300,
        "badge": "",
        "photo": "assets/dishes/main1_ebimayo.webp"
      }
    ]
  },
  {
    "id": "appetizers",
    "title": "前菜類",
    "items": [
      {
        "id": "zensai_kurage",
        "name": "クラゲの中華酢和え",
        "desc": "",
        "price": 980,
        "badge": "",
        "photo": "assets/dishes/zensai_kurage.webp"
      },
      {
        "id": "zensai_pitan",
        "name": "ピータン",
        "desc": "",
        "price": 380,
        "badge": "",
        "photo": "assets/dishes/zensai_pitan.webp"
      },
      {
        "id": "zensai_pitantofu",
        "name": "ピータンと豆腐の和え物",
        "desc": "",
        "price": 700,
        "badge": "",
        "photo": "assets/dishes/zensai_pitantofu.webp"
      },
      {
        "id": "zensai_charshu",
        "name": "自家製チャーシュー",
        "desc": "",
        "price": 700,
        "badge": "",
        "photo": "assets/dishes/zensai_charshu.webp"
      },
      {
        "id": "zensai_kamosmoke",
        "name": "鴨のスモーク",
        "desc": "",
        "price": 700,
        "badge": "",
        "photo": "assets/dishes/zensai_kamosmoke.webp"
      },
      {
        "id": "zensai_zasai",
        "name": "ザーサイ",
        "desc": "",
        "price": 380,
        "badge": "",
        "photo": "assets/dishes/zensai_zasai.webp"
      },
      {
        "id": "zensai_yasaisalad",
        "name": "野菜サラダ",
        "desc": "",
        "price": 700,
        "badge": "",
        "photo": "assets/dishes/zensai_yasaisalad.webp"
      },
      {
        "id": "zensai_nankotsu",
        "name": "鶏軟骨唐揚げ",
        "desc": "",
        "price": 680,
        "badge": "",
        "photo": "assets/dishes/zensai_nankotsu.webp"
      },
      {
        "id": "zensai_edamame",
        "name": "枝豆",
        "desc": "",
        "price": 450,
        "badge": "",
        "photo": "assets/dishes/zensai_edamame.webp"
      },
      {
        "id": "zensai_tatakikyuri",
        "name": "ニンニク入り中華風たたききゅうり",
        "desc": "",
        "price": 380,
        "badge": "",
        "photo": "assets/dishes/zensai_tatakikyuri.webp"
      },
      {
        "id": "zensai_friedpotato",
        "name": "フライドポテト",
        "desc": "",
        "price": 450,
        "badge": "",
        "photo": "assets/dishes/zensai_friedpotato.webp"
      },
      {
        "id": "zensai_geso",
        "name": "下足の醤油かけ サクサク揚げ",
        "desc": "",
        "price": 750,
        "badge": "",
        "photo": "assets/dishes/zensai_geso.webp"
      },
      {
        "id": "zensai_guangzhouchicken",
        "name": "自家製広州風味鶏肉チャーシュー",
        "desc": "",
        "price": 700,
        "badge": "",
        "photo": "assets/dishes/zensai_guangzhouchicken.webp"
      },
      {
        "id": "zensai_roastchicken",
        "name": "中華風ローストチキン",
        "desc": "",
        "price": 680,
        "badge": "",
        "photo": "assets/dishes/zensai_roastchicken.webp"
      },
      {
        "id": "zensai_bangbangji",
        "name": "棒棒鶏",
        "desc": "鶏肉のゴマダレ和え物",
        "price": 700,
        "badge": "",
        "photo": "assets/dishes/zensai_bangbangji.webp"
      },
      {
        "id": "zensai_koika",
        "name": "甲イカお湯引きネギ油ソース",
        "desc": "",
        "price": 750,
        "badge": "",
        "photo": "assets/dishes/zensai_koika.webp"
      },
      {
        "id": "zensai_niratamago",
        "name": "塩味ニラ玉子焼き",
        "desc": "",
        "price": 750,
        "badge": "",
        "photo": "assets/dishes/zensai_niratamago.webp"
      },
      {
        "id": "zensai_koushuiji",
        "name": "口水鷄",
        "desc": "鶏肉の四川風和え物",
        "price": 720,
        "badge": "",
        "photo": "assets/dishes/zensai_koushuiji.webp"
      }
    ]
  },
  {
    "id": "main-2",
    "title": "肉・海鮮料理",
    "items": [
      {
        "id": "main2_porkspicy",
        "name": "豚肉の辛味煮込み",
        "desc": "",
        "price": 1300,
        "badge": "",
        "photo": "assets/dishes/main2_porkspicy.webp"
      },
      {
        "id": "main2_shengcaibao",
        "name": "生菜包",
        "desc": "エビと豚肉のミンチ・生レタス包み",
        "price": 1300,
        "badge": "",
        "photo": "assets/dishes/main2_shengcaibao.webp"
      },
      {
        "id": "main2_tebasaki",
        "name": "揚げ手羽先",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/main2_tebasaki.webp"
      },
      {
        "id": "main2_sanshochicken",
        "name": "鶏肉と山椒のピリ辛炒め",
        "desc": "",
        "price": 900,
        "badge": "",
        "photo": "assets/dishes/main2_sanshochicken.webp"
      },
      {
        "id": "main2_cashewnut",
        "name": "若鶏とカシューナッツの炒め",
        "desc": "",
        "price": 900,
        "badge": "",
        "photo": "assets/dishes/main2_cashewnut.webp"
      },
      {
        "id": "main2_porkfillet",
        "name": "豚ヒレの天ぷら",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/main2_porkfillet.webp"
      },
      {
        "id": "main2_beefoyster",
        "name": "牛肉とオイスターソース炒め",
        "desc": "",
        "price": 1300,
        "badge": "",
        "photo": "assets/dishes/main2_beefoyster.webp"
      },
      {
        "id": "main2_yuxiangrousi",
        "name": "ユウシャンロウス（魚香肉絲）",
        "desc": "薬味付豚肉炒め",
        "price": 1100,
        "badge": "",
        "photo": "assets/dishes/main2_yuxiangrousi.webp"
      },
      {
        "id": "main2_hotate",
        "name": "北海道産ホタテ炒め",
        "desc": "",
        "price": 1700,
        "badge": "",
        "photo": "assets/dishes/main2_hotate.webp"
      },
      {
        "id": "main2_fukahiretamago",
        "name": "フカヒレ玉のあんかけ",
        "desc": "",
        "price": 1200,
        "badge": "",
        "photo": "assets/dishes/main2_fukahiretamago.webp"
      },
      {
        "id": "main2_sichuanebi",
        "name": "四川風エビの野菜炒め",
        "desc": "",
        "price": 1480,
        "badge": "",
        "photo": "assets/dishes/main2_sichuanebi.webp"
      },
      {
        "id": "main2_mushipan",
        "name": "蒸しパン",
        "desc": "1個・豚の角煮と一緒にどうぞ",
        "price": 100,
        "badge": "",
        "photo": "assets/dishes/main2_mushipan.webp"
      },
      {
        "id": "main2_kakuni",
        "name": "豚の角煮",
        "desc": "",
        "price": 1500,
        "badge": "",
        "photo": "assets/dishes/main2_kakuni.webp"
      },
      {
        "id": "main2_nirareba",
        "name": "ニラと豚レバーの炒め",
        "desc": "",
        "price": 900,
        "badge": "",
        "photo": "assets/dishes/main2_nirareba.webp"
      },
      {
        "id": "main2_kaisen3",
        "name": "海鮮三種炒め",
        "desc": "",
        "price": 1500,
        "badge": "",
        "photo": "assets/dishes/main2_kaisen3.webp"
      },
      {
        "id": "main2_okoge",
        "name": "海鮮おこげ",
        "desc": "",
        "price": 1380,
        "badge": "",
        "photo": "assets/dishes/main2_okoge.webp"
      }
    ]
  },
  {
    "id": "dim-sum",
    "title": "点心",
    "items": [
      {
        "id": "menshoku_yakigyoza8",
        "name": "焼き餃子",
        "desc": "8個",
        "price": 780,
        "badge": "",
        "photo": "assets/dishes/menshoku_yakigyoza8.webp"
      },
      {
        "id": "menshoku_xiaolongbao6",
        "name": "自家製小籠包",
        "desc": "6個",
        "price": 780,
        "badge": "",
        "photo": "assets/dishes/menshoku_xiaolongbao6.webp"
      },
      {
        "id": "menshoku_suigyoza8",
        "name": "水餃子",
        "desc": "8個",
        "price": 780,
        "badge": "",
        "photo": "assets/dishes/menshoku_suigyoza8.webp"
      },
      {
        "id": "menshoku_harumaki",
        "name": "自家製春巻き",
        "desc": "",
        "price": 600,
        "badge": "",
        "photo": "assets/dishes/menshoku_harumaki.webp"
      },
      {
        "id": "menshoku_niramanju3",
        "name": "ニラ饅頭",
        "desc": "3個",
        "price": 600,
        "badge": "",
        "photo": "assets/dishes/menshoku_niramanju3.webp"
      },
      {
        "id": "menshoku_mushiset6",
        "name": "蒸しセット",
        "desc": "蒸し餃子・焼売・小籠包／6個",
        "price": 780,
        "badge": "",
        "photo": "assets/dishes/menshoku_mushiset6.webp"
      },
      {
        "id": "menshoku_mushigyoza6",
        "name": "蒸し餃子",
        "desc": "6個",
        "price": 780,
        "badge": "",
        "photo": "assets/dishes/menshoku_mushigyoza6.webp"
      },
      {
        "id": "menshoku_usuyakimochi",
        "name": "自家製薄焼き餠",
        "desc": "",
        "price": 400,
        "badge": "",
        "photo": "assets/dishes/menshoku_usuyakimochi.webp"
      },
      {
        "id": "menshoku_ebiboharumaki",
        "name": "エビ棒春巻き",
        "desc": "1本",
        "price": 300,
        "badge": "",
        "photo": "assets/dishes/menshoku_ebiboharumaki.webp"
      }
    ]
  },
  {
    "id": "vegetables",
    "title": "野菜料理",
    "items": [
      {
        "id": "veg_maponasu",
        "name": "マーボーナス",
        "desc": "",
        "price": 900,
        "badge": "",
        "photo": "assets/dishes/veg_maponasu.webp"
      },
      {
        "id": "veg_mapoharusame",
        "name": "マーボー春雨",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/veg_mapoharusame.webp"
      },
      {
        "id": "veg_chingensai",
        "name": "チンゲン菜のニンニク炒め",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/veg_chingensai_garlic.webp"
      },
      {
        "id": "veg_moyashipork",
        "name": "究極のもやしと豚肉強火炒め",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/veg_moyashipork.webp"
      },
      {
        "id": "veg_lettuceoyster",
        "name": "レタスとオイスターソース炒め",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/veg_lettuceoyster.webp"
      },
      {
        "id": "veg_jagaimo",
        "name": "千切じゃがいもの炒め",
        "desc": "",
        "price": 980,
        "badge": "",
        "photo": "assets/dishes/veg_jagaimo.webp"
      }
    ]
  },
  {
    "id": "soup",
    "title": "スープ",
    "items": [
      {
        "id": "soup_fukahire",
        "name": "フカヒレスープ",
        "desc": "",
        "price": 1600,
        "badge": "",
        "photo": "assets/dishes/soup_fukahire.webp"
      },
      {
        "id": "soup_suuratan",
        "name": "スーラータン",
        "desc": "豆腐と色々酸味スープ",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/soup_suuratan.webp"
      },
      {
        "id": "soup_tamago",
        "name": "玉子スープ",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/soup_tamago.webp"
      },
      {
        "id": "soup_harusame",
        "name": "春雨スープ",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/soup_harusame.webp"
      },
      {
        "id": "soup_corn",
        "name": "コンスープ",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/soup_corn.webp"
      }
    ]
  },
  {
    "id": "dessert",
    "title": "デザート",
    "items": [
      {
        "id": "dessert_kurogomaice",
        "name": "黒ごまアイス",
        "desc": "",
        "price": 400,
        "badge": "",
        "photo": "assets/dishes/dessert_kurogomaice.webp"
      },
      {
        "id": "dessert_daigakumochi",
        "name": "大学もち",
        "desc": "",
        "price": 980,
        "badge": "",
        "photo": "assets/dishes/dessert_daigakumochi.webp"
      },
      {
        "id": "dessert_daigakuimo",
        "name": "大学いも",
        "desc": "",
        "price": 800,
        "badge": "",
        "photo": "assets/dishes/dessert_daigakuimo.webp"
      },
      {
        "id": "dessert_gomadango3",
        "name": "ごま団子",
        "desc": "3個",
        "price": 450,
        "badge": "",
        "photo": "assets/dishes/dessert_gomadango3.webp"
      },
      {
        "id": "dessert_mangopudding",
        "name": "マンゴープリン",
        "desc": "",
        "price": 400,
        "badge": "",
        "photo": "assets/dishes/dessert_mangopudding.webp"
      }
    ]
  }
];
