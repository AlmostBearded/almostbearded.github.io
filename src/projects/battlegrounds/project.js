import thumbnail from "./thumbnail.png";

export default {
  title: "paysafecard Battlegrounds",
  tagline: "A local multiplayer battle royale game based on Pacman.",
  thumbnail: thumbnail,
  getContent: () => import("./content.mdx")
};
