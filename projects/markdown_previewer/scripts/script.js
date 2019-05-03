const editorInput = document.querySelector("#editor");
const preview = document.querySelector("#preview");

function handleEditorInput(e) {
  preview.innerHTML = marked(e.target.value);
}

editorInput.oninput = handleEditorInput;

const expandEditorIcon = document.querySelector("#expandEditorIcon");
const editorWrap = document.querySelector("#editorWrap");
const previewWrap = document.querySelector("#previewWrap");

expandEditorIcon.onclick = function() {
  editorWrap.classList.toggle("clicked");
  previewWrap.classList.toggle("hidden");
  expandEditorIcon.classList.toggle("fa-arrows-alt");
  expandEditorIcon.classList.toggle("fa-compress-arrows-alt");
};

expandPreviewerIcon.onclick = function() {
  previewWrap.classList.toggle("clicked");
  editorWrap.classList.toggle("hidden");
  expandPreviewerIcon.classList.toggle("fa-arrows-alt");
  expandPreviewerIcon.classList.toggle("fa-compress-arrows-alt");
};

window.onload = () => {
  preview.innerHTML = marked(document.getElementById("editor").textContent);
};
