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
  try{
    const error = new Error("unable to reach")
    throw error
  }
    catch(err){
      err.status= 401
      next(err)
    }
};
