module.exports = {
  info: (req, res) => {
    const id = req.params.farmid;
    res.send("id is..." + id);
  },
  create: (req, res) => {},
  assign: (req, res) => {},
  harvest: (req, res) => {},
};
