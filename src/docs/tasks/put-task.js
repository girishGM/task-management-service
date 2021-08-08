module.exports = {
    // operation's method
    put: {
      tags: ["Task service operations"],
      summary: "Edit a task",  
      description: "Edit a task by Id, use this to mark completed or update the task title.", 
      operationId: "putTask", // unique operation id
      parameters: [
        // expected params
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", // id model
          },
          required: true, // mandatory
          description: "Id of task to be updated",
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Task updated successfully", // response desc.
        },
        // response code
        404: {
          description: "Task not found", // response desc.
        },
        // response code
        500: {
          description: "Server error", // response desc.
        },
      },
    },
  };