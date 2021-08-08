module.exports = {
    // method of operation
    get: {
      tags: ["Task service operations"],
      summary: "Get all tasks",  
      description: "Get a user's task list.", 
      operationId: "getTasks", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      responses: {
        // response code
        200: {
          description: "success", 
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task", // Task schema
              },
            },
          },
        },
      },
    },
  };