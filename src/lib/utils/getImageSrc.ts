export default function getImageSrc(relative: string) {
  if (process?.env?.NODE_ENV === "development") {
    return relative;
  }
  return "https://pgmp.me/polimi-innovation-project-2024-otb" + relative;
}
