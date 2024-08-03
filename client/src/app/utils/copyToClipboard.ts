 const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert(`copied ${text}`);
  } catch (err) {
    console.error("Error copying to clipboard:", err);
  }
};
export default copyToClipboard
