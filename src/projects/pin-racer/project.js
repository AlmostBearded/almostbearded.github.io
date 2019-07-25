import thumbnail from "./thumbnail.png";

export default {
  title: "PIN Racer",
  tagline:
    "Local Multiplayer Hoverboard Racing Game played with Wii Balance Boards.",
  thumbnail: thumbnail,
  getContent: () => import("./content.mdx")
};
