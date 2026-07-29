const chapters = {
  foundation: { number: "01", en: "FOUNDATION", ar: "الأساسيات" },
  cluster: { number: "02", en: "CLUSTER SYSTEMS", ar: "أنظمة العناقيد" },
  distribution: { number: "03", en: "DISTRIBUTION", ar: "توزيع البيانات" },
  databases: { number: "04", en: "DATABASES", ar: "قواعد البيانات" },
  scaling: { number: "05", en: "SCALING", ar: "التوسّع" },
};

const slides = [
  {
    chapter: "foundation",
    title: { en: "Big Data Storage Concepts", ar: "مفاهيم تخزين البيانات الضخمة" },
    author: "أ. سعاد عثمان",
    layout: "cover",
  },
  {
    chapter: "foundation",
    title: { en: "What is Big Data Storage?", ar: "ما تخزين البيانات الضخمة؟" },
    lead: {
      en: "A scalable architecture for collecting, managing, and analyzing enormous datasets—often as they arrive.",
      ar: "بنية قابلة للتوسّع لجمع كميات هائلة من البيانات وإدارتها وتحليلها، وغالباً أثناء وصولها.",
    },
    points: {
      en: [
        "<strong>Designed for the 3Vs:</strong> high speed, huge volume, and complex variety.",
        "<strong>Main purpose:</strong> preserve immense datasets so they can be analyzed and reused later.",
        "<strong>Business value:</strong> better, faster, and more informed decisions in healthcare, retail, security, and beyond.",
      ],
      ar: [
        "<strong>مصمّم للتعامل مع 3Vs:</strong> السرعة العالية، والحجم الضخم، وتنوّع البيانات وتعقيدها.",
        "<strong>الهدف الرئيسي:</strong> حفظ كميات هائلة لتحليلها وإعادة استخدامها مستقبلاً.",
        "<strong>القيمة العملية:</strong> قرارات أسرع وأكثر دقة في الصحة والتجزئة والأمن وغيرها.",
      ],
    },
    plain: {
      en: "Think of it as a warehouse that can keep expanding while data keeps arriving—without stopping the analysis.",
      ar: "تخيّله مستودعاً يكبر باستمرار بينما تصل البيانات، من دون إيقاف التخزين أو التحليل.",
    },
    visual: "threeVs",
  },
  {
    chapter: "cluster",
    title: { en: "Cluster Computing", ar: "الحوسبة العنقودية" },
    lead: {
      en: "Multiple independent computers connect and cooperate as one integrated, highly available resource.",
      ar: "عدة حواسيب مستقلة تتصل وتتعاون لتظهر كمورد واحد متكامل وعالي التوافر.",
    },
    points: {
      en: [
        "Used for <strong>high availability</strong>, <strong>load balancing</strong>, and better performance and reliability.",
        "Benefits include scalable performance, fault tolerance, and cost-effective commodity hardware.",
        "Common coordination models: <strong>master–slave</strong> and <strong>peer-to-peer</strong>.",
      ],
      ar: [
        "تُستخدم لتحقيق <strong>التوافر العالي</strong> و<strong>موازنة الأحمال</strong> وتحسين الأداء والاعتمادية.",
        "من فوائدها الأداء القابل للتوسّع، وتحمل الأعطال، واستخدام أجهزة تجارية منخفضة التكلفة.",
        "أشهر نماذج التنسيق: <strong>الرئيس–التابع</strong> و<strong>الند للند</strong>.",
      ],
    },
    plain: {
      en: "Instead of buying one giant machine, make several ordinary machines work as a team.",
      ar: "بدلاً من شراء جهاز عملاق، نجعل عدة أجهزة عادية تعمل كفريق واحد.",
    },
    visual: "cluster",
  },
  {
    chapter: "cluster",
    title: { en: "A Cluster at Work", ar: "كيف يبدو العنقود؟" },
    lead: {
      en: "Users send requests through a network layer; the cluster coordinates many servers behind the scenes.",
      ar: "يرسل المستخدمون الطلبات عبر طبقة الشبكة، بينما ينسّق العنقود عمل خوادم كثيرة في الخلفية.",
    },
    points: {
      en: [
        "The front server or gateway receives user requests.",
        "A switch or coordinator connects the request to many cluster nodes.",
        "The entire group is presented to users as one service.",
      ],
      ar: [
        "يستقبل الخادم الأمامي أو البوابة طلبات المستخدمين.",
        "يربط المبدّل أو المنسّق الطلب بعدة عُقد داخل العنقود.",
        "تظهر المجموعة كلها للمستخدم كخدمة واحدة.",
      ],
    },
    plain: {
      en: "The user sees one system; the work is actually shared by many machines.",
      ar: "يرى المستخدم نظاماً واحداً، لكن العمل موزّع فعلياً على أجهزة عديدة.",
    },
    visual: "clusterImage",
  },
  {
    chapter: "cluster",
    title: { en: "Types of Cluster", ar: "أنواع العناقيد" },
    lead: {
      en: "Clusters are configured for different purposes, from web services to compute-intensive workloads.",
      ar: "تُهيّأ العناقيد لأغراض مختلفة، من خدمات الويب إلى الأعمال كثيفة الحساب.",
    },
    points: {
      en: [
        "<strong>High Availability:</strong> keeps the service running when a node fails.",
        "<strong>Load Balancing:</strong> shares incoming work so no node is overwhelmed.",
      ],
      ar: [
        "<strong>التوافر العالي:</strong> يحافظ على استمرار الخدمة عند تعطل إحدى العقد.",
        "<strong>موازنة الأحمال:</strong> توزّع العمل حتى لا تُرهق عقدة واحدة.",
      ],
    },
    plain: {
      en: "One type protects continuity; the other protects performance. A real system can use both.",
      ar: "الأول يحمي استمرارية الخدمة، والثاني يحمي الأداء، ويمكن للنظام استخدامهما معاً.",
    },
    visual: "clusterTypes",
  },
  {
    chapter: "cluster",
    title: { en: "High Availability Cluster", ar: "عنقود التوافر العالي" },
    lead: {
      en: "Redundant nodes and shared storage minimize downtime and keep the service available during failures.",
      ar: "تقلّل العقد الاحتياطية والتخزين المشترك زمن التوقف وتُبقي الخدمة متاحة أثناء الأعطال.",
    },
    points: {
      en: [
        "Nodes must be able to access <strong>shared storage</strong>.",
        "Redundancy makes the system highly <strong>fault tolerant</strong>.",
        "The design removes a <strong>single point of failure</strong>.",
      ],
      ar: [
        "يجب أن تتمكّن العقد من الوصول إلى <strong>تخزين مشترك</strong>.",
        "التكرار يجعل النظام عالي <strong>تحمل الأعطال</strong>.",
        "يلغي التصميم وجود <strong>نقطة فشل وحيدة</strong>.",
      ],
    },
    plain: {
      en: "Like a backup pilot: if one node stops, another continues the same service.",
      ar: "مثل وجود طيار احتياطي: إذا توقفت عقدة، تواصل أخرى تقديم الخدمة نفسها.",
    },
    visual: "highAvailability",
  },
  {
    chapter: "cluster",
    title: { en: "Load Balancing Cluster", ar: "عنقود موازنة الأحمال" },
    lead: {
      en: "Incoming workloads are distributed across nodes so the service load is shared.",
      ar: "تُوزّع الأعمال الواردة على عدة عقد لتتقاسم حمل الخدمة.",
    },
    points: {
      en: [
        "Optimize resource utilization.",
        "Minimize response time and maximize throughput.",
        "Prevent any single resource from becoming overloaded.",
      ],
      ar: [
        "تحسين استغلال الموارد.",
        "تقليل زمن الاستجابة وزيادة معدل الإنجاز.",
        "منع زيادة الحمل على مورد واحد.",
      ],
    },
    plain: {
      en: "Like opening several checkout counters and directing each customer to the least busy one.",
      ar: "مثل فتح عدة صناديق دفع وتوجيه كل عميل إلى الصندوق الأقل ازدحاماً.",
    },
    visual: "loadBalancing",
  },
  {
    chapter: "cluster",
    title: { en: "Cluster Structure", ar: "بنية العنقود" },
    lead: {
      en: "Linked computers cooperate as one system to improve performance and availability.",
      ar: "تتعاون الحواسيب المرتبطة كنظام واحد لتحسين الأداء والتوافر.",
    },
    points: {
      en: [
        "<strong>Symmetric:</strong> nodes have similar authority and responsibilities.",
        "<strong>Asymmetric:</strong> one head node manages or mediates access to the others.",
      ],
      ar: [
        "<strong>متماثلة:</strong> للعقد صلاحيات ومسؤوليات متقاربة.",
        "<strong>غير متماثلة:</strong> توجد عقدة رئيسية تدير العقد الأخرى أو تتوسط الوصول إليها.",
      ],
    },
    plain: {
      en: "The key question is: are all nodes peers, or does one node lead?",
      ar: "السؤال الفاصل: هل كل العقد متساوية، أم توجد عقدة تقود البقية؟",
    },
    visual: "structures",
  },
  {
    chapter: "cluster",
    title: { en: "Symmetric vs. Asymmetric", ar: "المتماثل مقابل غير المتماثل" },
    lead: {
      en: "The two structures differ mainly in how authority and access are organized.",
      ar: "يختلف الهيكلان أساساً في طريقة تنظيم السلطة والوصول.",
    },
    points: {
      en: [
        "<strong>Symmetric:</strong> every node can run applications independently; setup is straightforward and nodes can be added as needed.",
        "<strong>Asymmetric:</strong> one head node is the gateway between users and the remaining nodes.",
      ],
      ar: [
        "<strong>المتماثل:</strong> كل عقدة قادرة على تشغيل التطبيقات بصورة مستقلة؛ إعداده مباشر ويمكن إضافة عقد عند الحاجة.",
        "<strong>غير المتماثل:</strong> تعمل عقدة رئيسية كبوابة بين المستخدم وبقية العقد.",
      ],
    },
    plain: {
      en: "Symmetric is a team of peers; asymmetric is a team with a coordinator.",
      ar: "المتماثل فريق من الأنداد؛ وغير المتماثل فريق يقوده منسّق.",
    },
    visual: "structuresDetailed",
  },
  {
    chapter: "cluster",
    title: { en: "Symmetric: Structure & Operation", ar: "المتماثل: البنية والتشغيل" },
    lead: {
      en: "Nodes are equivalent, share responsibilities, and recover from failures together.",
      ar: "العقد متكافئة، وتتقاسم المسؤوليات، وتتعافى من الأعطال بصورة جماعية.",
    },
    points: {
      en: [
        "<strong>Identical nodes:</strong> the same hardware/software configuration and tasks.",
        "<strong>Shared duties:</strong> every node participates in processing, storage, and workload management.",
        "<strong>No permanent master:</strong> leadership can be dynamic or rotated.",
        "<strong>Fault tolerance:</strong> surviving nodes redistribute the failed node’s workload.",
      ],
      ar: [
        "<strong>عقد متطابقة:</strong> إعدادات الأجهزة والبرامج والمهام نفسها.",
        "<strong>مسؤوليات مشتركة:</strong> كل عقدة تشارك في المعالجة والتخزين وإدارة الحمل.",
        "<strong>لا رئيس دائم:</strong> يمكن أن تتغير القيادة أو تتناوب.",
        "<strong>تحمل الأعطال:</strong> تعيد العقد السليمة توزيع عمل العقدة المتعطلة.",
      ],
    },
    plain: {
      en: "No permanent boss: each member can take over work when another member leaves.",
      ar: "لا يوجد رئيس دائم؛ يستطيع كل عضو تحمّل عمل عضو آخر عند غيابه.",
    },
    visual: "symmetric",
  },
  {
    chapter: "cluster",
    title: { en: "Asymmetric: Structure & Operation", ar: "غير المتماثل: البنية والتشغيل" },
    lead: {
      en: "Nodes have specialized roles, while a central master coordinates the cluster.",
      ar: "للعقد أدوار متخصصة، بينما ينسّق رئيس مركزي عمل العنقود.",
    },
    points: {
      en: [
        "<strong>Head/Master:</strong> manages resources, schedules tasks, and monitors health.",
        "<strong>Workers:</strong> execute compute or storage tasks.",
        "<strong>Gateways:</strong> handle external communication.",
        "<strong>Central control:</strong> orchestrates task distribution and failure recovery.",
      ],
      ar: [
        "<strong>العقدة الرئيسية:</strong> تدير الموارد وتجدول المهام وتراقب الصحة.",
        "<strong>العقد العاملة:</strong> تنفذ مهام الحساب أو التخزين.",
        "<strong>عقد البوابة:</strong> تتعامل مع الاتصالات الخارجية.",
        "<strong>تحكم مركزي:</strong> ينسّق توزيع المهام والتعافي من الأعطال.",
      ],
    },
    plain: {
      en: "The master plans; workers execute. Clear roles simplify coordination.",
      ar: "العقدة الرئيسية تخطط، والعقد العاملة تنفّذ؛ وضوح الأدوار يسهّل التنسيق.",
    },
    visual: "asymmetricImage",
  },
  {
    chapter: "distribution",
    title: { en: "Distribution Models", ar: "نماذج توزيع البيانات" },
    lead: {
      en: "Distributing data across a large cluster avoids the cost and limits of one expensive server.",
      ar: "توزيع البيانات على عنقود كبير يتجاوز تكلفة وحدود شراء خادم واحد باهظ.",
    },
    points: {
      en: [
        "<strong>Why distribute?</strong> gain capacity using multiple affordable machines.",
        "<strong>Trade-off:</strong> coordination becomes more complex as the number of computers grows.",
        "The two major techniques are <strong>replication</strong> and <strong>sharding</strong>.",
      ],
      ar: [
        "<strong>لماذا نوزّع؟</strong> للحصول على سعة أكبر باستخدام أجهزة عديدة منخفضة التكلفة.",
        "<strong>المقابل:</strong> يزداد تعقيد التنسيق كلما زاد عدد الحواسيب.",
        "التقنيتان الرئيسيتان هما <strong>النسخ المكرّر</strong> و<strong>التجزئة</strong>.",
      ],
    },
    plain: {
      en: "More machines reduce hardware cost, but introduce a coordination cost.",
      ar: "زيادة الأجهزة تقلّل تكلفة العتاد، لكنها تزيد تكلفة وتعقيد التنسيق.",
    },
    visual: "distributionTradeoff",
  },
  {
    chapter: "distribution",
    title: { en: "Replication & Sharding", ar: "النسخ المكرّر والتجزئة" },
    lead: {
      en: "Data can be copied, divided, or both—depending on the required reliability and scale.",
      ar: "يمكن نسخ البيانات أو تقسيمها أو الجمع بين الطريقتين بحسب الاعتمادية والسعة المطلوبة.",
    },
    points: {
      en: [
        "<strong>Replication:</strong> place the same dataset on multiple nodes; it can use peer-to-peer or master–slave.",
        "<strong>Sharding:</strong> place different subsets of data on different nodes.",
        "Replication and sharding can be used independently or together.",
      ],
      ar: [
        "<strong>النسخ المكرّر:</strong> وضع مجموعة البيانات نفسها على عدة عقد بنموذج الند للند أو الرئيس–التابع.",
        "<strong>التجزئة:</strong> وضع أجزاء مختلفة من البيانات على عقد مختلفة.",
        "يمكن استخدام النسخ والتجزئة منفصلين أو معاً.",
      ],
    },
    plain: {
      en: "Replication asks “how many copies?”; sharding asks “which piece goes where?”",
      ar: "النسخ يسأل: كم نسخة؟ والتجزئة تسأل: أي جزء يذهب إلى أين؟",
    },
    visual: "replicationSharding",
  },
  {
    chapter: "distribution",
    title: { en: "Distributed File System (DFS)", ar: "نظام الملفات الموزّع" },
    lead: {
      en: "A file system spread across multiple nodes but presented to users as one storage system.",
      ar: "نظام ملفات يمتد عبر عدة عقد لكنه يظهر للمستخدم كنظام تخزين واحد.",
    },
    points: {
      en: [
        "<strong>Fault tolerance:</strong> automatic replication—commonly three copies.",
        "<strong>Data locality:</strong> process data on the node where it is stored.",
        "<strong>Scalability:</strong> add nodes to increase capacity.",
        "<strong>Examples:</strong> HDFS for large-file batch processing; GFS inspired HDFS.",
      ],
      ar: [
        "<strong>تحمل الأعطال:</strong> نسخ تلقائي للبيانات، غالباً ثلاث نسخ.",
        "<strong>محلية البيانات:</strong> معالجة البيانات على العقدة التي تخزّنها.",
        "<strong>قابلية التوسّع:</strong> إضافة عقد لزيادة السعة.",
        "<strong>أمثلة:</strong> HDFS لمعالجة الملفات الكبيرة بالدُفعات، وGFS الذي ألهم HDFS.",
      ],
    },
    plain: {
      en: "The user sees one file; the system sees blocks spread safely across many machines.",
      ar: "يرى المستخدم ملفاً واحداً، بينما يرى النظام كتل بيانات موزعة بأمان على أجهزة كثيرة.",
    },
    visual: "dfs",
  },
  {
    chapter: "distribution",
    title: { en: "DFS Core Components", ar: "المكوّنات الأساسية لـ DFS" },
    lead: {
      en: "A metadata node knows where everything is; data nodes store the actual file blocks.",
      ar: "تعرف عقدة البيانات الوصفية مكان كل شيء، بينما تخزّن عقد البيانات كتل الملفات الفعلية.",
    },
    points: {
      en: [
        "<strong>Metadata Node / NameNode:</strong> stores names, locations, permissions, and block mappings; coordinates reads and writes.",
        "<strong>Data Nodes:</strong> store actual blocks—often 128 MB chunks in HDFS—and serve client I/O directly.",
        "<strong>Blocks:</strong> fixed-size pieces, typically 64–256 MB, replicated for redundancy.",
      ],
      ar: [
        "<strong>عقدة البيانات الوصفية / NameNode:</strong> تحفظ الأسماء والمواقع والصلاحيات وخرائط الكتل، وتنسّق القراءة والكتابة.",
        "<strong>عقد البيانات:</strong> تخزّن الكتل الفعلية، وغالباً 128MB في HDFS، وتخدم طلبات العميل مباشرة.",
        "<strong>الكتل:</strong> أجزاء ثابتة الحجم، عادةً 64–256MB، وتُنسخ لتحقيق التكرار.",
      ],
    },
    plain: {
      en: "The NameNode is the map; DataNodes are the shelves holding the boxes.",
      ar: "الـNameNode هو الخريطة، وعقد البيانات هي الرفوف التي تحمل الصناديق.",
    },
    visual: "dfsComponents",
  },
  {
    chapter: "distribution",
    title: { en: "DFS Data Access Workflow", ar: "مسار الوصول إلى البيانات في DFS" },
    lead: {
      en: "Metadata guides the client, while the actual data moves directly between the client and DataNodes.",
      ar: "توجّه البيانات الوصفية العميل، بينما تنتقل البيانات الفعلية مباشرة بين العميل وعقد البيانات.",
    },
    points: {
      en: [
        "<strong>Write:</strong> client splits the file → metadata node assigns locations → blocks pipeline to at least three nodes → mapping is updated.",
        "<strong>Read:</strong> client asks for block locations → reads directly from the nearest DataNodes.",
      ],
      ar: [
        "<strong>الكتابة:</strong> يقسم العميل الملف ← تحدد عقدة البيانات الوصفية المواقع ← تُرسل الكتل بالتتابع إلى ثلاث عقد على الأقل ← تُحدّث الخريطة.",
        "<strong>القراءة:</strong> يطلب العميل مواقع الكتل ثم يقرأ مباشرة من أقرب عقد البيانات.",
      ],
    },
    plain: {
      en: "The NameNode gives directions; it does not carry every byte of the file.",
      ar: "تعطي الـNameNode الاتجاهات، لكنها لا تنقل كل بايت من الملف بنفسها.",
    },
    visual: "dfsWorkflow",
  },
  {
    chapter: "databases",
    title: { en: "Relational & Non-Relational", ar: "قواعد البيانات العلائقية وغير العلائقية" },
    lead: {
      en: "When data becomes vast, fast-changing, and irregular, a fixed relational schema may become a poor fit.",
      ar: "عندما تصبح البيانات ضخمة وسريعة التغيّر وغير منتظمة، قد لا يعود المخطط العلائقي الثابت مناسباً.",
    },
    points: {
      en: [
        "Organizations collect huge customer, transaction, log, and other datasets.",
        "Some data does not naturally fit rows and tables.",
        "<strong>NoSQL</strong> systems emerged as non-relational, often schema-less alternatives.",
        "Common examples: Neo4j, Redis, Cassandra, and MongoDB.",
      ],
      ar: [
        "تجمع المؤسسات كميات ضخمة من بيانات العملاء والمعاملات والسجلات وغيرها.",
        "بعض البيانات لا يناسب الصفوف والجداول بصورة طبيعية.",
        "ظهرت أنظمة <strong>NoSQL</strong> كبدائل غير علائقية وغالباً بلا مخطط ثابت.",
        "أمثلة شائعة: Neo4j وRedis وCassandra وMongoDB.",
      ],
    },
    plain: {
      en: "Relational databases prefer a fixed filing cabinet; NoSQL accepts more flexible containers.",
      ar: "القواعد العلائقية تفضّل خزانة ملفات ثابتة؛ بينما تقبل NoSQL حاويات أكثر مرونة.",
    },
    visual: "relationalShift",
  },
  {
    chapter: "databases",
    title: { en: "RDBMS: Big Data Challenges", ar: "تحديات RDBMS مع البيانات الضخمة" },
    lead: {
      en: "Traditional relational strengths can become constraints at very large scale.",
      ar: "قد تتحول نقاط قوة القواعد العلائقية التقليدية إلى قيود عند الأحجام الهائلة.",
    },
    points: { en: [], ar: [] },
    plain: {
      en: "RDBMS is not “bad”; it is simply optimized for a different shape and scale of problem.",
      ar: "RDBMS ليست سيئة؛ لكنها محسّنة ببساطة لنوع وحجم مختلفين من المشكلات.",
    },
    visual: "rdbmsTable",
    wide: true,
  },
  {
    chapter: "databases",
    title: { en: "NoSQL Databases", ar: "قواعد بيانات NoSQL" },
    lead: {
      en: "NoSQL systems are designed to distribute flexible data structures across very large clusters.",
      ar: "صُممت أنظمة NoSQL لتوزيع هياكل بيانات مرنة على عناقيد شديدة الضخامة.",
    },
    points: {
      en: [
        "<strong>Schema-less:</strong> supports dynamic JSON, key-value, column, or graph structures.",
        "<strong>Horizontal scaling:</strong> distributes data across thousands of nodes.",
        "<strong>BASE model:</strong> Basically Available, Soft state, Eventual consistency.",
      ],
      ar: [
        "<strong>بلا مخطط ثابت:</strong> تدعم JSON الديناميكي، والأزواج مفتاح–قيمة، والأعمدة، والرسوم البيانية.",
        "<strong>توسّع أفقي:</strong> توزّع البيانات على آلاف العقد.",
        "<strong>نموذج BASE:</strong> متاح أساساً، حالة مرنة، واتساق نهائي.",
      ],
    },
    plain: {
      en: "BASE favors availability and scale, accepting that every copy may need a short time to agree.",
      ar: "يعطي BASE الأولوية للتوافر والتوسّع، مع قبول أن النسخ قد تحتاج وقتاً قصيراً لتتطابق.",
    },
    visual: "base",
  },
  {
    chapter: "databases",
    title: { en: "Types of NoSQL Database", ar: "أنواع قواعد بيانات NoSQL" },
    lead: {
      en: "Choose the NoSQL model according to the natural shape of the data and the access pattern.",
      ar: "اختر نموذج NoSQL بحسب الشكل الطبيعي للبيانات وطريقة الوصول إليها.",
    },
    points: { en: [], ar: [] },
    plain: {
      en: "There is no single NoSQL shape: documents, pairs, columns, and graphs solve different problems.",
      ar: "لا يوجد شكل واحد لـNoSQL؛ فالوثائق والأزواج والأعمدة والرسوم تحل مشكلات مختلفة.",
    },
    visual: "nosqlTable",
    wide: true,
  },
  {
    chapter: "databases",
    title: { en: "NewSQL Databases", ar: "قواعد بيانات NewSQL" },
    lead: {
      en: "NewSQL combines NoSQL-like scalable performance with the ACID guarantees of traditional database systems.",
      ar: "تجمع NewSQL بين أداء NoSQL القابل للتوسّع وضمانات ACID في قواعد البيانات التقليدية.",
    },
    points: {
      en: [
        "Distributed, horizontally scalable, and fault tolerant.",
        "Preserves the relational data model.",
        "Three layers: <strong>administrative</strong>, <strong>transactional</strong>, and <strong>storage</strong>.",
        "Examples: VoltDB, NuoDB, Clustrix, MemSQL, and TokuDB.",
      ],
      ar: [
        "موزّعة، قابلة للتوسّع أفقياً، وتتحمل الأعطال.",
        "تحافظ على نموذج البيانات العلائقي.",
        "ثلاث طبقات: <strong>الإدارية</strong> و<strong>المعاملات</strong> و<strong>التخزين</strong>.",
        "أمثلة: VoltDB وNuoDB وClustrix وMemSQL وTokuDB.",
      ],
    },
    plain: {
      en: "NewSQL asks: can we keep SQL and ACID while scaling across many machines? Its answer is yes.",
      ar: "تسأل NewSQL: هل نحافظ على SQL وACID مع التوسّع عبر أجهزة كثيرة؟ وإجابتها نعم.",
    },
    visual: "newSqlLayers",
  },
  {
    chapter: "scaling",
    title: { en: "Scaling Up & Scaling Out", ar: "التوسّع الرأسي والأفقي" },
    lead: {
      en: "Scalability is the ability to meet growing storage demand while maintaining useful performance and efficiency.",
      ar: "قابلية التوسّع هي قدرة النظام على تلبية الطلب المتزايد على التخزين مع الحفاظ على الأداء والكفاءة.",
    },
    points: {
      en: [
        "Big Data platforms may need to store <strong>petabytes</strong> of data.",
        "<strong>Scale up / vertical:</strong> increase the power of one server.",
        "<strong>Scale out / horizontal:</strong> increase the number of servers.",
      ],
      ar: [
        "قد تحتاج منصات البيانات الضخمة إلى تخزين <strong>بيتابايتات</strong> من البيانات.",
        "<strong>التوسّع الرأسي:</strong> زيادة قوة خادم واحد.",
        "<strong>التوسّع الأفقي:</strong> زيادة عدد الخوادم.",
      ],
    },
    plain: {
      en: "Vertical means a bigger machine; horizontal means more machines.",
      ar: "الرأسي يعني جهازاً أكبر؛ والأفقي يعني أجهزة أكثر.",
    },
    visual: "scaling",
  },
  {
    chapter: "scaling",
    title: { en: "Scaling Up", ar: "التوسّع الرأسي" },
    lead: {
      en: "Add CPU, memory, or storage to the existing server so it can hold and process more data.",
      ar: "أضف المعالج أو الذاكرة أو التخزين إلى الخادم الحالي ليحمل ويعالج بيانات أكثر.",
    },
    points: {
      en: [
        "Simple operational model: the system remains on one main server.",
        "Limited by the maximum hardware capacity of that server.",
        "<strong>Big Data use cases:</strong> a traditional RDBMS such as Oracle on a powerful server; low-to-moderate data growth.",
      ],
      ar: [
        "نموذج تشغيل بسيط: يبقى النظام على خادم رئيسي واحد.",
        "محدود بأقصى سعة عتادية لذلك الخادم.",
        "<strong>حالات الاستخدام:</strong> RDBMS تقليدية مثل Oracle على خادم قوي، أو نمو بيانات منخفض إلى متوسط.",
      ],
    },
    plain: {
      en: "Upgrade the same elevator—but eventually the building cannot fit a larger one.",
      ar: "طوّر المصعد نفسه، لكن سيأتي حد لا يتسع فيه المبنى لمصعد أكبر.",
    },
    visual: "scaleUp",
  },
  {
    chapter: "scaling",
    title: { en: "Scaling Out", ar: "التوسّع الأفقي" },
    lead: {
      en: "Add servers or components—called nodes—to increase total capacity and serve growing demand.",
      ar: "أضف خوادم أو مكوّنات تُسمّى عقداً لزيادة السعة الكلية وتلبية الطلب المتنامي.",
    },
    points: {
      en: [
        "Big Data technologies are fundamentally built around scaling out.",
        "Commodity hardware keeps the cost of each added node relatively low.",
        "Nodes can be added when needed, allowing the system to grow wider.",
        "Capacity expansion is flexible, though distributed coordination still requires careful design.",
      ],
      ar: [
        "تعمل تقنيات البيانات الضخمة أساساً وفق مبدأ التوسّع الأفقي.",
        "يُبقي العتاد التجاري تكلفة كل عقدة مضافة منخفضة نسبياً.",
        "يمكن إضافة العقد عند الحاجة، فيتسع النظام أفقياً.",
        "زيادة السعة مرنة، لكن تنسيق النظام الموزّع يظل بحاجة إلى تصميم دقيق.",
      ],
    },
    plain: {
      en: "When one checkout lane is not enough, open more lanes instead of building one enormous lane.",
      ar: "عندما لا يكفي صندوق دفع واحد، افتح صناديق إضافية بدلاً من بناء صندوق عملاق.",
    },
    visual: "scaleOut",
  },
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
          <div class="cover-kicker">BILINGUAL STUDY DECK · 24 SLIDES</div>
          <h1 class="cover-title">BIG DATA <em>STORAGE</em></h1>
          <p class="cover-ar lang-ar">مفاهيم تخزين البيانات الضخمة</p>
          <p class="cover-ar lang-en">Concepts made visual, clear, and memorable.</p>
          <div class="cover-meta">
            <span><i></i>${slide.author}</span>
            <span><i></i>HTML · TAILWIND CSS · JAVASCRIPT</span>
            <span><i></i>${pair("ARABIC + ENGLISH", "العربية + الإنجليزية")}</span>
          </div>
        </div>
        <div class="cover-network" aria-hidden="true">
          <div class="orbit"></div>
          <div class="orbit"></div>
          <span class="node main">DATA</span>
          <span class="node n1">01</span>
          <span class="node n2">02</span>
          <span class="node n3">03</span>
          <span class="node n4">04</span>
          <span class="node n5">05</span>
        </div>
      </div>
    </section>`;
}

function renderLanguageColumn(slide, lang) {
  const points = slide.points[lang] || [];
  const noteTitle = lang === "en" ? "IN PLAIN WORDS" : "الفكرة ببساطة";
  return `
    <div class="language-column lang-${lang}" lang="${lang === "en" ? "en" : "ar"}">
      <p class="lead">${slide.lead[lang]}</p>
      ${
        points.length
          ? `<ul class="concept-list">${points.map((point) => `<li>${point}</li>`).join("")}</ul>`
          : ""
      }
      <aside class="plain-note">
        <small>${noteTitle}</small>
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
    threeVs: `
      <div class="visual-panel" data-label="THE 3Vs">
        <div class="metric-strip">
          <div><strong>VELOCITY</strong><span>${pair("How fast?", "ما السرعة؟")}</span></div>
          <div><strong>VOLUME</strong><span>${pair("How much?", "ما الحجم؟")}</span></div>
          <div><strong>VARIETY</strong><span>${pair("How complex?", "ما التنوع؟")}</span></div>
        </div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="flow-diagram">
          <div class="flow-step">${pair("COLLECT", "جمع")}</div>
          <div class="flow-step accent">${pair("STORE", "تخزين")}</div>
          <div class="flow-step">${pair("ANALYZE", "تحليل")}</div>
        </div>
      </div>`,
    cluster: `
      <div class="visual-panel" data-label="ONE LOGICAL RESOURCE">
        <div class="topology">
          <span class="server">NODE A</span>
          <span class="server">NODE B</span>
          <span class="server">NODE C</span>
        </div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="flow-step accent">${pair("ONE INTEGRATED CLUSTER", "عنقود متكامل واحد")}</div>
        <div class="metric-strip">
          <div><strong>AVAILABLE</strong><span>${pair("Always ready", "متاح دائماً")}</span></div>
          <div><strong>SCALABLE</strong><span>${pair("Add nodes", "أضف عقداً")}</span></div>
          <div><strong>RESILIENT</strong><span>${pair("Survive faults", "يتحمل الأعطال")}</span></div>
        </div>
      </div>`,
    clusterImage: `
      <figure class="visual-panel image-figure" data-label="SOURCE DIAGRAM">
        <img src="./assets/cluster-computing.jpg" alt="مخطط يوضح مستخدمين متصلين بخادم أمامي يقود مجموعة من خوادم العنقود" />
      </figure>`,
    clusterTypes: `
      <div class="visual-panel" data-label="PURPOSE-BASED CLASSIFICATION">
        <div class="split-visual">
          <div class="split-cell">
            <b>${pair("HIGH AVAILABILITY", "التوافر العالي")}</b>
            <p>${pair("Keep the service alive", "إبقاء الخدمة مستمرة")}</p>
            <div class="mini-nodes equal" aria-hidden="true"><i></i><i></i><i></i></div>
          </div>
          <div class="split-cell">
            <b>${pair("LOAD BALANCING", "موازنة الأحمال")}</b>
            <p>${pair("Share the incoming work", "تقاسم العمل الوارد")}</p>
            <div class="mini-nodes" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>`,
    highAvailability: `
      <div class="visual-panel" data-label="FAILOVER">
        <div class="topology">
          <span class="server failed">FAILED</span>
          <span class="server">ACTIVE</span>
          <span class="server">STANDBY</span>
        </div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="flow-step accent">${pair("SHARED STORAGE · SERVICE CONTINUES", "تخزين مشترك · الخدمة مستمرة")}</div>
      </div>`,
    loadBalancing: `
      <div class="visual-panel" data-label="WORKLOAD DISTRIBUTION">
        <div class="flow-diagram">
          <div class="flow-step">${pair("REQUESTS", "طلبات")}<br>● ● ● ● ●</div>
          <div class="flow-step accent">${pair("LOAD BALANCER", "موازن الحمل")}</div>
          <div class="flow-step">N1 · N2 · N3</div>
        </div>
        <div class="metric-strip">
          <div><strong>↓ TIME</strong><span>${pair("Response", "الاستجابة")}</span></div>
          <div><strong>↑ RATE</strong><span>${pair("Throughput", "الإنجاز")}</span></div>
          <div><strong>≈ LOAD</strong><span>${pair("Balanced", "متوازن")}</span></div>
        </div>
      </div>`,
    structures: `
      <div class="visual-panel" data-label="AUTHORITY MODEL">
        <div class="split-visual">
          <div class="split-cell">
            <b>${pair("SYMMETRIC", "متماثل")}</b>
            <div class="mini-nodes equal" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
            <p>${pair("Peers share authority", "الأنداد يتقاسمون السلطة")}</p>
          </div>
          <div class="split-cell">
            <b>${pair("ASYMMETRIC", "غير متماثل")}</b>
            <div class="mini-nodes master" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
            <p>${pair("One node coordinates", "عقدة واحدة تنسّق")}</p>
          </div>
        </div>
      </div>`,
    structuresDetailed: `
      <div class="visual-panel" data-label="PEERS vs. HEAD NODE">
        <div class="split-visual">
          <div class="split-cell">
            <b>${pair("EVERY NODE CAN RUN APPS", "كل عقدة تشغّل التطبيقات")}</b>
            <div class="replication-demo"><span class="data-block">APP</span><span class="data-block">APP</span><span class="data-block">APP</span></div>
          </div>
          <div class="split-cell">
            <b>${pair("USER ENTERS THROUGH HEAD", "المستخدم يدخل عبر الرئيس")}</b>
            <div class="flow-diagram" style="grid-template-columns: 1fr 1fr; margin-top:1rem">
              <div class="flow-step accent">HEAD</div><div class="flow-step">WORKERS</div>
            </div>
          </div>
        </div>
      </div>`,
    symmetric: `
      <div class="visual-panel" data-label="DYNAMIC LEADERSHIP">
        <div class="topology">
          <span class="server">PEER 1</span>
          <span class="server">PEER 2</span>
          <span class="server">PEER 3</span>
        </div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="flow-step">${pair("SAME CONFIG · SHARED DUTIES · NO PERMANENT MASTER", "إعداد واحد · مسؤوليات مشتركة · لا رئيس دائم")}</div>
      </div>`,
    asymmetricImage: `
      <figure class="visual-panel image-figure" data-label="SOURCE DIAGRAM">
        <img src="./assets/asymmetric-cluster.jpg" alt="مخطط يوضح مستخدماً يصل إلى عقدة رئيسية تتصل بالعقد العاملة" />
      </figure>`,
    distributionTradeoff: `
      <div class="visual-panel" data-label="COST vs. COMPLEXITY">
        <div class="scale-visual">
          <div class="scale-side">
            <b>${pair("LOWER HARDWARE COST", "تكلفة عتاد أقل")}</b>
            <div class="scale-out-servers" aria-hidden="true"><i></i><i></i><i></i></div>
            <small>${pair("Commodity machines", "أجهزة تجارية عادية")}</small>
          </div>
          <div class="scale-side">
            <b>${pair("MORE COORDINATION", "تنسيق أكثر")}</b>
            <div class="topology" aria-hidden="true"><span class="server">A</span><span class="server">B</span><span class="server">C</span></div>
            <small>${pair("Complexity grows", "يزداد التعقيد")}</small>
          </div>
        </div>
      </div>`,
    replicationSharding: `
      <div class="visual-panel" data-label="DATA PLACEMENT">
        <div class="split-visual">
          <div class="split-cell">
            <b>${pair("REPLICATION", "نسخ مكرّر")}</b>
            <div class="replication-demo"><span class="data-block">ABC</span><span class="data-block">ABC</span><span class="data-block">ABC</span></div>
            <p>${pair("Same data, many nodes", "البيانات نفسها، عقد متعددة")}</p>
          </div>
          <div class="split-cell">
            <b>${pair("SHARDING", "تجزئة")}</b>
            <div class="sharding-demo"><span class="data-block">A</span><span class="data-block">B</span><span class="data-block">C</span></div>
            <p>${pair("Different pieces, different nodes", "أجزاء مختلفة، عقد مختلفة")}</p>
          </div>
        </div>
      </div>`,
    dfs: `
      <div class="visual-panel" data-label="ONE FILE · MANY NODES">
        <div class="flow-step accent">FILE: analytics.log</div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="sharding-demo">
          <span class="data-block">B1 ×3</span>
          <span class="data-block">B2 ×3</span>
          <span class="data-block">B3 ×3</span>
        </div>
        <div class="metric-strip">
          <div><strong>FAULT</strong><span>${pair("Tolerant", "تحمل")}</span></div>
          <div><strong>LOCAL</strong><span>${pair("Processing", "معالجة")}</span></div>
          <div><strong>SCALE</strong><span>${pair("Add nodes", "أضف عقداً")}</span></div>
        </div>
      </div>`,
    dfsComponents: `
      <div class="visual-panel" data-label="HDFS COMPONENT MAP">
        <div class="dfs-stack">
          <div class="metadata-node">NameNode<br><small>METADATA</small></div>
          <div class="data-node-stack">
            <div>DataNode 01 <span class="block-row"><i></i><i></i><i></i></span></div>
            <div>DataNode 02 <span class="block-row"><i></i><i></i><i></i></span></div>
            <div>DataNode 03 <span class="block-row"><i></i><i></i><i></i></span></div>
          </div>
        </div>
        <div class="metric-strip">
          <div><strong>64–256 MB</strong><span>${pair("Block range", "حجم الكتلة")}</span></div>
          <div><strong>128 MB</strong><span>${pair("Common HDFS", "شائع في HDFS")}</span></div>
          <div><strong>×3</strong><span>${pair("Replication", "عدد النسخ")}</span></div>
        </div>
      </div>`,
    dfsWorkflow: `
      <div class="visual-panel" data-label="CONTROL PATH vs. DATA PATH">
        <b style="margin-bottom:.55rem">${pair("WRITE / الكتابة", "الكتابة / WRITE")}</b>
        <div class="flow-diagram">
          <div class="flow-step">${pair("SPLIT FILE", "تقسيم الملف")}</div>
          <div class="flow-step accent">NameNode</div>
          <div class="flow-step">DataNodes ×3</div>
        </div>
        <b style="margin:1rem 0 .55rem">${pair("READ / القراءة", "القراءة / READ")}</b>
        <div class="flow-diagram">
          <div class="flow-step">${pair("ASK LOCATION", "طلب المواقع")}</div>
          <div class="flow-step accent">NameNode</div>
          <div class="flow-step">${pair("READ NEAREST", "قراءة الأقرب")}</div>
        </div>
      </div>`,
    relationalShift: `
      <div class="visual-panel" data-label="FIXED → FLEXIBLE">
        <div class="split-visual">
          <div class="split-cell">
            <b>RDBMS</b>
            <div class="replication-demo"><span class="data-block">ROW</span><span class="data-block">ROW</span><span class="data-block">ROW</span></div>
            <p>${pair("Fixed schema · tables", "مخطط ثابت · جداول")}</p>
          </div>
          <div class="split-cell">
            <b>NoSQL</b>
            <div class="sharding-demo"><span class="data-block">{ }</span><span class="data-block">K:V</span><span class="data-block">○—○</span></div>
            <p>${pair("Flexible data shapes", "أشكال بيانات مرنة")}</p>
          </div>
        </div>
      </div>`,
    rdbmsTable: renderRdbmsTable(),
    base: `
      <div class="visual-panel" data-label="BASE MODEL">
        <div class="base-stack">
          <div class="base-row"><b>B</b><span>${pair("<strong>Basically Available</strong><br>The system keeps responding.", "<strong>متاح أساساً</strong><br>يستمر النظام في الاستجابة.")}</span></div>
          <div class="base-row"><b>A</b><span>${pair("<strong>Soft State</strong><br>State may change as replicas synchronize.", "<strong>حالة مرنة</strong><br>قد تتغير الحالة أثناء تزامن النسخ.")}</span></div>
          <div class="base-row"><b>SE</b><span>${pair("<strong>Eventual Consistency</strong><br>Replicas converge over time.", "<strong>اتساق نهائي</strong><br>تتطابق النسخ بمرور الوقت.")}</span></div>
        </div>
      </div>`,
    nosqlTable: renderNoSqlTable(),
    newSqlLayers: `
      <div class="visual-panel" data-label="DISTRIBUTED RELATIONAL STACK">
        <div class="layer-stack">
          <div>${pair("ADMINISTRATIVE LAYER", "الطبقة الإدارية")}</div>
          <div>${pair("TRANSACTIONAL LAYER · ACID", "طبقة المعاملات · ACID")}</div>
          <div>${pair("DISTRIBUTED STORAGE LAYER", "طبقة التخزين الموزّع")}</div>
        </div>
        <div class="metric-strip">
          <div><strong>SQL</strong><span>${pair("Relational", "علائقي")}</span></div>
          <div><strong>ACID</strong><span>${pair("Transactions", "معاملات")}</span></div>
          <div><strong>SCALE</strong><span>${pair("Horizontal", "أفقي")}</span></div>
        </div>
      </div>`,
    scaling: `
      <div class="visual-panel" data-label="TWO GROWTH STRATEGIES">
        <div class="scale-visual">
          <div class="scale-side">
            <b>${pair("SCALE UP", "توسّع رأسي")}</b>
            <div class="scale-up-server" aria-hidden="true"></div>
            <small>${pair("Bigger server", "خادم أكبر")}</small>
          </div>
          <div class="scale-side">
            <b>${pair("SCALE OUT", "توسّع أفقي")}</b>
            <div class="scale-out-servers" aria-hidden="true"><i></i><i></i><i></i></div>
            <small>${pair("More servers", "خوادم أكثر")}</small>
          </div>
        </div>
      </div>`,
    scaleUp: `
      <div class="visual-panel" data-label="VERTICAL SCALABILITY">
        <div class="scale-up-server" aria-hidden="true"></div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="metric-strip">
          <div><strong>+ CPU</strong><span>${pair("Compute", "معالجة")}</span></div>
          <div><strong>+ RAM</strong><span>${pair("Memory", "ذاكرة")}</span></div>
          <div><strong>+ DISK</strong><span>${pair("Storage", "تخزين")}</span></div>
        </div>
        <div class="plain-note" style="margin-top:1rem"><p>${pair("Every server has a hardware ceiling.", "لكل خادم سقف عتادي.")}</p></div>
      </div>`,
    scaleOut: `
      <div class="visual-panel" data-label="HORIZONTAL SCALABILITY">
        <div class="topology">
          <span class="server">NODE 1</span>
          <span class="server">NODE 2</span>
          <span class="server">+ NODE</span>
        </div>
        <div class="arrow-flow" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="flow-step accent">${pair("CAPACITY GROWS WITH EACH NODE", "السعة تنمو مع كل عقدة")}</div>
        <div class="metric-strip">
          <div><strong>LOWER</strong><span>${pair("Unit cost", "تكلفة الوحدة")}</span></div>
          <div><strong>WIDER</strong><span>${pair("Capacity", "السعة")}</span></div>
          <div><strong>FLEXIBLE</strong><span>${pair("Growth", "النمو")}</span></div>
        </div>
      </div>`,
  };

  return visuals[type] || "";
}

function renderRdbmsTable() {
  const rows = [
    [
      ["Scalability", "قابلية التوسّع"],
      [
        "Vertical scaling (adding CPU/RAM) eventually reaches hardware limits at terabyte scale.",
        "يصل التوسّع الرأسي بإضافة CPU/RAM في النهاية إلى حدود العتاد عند أحجام التيرابايت.",
      ],
    ],
    [
      ["Schema Rigidity", "جمود المخطط"],
      [
        "Schema changes may require downtime and do not fit unstructured JSON or logs naturally.",
        "قد تتطلب تغييرات المخطط توقفاً، كما لا تناسب JSON أو السجلات غير المهيكلة طبيعياً.",
      ],
    ],
    [
      ["Performance", "الأداء"],
      [
        "JOIN operations slow across distributed nodes; replication can add latency.",
        "تتباطأ JOIN عبر العقد الموزعة، وقد يضيف النسخ المكرّر زمناً للتأخير.",
      ],
    ],
  ];

  return `
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead><tr><th>${pair("ISSUE", "التحدي")}</th><th>${pair("DESCRIPTION", "الوصف")}</th></tr></thead>
        <tbody>
          ${rows
            .map(
              ([issue, description]) => `
                <tr>
                  <td data-label="Issue / التحدي">${pair(issue[0], issue[1])}</td>
                  <td data-label="Description / الوصف">${pair(description[0], description[1])}</td>
                </tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function renderNoSqlTable() {
  const rows = [
    [
      ["Document", "وثائق"],
      ["JSON-like documents", "وثائق شبيهة بـ JSON"],
      ["Real-time analytics, user profiles", "تحليل لحظي، ملفات المستخدمين"],
      "MongoDB, Couchbase",
    ],
    [
      ["Key–Value", "مفتاح–قيمة"],
      ["Key → Value pairs", "أزواج مفتاح ← قيمة"],
      ["Caching, session management", "التخزين المؤقت، إدارة الجلسات"],
      "Redis, DynamoDB",
    ],
    [
      ["Columnar", "عمودية"],
      ["Columns grouped", "أعمدة مجمّعة"],
      ["Time-series, IoT data", "السلاسل الزمنية، بيانات IoT"],
      "Cassandra, HBase",
    ],
    [
      ["Graph", "رسومية"],
      ["Nodes and relationships", "عُقد وعلاقات"],
      ["Fraud detection, social networks", "كشف الاحتيال، الشبكات الاجتماعية"],
      "Neo4j, Amazon Neptune",
    ],
  ];

  return `
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>${pair("TYPE", "النوع")}</th>
            <th>${pair("STRUCTURE", "البنية")}</th>
            <th>${pair("BIG DATA USE CASE", "حالة الاستخدام")}</th>
            <th>${pair("EXAMPLES", "أمثلة")}</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td data-label="Type / النوع">${pair(row[0][0], row[0][1])}</td>
                  <td data-label="Structure / البنية">${pair(row[1][0], row[1][1])}</td>
                  <td data-label="Use case / الاستخدام">${pair(row[2][0], row[2][1])}</td>
                  <td data-label="Examples / أمثلة" dir="ltr">${row[3]}</td>
                </tr>`,
            )
            .join("")}
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
  document.title = `${pad(currentIndex + 1)} · ${slide.title.en} | Big Data Storage`;
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
          <div>
            <b>${slide.title.ar}</b>
            <small>${slide.title.en}</small>
          </div>
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
    localStorage.setItem("big-data-language", language);
  } catch {
    // Storage is optional; the presentation still works without it.
  }
  if (announce) {
    const label = language === "ar" ? "العربية" : language === "en" ? "English" : "العربية والإنجليزية";
    ui.status.textContent = `لغة العرض: ${label}`;
  }
}

function getStoredLanguage() {
  try {
    return localStorage.getItem("big-data-language") || "both";
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
  const tag = event.target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

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
