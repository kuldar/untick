function unverifyTwitter(event) {
  const ignoredTags = ["SCRIPT", "IMG", "META", "LINK", "TITLE"];
  const checkmarkTag = '[aria-label="Verified account"]';

  if (event?.target?.tagName && !ignoredTags.includes(event?.target?.tagName)) {
    let checkmarks = event.target.querySelectorAll(checkmarkTag);
    if (checkmarks.length != 0) {
      checkmarks.forEach((check) => check.remove());
    }
  }
}

document.addEventListener("DOMNodeInserted", unverifyTwitter);
