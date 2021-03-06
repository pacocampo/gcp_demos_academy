function handleGET (req, res) {
    // Do something with the GET request
    res.status(200).send('Hello World!');
  }
  
function handlePUT (req, res) {
    // Do something with the PUT request
    res.status(403).send('Forbidden!');
  }
  
  /**
   * Responds to a GET request with "Hello World!". Forbids a PUT request.
   *
   * @example
   * gcloud alpha functions call helloHttp
   *
   * @param {Object} req Cloud Function request context.
   * @param {Object} res Cloud Function response context.
   */
  exports.helloHttp = (req, res) => {
    switch (req.method) {
      case 'GET':
        handleGET(req, res);
        break;
      case 'PUT':
        handlePUT(req, res);
        break;
      case 'POST':
        res.status(200).send({"data": req})
      default:
        res.status(500).send({ error: 'Something blew up!' });
        break;
    }
  };