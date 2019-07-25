import thumbnail from "./thumbnail.png";

export default {
  title: "PIN Racer",
  tagline:
    "Local Multiplayer Hoverboard Racing Game played with Wii Balance Boards.",
  thumbnail: thumbnail,
  trailer: "https://www.youtube.com/embed/BFd97kR96Co",
  getContent: () => import("./content.mdx")
};
