{
  const imageFile = document.querySelector("#imageFile");
  const previewImage = document.querySelector("#previewImage");
  const fileName = document.querySelector("#fileName");
  let currentUrl = "";

  imageFile.addEventListener("change", () => {
    const file = imageFile.files[0];
    if (!file) return;

    if (currentUrl) URL.revokeObjectURL(currentUrl);

    currentUrl = URL.createObjectURL(file);
    previewImage.src = currentUrl;
    previewImage.hidden = false;
    fileName.textContent = file.name;
  });
}
