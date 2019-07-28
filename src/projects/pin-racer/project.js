import thumbnail from "./thumbnail.png";

export default {
  title: "PIN Racer",
  tagline:
    "A local multiplayer hoverboard racing game played with Wii Balance Boards.",
  thumbnail: thumbnail,
  getContent: () => import("./content.mdx")
};
