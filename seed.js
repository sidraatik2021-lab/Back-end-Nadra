mongoose.connect(
  "mongodb+srv://nadra:nadra1256@cluster0.muns3r8.mongodb.net/nadra?appName=Cluster0",
);
import dotenv from "dotenv";
dotenv.config();

const skincareData = [
  {
    name: "تنظيف عميق",
    duration: "60 دقيقة",
    price: 50,
    section: "basic",
    category: "skincare",
  },
  {
    name: "ميدرافيشل",
    duration: "45 دقيقة",
    price: 60,
    section: "basic",
    category: "skincare",
  },
  {
    name: "تنظيف مع ماسك كولاجين",
    duration: "70 دقيقة",
    price: 65,
    section: "basic",
    category: "skincare",
  },
  {
    name: "تنظيف بالبخار وإزالة الرؤوس السوداء",
    duration: "60 دقيقة",
    price: 55,
    section: "basic",
    category: "skincare",
  },
  {
    name: "جلسة ترطيب عميق",
    duration: "50 دقيقة",
    price: 60,
    section: "basic",
    category: "skincare",
  },
  {
    name: "تقشير كيميائي",
    duration: "40 دقيقة",
    price: 70,
    section: "peeling",
    category: "skincare",
  },
  {
    name: "تقشير كربوني",
    duration: "30 دقيقة",
    price: 80,
    section: "peeling",
    category: "skincare",
  },
  {
    name: "تقشير أعشاب طبيعي",
    duration: "50 دقيقة",
    price: 75,
    section: "peeling",
    category: "skincare",
  },
  {
    name: "تقشير طحالب",
    duration: "45 دقيقة",
    price: 70,
    section: "peeling",
    category: "skincare",
  },
  {
    name: "تقشير إنزيمي",
    duration: "35 دقيقة",
    price: 65,
    section: "peeling",
    category: "skincare",
  },
  {
    name: "علاج حب الشباب",
    duration: "50 دقيقة",
    price: 65,
    section: "treatment",
    category: "skincare",
  },
  {
    name: "علاج الكلف",
    duration: "60 دقيقة",
    price: 90,
    section: "treatment",
    category: "skincare",
  },
  {
    name: "علاج التصبغات",
    duration: "55 دقيقة",
    price: 85,
    section: "treatment",
    category: "skincare",
  },
  {
    name: "علاج المسام الواسعة",
    duration: "45 دقيقة",
    price: 70,
    section: "treatment",
    category: "skincare",
  },
  {
    name: "علاج البشرة الدمنية",
    duration: "50 دقيقة",
    price: 75,
    section: "treatment",
    category: "skincare",
  },
  {
    name: "علاج البشرة الحساسة",
    duration: "50 دقيقة",
    price: 80,
    section: "treatment",
    category: "skincare",
  },
  {
    name: "ديرما بن",
    duration: "30 دقيقة",
    price: 80,
    section: "rejuvenation",
    category: "skincare",
  },
  {
    name: "ميزوثيرابي",
    duration: "40 دقيقة",
    price: 85,
    section: "rejuvenation",
    category: "skincare",
  },
  {
    name: "بلازما للوجه",
    duration: "60 دقيقة",
    price: 120,
    section: "rejuvenation",
    category: "skincare",
  },
  {
    name: "جلسة فيتامين سي",
    duration: "35 دقيقة",
    price: 60,
    section: "rejuvenation",
    category: "skincare",
  },
  {
    name: "جلسة كولاجين طبيعي",
    duration: "45 دقيقة",
    price: 75,
    section: "rejuvenation",
    category: "skincare",
  },
  {
    name: "جلسة شد البشرة بالخيوط التجميلية",
    duration: "70 دقيقة",
    price: 150,
    section: "rejuvenation",
    category: "skincare",
  },
  {
    name: "جلسة أوكسجين للوجه",
    duration: "40 دقيقة",
    price: 70,
    section: "advanced",
    category: "skincare",
  },
  {
    name: "جلسة ذهب 24 قيراط",
    duration: "50 دقيقة",
    price: 100,
    section: "advanced",
    category: "skincare",
  },
  {
    name: "جلسة كريستال للوجه",
    duration: "45 دقيقة",
    price: 90,
    section: "advanced",
    category: "skincare",
  },
  {
    name: "جلسة تنعيم الخطوط الرفيعة",
    duration: "60 دقيقة",
    price: 110,
    section: "advanced",
    category: "skincare",
  },
  {
    name: "جلسة تفتيح البشرة",
    duration: "55 دقيقة",
    price: 95,
    section: "advanced",
    category: "skincare",
  },
  {
    name: "جلسة إشراقة فورية",
    duration: "40 دقيقة",
    price: 65,
    section: "advanced",
    category: "skincare",
  },
];

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    const db = mongoose.connection.db;
    await db.collection("skincares").insertMany(skincareData);
    console.log("✅ تم إضافة البيانات!");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
