class response {
  async success(res, message, data) {
    res.status(200).json({
      message,
      variant: "success",
      innerData: data,
    });
  }

  async created(res, message) {
    res.status(201).json({
      message,
      variant: "success",
    });
  }

  async notFound(res, message) {
    res.status(404).json({
      message,
      variant: "warning",
    });
  }

  async badRequest(res, message) {
    res.status(400).json({
      message,
      variant: "warning",
    });
  }

  async unauthorized(res, message = null) {
    res.status(401).json({
      message: message || "Unauthorized access!",
      variant: "warning",
    });
  }

  async forbidden(res) {
    res.status(403).json({
      message: "Forbidden access!",
      variant: "warning",
    });
  }

  async serverError(res, err) {
    res.status(500).json({
      message: "Internal server error!",
      variant: "error",
      error: err,
    });
  }
}

module.exports = new response();
