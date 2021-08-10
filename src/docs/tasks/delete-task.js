module.exports = {
    // operation's method.
    delete: {
      tags: ["Task service operations"],
      summary: "Delete a task",   
      description: "Deleting a task by Id", 
      operationId: "deleteTask",
      parameters: [
        // expected parameters
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", 
          },
          required: true, // mandatory
          description: "Deleting a task", 
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Task deleted successfully", // response desc
        },
        // response code
        404: {
          description: "Task not found", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };