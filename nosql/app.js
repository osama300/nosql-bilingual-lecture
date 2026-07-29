const chapters = {
  introduction: { number: "01", en: "INTRODUCTION", ar: "المقدمة" },
  foundations: { number: "02", en: "FOUNDATIONS", ar: "المفاهيم الأساسية" },
  landscape: { number: "03", en: "LANDSCAPE", ar: "المشهد العام" },
  keyvalue: { number: "04", en: "KEY–VALUE", ar: "المفتاح والقيمة" },
  document: { number: "05", en: "DOCUMENT", ar: "الوثائق" },
  column: { number: "06", en: "COLUMN–FAMILY", ar: "عائلة الأعمدة" },
  graph: { number: "07", en: "GRAPH", ar: "الرسوم البيانية" },
  decision: { number: "08", en: "DECISION", ar: "اختيار النوع" },
};

function S(
  chapter,
  en,
  ar,
  leadEn,
  leadAr,
  pointsEn,
  pointsAr,
  plainEn,
  plainAr,
  visual,
  wide = false,
) {
  return {
    chapter,
    title: { en, ar },
    lead: { en: leadEn, ar: leadAr },
    points: { en: pointsEn, ar: pointsAr },
    plain: { en: plainEn, ar: plainAr },
    visual,
    wide,
  };
}

const slides = [
  {
    chapter: "introduction",
    title: { en: "NoSQL Databases", ar: "قواعد بيانات NoSQL" },
    author: "T. Suad Mohammed Othman",
    layout: "cover",
  },
  S(
    "introduction",
    "Why NoSQL, and Why Now?",
    "لماذا NoSQL الآن؟",
    "Modern applications serve more users, generate more data, and demand continuous interaction.",
    "تخدم التطبيقات الحديثة مستخدمين أكثر، وتنتج بيانات أكثر، وتتطلب تفاعلاً مستمراً.",
    [
      "<strong>More users:</strong> global services must handle enormous concurrent traffic.",
      "<strong>More data:</strong> clicks, logs, media, sensors, and transactions grow rapidly.",
      "<strong>Interactive apps:</strong> users expect immediate responses and always-on availability.",
    ],
    [
      "<strong>مستخدمون أكثر:</strong> يجب أن تخدم الأنظمة العالمية أعداداً هائلة في الوقت نفسه.",
      "<strong>بيانات أكثر:</strong> تنمو النقرات والسجلات والوسائط والحساسات والمعاملات بسرعة.",
      "<strong>تطبيقات تفاعلية:</strong> يتوقع المستخدم استجابة فورية وخدمة متاحة دائماً.",
    ],
    "The storage problem changed because the scale and behavior of applications changed.",
    "تغيّرت مشكلة التخزين لأن حجم التطبيقات وطريقة عملها تغيّرا.",
    "demand",
  ),
  S(
    "introduction",
    "The Storage Requirements Changed",
    "تغيّرت متطلبات التخزين",
    "A single relational database is not always the best fit for massive, distributed, fast-changing workloads.",
    "ليست قاعدة البيانات العلائقية الواحدة دائماً الأنسب للأحمال الضخمة والموزعة وسريعة التغيّر.",
    [
      "Relational systems can become difficult to scale for some modern workloads.",
      "Storage and processing increasingly move across <strong>distributed systems</strong>.",
      "<strong>NoSQL means “Not Only SQL”</strong>: SQL remains useful, but it is not the only data model.",
    ],
    [
      "قد يصبح توسيع الأنظمة العلائقية صعباً لبعض أحمال العمل الحديثة.",
      "يتجه التخزين والمعالجة بصورة متزايدة إلى <strong>أنظمة موزّعة</strong>.",
      "<strong>NoSQL تعني «ليس SQL فقط»</strong>: تبقى SQL مفيدة، لكنها ليست النموذج الوحيد.",
    ],
    "NoSQL expands the toolbox; it does not declare that relational databases are useless.",
    "توسّع NoSQL صندوق الأدوات، ولا تعني أن قواعد البيانات العلائقية عديمة الفائدة.",
    "requirements",
  ),
  S(
    "introduction",
    "NoSQL ≠ No SQL",
    "NoSQL لا تعني منع SQL",
    "NoSQL is a family of next-generation databases designed around alternative data models and distributed scale.",
    "NoSQL عائلة من قواعد البيانات الحديثة المبنية على نماذج بيانات بديلة والتوسّع الموزّع.",
    [
      "<strong>Non-relational:</strong> data need not be organized as related tables.",
      "<strong>Distributed:</strong> data and work can span many machines.",
      "<strong>Often open source:</strong> many influential systems are community-developed.",
      "<strong>Horizontally scalable:</strong> add nodes rather than only upgrading one server.",
    ],
    [
      "<strong>غير علائقية:</strong> لا يلزم تنظيم البيانات في جداول مترابطة.",
      "<strong>موزّعة:</strong> يمكن توزيع البيانات والعمل على أجهزة كثيرة.",
      "<strong>غالباً مفتوحة المصدر:</strong> طوّر المجتمع كثيراً من الأنظمة المؤثرة.",
      "<strong>قابلة للتوسّع أفقياً:</strong> أضف عقداً بدلاً من ترقية خادم واحد فقط.",
    ],
    "Read the name as “Not Only SQL,” not “never use SQL.”",
    "اقرأ الاسم «ليس SQL فقط»، وليس «لا تستخدم SQL أبداً».",
    "notOnlySql",
  ),
  S(
    "foundations",
    "Characteristics of NoSQL",
    "خصائص قواعد بيانات NoSQL",
    "NoSQL systems favor flexible schemas, simple access APIs, replication, and cluster-friendly operation.",
    "تميل أنظمة NoSQL إلى المخططات المرنة وواجهات الوصول البسيطة والنسخ والعمل الجيد على العناقيد.",
    [
      "<strong>BASE behavior:</strong> Basically Available, Soft state, Eventual consistency—though modern systems may also support ACID scopes.",
      "<strong>Schema-free or schema-flexible:</strong> records can evolve without one rigid table definition.",
      "<strong>Replication support:</strong> copies improve availability and fault tolerance.",
      "<strong>Cluster operation:</strong> designed to run across nodes.",
      "<strong>Simple APIs:</strong> operations are often tailored to the data model.",
    ],
    [
      "<strong>سلوك BASE:</strong> متاح أساساً، وحالة مرنة، واتساق نهائي—مع أن أنظمة حديثة قد تدعم نطاقات ACID أيضاً.",
      "<strong>بلا مخطط جامد:</strong> يمكن أن تتطور السجلات دون تعريف جدول واحد صارم.",
      "<strong>دعم النسخ:</strong> تحسّن النسخ التوافر وتحمل الأعطال.",
      "<strong>العمل العنقودي:</strong> مصممة للتشغيل عبر عدة عقد.",
      "<strong>واجهات بسيطة:</strong> غالباً ما تُخصّص العمليات لطبيعة نموذج البيانات.",
    ],
    "NoSQL usually trades universal structure for flexibility and distributed operation.",
    "تستبدل NoSQL البنية الموحدة عادةً بمرونة أكبر وتشغيل موزّع.",
    "characteristics",
  ),
  S(
    "foundations",
    "ACID vs. BASE",
    "مقارنة ACID وBASE",
    "The two models optimize for different guarantees, architectures, and application needs.",
    "يحسّن النموذجان ضمانات وبنى واحتياجات تطبيقات مختلفة.",
    [],
    [],
    "ACID protects each transaction strongly; BASE protects large-scale availability and converges over time.",
    "تحمي ACID كل معاملة بقوة؛ بينما تحمي BASE التوافر واسع النطاق وتحقق الاتساق بمرور الوقت.",
    "acidBase",
    true,
  ),
  S(
    "foundations",
    "BASE Is a Trade-off, Not a Rule",
    "BASE مقايضة وليست قاعدة مطلقة",
    "NoSQL often exchanges immediate consistency for availability, partition tolerance, and performance.",
    "تستبدل NoSQL غالباً الاتساق الفوري بتوافر أعلى وتحمل لانقسام الشبكة وأداء أفضل.",
    [
      "<strong>Basically Available:</strong> the system continues to respond.",
      "<strong>Soft state:</strong> replicas may temporarily hold different states.",
      "<strong>Eventual consistency:</strong> replicas converge when updates propagate.",
      "Not every NoSQL system is purely BASE: some offer tunable consistency or document-level ACID transactions, such as MongoDB and Couchbase.",
    ],
    [
      "<strong>متاح أساساً:</strong> يستمر النظام في الاستجابة.",
      "<strong>حالة مرنة:</strong> قد تحمل النسخ حالات مختلفة مؤقتاً.",
      "<strong>اتساق نهائي:</strong> تتطابق النسخ بعد انتشار التحديثات.",
      "ليست كل أنظمة NoSQL من نوع BASE الخالص؛ فبعضها يقدم اتساقاً قابلاً للضبط أو معاملات ACID على مستوى الوثيقة مثل MongoDB وCouchbase.",
    ],
    "Eventual consistency means “consistent later,” not “random forever.”",
    "الاتساق النهائي يعني «متسق لاحقاً»، وليس «عشوائياً إلى الأبد».",
    "base",
  ),
  S(
    "foundations",
    "CAP Theorem",
    "نظرية CAP",
    "A distributed shared-data system cannot guarantee Consistency, Availability, and Partition tolerance simultaneously under a network partition.",
    "لا يستطيع نظام بيانات موزّع ضمان الاتساق والتوافر وتحمل انقسام الشبكة معاً عند حدوث الانقسام.",
    [
      "<strong>CP:</strong> choose consistency during partitions—examples include Bigtable, HBase, and strict MongoDB configurations.",
      "<strong>AP:</strong> choose availability during partitions—examples include Cassandra, Riak, CouchDB, and Dynamo-style systems.",
      "<strong>CA:</strong> possible only when partitions are ignored; typical single-node relational systems behave this way.",
    ],
    [
      "<strong>CP:</strong> اختيار الاتساق أثناء الانقسام—مثل Bigtable وHBase وإعدادات MongoDB الصارمة.",
      "<strong>AP:</strong> اختيار التوافر أثناء الانقسام—مثل Cassandra وRiak وCouchDB وأنظمة Dynamo.",
      "<strong>CA:</strong> ممكن فقط عند تجاهل الانقسام؛ وتتصرف الأنظمة العلائقية أحادية العقدة بهذه الصورة.",
    ],
    "CAP is not “pick any two forever.” The hard choice between C and A appears when a partition actually occurs.",
    "CAP لا تعني «اختر اثنتين إلى الأبد»؛ يظهر الاختيار الصعب بين C وA عند حدوث انقسام فعلي.",
    "capTriangle",
  ),
  S(
    "foundations",
    "CAP Properties Explained",
    "شرح خصائص CAP",
    "Each CAP letter describes a guarantee that matters when data is shared across a network.",
    "يمثل كل حرف في CAP ضماناً مهماً عند مشاركة البيانات عبر الشبكة.",
    [
      "<strong>Consistency:</strong> every read sees the most recent successful write.",
      "<strong>Availability:</strong> every request receives a non-error response, even if it is not the newest value.",
      "<strong>Partition tolerance:</strong> the system keeps operating when nodes cannot communicate reliably.",
      "During a partition, the system must prefer either consistency or availability.",
      "<strong>Examples:</strong> CP—HBase and strict MongoDB; AP—Cassandra, DynamoDB, Couchbase; true CA is not a realistic distributed choice.",
    ],
    [
      "<strong>الاتساق:</strong> ترى كل قراءة آخر كتابة ناجحة.",
      "<strong>التوافر:</strong> يتلقى كل طلب استجابة غير خاطئة حتى إن لم تكن أحدث قيمة.",
      "<strong>تحمل الانقسام:</strong> يستمر النظام عندما يتعذر تواصل العقد بصورة موثوقة.",
      "أثناء الانقسام يجب أن يفضّل النظام الاتساق أو التوافر.",
      "<strong>أمثلة:</strong> CP—HBase وMongoDB الصارم؛ AP—Cassandra وDynamoDB وCouchbase؛ أما CA الحقيقية فليست خياراً موزّعاً واقعياً.",
    ],
    "A network split forces a decision: wait for correct data, or keep answering.",
    "يجبر انقسام الشبكة النظام على قرار: انتظر البيانات الصحيحة، أو استمر في الإجابة.",
    "capDefinitions",
  ),
  S(
    "foundations",
    "The NoSQL Trend",
    "اتجاه انتشار NoSQL",
    "The lecture’s historical chart shows relational database attention declining while NoSQL attention rises around 2010–2015.",
    "يوضح الرسم التاريخي في المحاضرة تراجع الاهتمام النسبي بالقواعد العلائقية وارتفاع الاهتمام بـNoSQL تقريباً بين 2010 و2015.",
    [
      "The chart illustrates a technology trend, not the disappearance of relational databases.",
      "Multiple NoSQL products appear as specialized alternatives for new workloads.",
      "The practical result is <strong>polyglot persistence</strong>: using more than one database type in the same organization.",
    ],
    [
      "يوضح الرسم اتجاهاً تقنياً، وليس اختفاء قواعد البيانات العلائقية.",
      "ظهرت منتجات NoSQL متعددة كبدائل متخصصة لأحمال جديدة.",
      "النتيجة العملية هي <strong>تعدد تقنيات التخزين</strong>: استخدام أكثر من نوع قاعدة بيانات في المؤسسة نفسها.",
    ],
    "New tools joined SQL; they did not erase it.",
    "انضمت أدوات جديدة إلى SQL ولم تمحها.",
    "trend",
  ),
  S(
    "landscape",
    "Types of NoSQL Databases",
    "أنواع قواعد بيانات NoSQL",
    "The lecture notes that hundreds of NoSQL products exist, but most belong to four major data-model families.",
    "تذكر المحاضرة وجود مئات منتجات NoSQL، لكن معظمها ينتمي إلى أربع عائلات رئيسية لنماذج البيانات.",
    [
      "<strong>Key–Value:</strong> retrieve a value by a unique key.",
      "<strong>Document:</strong> store and query structured documents.",
      "<strong>Column–Family:</strong> organize massive sparse rows by column families.",
      "<strong>Graph:</strong> model nodes, edges, and relationship paths.",
    ],
    [
      "<strong>المفتاح–القيمة:</strong> استرجاع قيمة بواسطة مفتاح فريد.",
      "<strong>الوثائق:</strong> تخزين وثائق منظمة والاستعلام عن محتواها.",
      "<strong>عائلة الأعمدة:</strong> تنظيم صفوف هائلة ومتفرقة حسب عائلات الأعمدة.",
      "<strong>الرسوم البيانية:</strong> تمثيل العقد والحواف ومسارات العلاقات.",
    ],
    "Choose the family whose structure matches how the application reads and connects data.",
    "اختر العائلة التي يطابق تركيبها طريقة قراءة التطبيق للبيانات وربطها.",
    "fourModels",
  ),
  S(
    "landscape",
    "Common NoSQL Systems",
    "أنظمة NoSQL الشائعة",
    "NoSQL products differ by license, platform, and storage model.",
    "تختلف منتجات NoSQL بحسب الترخيص والمنصة ونموذج التخزين.",
    [],
    [],
    "The product name matters less than matching its model to the workload.",
    "اسم المنتج أقل أهمية من مطابقة نموذجه مع حمل العمل.",
    "systemsTable",
    true,
  ),
  S(
    "landscape",
    "Companies Using NoSQL",
    "شركات تستخدم NoSQL",
    "Large organizations use different NoSQL models for different workloads rather than one universal database.",
    "تستخدم المؤسسات الكبيرة نماذج NoSQL مختلفة لأحمال مختلفة بدلاً من قاعدة واحدة لكل شيء.",
    [],
    [],
    "The same company may combine column, document, key–value, and graph systems.",
    "قد تجمع الشركة نفسها بين أنظمة الأعمدة والوثائق والمفتاح–القيمة والرسوم البيانية.",
    "companiesTable",
    true,
  ),
  S(
    "keyvalue",
    "Key–Value Stores",
    "مخازن المفتاح–القيمة",
    "The simplest NoSQL model stores one opaque value behind one unique key.",
    "أبسط نماذج NoSQL يخزّن قيمة واحدة خلف مفتاح فريد.",
    [
      "<strong>Data model:</strong> (key, value) pairs.",
      "<strong>Operations:</strong> insert, fetch, update, and delete by key.",
      "<strong>Distribution:</strong> records are assigned to nodes using the key.",
      "Designed for efficiency, scalability, and fault tolerance through replication.",
      "Usually favors single-record transactions and eventual consistency.",
      "<strong>Examples:</strong> DynamoDB, Voldemort, Scalaris, and Redis.",
    ],
    [
      "<strong>نموذج البيانات:</strong> أزواج (مفتاح، قيمة).",
      "<strong>العمليات:</strong> إدراج وجلب وتحديث وحذف باستخدام المفتاح.",
      "<strong>التوزيع:</strong> تُسند السجلات إلى العقد بالاعتماد على المفتاح.",
      "مصمم للكفاءة والتوسّع وتحمل الأعطال عبر النسخ.",
      "يركز غالباً على معاملات السجل الواحد والاتساق النهائي.",
      "<strong>أمثلة:</strong> DynamoDB وVoldemort وScalaris وRedis.",
    ],
    "It behaves like a giant dictionary: give a key, get its value.",
    "يعمل كقاموس عملاق: أعطه المفتاح لتحصل على قيمته.",
    "kvModel",
  ),
  S(
    "keyvalue",
    "Key–Value: Strengths & Limits",
    "المفتاح–القيمة: المزايا والقيود",
    "Simplicity produces exceptional speed and scale, but limits the database’s understanding of the stored value.",
    "تنتج البساطة سرعة وتوسّعاً استثنائيين، لكنها تحد من فهم القاعدة لمحتوى القيمة.",
    [
      "<strong>Pros:</strong> very fast, horizontally scalable, and easy to reason about.",
      "Keys distribute predictably across nodes.",
      "<strong>Con:</strong> complex objects and relationships must usually be serialized and managed by the application.",
    ],
    [
      "<strong>المزايا:</strong> سريع جداً، قابل للتوسّع أفقياً، ونموذجه سهل الفهم.",
      "تتوزّع المفاتيح على العقد بصورة متوقعة.",
      "<strong>القيد:</strong> يجب غالباً تسلسل الكائنات والعلاقات المعقدة وإدارتها في التطبيق.",
    ],
    "The database sees the label on the box, not necessarily what is inside.",
    "ترى قاعدة البيانات ملصق الصندوق، وليس بالضرورة ما بداخله.",
    "kvProsCons",
  ),
  S(
    "keyvalue",
    "Sessions & User Preferences",
    "الجلسات وتفضيلات المستخدم",
    "A user ID or session ID is a natural key for quickly retrieving a compact profile or session object.",
    "يُعد معرّف المستخدم أو الجلسة مفتاحاً طبيعياً لجلب ملف أو جلسة صغيرة بسرعة.",
    [
      "Store login session information by <strong>session ID</strong>.",
      "Store user preferences by <strong>user ID</strong>.",
      "Typical values include language, color theme, timezone, and product permissions.",
      "The access pattern is direct: the application already knows the key.",
    ],
    [
      "تخزين معلومات جلسة الدخول بواسطة <strong>معرّف الجلسة</strong>.",
      "تخزين تفضيلات المستخدم بواسطة <strong>معرّف المستخدم</strong>.",
      "تشمل القيم المعتادة اللغة واللون والمنطقة الزمنية وصلاحيات المنتجات.",
      "نمط الوصول مباشر: التطبيق يعرف المفتاح مسبقاً.",
    ],
    "Known ID in, complete session out—no join is required.",
    "أدخل المعرّف المعروف، تحصل على الجلسة كاملة—دون JOIN.",
    "sessionProfile",
  ),
  S(
    "keyvalue",
    "Key–Value Use Cases",
    "حالات استخدام المفتاح–القيمة",
    "Key–value stores shine when operations are tiny, frequent, and identified by one key.",
    "تتألق مخازن المفتاح–القيمة عندما تكون العمليات صغيرة ومتكررة ومعروفة بمفتاح واحد.",
    [
      "<strong>Session stores:</strong> fast retrieval by session ID.",
      "<strong>Shopping carts:</strong> transient, high-frequency updates keyed by user.",
      "<strong>Leaderboards:</strong> Redis sorted sets.",
      "<strong>Caching:</strong> reduce load on the primary database.",
      "<strong>Feature flags/configuration:</strong> small keys with high read throughput.",
      "<strong>Rate limits/counters:</strong> atomic increment operations.",
      "<strong>Pub/Sub messaging:</strong> for example, Redis channels.",
    ],
    [
      "<strong>تخزين الجلسات:</strong> جلب سريع بمعرّف الجلسة.",
      "<strong>سلال التسوق:</strong> تحديثات مؤقتة ومتكررة بمفتاح المستخدم.",
      "<strong>لوحات الترتيب:</strong> المجموعات المرتبة في Redis.",
      "<strong>التخزين المؤقت:</strong> تقليل الحمل عن القاعدة الرئيسية.",
      "<strong>أعلام الميزات والإعدادات:</strong> مفاتيح صغيرة وقراءات كثيفة.",
      "<strong>حدود المعدل والعدادات:</strong> عمليات زيادة ذرّية.",
      "<strong>رسائل النشر والاشتراك:</strong> مثل قنوات Redis.",
    ],
    "If the request sounds like “get X by ID,” key–value is a strong candidate.",
    "إذا كان الطلب «اجلب X بواسطة المعرّف»، فالمفتاح–القيمة مرشح قوي.",
    "kvUseCases",
  ),
  S(
    "keyvalue",
    "Key–Value: When to Use",
    "متى نستخدم المفتاح–القيمة؟",
    "Use it when the access pattern is predictable and low latency matters more than rich querying.",
    "استخدمه عندما يكون الوصول متوقعاً ويهم زمن الاستجابة أكثر من الاستعلامات الغنية.",
    [
      "Access is almost exclusively by primary key.",
      "The value is simple, or the application can serialize and deserialize it.",
      "Sub-millisecond in-memory latency is required.",
      "Data changes frequently with many reads and writes.",
      "Horizontal scaling with predictable performance is important.",
      "Relationships are simple and complex joins are unnecessary.",
    ],
    [
      "الوصول يتم غالباً بواسطة المفتاح الأساسي.",
      "القيمة بسيطة أو يستطيع التطبيق تسلسلها وفكها.",
      "مطلوب زمن أقل من ميلي ثانية في الذاكرة.",
      "البيانات ديناميكية كثيرة القراءة والكتابة.",
      "التوسّع الأفقي بأداء متوقع مهم.",
      "العلاقات بسيطة ولا حاجة إلى JOIN معقدة.",
    ],
    "Predictable questions deserve a highly optimized direct answer.",
    "الأسئلة المتوقعة تستحق إجابة مباشرة شديدة التحسين.",
    "whenUse",
  ),
  S(
    "keyvalue",
    "Key–Value: When Not to Use",
    "متى لا نستخدم المفتاح–القيمة؟",
    "Avoid the model when the application needs relationships, multi-record work, or queries inside values.",
    "تجنب النموذج عندما يحتاج التطبيق إلى العلاقات أو عمليات متعددة السجلات أو الاستعلام داخل القيم.",
    [
      "Relationships among data are central.",
      "Transactions span multiple operations or keys.",
      "Users must query by fields inside the stored value.",
      "Set-wide operations are common.",
      "Most stores operate on one key at a time; coordinating multiple keys moves complexity to the client.",
    ],
    [
      "العلاقات بين البيانات أساسية.",
      "تمتد المعاملات عبر عمليات أو مفاتيح متعددة.",
      "يجب الاستعلام عن حقول داخل القيمة المخزنة.",
      "العمليات على مجموعات كاملة شائعة.",
      "تعمل معظم الأنظمة على مفتاح واحد في كل مرة؛ فينتقل تنسيق المفاتيح المتعددة إلى العميل.",
    ],
    "If you constantly need to look inside or connect the boxes, choose a richer model.",
    "إذا احتجت دائماً إلى فتح الصناديق أو ربطها، فاختر نموذجاً أغنى.",
    "whenNot",
  ),
  S(
    "document",
    "Document Stores",
    "مخازن الوثائق",
    "A document store keeps a structured document as the value and can query fields inside it.",
    "يخزّن مخزن الوثائق وثيقة منظمة كقيمة، ويمكنه الاستعلام عن الحقول داخلها.",
    [
      "<strong>Data model:</strong> (key, document) pairs.",
      "<strong>Document formats:</strong> JSON, XML, BSON, or other semi-structured forms.",
      "<strong>Basic operations:</strong> insert, fetch, update, and delete.",
      "Unlike a simple key–value store, it can fetch documents by their contents.",
      "<strong>Examples:</strong> CouchDB, MongoDB, and SimpleDB.",
    ],
    [
      "<strong>نموذج البيانات:</strong> أزواج (مفتاح، وثيقة).",
      "<strong>صيغ الوثيقة:</strong> JSON أوXML أوBSON أو غيرها من الصيغ شبه المهيكلة.",
      "<strong>العمليات الأساسية:</strong> إدراج وجلب وتحديث وحذف.",
      "بخلاف المفتاح–القيمة البسيط، يمكنه جلب الوثائق بحسب محتواها.",
      "<strong>أمثلة:</strong> CouchDB وMongoDB وSimpleDB.",
    ],
    "It is a key–value store where the database understands the value’s internal fields.",
    "هو مخزن مفتاح–قيمة، لكن قاعدة البيانات تفهم الحقول داخل القيمة.",
    "documentModel",
  ),
  S(
    "document",
    "JSON-Like Documents",
    "وثائق شبيهة بـJSON",
    "Document databases support nested fields, lists, maps, dates, and Boolean values in one self-contained record.",
    "تدعم قواعد الوثائق الحقول المتداخلة والقوائم والخرائط والتواريخ والقيم المنطقية في سجل مستقل.",
    [
      "Documents are <strong>semi-structured</strong>, not unstructured.",
      "Fields can be indexed for fast queries.",
      "MongoDB stores JSON-like field–value pairs using BSON internally.",
      "Related data can be embedded inside one document.",
    ],
    [
      "الوثائق <strong>شبه مهيكلة</strong> وليست بلا بنية.",
      "يمكن فهرسة الحقول لتسريع الاستعلام.",
      "تخزّن MongoDB أزواج حقول وقيم شبيهة بـJSON باستخدام BSON داخلياً.",
      "يمكن تضمين البيانات المرتبطة داخل وثيقة واحدة.",
    ],
    "A document resembles the object your application already uses.",
    "تشبه الوثيقة الكائن الذي يستخدمه تطبيقك بالفعل.",
    "jsonDocument",
  ),
  S(
    "document",
    "A MongoDB Collection",
    "مجموعة وثائق MongoDB",
    "A collection groups related documents, and each document may have different optional fields.",
    "تجمع الـCollection وثائق مرتبطة، ويمكن أن تحتوي كل وثيقة على حقول اختيارية مختلفة.",
    [
      "A <strong>collection</strong> roughly plays the organizational role of a table.",
      "A <strong>document</strong> is the stored JSON-like record.",
      "Documents in one collection do not need perfectly identical shapes.",
      "Applications still benefit from intentional validation and indexing.",
    ],
    [
      "تؤدي <strong>المجموعة Collection</strong> دوراً تنظيمياً يشبه الجدول تقريباً.",
      "<strong>الوثيقة Document</strong> هي السجل الشبيه بـJSON.",
      "لا يلزم أن تتطابق أشكال وثائق المجموعة تماماً.",
      "تظل التطبيقات بحاجة إلى تحقق وفهارس مصممة بعناية.",
    ],
    "A collection is a folder of related documents, not a rigid spreadsheet.",
    "المجموعة مجلد لوثائق مرتبطة، وليست جدول بيانات جامداً.",
    "collectionImage",
  ),
  S(
    "document",
    "MongoDB Insert Operation",
    "عملية الإدراج في MongoDB",
    "An insert sends one document to a named collection, where MongoDB stores it as a new record.",
    "ترسل عملية الإدراج وثيقة واحدة إلى مجموعة محددة، فتخزنها MongoDB كسجل جديد.",
    [
      "<strong>Collection:</strong> <code>users</code> identifies the destination.",
      "<strong>Document:</strong> the object contains fields such as name, age, status, and groups.",
      "MongoDB creates an <code>_id</code> if the document does not provide one.",
      "The inserted document becomes available for indexed queries.",
    ],
    [
      "<strong>المجموعة:</strong> تحدد <code>users</code> وجهة التخزين.",
      "<strong>الوثيقة:</strong> تحتوي حقولاً مثل الاسم والعمر والحالة والمجموعات.",
      "تنشئ MongoDB حقل <code>_id</code> إذا لم ترسله الوثيقة.",
      "تصبح الوثيقة المدرجة متاحة للاستعلامات المفهرسة.",
    ],
    "Insert means adding one complete application object to a collection.",
    "الإدراج يعني إضافة كائن تطبيق كامل إلى مجموعة.",
    "insertImage",
  ),
  S(
    "document",
    "MongoDB Query Operation",
    "عملية الاستعلام في MongoDB",
    "A query filters documents by field criteria, then modifiers such as sorting shape the result.",
    "يرشح الاستعلام الوثائق بمعايير الحقول، ثم تُشكّل معدلات مثل الفرز النتيجة.",
    [
      "<strong>Collection:</strong> query the <code>users</code> documents.",
      "<strong>Criteria:</strong> for example, age greater than 18.",
      "<strong>Modifier:</strong> sort matching documents by age.",
      "Indexes on queried and sorted fields can prevent expensive collection scans.",
    ],
    [
      "<strong>المجموعة:</strong> الاستعلام عن وثائق <code>users</code>.",
      "<strong>المعيار:</strong> مثلاً العمر أكبر من 18.",
      "<strong>المعدّل:</strong> ترتيب الوثائق المطابقة حسب العمر.",
      "تمنع فهارس حقول البحث والفرز عمليات المسح المكلفة للمجموعة.",
    ],
    "Filter first, then sort the matching documents.",
    "رشّح أولاً، ثم رتّب الوثائق المطابقة.",
    "queryImage",
  ),
  S(
    "document",
    "Document Store Use Cases",
    "حالات استخدام مخازن الوثائق",
    "Document stores fit applications whose records are naturally self-contained and evolve over time.",
    "تناسب مخازن الوثائق التطبيقات التي تكون سجلاتها مستقلة بطبيعتها وتتطور بمرور الوقت.",
    [
      "<strong>Event logging:</strong> flexible event payloads.",
      "<strong>Content management:</strong> pages, articles, metadata, and revisions.",
      "<strong>Web analytics:</strong> real-time or near-real-time events.",
      "<strong>E-commerce:</strong> product catalogs, orders, and customer profiles.",
      "<strong>Application backends:</strong> rapidly changing object models.",
    ],
    [
      "<strong>تسجيل الأحداث:</strong> بيانات أحداث مرنة.",
      "<strong>إدارة المحتوى:</strong> صفحات ومقالات وبيانات وصفية ومراجعات.",
      "<strong>تحليلات الويب:</strong> أحداث لحظية أو شبه لحظية.",
      "<strong>التجارة الإلكترونية:</strong> المنتجات والطلبات وملفات العملاء.",
      "<strong>خلفيات التطبيقات:</strong> نماذج كائنات سريعة التغيّر.",
    ],
    "Use documents when one record should travel through the application as one object.",
    "استخدم الوثائق عندما ينتقل السجل في التطبيق ككائن واحد.",
    "documentCases",
  ),
  S(
    "document",
    "Document: When to Use",
    "متى نستخدم مخزن الوثائق؟",
    "Choose documents when the data is aggregate-oriented, flexible, and queried through meaningful fields.",
    "اختر الوثائق عندما تكون البيانات متمحورة حول كائن كامل ومرنة ويُستعلم عنها عبر حقول مفهومة.",
    [
      "Data is naturally document-centric—JSON or XML.",
      "The schema evolves rapidly.",
      "Workloads read and write complete documents or aggregates.",
      "Rich queries, secondary indexes, and aggregations are required.",
      "Rapid deployments should not wait for frequent schema migrations.",
      "Most related data can be embedded as self-contained aggregates.",
    ],
    [
      "البيانات بطبيعتها وثائقية مثل JSON أوXML.",
      "يتطور المخطط بسرعة.",
      "تقرأ الأحمال وثائق أو كائنات كاملة وتكتبها.",
      "نحتاج إلى استعلامات غنية وفهارس ثانوية وتجميعات.",
      "يجب ألا تنتظر الإصدارات السريعة ترحيلات مخطط متكررة.",
      "يمكن تضمين معظم البيانات المرتبطة في كائنات مستقلة.",
    ],
    "A document database works best when the aggregate boundary is clear.",
    "تعمل قاعدة الوثائق بأفضل صورة عندما تكون حدود الكائن واضحة.",
    "whenUse",
  ),
  S(
    "document",
    "Document: When Not to Use",
    "متى لا نستخدم مخزن الوثائق؟",
    "Avoid document-first design when the workload is dominated by cross-document relationships, strict schemas, or traditional BI.",
    "تجنب تصميم الوثائق عندما تهيمن العلاقات العابرة للوثائق أو المخططات الصارمة أو ذكاء الأعمال التقليدي.",
    [
      "Highly normalized relational data with many cross-collection ACID transactions.",
      "Complex multi-document transactions are required everywhere; MongoDB supports them, but they add cost.",
      "Heavy ad-hoc SQL reporting and traditional BI tooling.",
      "Intensive many-to-many relationships requiring frequent joins.",
      "A strictly enforced schema-on-write is non-negotiable, such as some regulated financial workloads.",
    ],
    [
      "بيانات علائقية شديدة التطبيع ومعاملات ACID كثيرة بين المجموعات.",
      "الحاجة الدائمة إلى معاملات معقدة متعددة الوثائق؛ تدعمها MongoDB لكن لها تكلفة.",
      "تقارير SQL الحرة وأدوات ذكاء الأعمال التقليدية الثقيلة.",
      "علاقات many-to-many كثيفة تحتاج JOIN متكررة.",
      "اشتراط مخطط صارم عند الكتابة كما في بعض الأعمال المالية المنظمة.",
    ],
    "Flexibility is valuable only when it matches the integrity and relationship requirements.",
    "تكون المرونة مفيدة فقط عندما تطابق متطلبات التكامل والعلاقات.",
    "whenNot",
  ),
  S(
    "column",
    "Column-Family Databases",
    "قواعد بيانات عائلة الأعمدة",
    "Column-family systems distribute very large sparse tables and group related attributes into column families.",
    "توزّع أنظمة عائلة الأعمدة جداول ضخمة ومتفرقة وتجمع السمات المرتبطة في عائلات أعمدة.",
    [
      "Data is stored and retrieved by key in a massively parallel system.",
      "<strong>Schema:</strong> column families are defined, while new columns can be added to individual rows.",
      "<strong>Storage:</strong> large hashed distributed tables.",
      "Horizontal and vertical partitioning, replication, and high availability are transparent to the application.",
      "<strong>Example:</strong> Apache Cassandra; related systems include HBase and Bigtable.",
    ],
    [
      "تُخزّن البيانات وتُسترجع بالمفتاح في نظام متوازٍ ضخم.",
      "<strong>المخطط:</strong> تُعرّف عائلات الأعمدة، ويمكن إضافة أعمدة جديدة لصفوف محددة.",
      "<strong>التخزين:</strong> جداول موزّعة ضخمة تعتمد التجزئة.",
      "يكون التقسيم الأفقي والرأسي والنسخ والتوافر العالي شفافاً للتطبيق.",
      "<strong>مثال:</strong> Apache Cassandra، ومن الأنظمة المرتبطة HBase وBigtable.",
    ],
    "Think of rows that may have millions of possible columns, but only store the columns they need.",
    "تخيّل صفوفاً لها ملايين الأعمدة الممكنة، لكنها تخزّن فقط الأعمدة التي تحتاجها.",
    "columnModel",
  ),
  S(
    "column",
    "Column-Family Use Cases",
    "حالات استخدام عائلة الأعمدة",
    "Column-family systems excel at enormous, write-heavy, distributed datasets with known query paths.",
    "تتفوق أنظمة عائلة الأعمدة مع البيانات الهائلة كثيرة الكتابة والموزعة ذات مسارات الاستعلام المعروفة.",
    [
      "<strong>Time series:</strong> sensor streams, stock ticks, and logs.",
      "<strong>Recommendation engines:</strong> high-volume user activity.",
      "<strong>Messaging:</strong> chat histories.",
      "<strong>Write-heavy systems:</strong> clickstreams and fraud events.",
      "<strong>Operational analytics:</strong> real-time counters and aggregations.",
      "<strong>Large-scale distribution:</strong> billions of rows across regions.",
    ],
    [
      "<strong>السلاسل الزمنية:</strong> الحساسات وأسعار الأسهم والسجلات.",
      "<strong>أنظمة التوصية:</strong> نشاط مستخدمين كثيف.",
      "<strong>المراسلة:</strong> تاريخ المحادثات.",
      "<strong>أنظمة كثيرة الكتابة:</strong> مسارات النقر وأحداث الاحتيال.",
      "<strong>التحليلات التشغيلية:</strong> عدادات وتجميعات لحظية.",
      "<strong>التوزيع واسع النطاق:</strong> مليارات الصفوف عبر مناطق متعددة.",
    ],
    "Design the table around the query you already know you must answer.",
    "صمّم الجدول حول الاستعلام الذي تعرف مسبقاً أنك ستجيب عنه.",
    "columnCases",
  ),
  S(
    "column",
    "Column-Family: When to Use",
    "متى نستخدم عائلة الأعمدة؟",
    "Use it for extreme write throughput, predictable key/range queries, and linear multi-region scale.",
    "استخدمها لمعدلات كتابة هائلة واستعلامات مفاتيح أو نطاقات متوقعة وتوسّع خطي عبر المناطق.",
    [
      "Thousands to millions of writes per second.",
      "Queries are known in advance and use primary keys or ordered range scans.",
      "Data is time-partitioned or event-based.",
      "Linear horizontal scaling with no single point of failure is required.",
      "Multi-region active-active deployment is needed—one of Cassandra’s strengths.",
      "The team can denormalize and duplicate data to optimize read paths.",
    ],
    [
      "آلاف إلى ملايين الكتابات في الثانية.",
      "الاستعلامات معروفة مسبقاً وتعتمد مفاتيح أساسية أو مسح نطاق مرتب.",
      "البيانات مقسمة زمنياً أو مبنية على الأحداث.",
      "مطلوب توسّع أفقي خطي بلا نقطة فشل واحدة.",
      "مطلوب تشغيل active-active عبر مناطق متعددة، وهي قوة في Cassandra.",
      "يستطيع الفريق إلغاء التطبيع وتكرار البيانات لتحسين مسارات القراءة.",
    ],
    "Fast reads come from modeling each table for a specific query.",
    "تأتي القراءة السريعة من نمذجة كل جدول لاستعلام محدد.",
    "whenUse",
  ),
  S(
    "column",
    "Column-Family: When Not to Use",
    "متى لا نستخدم عائلة الأعمدة؟",
    "Avoid it when the team needs ad-hoc relational exploration, broad transactions, or SQL expressiveness.",
    "تجنبها عندما يحتاج الفريق إلى استكشاف علائقي حر أو معاملات واسعة أو تعبير SQL كامل.",
    [
      "Ad-hoc queries and complex joins are primary requirements.",
      "Full ACID transactions across many rows or tables are required; Cassandra’s lightweight transactions are limited.",
      "Frequent relational schema changes and integrity constraints.",
      "Small or medium datasets that fit comfortably on one server.",
      "Complex WHERE clauses, subqueries, and full SQL behavior are expected.",
      "Competitive read-before-write updates requiring natural locking are common.",
    ],
    [
      "الاستعلامات الحرة وJOIN المعقدة متطلبات أساسية.",
      "مطلوب ACID كامل عبر صفوف أو جداول كثيرة؛ معاملات Cassandra الخفيفة محدودة.",
      "تغييرات مخطط علائقي متكررة وقيود تكامل.",
      "بيانات صغيرة أو متوسطة تناسب خادماً واحداً.",
      "الحاجة إلى WHERE معقدة واستعلامات فرعية وسلوك SQL كامل.",
      "تحديثات read-before-write تنافسية تحتاج قفلاً طبيعياً.",
    ],
    "The operational overhead is not justified for a small, relationally queried dataset.",
    "لا تبرر البيانات الصغيرة ذات الاستعلام العلائقي كلفة التشغيل الموزّع.",
    "whenNot",
  ),
  S(
    "graph",
    "Graph Databases",
    "قواعد بيانات الرسوم البيانية",
    "Graph databases store entities as nodes and relationships as labeled edges.",
    "تخزّن قواعد الرسوم البيانية الكيانات كعقد والعلاقات كحواف مسمّاة.",
    [
      "<strong>Nodes:</strong> entities such as people, products, or accounts.",
      "<strong>Node properties:</strong> IDs, names, grades, or other attributes.",
      "<strong>Edges:</strong> relationships connecting nodes.",
      "<strong>Edge labels/roles:</strong> FRIEND, LIKES, BOUGHT, or TRANSFERRED_TO.",
    ],
    [
      "<strong>العقد:</strong> كيانات مثل الأشخاص والمنتجات والحسابات.",
      "<strong>خصائص العقد:</strong> المعرّف والاسم والدرجة أو غيرها.",
      "<strong>الحواف:</strong> علاقات تصل بين العقد.",
      "<strong>تسميات الحواف:</strong> صديق أو أعجب أو اشترى أو حوّل إلى.",
    ],
    "In a graph, the connection is stored as a first-class part of the data.",
    "في الرسم البياني تُخزّن العلاقة كجزء أساسي من البيانات.",
    "graphImage",
  ),
  S(
    "graph",
    "Graph Database Systems",
    "أنظمة قواعد الرسوم البيانية",
    "Graph systems differ in interfaces, query languages, traversal styles, and distributed execution.",
    "تختلف أنظمة الرسوم البيانية في الواجهات ولغات الاستعلام وأساليب الاجتياز والتنفيذ الموزّع.",
    [
      "Queries may be single-step, path expressions, or full recursion.",
      "<strong>Neo4j:</strong> property graph database with the Cypher language.",
      "<strong>FlockDB:</strong> designed for large adjacency relationships.",
      "<strong>Pregel:</strong> Google’s graph-processing model for iterative algorithms.",
      "RDF triple stores can map subject–predicate–object triples to a graph.",
    ],
    [
      "قد تكون الاستعلامات خطوة واحدة أو تعبيرات مسار أو استدعاءً ذاتياً كاملاً.",
      "<strong>Neo4j:</strong> قاعدة property graph تستخدم لغة Cypher.",
      "<strong>FlockDB:</strong> صُممت لعلاقات التجاور واسعة النطاق.",
      "<strong>Pregel:</strong> نموذج Google لمعالجة خوارزميات الرسوم التكرارية.",
      "يمكن لمخازن RDF الثلاثية تمثيل subject–predicate–object كرسم بياني.",
    ],
    "Graph databases answer “how are these things connected?”",
    "تجيب قواعد الرسوم: «كيف ترتبط هذه الأشياء؟».",
    "graphSystems",
  ),
  S(
    "graph",
    "Graph Use Cases",
    "حالات استخدام الرسوم البيانية",
    "Graph databases make multi-hop relationship questions direct and fast.",
    "تجعل قواعد الرسوم أسئلة العلاقات متعددة الخطوات مباشرة وسريعة.",
    [
      "<strong>Social networks:</strong> friends of friends and influencer detection.",
      "<strong>Recommendations:</strong> people who bought this also bought.",
      "<strong>Fraud detection:</strong> identify suspicious transaction rings.",
      "<strong>Knowledge graphs:</strong> semantic and enterprise information.",
      "<strong>Master data management:</strong> complex hierarchies.",
      "<strong>Network topology:</strong> dependencies and impact analysis.",
    ],
    [
      "<strong>الشبكات الاجتماعية:</strong> أصدقاء الأصدقاء واكتشاف المؤثرين.",
      "<strong>التوصيات:</strong> من اشترى هذا اشترى أيضاً.",
      "<strong>كشف الاحتيال:</strong> تحديد حلقات المعاملات المشبوهة.",
      "<strong>رسوم المعرفة:</strong> المعلومات الدلالية والمؤسسية.",
      "<strong>إدارة البيانات الرئيسية:</strong> التسلسلات الهرمية المعقدة.",
      "<strong>طوبولوجيا الشبكة:</strong> التبعيات وتحليل أثر الأعطال.",
    ],
    "Use a graph when the path between records is the answer.",
    "استخدم الرسم عندما يكون المسار بين السجلات هو الإجابة.",
    "graphCases",
  ),
  S(
    "graph",
    "Graph: When to Use",
    "متى نستخدم قاعدة الرسوم؟",
    "Choose a graph when connections matter as much as entities and queries traverse several relationship levels.",
    "اختر الرسم عندما تهم العلاقات بقدر الكيانات وتعبر الاستعلامات عدة مستويات.",
    [
      "Connections are as important as the data points.",
      "Queries traverse multiple levels, such as third-degree connections.",
      "Real-time relationship recommendations or impact analysis are required.",
      "The model is highly interconnected with many-to-many relationships.",
      "Relational joins have become unbearable—such as ten-way joins.",
      "Graph algorithms such as centrality and community detection are needed.",
    ],
    [
      "الاتصالات مهمة بقدر نقاط البيانات.",
      "تجتاز الاستعلامات مستويات متعددة مثل علاقات الدرجة الثالثة.",
      "مطلوبة توصيات علاقات أو تحليلات أثر لحظية.",
      "النموذج شديد الترابط بعلاقات many-to-many.",
      "أصبحت JOIN العلائقية مرهقة مثل ربط عشرة جداول.",
      "نحتاج إلى خوارزميات مثل المركزية واكتشاف المجتمعات.",
    ],
    "A graph replaces repeated joins with direct relationship traversal.",
    "يستبدل الرسم عمليات JOIN المتكررة باجتياز مباشر للعلاقات.",
    "whenUse",
  ),
  S(
    "graph",
    "Graph: When Not to Use",
    "متى لا نستخدم قاعدة الرسوم؟",
    "Avoid graph storage when relationships are shallow or the workload is better expressed as time series, search, or bulk analytics.",
    "تجنب الرسم عندما تكون العلاقات سطحية أو يكون الحمل أنسب للسلاسل الزمنية أو البحث أو التحليل الدفعي.",
    [
      "Mostly tabular data with few relationships—key–value or document is simpler.",
      "Massive time-series numeric data—column-family is a better fit.",
      "Bulk analytical processing over non-graph data—use OLAP-oriented storage.",
      "Full-text search is primary—use a search engine such as Elasticsearch.",
      "The domain gains little from deep paths and the team lacks graph modeling skills.",
      "Graph-wide, write-heavy updates can be difficult to scale horizontally in some systems.",
    ],
    [
      "بيانات جدولية غالباً وعلاقات قليلة؛ المفتاح–القيمة أو الوثائق أبسط.",
      "بيانات رقمية زمنية هائلة؛ عائلة الأعمدة أنسب.",
      "تحليل دفعي لبيانات غير رسومية؛ استخدم تخزيناً موجهاً لـOLAP.",
      "البحث النصي الكامل هو الأساس؛ استخدم محركاً مثل Elasticsearch.",
      "المجال لا يستفيد من المسارات العميقة والفريق يفتقر لمهارة نمذجة الرسم.",
      "قد يصعب توسيع التحديثات الكثيفة عبر الرسم كله أفقياً في بعض الأنظمة.",
    ],
    "Do not use a graph merely because the word “relationship” appears somewhere.",
    "لا تستخدم الرسم لمجرد ظهور كلمة «علاقة» في المتطلبات.",
    "whenNot",
  ),
  S(
    "decision",
    "Which NoSQL Database Is Best?",
    "ما أفضل قاعدة NoSQL؟",
    "There is no universal winner—the best model depends on the application’s concrete requirements.",
    "لا يوجد فائز مطلق؛ يعتمد أفضل نموذج على متطلبات التطبيق الفعلية.",
    [
      "<strong>Data size:</strong> volume, growth rate, and regional distribution.",
      "<strong>Complexity:</strong> simple lookups, aggregates, sparse events, or deep relationships.",
      "<strong>CAP priorities:</strong> what should happen during a network partition?",
      "<strong>Data format:</strong> values, documents, wide rows, or graphs.",
      "<strong>Access pattern:</strong> design for the questions the application asks most often.",
    ],
    [
      "<strong>حجم البيانات:</strong> الكمية ومعدل النمو والتوزيع الجغرافي.",
      "<strong>التعقيد:</strong> جلب بسيط أو كائنات أو أحداث متفرقة أو علاقات عميقة.",
      "<strong>أولويات CAP:</strong> ماذا يحدث أثناء انقسام الشبكة؟",
      "<strong>صيغة البيانات:</strong> قيم أو وثائق أو صفوف واسعة أو رسوم.",
      "<strong>نمط الوصول:</strong> صمّم للأسئلة الأكثر تكراراً في التطبيق.",
    ],
    "Start from the query and consistency requirements—not from the database brand.",
    "ابدأ من الاستعلام ومتطلبات الاتساق، لا من اسم منتج قاعدة البيانات.",
    "decisionTree",
  ),
];

const ui = {
  frame: document.querySelector("#slide-content"),
  current: document.querySelector("#currentSlide"),
  total: document.querySelector("#totalSlides"),
  previous: document.querySelector("#prevButton"),
  next: document.querySelector("#nextButton"),
  home: document.querySelector("#homeButton"),
  progress: document.querySelector("#progressCluster"),
  chapterNumber: document.querySelector("#chapterNumber"),
  chapterLabel: document.querySelector("#chapterLabel"),
  chapterTitle: document.querySelector("#chapterTitle"),
  languageButtons: [...document.querySelectorAll("[data-lang]")],
  tocButton: document.querySelector("#tocButton"),
  tocClose: document.querySelector("#tocClose"),
  tocDialog: document.querySelector("#tocDialog"),
  tocList: document.querySelector("#tocList"),
  fullscreen: document.querySelector("#fullscreenButton"),
  status: document.querySelector("#statusMessage"),
};

let currentIndex = getIndexFromHash();
let language = getStoredLanguage();
let touchStartX = 0;
let touchStartY = 0;

function pair(en, ar, tag = "span") {
  return `<${tag} class="lang-en">${en}</${tag}><${tag} class="lang-ar">${ar}</${tag}>`;
}

function renderCover(slide) {
  return `
    <section class="slide" data-layout="cover">
      <div class="cover-content">
        <div>
          <div class="cover-kicker">BILINGUAL STUDY DECK · 37 SLIDES</div>
          <h1 class="cover-title">NO<em>SQL</em></h1>
          <p class="cover-ar lang-ar">قواعد بيانات ليست SQL فقط</p>
          <p class="cover-ar lang-en">Four data models. One clear decision map.</p>
          <div class="cover-meta">
            <span><i></i>${slide.author}</span>
            <span><i></i>HTML · TAILWIND CSS · JAVASCRIPT</span>
            <span><i></i>${pair("ARABIC + ENGLISH", "العربية + الإنجليزية")}</span>
          </div>
        </div>
        <div class="cover-network nosql-cover-map" aria-hidden="true">
          <div class="orbit"></div>
          <div class="orbit"></div>
          <span class="node main">{ }</span>
          <span class="node n1">K:V</span>
          <span class="node n2">DOC</span>
          <span class="node n3">COL</span>
          <span class="node n4">○—○</span>
          <span class="node n5">CAP</span>
        </div>
      </div>
    </section>`;
}

function renderLanguageColumn(slide, lang) {
  const points = slide.points[lang] || [];
  return `
    <div class="language-column lang-${lang}" lang="${lang}">
      <p class="lead">${slide.lead[lang]}</p>
      ${points.length ? `<ul class="concept-list">${points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}
      <aside class="plain-note">
        <small>${lang === "en" ? "IN PLAIN WORDS" : "الفكرة ببساطة"}</small>
        <p>${slide.plain[lang]}</p>
      </aside>
    </div>`;
}

function renderRegularSlide(slide, index) {
  const chapter = chapters[slide.chapter];
  return `
    <section class="slide" data-layout="${slide.wide ? "wide" : "standard"}">
      <header class="slide-header">
        <div class="slide-heading">
          <span class="eyebrow">${chapter.en} · ${chapter.number}</span>
          <h1 class="slide-title">
            <span class="lang-en" lang="en">${slide.title.en}</span>
            <span class="lang-ar" lang="ar">${slide.title.ar}</span>
          </h1>
        </div>
        <span class="slide-number-stamp" aria-hidden="true">${pad(index + 1)}</span>
      </header>
      <div class="slide-body ${slide.wide ? "single-column" : ""}">
        <div class="dual-copy">
          ${renderLanguageColumn(slide, "en")}
          ${renderLanguageColumn(slide, "ar")}
        </div>
        ${renderVisual(slide.visual)}
      </div>
    </section>`;
}

function renderVisual(type) {
  const visuals = {
    demand: `
      <div class="visual-panel" data-label="THE PRESSURE">
        <div class="demand-stack">
          <div><b>01</b><span>${pair("MORE USERS", "مستخدمون أكثر")}</span><i style="--fill:88%"></i></div>
          <div><b>02</b><span>${pair("MORE DATA", "بيانات أكثر")}</span><i style="--fill:100%"></i></div>
          <div><b>03</b><span>${pair("INTERACTIVE APPS", "تطبيقات تفاعلية")}</span><i style="--fill:76%"></i></div>
        </div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="flow-step accent">${pair("STORAGE MUST EVOLVE", "يجب أن يتطور التخزين")}</div>
      </div>`,
    requirements: `
      <div class="visual-panel" data-label="ONE SERVER → MANY NODES">
        <div class="model-shift">
          <div class="model-chip relational"><b>SQL</b><small>${pair("ONE PRIMARY SYSTEM", "نظام رئيسي واحد")}</small></div>
          <div class="shift-arrow" aria-hidden="true">→</div>
          <div class="cluster-mini">
            <i>K:V</i><i>DOC</i><i>COL</i><i>GRAPH</i>
          </div>
        </div>
        <div class="plain-note"><p>${pair("NOT ONLY SQL = a larger storage toolbox", "ليس SQL فقط = صندوق أدوات تخزين أوسع")}</p></div>
      </div>`,
    notOnlySql: `
      <div class="visual-panel" data-label="THE NAME EXPLAINED">
        <div class="not-only">
          <span>NO</span><b>NOT ONLY</b><span>SQL</span>
        </div>
        <div class="metric-strip">
          <div><strong>NON-RELATIONAL</strong><span>${pair("Flexible models", "نماذج مرنة")}</span></div>
          <div><strong>DISTRIBUTED</strong><span>${pair("Many nodes", "عقد كثيرة")}</span></div>
          <div><strong>SCALE OUT</strong><span>${pair("Grow wider", "نمو أفقي")}</span></div>
        </div>
      </div>`,
    characteristics: `
      <div class="visual-panel" data-label="NoSQL DNA">
        <div class="feature-lines">
          <div><b>BASE</b><span>${pair("Availability & convergence", "توافر واتساق نهائي")}</span></div>
          <div><b>{…}</b><span>${pair("Flexible schema", "مخطط مرن")}</span></div>
          <div><b>×3</b><span>${pair("Replication", "نسخ مكرّر")}</span></div>
          <div><b>+N</b><span>${pair("Cluster scale", "توسّع عنقودي")}</span></div>
        </div>
      </div>`,
    acidBase: renderAcidBaseTable(),
    base: `
      <div class="visual-panel" data-label="EVENTUAL CONSISTENCY">
        <div class="base-stack">
          <div class="base-row"><b>B</b><span>${pair("<strong>Basically Available</strong><br>Keep answering requests.", "<strong>متاح أساساً</strong><br>استمر في خدمة الطلبات.")}</span></div>
          <div class="base-row"><b>A</b><span>${pair("<strong>Soft State</strong><br>Copies may temporarily differ.", "<strong>حالة مرنة</strong><br>قد تختلف النسخ مؤقتاً.")}</span></div>
          <div class="base-row"><b>SE</b><span>${pair("<strong>Eventual Consistency</strong><br>Copies converge later.", "<strong>اتساق نهائي</strong><br>تتطابق النسخ لاحقاً.")}</span></div>
        </div>
        <div class="consistency-timeline">
          <span>v1</span><i></i><span>v2</span><i></i><strong>v3 = v3 = v3</strong>
        </div>
      </div>`,
    capTriangle: `
      <div class="visual-panel" data-label="CAP UNDER PARTITION">
        <div class="cap-map">
          <span class="cap-point c">C<small>${pair("Consistency", "الاتساق")}</small></span>
          <span class="cap-point a">A<small>${pair("Availability", "التوافر")}</small></span>
          <span class="cap-point p">P<small>${pair("Partition tolerance", "تحمل الانقسام")}</small></span>
          <i class="cap-edge ca">CA</i><i class="cap-edge cp">CP</i><i class="cap-edge ap">AP</i>
        </div>
        <p class="cap-caption">${pair("During a partition: choose C or A", "أثناء الانقسام: اختر C أو A")}</p>
      </div>`,
    capDefinitions: `
      <div class="visual-panel" data-label="THREE GUARANTEES">
        <div class="cap-definitions">
          <div><b>C</b><p>${pair("Read the latest successful write.", "اقرأ آخر كتابة ناجحة.")}</p></div>
          <div><b>A</b><p>${pair("Every request gets a response.", "كل طلب يتلقى استجابة.")}</p></div>
          <div><b>P</b><p>${pair("Keep working through network splits.", "استمر رغم انقسام الشبكة.")}</p></div>
        </div>
        <div class="split-choice">
          <span>NETWORK PARTITION</span><i></i><b>CP</b><em>OR</em><b>AP</b>
        </div>
      </div>`,
    trend: `
      <figure class="visual-panel image-figure" data-label="HISTORICAL TREND CHART">
        <img src="./assets/image6.png" alt="رسم تاريخي يقارن اتجاه الاهتمام بقواعد البيانات العلائقية وNoSQL" />
      </figure>`,
    fourModels: `
      <div class="visual-panel" data-label="FOUR DATA MODELS">
        <div class="model-map">
          <div class="model-tile kv"><b>K:V</b><strong>${pair("KEY–VALUE", "مفتاح–قيمة")}</strong><small>${pair("Direct lookup", "جلب مباشر")}</small></div>
          <div class="model-tile doc"><b>{ }</b><strong>${pair("DOCUMENT", "وثائق")}</strong><small>${pair("Nested fields", "حقول متداخلة")}</small></div>
          <div class="model-tile col"><b>▥</b><strong>${pair("COLUMN", "أعمدة")}</strong><small>${pair("Wide sparse rows", "صفوف واسعة")}</small></div>
          <div class="model-tile graph"><b>○—○</b><strong>${pair("GRAPH", "رسوم")}</strong><small>${pair("Relationships", "علاقات")}</small></div>
        </div>
      </div>`,
    systemsTable: renderSystemsTable(),
    companiesTable: renderCompaniesTable(),
    kvModel: `
      <div class="visual-panel" data-label="ONE KEY → ONE VALUE">
        <div class="kv-lookup">
          <div class="key-token">user:1042</div>
          <div class="lookup-arrow">→</div>
          <div class="value-payload">{ name, cart, preferences }</div>
        </div>
        <div class="operation-strip">
          <span>INSERT</span><span>FETCH</span><span>UPDATE</span><span>DELETE</span>
        </div>
        <div class="topology">
          <span class="server">HASH A</span><span class="server">HASH B</span><span class="server">HASH C</span>
        </div>
      </div>`,
    kvProsCons: `
      <div class="visual-panel" data-label="SPEED vs. STRUCTURE">
        <div class="split-visual">
          <div class="split-cell">
            <b>${pair("WHY IT IS FAST", "لماذا هو سريع؟")}</b>
            <div class="latency-mark">&lt; 1 ms</div>
            <p>${pair("One key points directly to one value.", "مفتاح واحد يشير مباشرة إلى قيمة.")}</p>
          </div>
          <div class="split-cell">
            <b>${pair("WHAT IT CANNOT SEE", "ما الذي لا يراه؟")}</b>
            <div class="opaque-value">01001101…</div>
            <p>${pair("Internal relationships stay opaque.", "تبقى العلاقات الداخلية غامضة.")}</p>
          </div>
        </div>
      </div>`,
    sessionProfile: `
      <div class="visual-panel" data-label="NATURAL KEY">
        <div class="profile-lookup">
          <div class="profile-key"><small>KEY</small><b>user:42</b></div>
          <div class="lookup-arrow">→</div>
          <div class="profile-value">
            <span><b>lang</b> ar</span><span><b>theme</b> navy</span>
            <span><b>timezone</b> Asia/Aden</span><span><b>access</b> pro</span>
          </div>
        </div>
      </div>`,
    kvUseCases: renderCaseGrid([
      ["SESSION", "جلسات"], ["CART", "سلة"], ["RANK", "ترتيب"], ["CACHE", "مؤقت"],
      ["FLAGS", "ميزات"], ["COUNT", "عداد"], ["PUB/SUB", "رسائل"],
    ]),
    whenUse: renderDecisionPanel(true),
    whenNot: renderDecisionPanel(false),
    documentModel: `
      <div class="visual-panel" data-label="DATABASE UNDERSTANDS THE FIELDS">
        <div class="document-card">
          <span>{</span>
          <p><b>"id"</b>: 1042,<br><b>"name"</b>: "Sue",<br><b>"groups"</b>: ["news", "sports"]</p>
          <span>}</span>
        </div>
        <div class="operation-strip">
          <span>KEY LOOKUP</span><span>FIELD QUERY</span><span>INDEX</span><span>AGGREGATE</span>
        </div>
      </div>`,
    jsonDocument: `
      <figure class="visual-panel image-figure" data-label="FIELD : VALUE">
        <img src="./assets/image12.png" alt="مثال لوثيقة MongoDB تحتوي حقول الاسم والعمر والحالة والمجموعات" />
      </figure>`,
    collectionImage: `
      <figure class="visual-panel image-figure" data-label="MONGODB COLLECTION">
        <img src="./assets/image13.png" alt="مجموعة من وثائق MongoDB ذات حقول وقيم مختلفة" />
      </figure>`,
    insertImage: `
      <figure class="visual-panel image-figure" data-label="INSERT PIPELINE">
        <img src="./assets/image14.png" alt="شرح إدراج وثيقة مستخدم داخل مجموعة users في MongoDB" />
      </figure>`,
    queryImage: `
      <figure class="visual-panel image-figure" data-label="FILTER → SORT → RESULT">
        <img src="./assets/image15.png" alt="شرح استعلام MongoDB لترشيح المستخدمين حسب العمر ثم ترتيب النتائج" />
      </figure>`,
    documentCases: renderCaseGrid([
      ["EVENTS", "أحداث"], ["CMS", "محتوى"], ["ANALYTICS", "تحليل"],
      ["COMMERCE", "تجارة"], ["APPS", "تطبيقات"],
    ]),
    columnModel: `
      <div class="visual-panel" data-label="WIDE & SPARSE">
        <div class="wide-row-demo">
          <div class="row-key">sensor:9</div>
          <div class="column-family">
            <span>t:10:01 → 21°</span><span>t:10:02 → 22°</span><span>t:10:03 → 21°</span>
          </div>
        </div>
        <div class="wide-row-demo">
          <div class="row-key">sensor:10</div>
          <div class="column-family">
            <span>t:10:01 → 18°</span><span>t:10:04 → 19°</span>
          </div>
        </div>
        <div class="metric-strip">
          <div><strong>HASHED</strong><span>${pair("Partitioned", "مقسّم")}</span></div>
          <div><strong>SPARSE</strong><span>${pair("Only used cells", "الخلايا المستخدمة")}</span></div>
          <div><strong>+N</strong><span>${pair("Linear scale", "توسّع خطي")}</span></div>
        </div>
      </div>`,
    columnCases: renderCaseGrid([
      ["TIME", "زمن"], ["RECS", "توصية"], ["CHAT", "محادثة"],
      ["CLICKS", "نقرات"], ["COUNTERS", "عدادات"], ["BILLIONS", "مليارات"],
    ]),
    graphImage: `
      <figure class="visual-panel image-figure" data-label="NODES + LABELED EDGES">
        <img src="./assets/image16.png" alt="رسم يوضح عقد أشخاص مرتبطة بعلاقات friend وlikes" />
      </figure>`,
    graphSystems: `
      <div class="visual-panel" data-label="TRAVERSE THE PATH">
        <div class="graph-path">
          <span>USER</span><i>FRIEND</i><span>USER</span><i>LIKES</i><span>PRODUCT</span>
        </div>
        <div class="layer-stack">
          <div>Neo4j · CYPHER</div>
          <div>RDF · TRIPLES</div>
          <div>Pregel · GRAPH PROCESSING</div>
        </div>
      </div>`,
    graphCases: renderCaseGrid([
      ["SOCIAL", "اجتماعي"], ["RECS", "توصيات"], ["FRAUD", "احتيال"],
      ["KNOWLEDGE", "معرفة"], ["MASTER", "رئيسية"], ["TOPOLOGY", "شبكة"],
    ]),
    decisionTree: `
      <div class="visual-panel decision-panel" data-label="MODEL SELECTION PATH">
        <div class="decision-question q1"><b>${pair("PRIMARY NEED?", "ما الحاجة الأساسية؟")}</b></div>
        <div class="decision-branches">
          <div><span>${pair("DIRECT ID", "معرّف مباشر")}</span><b>K:V</b></div>
          <div><span>${pair("FLEXIBLE OBJECT", "كائن مرن")}</span><b>{ }</b></div>
          <div><span>${pair("MASSIVE EVENTS", "أحداث هائلة")}</span><b>▥</b></div>
          <div><span>${pair("DEEP RELATIONS", "علاقات عميقة")}</span><b>○—○</b></div>
        </div>
        <p>${pair("Then validate CAP, scale, transactions, and team skills.", "ثم تحقّق من CAP والحجم والمعاملات ومهارات الفريق.")}</p>
      </div>`,
  };
  return visuals[type] || "";
}

function renderCaseGrid(items) {
  return `
    <div class="visual-panel" data-label="WORKLOAD FIT">
      <div class="case-grid">
        ${items.map(([en, ar], index) => `<div style="--i:${index}"><b>${en}</b><span>${ar}</span></div>`).join("")}
      </div>
    </div>`;
}

function renderDecisionPanel(positive) {
  const title = positive ? ["GOOD FIT", "اختيار مناسب"] : ["POOR FIT", "اختيار غير مناسب"];
  const rows = positive
    ? [
        ["KNOWN ACCESS", "وصول معروف"], ["PREDICTABLE SCALE", "توسّع متوقع"],
        ["MODEL MATCH", "تطابق النموذج"], ["CLEAR TRADE-OFF", "مقايضة واضحة"],
      ]
    : [
        ["COMPLEX JOINS", "ربط معقد"], ["BROAD ACID", "ACID واسع"],
        ["AD-HOC QUERY", "استعلام حر"], ["WRONG SHAPE", "شكل غير مناسب"],
      ];
  return `
    <div class="visual-panel ${positive ? "fit-positive" : "fit-negative"}" data-label="DECISION CHECK">
      <div class="fit-heading"><b>${positive ? "✓" : "×"}</b><span>${pair(title[0], title[1])}</span></div>
      <div class="fit-rows">${rows.map((row) => `<span>${pair(row[0], row[1])}</span>`).join("")}</div>
    </div>`;
}

function renderAcidBaseTable() {
  const rows = [
    [["Consistency", "الاتساق"], ["Eventual / tunable", "نهائي أو قابل للضبط"], ["Strong transactional", "قوي داخل المعاملة"]],
    [["Priority", "الأولوية"], ["Availability first", "التوافر أولاً"], ["Correct transaction first", "صحة المعاملة أولاً"]],
    [["Evolution", "التطور"], ["Flexible and fast", "مرن وسريع"], ["More controlled", "أكثر ضبطاً"]],
    [["Typical apps", "تطبيقات"], ["Large web systems", "أنظمة ويب كبيرة"], ["Financial portals", "بوابات مالية"]],
    [["Architecture", "البنية"], ["Shared nothing", "لا مشاركة للموارد"], ["Often shared resources", "موارد مشتركة غالباً"]],
    [["Scaling", "التوسّع"], ["Scale out across nodes", "أفقي عبر العقد"], ["Traditionally scale up", "رأسي تقليدياً"]],
    [["Deployment", "النشر"], ["Cluster", "عنقود"], ["Traditionally one primary", "خادم رئيسي تقليدياً"]],
    [["Indexing", "الفهرسة"], ["Mostly access-driven", "بحسب الوصول"], ["Rich full indexes", "فهارس غنية"]],
  ];
  return `
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead><tr><th>${pair("DIMENSION", "البعد")}</th><th>BASE</th><th>ACID</th></tr></thead>
        <tbody>${rows.map((row) => `
          <tr>
            <td data-label="Dimension / البعد">${pair(row[0][0], row[0][1])}</td>
            <td data-label="BASE">${pair(row[1][0], row[1][1])}</td>
            <td data-label="ACID">${pair(row[2][0], row[2][1])}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderSystemsTable() {
  const rows = [
    ["Bigtable", "Column", "Proprietary"],
    ["Voldemort", "Key–Value", "Open source"],
    ["Dynamo / Dynamo-style", "Key–Value", "Open specification / implementations"],
    ["MongoDB", "Document", "Open source / SSPL"],
    ["CouchDB", "Document", "Open source"],
    ["SimpleDB", "Document", "Proprietary"],
    ["Cassandra", "Column", "Open source"],
    ["HBase", "Column", "Open source"],
    ["Neo4j", "Graph", "Open source / commercial"],
  ];
  return `
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead><tr><th>${pair("DATABASE", "قاعدة البيانات")}</th><th>${pair("MODEL", "النموذج")}</th><th>${pair("LICENSE / PLATFORM", "الترخيص / المنصة")}</th></tr></thead>
        <tbody>${rows.map((row) => `
          <tr><td data-label="Database / القاعدة">${row[0]}</td><td data-label="Model / النموذج">${row[1]}</td><td data-label="License / الترخيص">${row[2]}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderCompaniesTable() {
  const rows = [
    ["Adobe", "HBase", "Column"],
    ["Amazon", "Dynamo · SimpleDB", "Key–Value · Document"],
    ["Best Buy", "Riak", "Key–Value"],
    ["eBay", "Cassandra · MongoDB", "Column · Document"],
    ["Facebook", "Cassandra · Neo4j", "Column · Graph"],
    ["Google", "Bigtable", "Column"],
    ["LinkedIn", "Voldemort", "Key–Value"],
    ["LotsOfWords", "CouchDB", "Document"],
    ["MongoHQ", "MongoDB", "Document"],
    ["Mozilla", "HBase · Riak", "Column · Key–Value"],
    ["Netflix", "SimpleDB · HBase · Cassandra", "Document · Column"],
    ["Twitter", "Cassandra", "Column"],
  ];
  return `
    <div class="comparison-table-wrap compact-table">
      <table class="comparison-table">
        <thead><tr><th>${pair("COMPANY", "الشركة")}</th><th>${pair("NoSQL SYSTEM", "نظام NoSQL")}</th><th>${pair("STORAGE TYPE", "نوع التخزين")}</th></tr></thead>
        <tbody>${rows.map((row) => `
          <tr><td data-label="Company / الشركة">${row[0]}</td><td data-label="System / النظام">${row[1]}</td><td data-label="Type / النوع">${row[2]}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderSlide({ focus = false } = {}) {
  const slide = slides[currentIndex];
  ui.frame.innerHTML = slide.layout === "cover" ? renderCover(slide) : renderRegularSlide(slide, currentIndex);
  ui.frame.setAttribute("aria-label", `الشريحة ${currentIndex + 1} من ${slides.length}: ${slide.title.ar}`);
  ui.frame.scrollTop = 0;
  ui.current.textContent = pad(currentIndex + 1);
  ui.total.textContent = slides.length;
  ui.previous.disabled = currentIndex === 0;
  ui.next.disabled = currentIndex === slides.length - 1;
  ui.next.querySelector("span").textContent = currentIndex === slides.length - 1 ? "النهاية" : "التالي";

  const chapter = chapters[slide.chapter];
  ui.chapterNumber.textContent = chapter.number;
  ui.chapterLabel.textContent = chapter.en;
  ui.chapterTitle.textContent = chapter.ar;

  updateProgress();
  updateToc();
  updateHash();
  ui.status.textContent = `تم عرض الشريحة ${currentIndex + 1}: ${slide.title.ar}`;
  document.title = `${pad(currentIndex + 1)} · ${slide.title.en} | NoSQL Databases`;
  if (focus) ui.frame.focus({ preventScroll: true });
}

function buildProgress() {
  ui.progress.innerHTML = slides
    .map(
      (slide, index) => `
        <button
          class="progress-dot"
          type="button"
          data-slide="${index}"
          aria-label="الانتقال إلى الشريحة ${index + 1}: ${slide.title.ar}"
          title="${pad(index + 1)} · ${slide.title.en}"
        ></button>`,
    )
    .join("");

  ui.progress.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide]");
    if (button) goTo(Number(button.dataset.slide), true);
  });
}

function buildToc() {
  ui.tocList.innerHTML = slides
    .map(
      (slide, index) => `
        <button class="toc-item" type="button" data-slide="${index}">
          <span>${pad(index + 1)}</span>
          <div><b>${slide.title.ar}</b><small>${slide.title.en}</small></div>
        </button>`,
    )
    .join("");

  ui.tocList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide]");
    if (!button) return;
    ui.tocDialog.close();
    goTo(Number(button.dataset.slide), true);
  });
}

function updateProgress() {
  [...ui.progress.children].forEach((dot, index) => {
    dot.classList.toggle("complete", index < currentIndex);
    dot.classList.toggle("active", index === currentIndex);
    dot.setAttribute("aria-current", index === currentIndex ? "step" : "false");
  });
}

function updateToc() {
  [...ui.tocList.children].forEach((item, index) => {
    item.classList.toggle("current", index === currentIndex);
    item.setAttribute("aria-current", index === currentIndex ? "page" : "false");
  });
}

function goTo(index, focus = false) {
  const nextIndex = Math.max(0, Math.min(slides.length - 1, index));
  if (nextIndex === currentIndex && !focus) return;
  currentIndex = nextIndex;
  renderSlide({ focus });
}

function setLanguage(nextLanguage, announce = true) {
  language = ["ar", "en", "both"].includes(nextLanguage) ? nextLanguage : "both";
  document.documentElement.dataset.language = language;
  document.documentElement.lang = language === "en" ? "en" : "ar";
  document.documentElement.dir = language === "en" ? "ltr" : "rtl";
  ui.languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
  try {
    localStorage.setItem("nosql-language", language);
  } catch {
    // The deck still works when browser storage is unavailable.
  }
  if (announce) {
    const label = language === "ar" ? "العربية" : language === "en" ? "English" : "العربية والإنجليزية";
    ui.status.textContent = `لغة العرض: ${label}`;
  }
}

function getStoredLanguage() {
  try {
    return localStorage.getItem("nosql-language") || "both";
  } catch {
    return "both";
  }
}

function getIndexFromHash() {
  const match = window.location.hash.match(/slide-(\d+)/);
  return match ? Math.max(0, Math.min(slides.length - 1, Number(match[1]) - 1)) : 0;
}

function updateHash() {
  const hash = `#slide-${currentIndex + 1}`;
  if (window.location.hash !== hash) history.replaceState(null, "", hash);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function pad(value) {
  return String(value).padStart(2, "0");
}

ui.previous.addEventListener("click", () => goTo(currentIndex - 1, true));
ui.next.addEventListener("click", () => goTo(currentIndex + 1, true));
ui.home.addEventListener("click", () => goTo(0, true));
ui.languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
ui.tocButton.addEventListener("click", () => ui.tocDialog.showModal());
ui.tocClose.addEventListener("click", () => ui.tocDialog.close());
ui.tocDialog.addEventListener("click", (event) => {
  if (event.target === ui.tocDialog) ui.tocDialog.close();
});
ui.fullscreen.addEventListener("click", toggleFullscreen);

window.addEventListener("hashchange", () => {
  const nextIndex = getIndexFromHash();
  if (nextIndex !== currentIndex) {
    currentIndex = nextIndex;
    renderSlide();
  }
});

document.addEventListener("keydown", (event) => {
  if (ui.tocDialog.open) return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;

  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    goTo(currentIndex + 1, true);
  } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    goTo(currentIndex - 1, true);
  } else if (event.key === "Home") {
    event.preventDefault();
    goTo(0, true);
  } else if (event.key === "End") {
    event.preventDefault();
    goTo(slides.length - 1, true);
  } else if (event.key.toLowerCase() === "f") {
    toggleFullscreen();
  }
});

ui.frame.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  },
  { passive: true },
);

ui.frame.addEventListener(
  "touchend",
  (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(deltaX) > 65 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35) {
      goTo(currentIndex + (deltaX < 0 ? 1 : -1), true);
    }
  },
  { passive: true },
);

buildProgress();
buildToc();
setLanguage(language, false);
renderSlide();
