module.exports = {
    // operation's method
    get: {
      tags: ["Task service operations"],
      summary: "Get a task",  
      description: "Get a specific task as per request", 
      operationId: "getTask", // unique operation id
      parameters: [
        // expected params.
        {
          name: "id", // name of the param
          in: "path", // location of the param
          schema: {
            $ref: "#/components/schemas/id", // data model of the param
          },
          required: true, // Mandatory param
          description: "A single task id", // param desc.
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "success",
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Tasks",
              },
            },
          },
        },
        // response code
        404: {
          description: "Task not found",
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  };