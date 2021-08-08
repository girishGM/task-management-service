
module.exports = {
    // operation's method
    post: {
      tags: ["Task service operations"], 
      summary: "Add a task", 
      description: "Add a new task to the user's task list", 
      operationId: "postTask", 
      parameters: [],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/TaskRequest", 
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Task created successfully", 
        },
        // response code
        500: {
          description: "Server error",
        },
      },
    },
  };