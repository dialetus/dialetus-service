var malquias = null;

async function helloHandler(event) {
  if (1) {
    if (2) {
      if (3) {
        if (4) {
          return 'amor';
        }
      }
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  };
}

export { helloHandler };
