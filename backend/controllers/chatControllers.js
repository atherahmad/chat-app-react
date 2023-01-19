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
  
  if(req)
    {
      const error = new Error("unable to reach")
      error.status = 501
      error.stack="unable"
      throw error
      
    }
    else res.json("reached")

};
