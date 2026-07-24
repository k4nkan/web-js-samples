{
  const likeButton = document.querySelector("#likeButton");
  const message = document.querySelector("#message");

  async function renderLike() {
    const likes = await getLikes();

    if (likes.length === 0) {
      message.textContent = "GUIで「いいね機能」に1行追加してください。";
      return;
    }

    likeButton.textContent = `Like ${likes[0].count}`;
  }

  likeButton.addEventListener("click", async () => {
    const likes = await getLikes();
    if (likes.length === 0) return;

    likes[0].count += 1;
    await patchLike(0, likes[0]);
    await renderLike();
  });

  renderLike();
}
