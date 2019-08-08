import thumbnail from "./thumbnail.png";

export default {
  title: "Seeds of Sol",
  tagline:
    "A twin-stick shooter action roguelike featuring a multi-personality AI companion.",
  thumbnail: thumbnail,
  getContent: () => import("./content.mdx")
};
