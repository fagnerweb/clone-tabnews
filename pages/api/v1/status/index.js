function status(req, res) {
  return res.status(200).json({
    message: "Primeiro endpoint /status",
  });
}

export default status;
