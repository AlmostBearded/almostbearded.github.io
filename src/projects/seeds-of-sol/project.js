import thumbnail from "./thumbnail.png";

export default {
  title: "Seeds of Sol",
  tagline:
    "An twin-stick shooter action roguelike featuring a multi-personality AI companion.",
  thumbnail: thumbnail,
  getContent: () => import("./content.mdx")
};
