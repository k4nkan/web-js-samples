const viewCount = document.querySelector("#viewCount");
const message = document.querySelector("#message");

async function addViewCount() {
  const views = await getViews();

  if (views.length === 0) {
    message.textContent = "GUIで「閲覧者数」に1行追加してください。";
    return;
  }

  views[0].count += 1;
  await patchView(0, views[0]);

  viewCount.textContent = `${views[0].count} views`;
}

addViewCount();
