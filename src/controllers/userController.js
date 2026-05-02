const me = async (req, res) => {
  return res.status(200).json({
    message: "Protected route reached.",
    userId: req.userId
  });
};

module.exports = {
  me
};
