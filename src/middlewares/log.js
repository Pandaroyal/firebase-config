module.exports = (req, res, next) => {
  const start = new Date();

  // Log request info before processing
  console.log(`[${start?.toISOString()}] ${req?.method} ${req?.originalUrl}`);
  if ( req?.body && Object.keys(req?.body).length) {
    console.log("Payload:", req.body);
  }

  // Hook into the response `finish` event
  res.on("finish", () => {
    const end = new Date();
    const duration = end - start;
    console.log(`[${end.toISOString()}] Response sent for ${req.method} ${req.originalUrl} in ${duration}ms\n`);
  });

  next();
};

  