const { Schema, model, models, default: mongoose } = require("mongoose");

const ShortLinkSchema = new Schema({
  originUrl: {type: String, required: true },
  shortId: {type: String, required: true}
});

export const ShortLink = models?.ShortLink || model("ShortLink", ShortLinkSchema);
