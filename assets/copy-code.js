const files = [
  { label: "GUIで作るDB", path: "./index.html", lang: "setup" },
  { label: "HTMLに追加", path: "./index.html", lang: "html" },
  { label: "style.cssに追加", path: "./style.css", lang: "css" },
  { label: "script.jsを作成", path: "./script.js", lang: "js" },
];

const getHtmlToAdd = (code) => {
  const match = code.match(/<section class="demo">[\s\S]*?\n\s*<section data-code-viewer><\/section>/);
  const html = match ? match[0].replace(/\n\s*<section data-code-viewer><\/section>/, "") : "";

  return `<!-- 表示したい場所に追加 -->\n${html.trim()}\n\n<!-- bodyの閉じタグ直前に追加 -->\n<script src="./script.js"></script>`;
};

const getDbSetup = () => {
  const setup = document.querySelector("[data-db-setup]");
  if (!setup) return "";

  const items = [...setup.querySelectorAll("li")].map((item, index) => `${index + 1}. ${item.textContent.trim()}`);
  return items.join("\n");
};

const getCssToAdd = (code) => {
  const css = code.replace(/@import url\("\.\.\/\.\.\/assets\/sample-layout\.css"\);\n*/g, "").trim();
  return css || "/* 追加CSSなし */";
};

const formatCode = (file, code) => {
  if (file.lang === "setup") return getDbSetup();
  if (file.lang === "html") return getHtmlToAdd(code);
  if (file.lang === "css") return getCssToAdd(code);
  return code.trim();
};

const copyText = async (text) => {
  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy();
    }
  } catch {
    fallbackCopy();
  }
};

document.querySelectorAll("[data-code-viewer]").forEach((viewer) => {
  viewer.className = "code-section";
  viewer.innerHTML = `
    <h2>追加するコード</h2>
    <p class="code-note">テンプレートのHTML/CSSに足す部分と、新しく作るscript.jsだけを表示しています。</p>
  `;

  files.forEach((file) => {
    if (file.lang === "setup" && !document.querySelector("[data-db-setup]")) return;

    const id = `code-${file.lang}`;
    const block = document.createElement("div");
    block.className = "code-block";
    block.innerHTML = `
      <div class="code-head">
        <h2>${file.label}</h2>
        <button class="copy-button" type="button" data-copy-code="#${id}">Copy</button>
      </div>
      <div class="code-box">
        <pre><code id="${id}"></code></pre>
      </div>
    `;
    viewer.append(block);

    fetch(file.path)
      .then((response) => response.text())
      .then((code) => {
        block.querySelector("code").textContent = formatCode(file, code);
      })
      .catch(() => {
        block.querySelector("code").textContent = "コード表示にはローカルサーバーで開いてください。";
      });
  });
});

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-code]");
  if (!button) return;

  const target = document.querySelector(button.dataset.copyCode);
  if (!target) return;

  await copyText(target.textContent);
  button.textContent = "Copied";

  setTimeout(() => {
    button.textContent = "Copy";
  }, 1200);
});
