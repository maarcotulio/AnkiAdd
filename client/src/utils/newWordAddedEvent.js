export default function (words) {
  const event = new CustomEvent("addwordtolist", {
    detail: {
      words,
    },
  });

  document.dispatchEvent(event);
}
