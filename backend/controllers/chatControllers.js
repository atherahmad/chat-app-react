export const allChats = (req, res, next) => {
  res.status(200).json({
    chats: [
      {
        _id: "lkjsdlkfjlkdsajölkfdsaölkfj",
        message: "Test",
        senderName: "Ath",
      },
      {
        _id: "lkjsdlkfjalkdsajölkfdsaölkfj",
        message: "Test",
        senderName: "Ahmad",
      },
    ],
  });
};

export const singleChat = (req, res, next) => {
  res.status(200).json({ chat: req.params.chatId });
};
