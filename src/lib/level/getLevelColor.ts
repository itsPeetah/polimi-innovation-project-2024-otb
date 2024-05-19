import Level from ".";

export default function getLevelColor(level: Level, color: "bg" | "text") {
  let className = "";
  switch (level) {
    case "bold":
      className = color === "bg" ? "bg-bold-bg" : "text-bold-text";
      break;
    case "fearless":
      className = color === "bg" ? "bg-fearless-bg" : "text-fearless-text";
      break;
    case "dauntless":
      className = color === "bg" ? "bg-dauntless-bg" : "text-dauntless-text";
      break;
    case "intrepid":
      className = color === "bg" ? "bg-intrepid-bg" : "text-intrepid-text";
      break;
  }
  return className;
}
