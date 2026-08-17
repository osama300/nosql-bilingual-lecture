const collections = {
  products: {
    fields: ["price", "name", "category", "stock"],
    docs: [
      { _id: 1, name: "Keyboard", price: 75, category: "Electronics", stock: 14 },
      { _id: 2, name: "Notebook", price: 12, category: "Stationery", stock: 42 },
      { _id: 3, name: "Headphones", price: 120, category: "Electronics", stock: 8 },
      { _id: 4, name: "Desk Lamp", price: 48, category: "Home", stock: 11 },
      { _id: 5, name: "Monitor", price: 200, category: "Electronics", stock: 5 }
    ]
  },
  users: {
    fields: ["age", "name", "status"],
    docs: [
      { _id: 1, name: "Lina", age: 18, status: "active" },
      { _id: 2, name: "Omar", age: 28, status: "active" },
      { _id: 3, name: "Sara", age: 21, status: "pending" },
      { _id: 4, name: "Ali", age: 38, status: "blocked" },
      { _id: 5, name: "Noor", age: 31, status: "active" }
    ]
  }
};

const presets = {
  exam: {
    collection: "products",
    field: "price",
    operator: "$gt",
    value: "50",
    projection: "main",
    sort: "none"
  },
  lecture: {
    collection: "users",
    field: "age",
    operator: "$gt",
    value: "18",
    projection: "all",
    sort: "asc"
  },
  category: {
    collection: "products",
    field: "category",
    operator: "equals",
    value: "Electronics",
    projection: "all",
    sort: "desc",
    sortField: "price"
  }
};

const ui = {
  form: document.querySelector("#queryForm"),
  collection: document.querySelector("#collectionSelect"),
  field: document.querySelector("#fieldSelect"),
  operator: document.querySelector("#operatorSelect"),
  value: document.querySelector("#valueInput"),
  projection: document.querySelector("#projectionSelect"),
  sort: document.querySelector("#sortSelect"),
  query: document.querySelector("#generatedQuery"),
  results: document.querySelector("#documentResults"),
  count: document.querySelector("#resultCount"),
  copy: document.querySelector("#copyGenerated"),
  toast: document.querySelector("#toast")
};

let selectedSortField = null;

function valueForQuery(rawValue) {
  const trimmed = rawValue.trim();
  if (trimmed !== "" && Number.isFinite(Number(trimmed))) return Number(trimmed);
  return trimmed;
}

function formatValue(value) {
  return typeof value === "number" ? String(value) : `"${String(value).replaceAll('"', '\\"')}"`;
}

function updateFields(preferredField) {
  const fields = collections[ui.collection.value].fields;
  ui.field.innerHTML = fields
    .map((field) => `<option value="${field}">${field}</option>`)
    .join("");
  ui.field.value = fields.includes(preferredField) ? preferredField : fields[0];
}

function makeQuery() {
  const collection = ui.collection.value;
  const field = ui.field.value;
  const operator = ui.operator.value;
  const value = valueForQuery(ui.value.value);
  const formatted = formatValue(value);
  const condition =
    operator === "equals"
      ? `${field}: ${formatted}`
      : `${field}: { ${operator}: ${formatted} }`;

  let projection = "";
  if (ui.projection.value === "main") {
    const mainField = collection === "products" ? "name" : "name";
    projection = `,\n  { ${mainField}: 1, ${field}: 1, _id: 0 }`;
  }

  const sortField = selectedSortField || field;
  const sort =
    ui.sort.value === "none"
      ? ""
      : `.sort({ ${sortField}: ${ui.sort.value === "asc" ? 1 : -1} })`;

  return `db.${collection}.find(\n  { ${condition} }${projection}\n)${sort}`;
}

function matches(document, field, operator, expected) {
  const actual = document[field];
  switch (operator) {
    case "$gt":
      return actual > expected;
    case "$gte":
      return actual >= expected;
    case "$lt":
      return actual < expected;
    case "$lte":
      return actual <= expected;
    case "$ne":
      return actual !== expected;
    default:
      return String(actual).toLowerCase() === String(expected).toLowerCase();
  }
}

function project(document, field) {
  if (ui.projection.value === "all") return document;
  return { name: document.name, [field]: document[field] };
}

function render() {
  const collection = ui.collection.value;
  const field = ui.field.value;
  const operator = ui.operator.value;
  const expected = valueForQuery(ui.value.value);
  const sortField = selectedSortField || field;
  const direction = ui.sort.value === "desc" ? -1 : 1;

  let results = collections[collection].docs.filter((document) =>
    matches(document, field, operator, expected)
  );

  if (ui.sort.value !== "none") {
    results = [...results].sort((left, right) => {
      if (left[sortField] === right[sortField]) return 0;
      return left[sortField] > right[sortField] ? direction : -direction;
    });
  }

  ui.query.textContent = makeQuery();
  ui.count.textContent = `${results.length} document${results.length === 1 ? "" : "s"}`;
  ui.results.innerHTML = results.length
    ? results
        .map((document) => `<pre class="document-result">${JSON.stringify(project(document, field), null, 2)}</pre>`)
        .join("")
    : '<p class="empty-result">لا توجد وثائق مطابقة — غيّر الشرط أو القيمة.</p>';
}

function applyPreset(name) {
  const preset = presets[name];
  ui.collection.value = preset.collection;
  updateFields(preset.field);
  ui.operator.value = preset.operator;
  ui.value.value = preset.value;
  ui.projection.value = preset.projection;
  ui.sort.value = preset.sort;
  selectedSortField = preset.sortField || null;
  render();
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("تم نسخ الاستعلام.");
  } catch {
    showToast("حدّد الاستعلام وانسخه يدوياً.");
  }
}

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => ui.toast.classList.remove("visible"), 2200);
}

ui.form.addEventListener("input", () => {
  selectedSortField = null;
  render();
});

ui.collection.addEventListener("change", () => {
  updateFields();
  selectedSortField = null;
  render();
});

document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => applyPreset(button.dataset.preset));
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyText(button.dataset.copy));
});

ui.copy.addEventListener("click", () => copyText(ui.query.textContent));

document.querySelectorAll(".micro-question").forEach((question) => {
  const select = question.querySelector("select");
  const output = question.querySelector("output");
  select.addEventListener("change", () => {
    const correct = select.value === question.dataset.answer;
    question.classList.toggle("correct", correct);
    question.classList.toggle("incorrect", Boolean(select.value) && !correct);
    output.textContent = !select.value ? "" : correct ? "صحيح ✓" : "راجع المعنى ×";
  });
});

updateFields("price");
render();
