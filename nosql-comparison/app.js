const scenarios = {
  cache: {
    type: "KEY–VALUE",
    reason:
      "التطبيق يعرف المفتاح مسبقاً مثل session ID، ويحتاج إجابة سريعة جداً دون استعلام داخل القيمة أو علاقات معقدة.",
    memory: "Known key → direct value",
  },
  catalog: {
    type: "DOCUMENT",
    reason:
      "كل منتج كائن متكامل شبيه بـJSON، والحقول قد تختلف أو تتطور، مع الحاجة إلى البحث داخل name وprice وcategory.",
    memory: "One product → one flexible document",
  },
  clickstream: {
    type: "COLUMN-FAMILY",
    reason:
      "أحداث النقر كثيرة جداً ومتتابعة زمنياً، ومسار القراءة معروف مسبقاً؛ وهذا يلائم الكتابة الموزعة والتوسع الأفقي.",
    memory: "Huge writes → known query path",
  },
  friends: {
    type: "GRAPH",
    reason:
      "الإجابة ليست داخل سجل واحد؛ بل في المسار بين المستخدمين. الرسم يخزّن العلاقة نفسها كجزء أساسي من البيانات.",
    memory: "The path is the answer",
  },
};

const answer = document.querySelector("#decisionAnswer");
const buttons = [...document.querySelectorAll("[data-scenario]")];

function showScenario(name) {
  const scenario = scenarios[name];
  answer.innerHTML = `
    <small>BEST MATCH · الاختيار الأنسب</small>
    <h3>${scenario.type}</h3>
    <p>${scenario.reason}</p>
    <code dir="ltr">${scenario.memory}</code>`;

  buttons.forEach((button) => {
    const selected = button.dataset.scenario === name;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showScenario(button.dataset.scenario));
});

document.querySelector("#printButton").addEventListener("click", () => window.print());

showScenario("cache");
