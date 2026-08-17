const exams = [
  {
    code: "A",
    label: "Storage Foundations",
    titleAr: "أساسيات التخزين والبيانات الضخمة",
    focus: "Closest to the sample · الأقرب إلى النموذج",
    fills: [
      {
        parts: ["", " are designed to distribute workloads across different cluster nodes."],
        answers: [["load balancing clusters", "load-balancing clusters"]],
        display: ["Load-balancing clusters"],
        note: "عناقيد موازنة الأحمال توزّع العمل بين العقد."
      },
      {
        parts: ["Cluster structure is classified into ", " and ", "."],
        answers: [
          ["symmetric", "symmetric clusters"],
          ["asymmetric", "asymmetric clusters"]
        ],
        display: ["symmetric", "asymmetric"],
        note: "التصنيف بحسب أدوار العقد: متماثل وغير متماثل."
      },
      {
        parts: ["A ", " database stores data in JSON or JSON-like documents."],
        answers: [["document", "document oriented", "document-oriented"]],
        display: ["document"],
        note: "قواعد بيانات الوثائق هي الأنسب لبنية JSON المرنة."
      },
      {
        parts: ["Big Data is commonly characterized by ", ", ", ", and ", "."],
        answers: [
          ["volume"],
          ["velocity"],
          ["variety"]
        ],
        display: ["volume", "velocity", "variety"],
        note: "الـ 3Vs هي الحجم والسرعة والتنوّع."
      },
      {
        parts: ["A website cache layer commonly uses a ", " database."],
        answers: [["key value", "key-value", "key value database", "key-value database"]],
        display: ["key–value"],
        note: "الوصول بالمفتاح سريع جداً، لذلك يناسب التخزين المؤقت."
      },
      {
        parts: ["", " adds CPU, memory, or storage to the same server."],
        answers: [["scaling up", "scale up", "vertical scaling", "scaling vertically"]],
        display: ["Scaling up (vertical scaling)"],
        note: "التوسّع الرأسي يقوّي الخادم نفسه."
      },
      {
        parts: ["Large-scale clickstream analysis is well suited to a ", " database."],
        answers: [
          ["column family", "column-family", "wide column", "wide-column", "column oriented", "column-oriented"]
        ],
        display: ["column-family (wide-column)"],
        note: "أحداث النقر الكثيرة تناسب الكتابة الموزّعة وعائلات الأعمدة."
      }
    ],
    essays: [
      {
        question: "Explain Distributed File System (DFS).",
        guide: "عرّف النظام، ثم اذكر تقسيم الملف إلى blocks وتوزيعها والنسخ المتماثل.",
        answerEn:
          "A DFS stores files across multiple networked nodes. A large file is split into blocks, the blocks are distributed among data nodes, and replicas are kept on different nodes for fault tolerance. Metadata identifies where each block is stored, so the system can locate and reassemble the file.",
        answerAr:
          "نظام الملفات الموزّع يخزّن الملف على عدة عقد شبكية. يُقسَّم الملف إلى كتل، وتوزَّع الكتل مع نسخ متماثلة لتحمّل الأعطال، بينما تحفظ خدمة البيانات الوصفية مواقع الكتل ليُعاد تجميع الملف عند القراءة.",
        points: ["التعريف", "Blocks", "Distribution", "Replication / fault tolerance", "Metadata"]
      },
      {
        question: "Explain the CAP Theorem.",
        guide: "اشرح C وA وP، ثم وضّح الاختيار عند حدوث network partition.",
        answerEn:
          "CAP says that during a network partition, a distributed data system cannot guarantee both strong consistency and full availability. It must choose CP (consistent but some requests may fail) or AP (available but some reads may temporarily be stale). Partition tolerance is necessary in a distributed system.",
        answerAr:
          "تنص CAP على أنه عند انقسام الشبكة لا يستطيع النظام الموزّع ضمان الاتساق القوي والتوافر الكامل معاً؛ فيختار CP أو AP. تحمّل الانقسام ضروري لأن فشل الاتصال بين العقد ممكن.",
        points: ["Consistency", "Availability", "Partition tolerance", "CP vs AP"]
      },
      {
        question: "Write a query to display product names and prices greater than 50.",
        guide: "استخدم find() ومعامل المقارنة $gt كما في مثال age الموجود بالمحاضرة.",
        isQuery: true,
        answerEn: "db.products.find({ price: { $gt: 50 } })",
        answerAr:
          "هذا هو التحويل المباشر لمثال المحاضرة. ويمكن إضافة projection مثل { name: 1, price: 1, _id: 0 } إذا طُلب عرض حقول محددة فقط.",
        points: ["db.products", "find()", "price", "$gt: 50"]
      }
    ]
  },
  {
    code: "B",
    label: "Clusters & Distribution",
    titleAr: "العناقيد وتوزيع البيانات",
    focus: "Concept connections · ربط المفاهيم",
    fills: [
      {
        parts: ["", " clusters are designed to minimize downtime when a node fails."],
        answers: [["high availability", "high-availability", "ha"]],
        display: ["High-availability"],
        note: "هدفها استمرار الخدمة وتقليل التوقف."
      },
      {
        parts: ["", " stores copies of the same data on multiple nodes."],
        answers: [["replication", "data replication"]],
        display: ["Replication"],
        note: "النسخ المتماثل يحفظ نسخاً من البيانات نفسها."
      },
      {
        parts: ["", " divides a dataset so that different nodes store different subsets."],
        answers: [["sharding", "partitioning", "data partitioning"]],
        display: ["Sharding (partitioning)"],
        note: "التجزئة توزّع أجزاء مختلفة من البيانات."
      },
      {
        parts: ["NoSQL means ", "."],
        answers: [["not only sql", "not only structured query language"]],
        display: ["Not Only SQL"],
        note: "المقصود أنها لا تقتصر على النموذج العلائقي وSQL."
      },
      {
        parts: ["User session data is commonly stored in a ", " database."],
        answers: [["key value", "key-value", "key value database", "key-value database"]],
        display: ["key–value"],
        note: "Session ID يعمل كمفتاح لقيمة الجلسة."
      },
      {
        parts: ["", " increases capacity by adding more servers or nodes."],
        answers: [["scaling out", "scale out", "horizontal scaling", "scaling horizontally"]],
        display: ["Scaling out (horizontal scaling)"],
        note: "التوسّع الأفقي يضيف عقداً جديدة."
      },
      {
        parts: ["A friends-of-friends recommendation is best modeled by a ", " database."],
        answers: [["graph", "graph database"]],
        display: ["graph"],
        note: "الرسم البياني يجعل العلاقات والمسارات عناصر أساسية."
      }
    ],
    essays: [
      {
        question: "Compare high-availability clusters and load-balancing clusters.",
        guide: "اذكر الهدف الأساسي لكل نوع، ثم وضّح إمكانية اجتماعهما.",
        answerEn:
          "A high-availability cluster keeps a service running when a component fails, usually through redundancy and failover. A load-balancing cluster distributes incoming work across nodes to improve throughput and response time. A system may use both: balancing in normal operation and failover after a failure.",
        answerAr:
          "عنقود التوافر العالي يركّز على استمرار الخدمة عند العطل بالنسخ الاحتياطي والتحويل التلقائي، بينما عنقود موازنة الأحمال يوزّع الطلبات لتحسين الأداء. ويمكن للنظام الجمع بينهما.",
        points: ["HA goal", "Failover / redundancy", "Load-balancing goal", "Can be combined"]
      },
      {
        question: "Explain the difference between replication and sharding.",
        guide: "ركّز على: same data copies مقابل different data subsets.",
        answerEn:
          "Replication puts copies of the same data on multiple nodes to improve availability, read capacity, and fault tolerance. Sharding partitions the dataset so each node stores a different subset, increasing total storage and write capacity. They solve different problems and are often combined.",
        answerAr:
          "النسخ المتماثل يضع البيانات نفسها على عدة عقد للتوافر وتحمل الأعطال، أما التجزئة فتقسم البيانات إلى أجزاء مختلفة لزيادة السعة. وغالباً يُستخدمان معاً.",
        points: ["Same data copies", "Different subsets", "Availability", "Capacity", "Combination"]
      },
      {
        question: "Write a MongoDB query to display Electronics products with a price greater than 100.",
        guide: "ضع category وشرط price داخل وثيقة معايير find().",
        isQuery: true,
        answerEn:
          'db.products.find({\n  category: "Electronics",\n  price: { $gt: 100 }\n})',
        answerAr:
          "وجود الشرطين داخل وثيقة واحدة يعني AND ضمنياً في MongoDB.",
        points: ["db.products.find()", "category: \"Electronics\"", "price", "$gt: 100"]
      }
    ]
  },
  {
    code: "C",
    label: "NoSQL & Consistency",
    titleAr: "نماذج NoSQL والاتساق",
    focus: "Deeper revision · مراجعة أعمق",
    fills: [
      {
        parts: ["In HDFS, the ", " stores file-system metadata and block locations."],
        answers: [["namenode", "name node"]],
        display: ["NameNode"],
        note: "NameNode يدير البيانات الوصفية، وليس محتوى الكتل."
      },
      {
        parts: ["A large file in a DFS is divided into fixed-size ", "."],
        answers: [["blocks", "data blocks", "file blocks"]],
        display: ["blocks"],
        note: "تقسيم الملفات إلى كتل يسمح بتوزيعها على العقد."
      },
      {
        parts: ["BASE stands for Basically Available, ", ", and ", "."],
        answers: [
          ["soft state"],
          ["eventual consistency", "eventually consistent"]
        ],
        display: ["Soft state", "Eventual consistency"],
        note: "BASE يفضّل المرونة والتوافر مع وصول الاتساق لاحقاً."
      },
      {
        parts: ["An AP system prioritizes ", " and ", " during a network partition."],
        answers: [
          ["availability"],
          ["partition tolerance", "partition-tolerance"]
        ],
        display: ["availability", "partition tolerance"],
        note: "AP قد يسمح مؤقتاً بقراءات غير محدثة مقابل بقاء الخدمة."
      },
      {
        parts: ["A content-management system with flexible records commonly uses a ", " database."],
        answers: [["document", "document oriented", "document-oriented"]],
        display: ["document"],
        note: "الوثائق تناسب السجلات المرنة والمختلفة الحقول."
      },
      {
        parts: ["High-volume sensor and time-series data is well suited to a ", " database."],
        answers: [
          ["column family", "column-family", "wide column", "wide-column", "column oriented", "column-oriented"]
        ],
        display: ["column-family (wide-column)"],
        note: "عائلة الأعمدة مناسبة للكتابة الكثيفة والتوزيع الأفقي."
      },
      {
        parts: ["A graph database represents data as ", " and ", "."],
        answers: [
          ["nodes", "vertices"],
          ["edges", "relationships"]
        ],
        display: ["nodes", "edges"],
        note: "العقد تمثل الكيانات والحواف تمثل العلاقات."
      }
    ],
    essays: [
      {
        question: "Compare ACID and BASE.",
        guide: "عرّف الاختصارين، ثم قارن الاتساق الصارم بالاتساق النهائي.",
        answerEn:
          "ACID emphasizes reliable transactions: Atomicity, Consistency, Isolation, and Durability, usually with strong immediate consistency. BASE means Basically Available, Soft state, and Eventual consistency; it accepts temporary inconsistency to improve availability and scalability in distributed systems.",
        answerAr:
          "ACID يركّز على معاملات موثوقة واتساق فوري قوي، بينما BASE يسمح باتساق مؤجل مؤقتاً مقابل توافر وقابلية توسع أعلى في الأنظمة الموزعة.",
        points: ["ACID expansion", "BASE expansion", "Strong vs eventual consistency", "Trade-off"]
      },
      {
        question: "Explain the four main NoSQL database models and give one use case for each.",
        guide: "Key–value, Document, Column-family, Graph؛ تعريف قصير + مثال استخدام.",
        answerEn:
          "Key–value stores map a unique key to a value (cache or sessions). Document stores keep flexible JSON-like documents (content management). Column-family stores organize wide, sparse distributed rows (logs, sensors, clickstreams). Graph databases store nodes and edges (social networks and recommendations).",
        answerAr:
          "المفتاح–القيمة للكاش والجلسات، الوثائق لسجلات JSON وإدارة المحتوى، عائلة الأعمدة للسجلات والحساسات والـ clickstream، والرسم البياني للشبكات الاجتماعية والتوصيات.",
        points: ["Key–value + use case", "Document + use case", "Column-family + use case", "Graph + use case"]
      },
      {
        question: "Write a MongoDB query to display products priced between 50 and 200.",
        guide: "استخدم $gte للحد الأدنى و$lte للحد الأعلى داخل حقل price.",
        isQuery: true,
        answerEn:
          "db.products.find({\n  price: { $gte: 50, $lte: 200 }\n})",
        answerAr:
          "$gte تعني أكبر من أو يساوي، و$lte تعني أصغر من أو يساوي.",
        points: ["db.products.find()", "price", "$gte: 50", "$lte: 200"]
      }
    ]
  },
  {
    code: "D",
    label: "Verified Pattern I",
    titleAr: "محاكاة مباشرة للنماذج المصوّرة",
    focus: "New sample pattern · نمط مؤكد من الصور",
    trueFalse: [
      {
        statement: "Cluster computing technology is used for high availability as well as load balancing.",
        answer: true,
        explanation: "صحيح؛ كلاهما من أهداف وتصنيفات استخدام العناقيد."
      },
      {
        statement: "DataNodes coordinate all file operations in HDFS.",
        answer: false,
        explanation: "خطأ؛ NameNode يدير البيانات الوصفية وينسّق الوصول، بينما DataNodes تخزّن الكتل."
      },
      {
        statement: "MongoDB is built on top of the Hadoop Distributed File System.",
        answer: false,
        explanation: "خطأ؛ HBase هو النظام المرتبط بـHDFS في المقرر، أما MongoDB فهو Document database مستقل."
      },
      {
        statement: "Scaling up is limited by the maximum capacity of a single server.",
        answer: true,
        explanation: "صحيح؛ لا يمكن إضافة موارد إلى الخادم نفسه بلا حد."
      },
      {
        statement: "In HBase, a row is a collection of columns.",
        answer: true,
        explanation: "صحيح؛ HBase من عائلة الأعمدة وينظّم بيانات الصف ضمن أعمدة وعائلات."
      }
    ],
    fills: [
      {
        parts: ["Big Data is characterized by ", ", ", ", and ", "."],
        answers: [["volume"], ["velocity"], ["variety"]],
        display: ["Volume", "Velocity", "Variety"],
        note: "الثلاثة الأساسية في تعريف Big Data."
      },
      {
        parts: ["", " adds more storage, memory, and CPU to the same server."],
        answers: [["scaling up", "scale up", "vertical scaling"]],
        display: ["Scaling up"],
        note: "تقوية الجهاز نفسه تعني التوسّع الرأسي."
      },
      {
        parts: ["", " are designed to distribute workloads across different cluster nodes."],
        answers: [["load balancing clusters", "load-balancing clusters"]],
        display: ["Load-balancing clusters"],
        note: "هذه العبارة تكررت حرفياً تقريباً في نماذج الدكتورة."
      },
      {
        parts: ["Cluster structure is classified into ", " and ", "."],
        answers: [
          ["symmetric", "symmetric clusters"],
          ["asymmetric", "asymmetric clusters"]
        ],
        display: ["symmetric", "asymmetric"],
        note: "تصنيف بنية العقد بحسب تماثل أدوارها."
      },
      {
        parts: ["To check the currently selected MongoDB database, use the command ", "."],
        answers: [["db"]],
        display: ["db"],
        note: "اكتب db فقط في Mongo shell."
      },
      {
        parts: ["To list all collections in the current database, use ", "."],
        answers: [["show collections", "show collection"]],
        display: ["show collections"],
        note: "يعرض أسماء Collections داخل قاعدة البيانات الحالية."
      }
    ],
    essays: [
      {
        question:
          "Write MongoDB code to display student_name, address, and email for students whose age > 18 and degree > 90.",
        guide: "شرطان داخل find() يعنيان AND ضمنياً، ثم استخدم projection للحقول المطلوبة.",
        isQuery: true,
        answerEn:
          "db.students.find(\n  { age: { $gt: 18 }, degree: { $gt: 90 } },\n  { student_name: 1, address: 1, email: 1, _id: 0 }\n)",
        answerAr:
          "ضع age وdegree داخل وثيقة الشروط نفسها، ثم فعّل الحقول المطلوبة بالقيمة 1 وأخفِ _id بالقيمة 0.",
        points: ["db.students.find()", "age $gt 18", "degree $gt 90", "projection", "_id: 0"]
      }
    ]
  },
  {
    code: "E",
    label: "Verified Pattern II",
    titleAr: "عكس العبارات وأوامر MongoDB",
    focus: "Reversal traps · فخ تغيير كلمة واحدة",
    trueFalse: [
      {
        statement: "Big Data technology can store and process data ranging from petabytes to zettabytes.",
        answer: true,
        explanation: "صحيح؛ أحجام Big Data قد تصل من PB إلى ZB."
      },
      {
        statement: "A highly available system increases single points of failure.",
        answer: false,
        explanation: "خطأ؛ التوافر العالي يقلّل نقاط الفشل المفردة ولا يزيدها."
      },
      {
        statement: "Scaling out is limited by the maximum capacity of one server.",
        answer: false,
        explanation: "خطأ؛ هذا قيد scaling up، بينما scaling out يضيف خوادم أو عقداً."
      },
      {
        statement: "HBase is a distributed document-oriented database.",
        answer: false,
        explanation: "خطأ؛ HBase قاعدة موزعة من نوع column-family."
      },
      {
        statement: "Big Data storage is a scalable architecture for collecting, managing, and analyzing vast data.",
        answer: true,
        explanation: "صحيح؛ القابلية للتوسع جزء أساسي من بنية تخزين البيانات الضخمة."
      }
    ],
    fills: [
      {
        parts: ["", " is the batch-processing programming model used with Hadoop and Big Data."],
        answers: [["mapreduce", "map reduce"]],
        display: ["MapReduce"],
        note: "يتكون الاسم من مرحلتي Map وReduce."
      },
      {
        parts: ["NoSQL databases are classified into ", ", ", ", ", ", and ", "."],
        answers: [
          ["key value", "key-value"],
          ["document", "document store"],
          ["column family", "column-family", "wide column"],
          ["graph", "graph database"]
        ],
        display: ["Key–Value", "Document", "Column-Family", "Graph"],
        note: "الأنواع الأربعة الرئيسية في المحاضرة."
      },
      {
        parts: ["Cluster computing is classified into ", " and ", " clusters."],
        answers: [
          ["high availability", "high-availability"],
          ["load balancing", "load-balancing"]
        ],
        display: ["high-availability", "load-balancing"],
        note: "التوافر العالي للاستمرارية، وموازنة الأحمال لتوزيع العمل."
      },
      {
        parts: ["The three data types are ", ", ", ", and ", "."],
        answers: [
          ["structured", "structured data"],
          ["semi structured", "semi-structured", "semistructured"],
          ["unstructured", "unstructured data"]
        ],
        display: ["structured", "semi-structured", "unstructured"],
        note: "هذا تصنيف شكل البيانات، وليس خصائص 3Vs."
      },
      {
        parts: ["", " is a column-family database built to work on top of HDFS."],
        answers: [["hbase", "apache hbase"]],
        display: ["HBase"],
        note: "تمييز مهم لأن الدكتورة تستبدل HBase بـMongoDB في عبارات الخطأ."
      },
      {
        parts: ["To explicitly create a MongoDB collection, use ", "."],
        answers: [["db createcollection", "dbcreatecollection", "db.createcollection"]],
        display: ["db.createCollection()"],
        note: "مثال: db.createCollection(\"students\")."
      }
    ],
    essays: [
      {
        question:
          "Write MongoDB code to display product_name and price where quantity < 20 and address is Sana'a or Ibb.",
        guide: "استخدم $lt للكمية و$in للاختيار بين مدينتين، ثم projection.",
        isQuery: true,
        answerEn:
          "db.products.find(\n  { quantity: { $lt: 20 }, address: { $in: [\"Sana'a\", \"Ibb\"] } },\n  { product_name: 1, price: 1, _id: 0 }\n)",
        answerAr:
          "$in تحقق شرط OR بين القيم داخل القائمة، بينما وجود quantity وaddress معاً يحقق AND بين الحقلين.",
        points: ["quantity $lt 20", "address $in", "Sana'a and Ibb", "projection", "_id: 0"]
      }
    ]
  },
  {
    code: "F",
    label: "Verified Pattern III",
    titleAr: "مراجعة شاملة بنفس أسلوب الدكتورة",
    focus: "Course-balanced · موزون على المقرر",
    trueFalse: [
      {
        statement: "The NameNode stores the actual file blocks in HDFS.",
        answer: false,
        explanation: "خطأ؛ NameNode يخزّن metadata ومواقع الكتل، وDataNodes تخزّن الكتل نفسها."
      },
      {
        statement: "Replication stores copies of the same data on multiple nodes.",
        answer: true,
        explanation: "صحيح؛ النسخ يحسن التوافر وتحمل الأعطال."
      },
      {
        statement: "Scaling out means adding CPU and memory to the same server.",
        answer: false,
        explanation: "خطأ؛ هذا scaling up، أما scaling out فيضيف عقداً أو خوادم."
      },
      {
        statement: "A document database stores JSON-like field-and-value documents.",
        answer: true,
        explanation: "صحيح؛ MongoDB مثال على Document database تستخدم BSON شبيهاً بـJSON."
      },
      {
        statement: "A graph database is the best choice for massive clickstream writes.",
        answer: false,
        explanation: "خطأ؛ clickstreams تناسب column-family، بينما graph للعلاقات والمسارات."
      }
    ],
    fills: [
      {
        parts: ["HBase belongs to the ", " NoSQL model."],
        answers: [["column family", "column-family", "wide column", "wide-column"]],
        display: ["column-family"],
        note: "HBase وCassandra من أشهر أمثلة هذا النوع."
      },
      {
        parts: ["The ", " stores HDFS metadata and block locations."],
        answers: [["namenode", "name node"]],
        display: ["NameNode"],
        note: "يدير خريطة النظام ولا يخزّن محتوى الملف نفسه."
      },
      {
        parts: ["", " store the actual HDFS file blocks."],
        answers: [["datanodes", "data nodes", "datanode"]],
        display: ["DataNodes"],
        note: "العقد التي تحمل بيانات الكتل الفعلية."
      },
      {
        parts: ["BASE stands for ", ", ", ", and ", "."],
        answers: [
          ["basically available"],
          ["soft state"],
          ["eventual consistency", "eventually consistent"]
        ],
        display: ["Basically Available", "Soft state", "Eventual consistency"],
        note: "يرتبط BASE بالمرونة والاتساق النهائي."
      },
      {
        parts: ["MapReduce consists of the ", " phase and the ", " phase."],
        answers: [["map"], ["reduce"]],
        display: ["Map", "Reduce"],
        note: "Map تنتج أزواجاً وسيطة، وReduce تجمع النتائج."
      },
      {
        parts: ["To list collections in the active MongoDB database, type ", "."],
        answers: [["show collections", "show collection"]],
        display: ["show collections"],
        note: "الأمر يعمل داخل قاعدة البيانات المحددة حالياً."
      }
    ],
    essays: [
      {
        question:
          "Write MongoDB code to display customer_name and city for active customers whose age >= 21 and city is Sana'a or Aden.",
        guide: "استخدم $gte و$in مع equality لحالة active، ثم اختر حقلي الاسم والمدينة.",
        isQuery: true,
        answerEn:
          "db.customers.find(\n  { status: \"active\", age: { $gte: 21 }, city: { $in: [\"Sana'a\", \"Aden\"] } },\n  { customer_name: 1, city: 1, _id: 0 }\n)",
        answerAr:
          "القيمة النصية active توضع بين اقتباس، و$gte تشمل 21، و$in تحقق أحد الخيارين للمدينة.",
        points: ["status active", "age $gte 21", "city $in", "projection", "_id: 0"]
      }
    ]
  },
  {
    code: "G",
    label: "Original Samples Collection",
    titleAr: "جميع أسئلة الصور الأصلية دون تكرار",
    focus: "Source collection · بنك النماذج المصوّرة",
    durationMinutes: 45,
    trueFalse: [
      {
        statement: "Cluster computing technology is used for high availability as well as load balancing.",
        answer: true,
        explanation: "صحيح؛ تستخدم العناقيد لتحسين الاستمرارية وتوزيع الحمل."
      },
      {
        statement: "DataNodes coordinate file operations in HDFS.",
        answer: false,
        explanation: "خطأ؛ NameNode يدير البيانات الوصفية وينسق الوصول، وDataNodes تخزن الكتل."
      },
      {
        statement: "MongoDB is built on top of the Hadoop Distributed File System.",
        answer: false,
        explanation: "خطأ؛ HBase مرتبط بـHDFS، أما MongoDB فهو Document database."
      },
      {
        statement:
          "Big Data storage is a scalable architecture that enables businesses to collect, manage, and analyze vast amounts of data in real time.",
        answer: true,
        explanation: "صحيح؛ العبارة تصف هدف بنية تخزين Big Data القابلة للتوسع."
      },
      {
        statement:
          "Big Data technology is capable of storing and processing data that range from gigabytes to terabytes.",
        answer: false,
        explanation: "خطأ بحسب صياغة المقرر؛ النطاق المقصود للبيانات الضخمة يمتد من petabytes إلى zettabytes."
      },
      {
        statement: "Big Data technology can store and process data ranging from petabytes to zettabytes.",
        answer: true,
        explanation: "صحيح؛ PB إلى ZB هو النطاق الكبير الوارد في النموذج."
      },
      {
        statement: "Scaling up is limited by the maximum scaling capacity of a single server.",
        answer: true,
        explanation: "صحيح؛ موارد الخادم الواحد لها حد أقصى."
      },
      {
        statement: "A highly available system decreases single points of failure.",
        answer: true,
        explanation: "صحيح؛ التكرار وfailover يقللان الاعتماد على نقطة واحدة."
      },
      {
        statement: "A highly available system increases single points of failure.",
        answer: false,
        explanation: "خطأ؛ كلمة increases قلبت معنى العبارة الصحيحة."
      },
      {
        statement: "Scaling out is limited by the maximum capacity of one server.",
        answer: false,
        explanation: "خطأ؛ هذا قيد scaling up، أما scaling out فيضيف خوادم."
      },
      {
        statement: "In HBase, a row is a collection of columns.",
        answer: true,
        explanation: "صحيح؛ صف HBase يحتوي أعمدة منظمة ضمن عائلات."
      },
      {
        statement: "HBase is a distributed document-oriented database.",
        answer: false,
        explanation: "خطأ؛ HBase من نوع column-family."
      }
    ],
    fills: [
      {
        parts: ["Big Data refers to massive data characterized by ", ", ", ", and ", "."],
        answers: [["volume"], ["velocity"], ["variety"]],
        display: ["Volume", "Velocity", "Variety"],
        note: "خصائص 3Vs الواردة في النماذج."
      },
      {
        parts: ["", " adds more storage resources and CPU to increase the capacity of one server."],
        answers: [["scaling up", "scale up", "vertical scaling"]],
        display: ["Scaling up"],
        note: "إضافة موارد إلى الجهاز نفسه."
      },
      {
        parts: ["", " are designed to distribute workloads across different cluster nodes."],
        answers: [["load balancing clusters", "load-balancing clusters"]],
        display: ["Load-balancing clusters"],
        note: "العبارة ظهرت في النموذج المصوّر."
      },
      {
        parts: ["Cluster structure is classified into ", " and ", "."],
        answers: [
          ["symmetric", "symmetric clusters"],
          ["asymmetric", "asymmetric clusters"]
        ],
        display: ["symmetric", "asymmetric"],
        note: "تصنيف بنية العنقود."
      },
      {
        parts: ["", " is the batch-processing programming model for Hadoop and Big Data."],
        answers: [["mapreduce", "map reduce"]],
        display: ["MapReduce"],
        note: "نموذج المعالجة الدُفعية في Hadoop."
      },
      {
        parts: ["NoSQL databases are classified into ", ", ", ", ", ", and ", "."],
        answers: [
          ["key value", "key-value"],
          ["document", "document store"],
          ["column family", "column-family", "wide column"],
          ["graph", "graph database"]
        ],
        display: ["Key–Value", "Document", "Column-Family", "Graph"],
        note: "عائلات NoSQL الأربع الواردة في المحاضرة."
      },
      {
        parts: ["To check the currently selected MongoDB database, use ", "."],
        answers: [["db"]],
        display: ["db"],
        note: "اكتب db فقط."
      },
      {
        parts: ["Cluster computing is classified into ", " and ", " clusters."],
        answers: [
          ["high availability", "high-availability"],
          ["load balancing", "load-balancing"]
        ],
        display: ["high-availability", "load-balancing"],
        note: "تصنيف بحسب الهدف، وليس بنية symmetric/asymmetric."
      },
      {
        parts: ["The data types of Big Data are ", ", ", ", and ", "."],
        answers: [
          ["structured", "structured data"],
          ["semi structured", "semi-structured", "semistructured"],
          ["unstructured", "unstructured data"]
        ],
        display: ["structured", "semi-structured", "unstructured"],
        note: "تصنيف البيانات بحسب مقدار البنية."
      },
      {
        parts: ["To list all collection names in the current database, use ", "."],
        answers: [["show collections", "show collection"]],
        display: ["show collections"],
        note: "أمر Mongo shell الظاهر في النموذج."
      },
      {
        parts: [
          "A collection can be created explicitly with ",
          ", or implicitly with ",
          " or ",
          "."
        ],
        answers: [
          ["db createcollection", "dbcreatecollection", "db.createcollection"],
          ["insertone", "insert one", "insertone command"],
          ["insertmany", "insert many", "insertmany command"]
        ],
        display: ["db.createCollection()", "insertOne()", "insertMany()"],
        note: "الإنشاء قد يكون صريحاً أو يحدث عند أول عملية إدراج."
      }
    ],
    essays: [
      {
        question:
          "Write MongoDB code to display student_name, address, and email for students whose age > 18 and degree > 90.",
        guide: "هذا هو سؤال الطلاب الظاهر في الصور؛ استخدم شرطين وprojection.",
        isQuery: true,
        answerEn:
          "db.students.find(\n  { age: { $gt: 18 }, degree: { $gt: 90 } },\n  { student_name: 1, address: 1, email: 1, _id: 0 }\n)",
        answerAr:
          "الشرطان داخل وثيقة واحدة يعنيان AND ضمنياً، والوثيقة الثانية تحدد الحقول المعروضة.",
        points: ["age $gt 18", "degree $gt 90", "student_name/address/email", "_id: 0"]
      },
      {
        question:
          "Write MongoDB code to display product_name and price where quantity < 20 and address is Sana'a or Ibb.",
        guide: "هذا هو سؤال المنتجات الظاهر في الصور؛ استخدم $lt و$in وprojection.",
        isQuery: true,
        answerEn:
          "db.products.find(\n  { quantity: { $lt: 20 }, address: { $in: [\"Sana'a\", \"Ibb\"] } },\n  { product_name: 1, price: 1, _id: 0 }\n)",
        answerAr:
          "$in تمثل OR بين Sana'a وIbb، بينما quantity وaddress معاً مرتبطان بـAND ضمنياً.",
        points: ["quantity $lt 20", "address $in", "product_name/price", "_id: 0"]
      }
    ]
  },
  {
    code: "H",
    label: "Unseen Questions Challenge",
    titleAr: "اختبار جديد بالكامل دون تكرار",
    focus: "Blind simulation · نفس الأسلوب بأسئلة غير مسبوقة",
    trueFalse: [
      {
        statement:
          "A key–value store usually retrieves data by key and treats the stored value as opaque.",
        answer: true,
        explanation:
          "صحيح؛ القاعدة تعرف المفتاح، لكنها لا تفهم عادةً الحقول الداخلية للقيمة كما يفعل Document store."
      },
      {
        statement: "All documents in one MongoDB collection must contain exactly the same fields.",
        answer: false,
        explanation:
          "خطأ؛ يمكن أن تختلف الحقول الاختيارية بين وثائق المجموعة لأن المخطط مرن."
      },
      {
        statement: "MongoDB automatically creates an _id field when a new document does not provide one.",
        answer: true,
        explanation:
          "صحيح؛ تضيف MongoDB معرّفاً فريداً تلقائياً عند غيابه."
      },
      {
        statement: "Column-family databases are the best choice when ad-hoc queries and complex joins are required.",
        answer: false,
        explanation:
          "خطأ؛ عائلة الأعمدة تناسب مسارات استعلام معروفة مسبقاً، لا JOIN والاستعلامات الحرة."
      },
      {
        statement: "In a MongoDB query, matching documents are filtered before a sort modifier orders them.",
        answer: true,
        explanation:
          "صحيح؛ find() يحدد الوثائق المطابقة أولاً، ثم sort() يرتب النتيجة."
      }
    ],
    fills: [
      {
        parts: ["Processing data on the node where it is already stored is called ", "."],
        answers: [["data locality", "locality"]],
        display: ["Data locality"],
        note: "تقليل نقل البيانات عبر الشبكة يحسن أداء المعالجة الموزعة."
      },
      {
        parts: ["A MongoDB ", " groups related ", " together."],
        answers: [
          ["collection"],
          ["documents", "document"]
        ],
        display: ["collection", "documents"],
        note: "Collection تشبه دور الجدول تنظيمياً، والوثيقة هي السجل المرن."
      },
      {
        parts: ["MongoDB internally stores JSON-like documents using the ", " format."],
        answers: [["bson", "binary json"]],
        display: ["BSON"],
        note: "BSON تمثيل ثنائي موسع لوثائق شبيهة بـJSON."
      },
      {
        parts: ["The graph database ", " uses the query language ", "."],
        answers: [["neo4j", "neo 4j"], ["cypher"]],
        display: ["Neo4j", "Cypher"],
        note: "Neo4j مثال property graph، وCypher لغته الاستعلامية."
      },
      {
        parts: ["A column-family table should be designed around the ", " that the application must answer."],
        answers: [["query", "known query", "query path", "access pattern"]],
        display: ["known query"],
        note: "النمذجة تبدأ من مسار القراءة المعروف مسبقاً."
      },
      {
        parts: ["NewSQL combines scalable distributed performance with ", " transaction guarantees."],
        answers: [["acid"]],
        display: ["ACID"],
        note: "الهدف هو الاحتفاظ بضمانات المعاملات مع التوسع."
      }
    ],
    essays: [
      {
        question:
          "Write MongoDB code to display name, status, and age for users whose age is at most 30 and status is not blocked, sorted by age from highest to lowest.",
        guide: "استخدم $lte و$ne، ثم projection، وبعد find() أضف sort بقيمة -1.",
        isQuery: true,
        answerEn:
          "db.users.find(\n  { age: { $lte: 30 }, status: { $ne: \"blocked\" } },\n  { name: 1, status: 1, age: 1, _id: 0 }\n).sort({ age: -1 })",
        answerAr:
          "at most تعني $lte، وnot blocked تعني $ne، والقيمة -1 ترتب العمر تنازلياً.",
        points: ["age $lte 30", "status $ne blocked", "projection", "_id: 0", "sort age -1"]
      }
    ]
  }
];

const examPaper = document.querySelector("#examPaper");
const variantLetter = document.querySelector("#variantLetter");
const variantLabel = document.querySelector("#variantLabel");
const tabs = [...document.querySelectorAll("[data-exam]")];
const checkButton = document.querySelector("#checkButton");
const answersButton = document.querySelector("#answersButton");
const printButton = document.querySelector("#printButton");
const resetButton = document.querySelector("#resetButton");
const scoreCard = document.querySelector("#scoreCard");
const scoreValue = document.querySelector("#scoreValue");
const scoreTotal = document.querySelector("#scoreTotal");
const scoreMessage = document.querySelector("#scoreMessage");
const statusMessage = document.querySelector("#statusMessage");
const timerOutput = document.querySelector("#timerOutput");
const timerButton = document.querySelector("#timerButton");

const requestedExam = exams.findIndex(
  (exam) => exam.code.toLowerCase() === window.location.hash.slice(1).toLowerCase()
);
let activeExam = requestedExam >= 0 ? requestedExam : 3;
let answersVisible = false;
let secondsLeft = 25 * 60;
let timerId = null;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalize(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[–—-]/g, " ")
    .replace(/[.,;:()[\]{}'"]/g, "")
    .replace(/\s+/g, " ");
}

function renderTrueFalse(question, questionIndex) {
  return `
    <li class="truefalse-question" data-tf-question="${questionIndex}">
      <div class="tf-statement">
        <span>${String(questionIndex + 1).padStart(2, "0")}</span>
        <p lang="en" dir="ltr">${escapeHtml(question.statement)}</p>
      </div>
      <fieldset class="tf-options">
        <legend class="sr-only">Choose True or False for question ${questionIndex + 1}</legend>
        <label>
          <input type="radio" name="tf-${questionIndex}" value="true" />
          <span>TRUE</span>
        </label>
        <label>
          <input type="radio" name="tf-${questionIndex}" value="false" />
          <span>FALSE</span>
        </label>
        <output class="tf-result" aria-live="polite"></output>
      </fieldset>
      <div class="tf-answer">
        <b>${question.answer ? "TRUE" : "FALSE"}</b>
        <span>${escapeHtml(question.explanation)}</span>
      </div>
    </li>`;
}

function renderFill(question, questionIndex) {
  let sentence = "";
  question.parts.forEach((part, blankIndex) => {
    sentence += escapeHtml(part);
    if (blankIndex < question.answers.length) {
      const width = Math.min(220, Math.max(110, question.display[blankIndex].length * 9 + 42));
      sentence += `
        <span class="blank-wrap">
          <input
            class="blank-input"
            style="--blank-width:${width}px"
            type="text"
            dir="ltr"
            autocomplete="off"
            spellcheck="false"
            aria-label="Question ${questionIndex + 1}, blank ${blankIndex + 1}"
            data-question="${questionIndex}"
            data-blank="${blankIndex}"
          />
          <span class="result-mark" aria-hidden="true"></span>
        </span>`;
    }
  });

  return `
    <li class="fill-question" data-fill-question="${questionIndex}">
      <div class="question-sentence" lang="en" dir="ltr">${sentence}</div>
      <div class="answer-hint">
        <span>${question.display.map((answer) => escapeHtml(answer)).join(" · ")}</span>
        <small>${escapeHtml(question.note)}</small>
      </div>
    </li>`;
}

function renderEssay(essay, essayIndex) {
  const answer = essay.isQuery
    ? `<pre><code>${escapeHtml(essay.answerEn)}</code></pre>`
    : `<p lang="en" dir="ltr">${escapeHtml(essay.answerEn)}</p>`;

  return `
    <li class="essay-question">
      <div class="essay-heading">
        <span>${String(essayIndex + 1).padStart(2, "0")}</span>
        <div>
          <h4 lang="en" dir="ltr">${escapeHtml(essay.question)}</h4>
          <p>${escapeHtml(essay.guide)}</p>
        </div>
      </div>
      <label class="response-label" for="essay-${essayIndex}">
        <span>YOUR ANSWER · إجابتك</span>
        <output id="count-${essayIndex}">0 كلمة</output>
      </label>
      <textarea
        id="essay-${essayIndex}"
        class="${essay.isQuery ? "query-response" : ""}"
        rows="${essay.isQuery ? 5 : 7}"
        dir="${essay.isQuery ? "ltr" : "auto"}"
        data-word-count="${essayIndex}"
        placeholder="${essay.isQuery ? "db.collection.find({ ... })" : "اكتب إجابتك هنا / Write your answer here…"}"
      ></textarea>
      <div class="model-answer">
        <div class="model-label"><span>MODEL ANSWER</span><small>إجابة نموذجية</small></div>
        ${answer}
        <p>${escapeHtml(essay.answerAr)}</p>
        <ul>${essay.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      </div>
    </li>`;
}

function renderExam(index) {
  const exam = exams[index];
  const durationMinutes = exam.durationMinutes || 25;
  const trueFalse = exam.trueFalse || [];
  const totalBlanks = exam.fills.reduce((sum, question) => sum + question.answers.length, 0);
  const totalObjective = totalBlanks + trueFalse.length;
  const totalQuestions = trueFalse.length + exam.fills.length + exam.essays.length;
  const hasTrueFalse = trueFalse.length > 0;
  const fillRoman = hasTrueFalse ? "II" : "I";
  const essayRoman = hasTrueFalse ? "III" : "II";
  const essayTitle =
    exam.essays.length === 1 && exam.essays[0].isQuery
      ? "MongoDB Code"
      : "Essay & MongoDB Query";

  examPaper.innerHTML = `
    <header class="paper-head">
      <div class="paper-code">
        <small>PROPOSED MIDTERM</small>
        <strong>FORM ${exam.code}</strong>
      </div>
      <div class="paper-title">
        <span>${escapeHtml(exam.focus)}</span>
        <h2 lang="en" dir="ltr">${escapeHtml(exam.label)}</h2>
        <p>${escapeHtml(exam.titleAr)}</p>
      </div>
      <dl class="student-fields">
        <div><dt>الاسم / Name</dt><dd></dd></div>
        <div><dt>ID / الرقم</dt><dd></dd></div>
      </dl>
    </header>

    <section class="instructions">
      <b>${durationMinutes} MIN</b>
      <p>
        ${hasTrueFalse ? "حدّد صحة العبارات، أكمل الفراغات، ثم اكتب كود MongoDB المطلوب." : "أكمل الفراغ بالمصطلح الإنجليزي الأدق، ثم أجب عن الأسئلة المقالية بإيجاز."}
        <span lang="en" dir="ltr">Use precise terms and answer every section.</span>
      </p>
      <span>${totalQuestions} QUESTIONS</span>
    </section>

    ${
      hasTrueFalse
        ? `<section class="exam-section truefalse-section">
      <div class="section-title">
        <span>I</span>
        <div>
          <h3 lang="en" dir="ltr">True or False</h3>
          <p>انتبه للكلمة التي تقلب المعنى: increase / decrease أو up / out</p>
        </div>
        <b>${String(trueFalse.length).padStart(2, "0")} STATEMENTS</b>
      </div>
      <ol class="truefalse-list">${trueFalse.map(renderTrueFalse).join("")}</ol>
    </section>`
        : ""
    }

    <section class="exam-section fill-section">
      <div class="section-title">
        <span>${fillRoman}</span>
        <div>
          <h3 lang="en" dir="ltr">Fill in the blanks</h3>
          <p>أكمل الفراغات — المصطلح الصحيح أهم من طول الإجابة</p>
        </div>
        <b>${String(exam.fills.length).padStart(2, "0")} Q · ${totalBlanks} BLANKS</b>
      </div>
      <ol class="fill-list">${exam.fills.map(renderFill).join("")}</ol>
    </section>

    <section class="exam-section essay-section">
      <div class="section-title">
        <span>${essayRoman}</span>
        <div>
          <h3 lang="en" dir="ltr">${essayTitle}</h3>
          <p>${exam.essays.length === 1 ? "اكتب الاستعلام كاملاً مع الشروط والحقول المطلوبة" : "أسئلة مقالية واستعلام — اكتب النقاط الأساسية بوضوح"}</p>
        </div>
        <b>${String(exam.essays.length).padStart(2, "0")} ${exam.essays.length === 1 ? "QUESTION" : "QUESTIONS"}</b>
      </div>
      <ol class="essay-list">${exam.essays.map(renderEssay).join("")}</ol>
    </section>

    <footer class="paper-footer">
      <span>#البيانات_الضخمة</span>
      <b>راجع مفتاح الإجابة بعد إكمال المحاولة</b>
      <span>FORM ${exam.code}</span>
    </footer>`;

  variantLetter.textContent = exam.code;
  variantLabel.textContent = exam.label;
  scoreTotal.textContent = totalObjective;
  attachWordCounters();
}

function attachWordCounters() {
  document.querySelectorAll("[data-word-count]").forEach((textarea) => {
    const output = document.querySelector(`#count-${textarea.dataset.wordCount}`);
    textarea.addEventListener("input", () => {
      const count = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
      output.textContent = `${count} كلمة`;
    });
  });
}

function gradeFills() {
  const exam = exams[activeExam];
  const inputs = [...examPaper.querySelectorAll(".blank-input")];
  const trueFalseItems = [...examPaper.querySelectorAll(".truefalse-question")];
  let correct = 0;

  inputs.forEach((input) => {
    const questionIndex = Number(input.dataset.question);
    const blankIndex = Number(input.dataset.blank);
    const accepted = exam.fills[questionIndex].answers[blankIndex].map(normalize);
    const isCorrect = accepted.includes(normalize(input.value));
    input.classList.toggle("is-correct", isCorrect);
    input.classList.toggle("is-incorrect", !isCorrect);
    input.setAttribute("aria-invalid", String(!isCorrect));
    input.closest(".blank-wrap").querySelector(".result-mark").textContent = isCorrect ? "✓" : "×";
    if (isCorrect) correct += 1;
  });

  trueFalseItems.forEach((item, questionIndex) => {
    const selected = item.querySelector("input:checked");
    const isCorrect =
      Boolean(selected) && (selected.value === "true") === exam.trueFalse[questionIndex].answer;
    item.classList.toggle("is-correct", isCorrect);
    item.classList.toggle("is-incorrect", !isCorrect);
    item.querySelector(".tf-result").textContent = isCorrect ? "✓" : "×";
    if (isCorrect) correct += 1;
  });

  const totalObjective = inputs.length + trueFalseItems.length;
  scoreValue.textContent = correct;
  scoreCard.hidden = false;
  const ratio = totalObjective ? correct / totalObjective : 0;
  scoreMessage.textContent =
    ratio === 1
      ? "ممتاز — كل الإجابات الموضوعية صحيحة."
      : ratio >= 0.7
        ? "جيد جداً — راجع الإجابات المعلّمة."
        : "أظهر مفتاح الإجابة وراجع الكلمات التي تغيّر معنى العبارة.";
  showStatus(`نتيجتك في التصحيح الآلي: ${correct} من ${totalObjective}`);

  const firstIncorrect = inputs.find((input) => input.classList.contains("is-incorrect"));
  const firstIncorrectTf = trueFalseItems
    .find((item) => item.classList.contains("is-incorrect"))
    ?.querySelector("input");
  if (firstIncorrectTf) firstIncorrectTf.focus();
  else if (firstIncorrect) firstIncorrect.focus();
}

function toggleAnswers() {
  answersVisible = !answersVisible;
  examPaper.classList.toggle("show-answers", answersVisible);
  answersButton.setAttribute("aria-pressed", String(answersVisible));
  answersButton.lastChild.textContent = answersVisible ? " أخفِ مفتاح الإجابة" : " أظهر مفتاح الإجابة";
  showStatus(answersVisible ? "تم إظهار الإجابات النموذجية." : "تم إخفاء الإجابات النموذجية.");
}

function resetTimer() {
  if (timerId) window.clearInterval(timerId);
  timerId = null;
  secondsLeft = (exams[activeExam].durationMinutes || 25) * 60;
  timerButton.textContent = "ابدأ المؤقت";
  timerOutput.classList.remove("time-up");
  updateTimerOutput();
}

function resetAttempt() {
  resetTimer();
  answersVisible = false;
  answersButton.setAttribute("aria-pressed", "false");
  answersButton.lastChild.textContent = " أظهر مفتاح الإجابة";
  scoreCard.hidden = true;
  renderExam(activeExam);
  showStatus("بدأت محاولة جديدة.");
}

function updateTimerOutput() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  timerOutput.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function toggleTimer() {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
    timerButton.textContent = "استئناف المؤقت";
    return;
  }

  if (secondsLeft === 0) resetTimer();
  timerButton.textContent = "إيقاف مؤقت";
  timerId = window.setInterval(() => {
    secondsLeft -= 1;
    updateTimerOutput();
    if (secondsLeft <= 0) {
      window.clearInterval(timerId);
      timerId = null;
      timerOutput.classList.add("time-up");
      timerButton.textContent = "إعادة المؤقت";
      showStatus("انتهى وقت المحاكاة — راجع إجاباتك.");
    }
  }, 1000);
}

function changeExam(index) {
  activeExam = index;
  window.history.replaceState(null, "", `#${exams[index].code}`);
  tabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  resetAttempt();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showStatus(message) {
  statusMessage.textContent = message;
  statusMessage.classList.add("visible");
  window.clearTimeout(showStatus.timeout);
  showStatus.timeout = window.setTimeout(() => statusMessage.classList.remove("visible"), 2800);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => changeExam(index));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowLeft" ? 1 : -1;
    const next = (index + direction + tabs.length) % tabs.length;
    tabs[next].focus();
    changeExam(next);
  });
});

checkButton.addEventListener("click", gradeFills);
answersButton.addEventListener("click", toggleAnswers);
printButton.addEventListener("click", () => window.print());
resetButton.addEventListener("click", resetAttempt);
timerButton.addEventListener("click", toggleTimer);

tabs.forEach((tab, tabIndex) => {
  const selected = tabIndex === activeExam;
  tab.setAttribute("aria-selected", String(selected));
  tab.tabIndex = selected ? 0 : -1;
});
renderExam(activeExam);
