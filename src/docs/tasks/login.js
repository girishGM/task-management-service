
module.exports = {
    // operation's method
    post: {
      tags: ["Task service operations"], 
      summary: "Login api", 
      description: "Login api is giving the token as per user id", 
      operationId: "login", 
      parameters: [],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginRequest", 
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "Login successful", 
        },
        // response code
        400: {
          description: "Invalid parameters / User id's lenght is more than 10",
        },
      },
    },
  };