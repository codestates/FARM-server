module.exports = {
  sendStatAndMsg: (res, status, message) => {
    res.status(status).json({ message });
  },
  sendStatAndData: (res, status, data, message = "ok") => {
    res.status(status).json({ data, message });
  },
};
