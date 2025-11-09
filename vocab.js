const vocabList = [
  {
    word: "Abandon",
    meaning: {
      en: "To give up completely",
      th: "ละทิ้ง / ปล่อย",
      jp: "完全にあきらめる",
      cn: "放弃 / 抛弃",
      kr: "완전히 포기하다"
    }
  },
  {
    word: "Benevolent",
    meaning: {
      en: "Kind and generous",
      th: "มีเมตตา ใจดี",
      jp: "親切で寛大な",
      cn: "仁慈的 / 慷慨的",
      kr: "자비롭고 관대한"
    }
  },
  {
    word: "Candid",
    meaning: {
      en: "Honest and straightforward",
      th: "ตรงไปตรงมา",
      jp: "率直な / 正直な",
      cn: "坦率的 / 诚实的",
      kr: "솔직한 / 정직한"
    }
  },
  {
    word: "Dauntless",
    meaning: {
      en: "Showing fearlessness and determination",
      th: "ไม่เกรงกลัว / กล้าหาญ",
      jp: "勇敢な / 恐れを知らない",
      cn: "无畏的 / 勇敢的",
      kr: "두려움을 모르는 / 용감한"
    }
  },
  {
    word: "Eloquent",
    meaning: {
      en: "Fluent or persuasive in speaking or writing",
      th: "พูดเก่ง / มีวาทศิลป์",
      jp: "雄弁な / 説得力のある",
      cn: "雄辩的 / 有说服力的",
      kr: "웅변의 / 설득력 있는"
    }
  },
  {
    word: "Feasible",
    meaning: {
      en: "Possible to do easily or conveniently",
      th: "เป็นไปได้ / ทำได้จริง",
      jp: "実現可能な / 可能な",
      cn: "可行的 / 实现可能的",
      kr: "실행 가능한 / 가능성 있는"
    }
  },
  {
    word: "Genuine",
    meaning: {
      en: "Real; authentic",
      th: "แท้จริง / จริงใจ",
      jp: "本物の / 真実の",
      cn: "真正的 / 真实的",
      kr: "진짜의 / 진실한"
    }
  },
  {
    word: "Hinder",
    meaning: {
      en: "To delay or obstruct progress",
      th: "ขัดขวาง / หน่วงเหนี่ยว",
      jp: "妨げる / 阻む",
      cn: "阻碍 / 妨碍",
      kr: "방해하다 / 지연시키다"
    }
  },
  {
    word: "Imminent",
    meaning: {
      en: "About to happen",
      th: "ใกล้จะเกิดขึ้น / เร็วๆ นี้",
      jp: "差し迫った / すぐ起こる",
      cn: "即将发生的 / 逼近的",
      kr: "임박한 / 곧 일어날"
    }
  },
  {
    word: "Jubilant",
    meaning: {
      en: "Feeling or expressing great joy",
      th: "ดีใจอย่างมาก / ปลื้มปิติ",
      jp: "歓喜に満ちた / 喜ばしい",
      cn: "欢腾的 / 喜悦的",
      kr: "기쁜 / 환희에 찬"
    }
  },
  {
    word: "Keen",
    meaning: {
      en: "Having or showing eagerness or enthusiasm",
      th: "กระตือรือร้น / สนใจมาก",
      jp: "熱心な / 鋭い",
      cn: "热心的 / 敏锐的",
      kr: "열심인 / 날카로운"
    }
  },
  {
    word: "Lament",
    meaning: {
      en: "To mourn or express sorrow",
      th: "โศกเศร้า / เสียใจ",
      jp: "嘆く / 悲しむ",
      cn: "哀悼 / 悲叹",
      kr: "슬퍼하다 / 애도하다"
    }
  },
  {
    word: "Meticulous",
    meaning: {
      en: "Showing great attention to detail",
      th: "ละเอียดรอบคอบ",
      jp: "細心な / 注意深い",
      cn: "一丝不苟的 / 细致的",
      kr: "꼼꼼한 / 세심한"
    }
  },
  {
    word: "Nostalgia",
    meaning: {
      en: "A sentimental longing for the past",
      th: "ความคิดถึงอดีต / ความทรงจำเก่า",
      jp: "郷愁 / 懐かしさ",
      cn: "怀旧 / 思乡",
      kr: "향수 / 과거에 대한 그리움"
    }
  },
  {
    word: "Oblivious",
    meaning: {
      en: "Not aware of or not concerned about what is happening",
      th: "ไม่รู้ตัว / ไม่ทันสังเกต",
      jp: "気づかない / 無関心な",
      cn: "未察觉的 / 漠不关心的",
      kr: "의식하지 못하는 / 무관심한"
    }
  },
  {
    word: "Plausible",
    meaning: {
      en: "Seeming reasonable or probable",
      th: "ฟังดูมีเหตุผล / เป็นไปได้",
      jp: "もっともらしい / 信じられる",
      cn: "貌似合理的 / 可信的",
      kr: "그럴듯한 / 타당한"
    }
  },
  {
    word: "Resilient",
    meaning: {
      en: "Able to recover quickly from difficulties",
      th: "ฟื้นตัวเร็ว / อดทน",
      jp: "回復力のある / 強い",
      cn: "有弹性的 / 坚强的",
      kr: "회복력이 있는 / 강인한"
    }
  },
  {
    word: "Scrutinize",
    meaning: {
      en: "To examine closely or critically",
      th: "ตรวจสอบอย่างละเอียด",
      jp: "精査する / 詳しく調べる",
      cn: "仔细检查 / 审查",
      kr: "면밀히 조사하다 / 분석하다"
    }
  },
  {
    word: "Tangible",
    meaning: {
      en: "Perceptible by touch; real or concrete",
      th: "จับต้องได้ / เป็นรูปธรรม",
      jp: "触れられる / 具体的な",
      cn: "可触摸的 / 有形的",
      kr: "손에 잡히는 / 구체적인"
    }
  },
  {
    word: "Ubiquitous",
    meaning: {
      en: "Present or existing everywhere",
      th: "มีอยู่ทั่วไป / แพร่หลาย",
      jp: "至る所に存在する",
      cn: "无处不在的 / 普遍的",
      kr: "어디에나 존재하는"
    }
  },
  {
    word: "Vivid",
    meaning: {
      en: "Producing strong, clear images in the mind",
      th: "ชัดเจน / สดใส",
      jp: "鮮やかな / 生き生きした",
      cn: "生动的 / 鲜艳的",
      kr: "생생한 / 선명한"
    }
  },
  {
    word: "Wary",
    meaning: {
      en: "Cautious or careful about possible dangers",
      th: "ระมัดระวัง / รอบคอบ",
      jp: "用心深い / 慎重な",
      cn: "警惕的 / 小心的",
      kr: "조심스러운 / 신중한"
    }
  },
  {
    word: "Zealous",
    meaning: {
      en: "Showing great energy or enthusiasm",
      th: "กระตือรือร้น / มีความมุ่งมั่นสูง",
      jp: "熱心な / 情熱的な",
      cn: "热情的 / 积极的",
      kr: "열정적인 / 적극적인"
    }
  },
  {
    word: "Arduous",
    meaning: {
      en: "Requiring great effort; difficult",
      th: "ลำบาก / ต้องใช้ความพยายามมาก",
      jp: "骨の折れる / 困難な",
      cn: "艰难的 / 费力的",
      kr: "고된 / 힘든"
    }
  },
  {
    word: "Brisk",
    meaning: {
      en: "Active, fast, and energetic",
      th: "กระฉับกระเฉง / รวดเร็ว",
      jp: "きびきびした / 活発な",
      cn: "轻快的 / 活泼的",
      kr: "활발한 / 빠른"
    }
  },
  {
    word: "Concur",
    meaning: {
      en: "To agree or have the same opinion",
      th: "เห็นด้วย / มีความคิดเห็นตรงกัน",
      jp: "同意する / 一致する",
      cn: "同意 / 一致",
      kr: "동의하다 / 일치하다"
    }
  },
  {
    word: "Diligent",
    meaning: {
      en: "Showing care in one's work or duties",
      th: "ขยัน / ตั้งใจทำงาน",
      jp: "勤勉な / 真面目な",
      cn: "勤奋的 / 认真负责的",
      kr: "근면한 / 성실한"
    }
  },
  {
    word: "Eccentric",
    meaning: {
      en: "Unconventional and slightly strange",
      th: "แปลก / ไม่เหมือนใคร",
      jp: "風変わりな / 特異な",
      cn: "古怪的 / 离奇的",
      kr: "별난 / 독특한"
    }
  },
  {
    word: "Frugal",
    meaning: {
      en: "Economical, avoiding waste",
      th: "ประหยัด / มัธยัสถ์",
      jp: "倹約な / 節約する",
      cn: "节俭的 / 节约的",
      kr: "검소한 / 절약하는"
    }
  },
  {
    word: "Grim",
    meaning: {
      en: "Forbidding or uninviting; harsh",
      th: "ร้ายแรง / หนักหน่วง",
      jp: "厳しい / 恐ろしい",
      cn: "严峻的 / 可怕的",
      kr: "험악한 / 잔혹한"
    }
  },
  {
    word: "Hostile",
    meaning: {
      en: "Unfriendly or antagonistic",
      th: "เป็นศัตรู / ไม่เป็นมิตร",
      jp: "敵意のある / 敵対的な",
      cn: "敌对的 / 不友好的",
      kr: "적대적인 / 불친절한"
    }
  },
  {
    word: "Impeccable",
    meaning: {
      en: "In accordance with the highest standards; faultless",
      th: "ไร้ที่ติ / สมบูรณ์แบบ",
      jp: "非の打ち所がない",
      cn: "完美的 / 无可挑剔的",
      kr: "흠잡을 데 없는 / 완벽한"
    }
  },
  {
    word: "Judicious",
    meaning: {
      en: "Having good judgment; wise",
      th: "รอบคอบ / มีเหตุผล",
      jp: "賢明な / 判断力のある",
      cn: "明智的 / 审慎的",
      kr: "현명한 / 신중한"
    }
  },
  {
    word: "Lethargic",
    meaning: {
      en: "Sluggish and apathetic",
      th: "เฉื่อยชา / ไม่กระตือรือร้น",
      jp: "無気力な / だるい",
      cn: "昏睡的 / 无精打采的",
      kr: "무기력한 / 피곤한"
    }
  },
  {
    word: "Morbid",
    meaning: {
      en: "Characterized by an abnormal interest in disturbing subjects",
      th: "หม่นหมอง / เกี่ยวกับความตาย",
      jp: "病的な / 不気味な",
      cn: "病态的 / 可怖的",
      kr: "병적인 / 음산한"
    }
  },
  {
    word: "Novice",
    meaning: {
      en: "A beginner or inexperienced person",
      th: "มือใหม่ / ผู้เริ่มต้น",
      jp: "初心者 / 未経験者",
      cn: "新手 / 初学者",
      kr: "초보자 / 신입"
    }
  },
  {
    word: "Omit",
    meaning: {
      en: "To leave out or exclude",
      th: "ละเว้น / ไม่รวม",
      jp: "省略する / 除外する",
      cn: "省略 / 遗漏",
      kr: "생략하다 / 제외하다"
    }
  },
  {
    word: "Prudent",
    meaning: {
      en: "Acting with care and thought for the future",
      th: "รอบคอบ / ระมัดระวัง",
      jp: "慎重な / 賢明な",
      cn: "谨慎的 / 深思熟虑的",
      kr: "신중한 / 현명한"
    }
  },
  {
    word: "Reckless",
    meaning: {
      en: "Without thinking or caring about consequences",
      th: "ประมาท / ไม่ระวัง",
      jp: "向こう見ずな",
      cn: "鲁莽的 / 不顾后果的",
      kr: "무모한 / 경솔한"
    }
  },
  {
    word: "Subtle",
    meaning: {
      en: "Delicate and precise; hard to notice",
      th: "ละเอียด / แยบยล",
      jp: "微妙な / 巧妙な",
      cn: "微妙的 / 精妙的",
      kr: "미묘한 / 섬세한"
    }
  },
  {
    word: "Transient",
    meaning: {
      en: "Lasting only a short time",
      th: "ชั่วคราว / ไม่ยั่งยืน",
      jp: "一時的な / 短命な",
      cn: "短暂的 / 暂时的",
      kr: "일시적인 / 순간적인"
    }
  },
  {
    word: "Vulnerable",
    meaning: {
      en: "Easily hurt or affected",
      th: "อ่อนไหว / เปราะบาง",
      jp: "傷つきやすい / 弱い",
      cn: "脆弱的 / 易受伤的",
      kr: "취약한 / 상처받기 쉬운"
    }
  },
  {
    word: "Whimsical",
    meaning: {
      en: "Playfully unusual or fanciful",
      th: "แปลก / สนุกสนานแบบมีจินตนาการ",
      jp: "気まぐれな / 風変わりな",
      cn: "异想天开的 / 奇特的",
      kr: "기발한 / 엉뚱한"
    }
  },
  {
    word: "Yearn",
    meaning: {
      en: "To long for something strongly",
      th: "โหยหา / ปรารถนาอย่างแรงกล้า",
      jp: "切望する / 恋い焦がれる",
      cn: "渴望 / 思念",
      kr: "갈망하다 / 그리워하다"
    }
  },
  {
    word: "Zephyr",
    meaning: {
      en: "A soft gentle breeze",
      th: "สายลมอ่อน ๆ / ลมพัดเบา",
      jp: "そよ風",
      cn: "微风 / 轻风",
      kr: "산들바람 / 부드러운 바람"
    }
  },
  {
    word: "Abridge",
    meaning: {
      en: "To shorten a text without losing meaning",
      th: "ย่อให้สั้นลงโดยไม่เสียความหมาย",
      jp: "短縮する / 要約する",
      cn: "删节 / 简缩",
      kr: "요약하다 / 줄이다"
    }
  },
  {
    word: "Bolster",
    meaning: {
      en: "To support or strengthen",
      th: "สนับสนุน / เสริมแรง",
      jp: "強化する / 支える",
      cn: "支持 / 增强",
      kr: "강화하다 / 지지하다"
    }
  },
  {
    word: "Coherent",
    meaning: {
      en: "Logical and consistent",
      th: "สอดคล้อง / มีเหตุผล",
      jp: "首尾一貫した / 論理的な",
      cn: "连贯的 / 合乎逻辑的",
      kr: "일관된 / 논리적인"
    }
  },
  {
    word: "Deter",
    meaning: {
      en: "To discourage or prevent from acting",
      th: "ขัดขวาง / ยับยั้ง",
      jp: "抑止する / 妨げる",
      cn: "阻止 / 威慑",
      kr: "저지하다 / 막다"
    }
  },
  {
    word: "Elusive",
    meaning: {
      en: "Difficult to find, catch, or achieve",
      th: "หายาก / เข้าใจยาก",
      jp: "捕らえにくい / 理解しにくい",
      cn: "难以捉摸的 / 难懂的",
      kr: "잡기 어려운 / 이해하기 힘든"
    }
  },
  {
    word: "Fluctuate",
    meaning: {
      en: "To rise and fall irregularly",
      th: "ขึ้น ๆ ลง ๆ / แปรปรวน",
      jp: "変動する / 揺れる",
      cn: "波动 / 起伏",
      kr: "변동하다 / 오르내리다"
    }
  },
  {
    word: "Gratify",
      meaning: {
      en: "To give pleasure or satisfaction",
      th: "ทำให้พอใจ / ทำให้ดีใจ",
      jp: "満足させる / 喜ばせる",
      cn: "使满足 / 取悦",
      kr: "기쁘게 하다 / 만족시키다"
    }
  },
  {
    word: "Hamper",
    meaning: {
      en: "To obstruct or slow progress",
      th: "ขัดขวาง / ทำให้ช้าลง",
      jp: "妨げる / 阻む",
      cn: "妨碍 / 阻止",
      kr: "방해하다 / 지연시키다"
    }
  },
  {
    word: "Incessant",
    meaning: {
      en: "Continuing without pause",
      th: "ไม่หยุด / ต่อเนื่อง",
      jp: "絶え間ない / 続く",
      cn: "不停的 / 连续的",
      kr: "끊임없는 / 지속적인"
    }
  },
  {
    word: "Juxtapose",
    meaning: {
      en: "To place side by side for contrast",
      th: "วางเปรียบเทียบกัน",
      jp: "並べて比較する",
      cn: "并列对比",
      kr: "나란히 두다 / 대비하다"
    }
  },
  {
    word: "Linger",
    meaning: {
      en: "To stay longer than necessary",
      th: "อยู่นานกว่าที่ควร",
      jp: "長居する / 残る",
      cn: "逗留 / 徘徊",
      kr: "머무르다 / 남아있다"
    }
  },
  {
    word: "Mundane",
    meaning: {
      en: "Ordinary and lacking excitement",
      th: "ธรรมดา / น่าเบื่อ",
      jp: "平凡な / 退屈な",
      cn: "平凡的 / 世俗的",
      kr: "평범한 / 지루한"
    }
  },
  {
    word: "Nurture",
    meaning: {
      en: "To care for and encourage growth",
      th: "เลี้ยงดู / บำรุง",
      jp: "育てる / 養う",
      cn: "培养 / 抚育",
      kr: "양육하다 / 키우다"
    }
  },
  {
    word: "Obsolete",
    meaning: {
      en: "Out of date or no longer used",
      th: "ล้าสมัย / เลิกใช้แล้ว",
      jp: "時代遅れの / 廃れた",
      cn: "过时的 / 废弃的",
      kr: "구식의 / 사용되지 않는"
    }
  },
  {
    word: "Pivotal",
    meaning: {
      en: "Of crucial importance",
      th: "สำคัญมาก / จุดเปลี่ยน",
      jp: "極めて重要な / 中心的な",
      cn: "关键的 / 核心的",
      kr: "중요한 / 핵심적인"
    }
  },
  {
    word: "Quaint",
    meaning: {
      en: "Attractively old-fashioned",
      th: "แปลกแต่สวยงาม / คลาสสิก",
      jp: "古風で趣のある",
      cn: "古雅的 / 奇特的",
      kr: "고풍스러운 / 매력적인"
    }
  },
  {
    word: "Rhetoric",
    meaning: {
      en: "The art of effective speaking or writing",
      th: "วาทศิลป์ / ศิลปะการพูด",
      jp: "修辞 / 雄弁術",
      cn: "修辞 / 辩才",
      kr: "수사법 / 웅변술"
    }
  },
  {
    word: "Scrupulous",
    meaning: {
      en: "Very careful and precise",
      th: "ละเอียดถี่ถ้วน / มีศีลธรรม",
      jp: "几帳面な / 慎重な",
      cn: "一丝不苟的 / 严谨的",
      kr: "세심한 / 양심적인"
    }
  },
  {
    word: "Tenacious",
    meaning: {
      en: "Holding firmly; persistent",
      th: "ยึดมั่น / ดื้อรั้น / ไม่ยอมแพ้",
      jp: "粘り強い / 執拗な",
      cn: "顽强的 / 坚持的",
      kr: "끈질긴 / 집요한"
    }
  },
  {
    word: "Venture",
    meaning: {
      en: "To undertake a risky project",
      th: "เสี่ยงทำบางสิ่ง / การลงทุน",
      jp: "冒険する / 事業",
      cn: "冒险 / 投资",
      kr: "모험하다 / 사업"
    }
  },
  {
    word: "Wane",
    meaning: {
      en: "To decrease in power or intensity",
      th: "ลดลง / อ่อนแรงลง",
      jp: "減少する / 弱まる",
      cn: "衰退 / 减弱",
      kr: "감소하다 / 약해지다"
    }
  },
  {
    word: "Yearning",
    meaning: {
      en: "Deep longing for something",
      th: "ความโหยหา / ความปรารถนา",
      jp: "憧れ / 切望",
      cn: "渴望 / 向往",
      kr: "갈망 / 동경"
    }
  },
  {
    word: "Adversity",
    meaning: {
      en: "Hardship or misfortune",
      th: "ความยากลำบาก / เคราะห์ร้าย",
      jp: "逆境 / 不運",
      cn: "逆境 / 不幸",
      kr: "역경 / 불운"
    }
  },
  {
    word: "Blatant",
    meaning: {
      en: "Completely obvious and offensive",
      th: "โจ่งแจ้ง / เด่นชัด",
      jp: "露骨な / 明らかな",
      cn: "公然的 / 明显的",
      kr: "노골적인 / 뻔한"
    }
  },
  {
    word: "Comply",
    meaning: {
      en: "To act in accordance with rules",
      th: "ทำตาม / เชื่อฟัง",
      jp: "従う / 守る",
      cn: "遵守 / 服从",
      kr: "따르다 / 준수하다"
    }
  },
  {
    word: "Deviate",
    meaning: {
      en: "To depart from an established course",
      th: "เบี่ยงเบน / แตกต่างจาก",
      jp: "逸脱する / 外れる",
      cn: "偏离 / 背离",
      kr: "벗어나다 / 이탈하다"
    }
  },
  {
    word: "Eminent",
    meaning: {
      en: "Famous and respected within a field",
      th: "โดดเด่น / มีชื่อเสียง",
      jp: "著名な / 卓越した",
      cn: "杰出的 / 著名的",
      kr: "저명한 / 뛰어난"
    }
  },
  {
    word: "Frivolous",
    meaning: {
      en: "Not having serious purpose or value",
      th: "ไร้สาระ / ไม่จริงจัง",
      jp: "軽薄な / つまらない",
      cn: "轻浮的 / 无聊的",
      kr: "경솔한 / 하찮은"
    }
  },
  {
    word: "Hinderance",
    meaning: {
      en: "Something that delays progress",
      th: "สิ่งขัดขวาง / อุปสรรค",
      jp: "妨害 / 障害",
      cn: "障碍 / 妨碍物",
      kr: "방해 / 장애물"
    }
  },
  {
    word: "Inquire",
    meaning: {
      en: "To ask for information",
      th: "สอบถาม / สืบถาม",
      jp: "問い合わせる / 尋ねる",
      cn: "询问 / 打听",
      kr: "문의하다 / 물어보다"
    }
  },
  {
    word: "Lucid",
      meaning: {
      en: "Clear and easy to understand",
      th: "เข้าใจง่าย / ชัดเจน",
      jp: "明快な / 分かりやすい",
      cn: "清晰的 / 明了的",
      kr: "명확한 / 이해하기 쉬운"
    }
  },
  {
    word: "Malleable",
    meaning: {
      en: "Easily influenced or shaped",
      th: "ยืดหยุ่น / ปรับตัวได้ง่าย",
      jp: "柔軟な / 影響されやすい",
      cn: "可塑的 / 易受影响的",
      kr: "유연한 / 영향을 잘 받는"
    }
  },
  {
    word: "Notion",
    meaning: {
      en: "A belief or idea",
      th: "ความคิด / ความเชื่อ",
      jp: "考え / 概念",
      cn: "概念 / 想法",
      kr: "개념 / 생각"
    }
  },
  {
    word: "Perplex",
    meaning: {
      en: "To confuse or puzzle",
      th: "ทำให้งง / ทำให้สับสน",
      jp: "困惑させる / 混乱させる",
      cn: "使困惑 / 使迷惑",
      kr: "혼란스럽게 하다 / 당황하게 하다"
    }
  },
  {
    word: "Revere",
    meaning: {
      en: "To respect deeply",
      th: "เคารพอย่างสูง",
      jp: "尊敬する / 崇拝する",
      cn: "尊敬 / 崇敬",
      kr: "존경하다 / 숭배하다"
    }
  },
  {
    word: "Serene",
    meaning: {
      en: "Calm, peaceful, and untroubled",
      th: "สงบ / เยือกเย็น",
      jp: "穏やかな / 静かな",
      cn: "宁静的 / 平和的",
      kr: "고요한 / 평온한"
    }
  },
  {
    word: "Turbulent",
    meaning: {
      en: "Characterized by conflict or disorder",
      th: "วุ่นวาย / ปั่นป่วน",
      jp: "混乱した / 激動の",
      cn: "动荡的 / 混乱的",
      kr: "격동의 / 혼란스러운"
    }
  },
  {
    word: "Venerate",
    meaning: {
      en: "To honor or respect deeply",
      th: "เคารพบูชา",
      jp: "崇敬する / 敬う",
      cn: "崇敬 / 尊重",
      kr: "존경하다 / 숭배하다"
    }
  },
  {
    word: "Witty",
    meaning: {
      en: "Showing quick and inventive humor",
      th: "มีไหวพริบ / พูดตลกอย่างฉลาด",
      jp: "機知に富んだ / 面白い",
      cn: "机智的 / 风趣的",
      kr: "재치 있는 / 유머러스한"
    }
  }
];