module.exports = {
    // method of operation
    get: {
      tags: ["Task service operations"],
      summary: "Get dashboard data",  
      description: "Get all data ( total task, completed task, task list ) to present on the dashboard", 
      operationId: "getDashboard", // unique operation id.
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
                $ref: "#/components/schemas/DashboardResponse", // Dashboard response object
              },
            },
          },
        },
      },
    },
  };