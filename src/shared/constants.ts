export const colors = [
  "RED",
  "PINK",
  "PURPLE",
  "DEEPPURPLE",
  "INDIGO",
  "BLUE",
  "LIGHTBLUE",
  "CYAN",
  "TEAL",
  "GREEN",
  "LIGHTGREEN",
  "LIME",
  "YELLOW",
  "AMBER",
  "ORANGE",
  "DEEPORANGE",
  "BROWN",
  "GREY",
] as const;

export const toolbarOptionsDesktop = {
  options: [
    // "fontFamily",
    // "fontSize",
    "inline",
    // "blockType",
    "list",
    "textAlign",
    "colorPicker",
    "link",
    // "embedded",
    "emoji",
    "image",
    // "remove",
    "history",
  ],
  inline: {
    options: ["bold", "italic", "underline", "strikethrough", "monospace"],
  },
  list: {
    options: ["unordered", "ordered"],
  },
  textAlign: {
    inDropdown: true,
  },
  link: {
    inDropdown: true,
  },
};

export const toolbarOptionsMobile = {
  options: [
    // "fontFamily",
    // "fontSize",
    "inline",
    // "blockType",
    "list",
    "textAlign",
    "colorPicker",
    "link",
    // "embedded",
    "emoji",
    "image",
    // "remove",
    "history",
  ],
  inline: {
    options: ["bold", "italic", "underline", "strikethrough", "monospace"],
    inDropdown: true,
  },
  list: {
    options: ["unordered", "ordered"],
    inDropdown: true,
  },
  textAlign: {
    inDropdown: true,
  },
  link: {
    inDropdown: true,
  },
};
