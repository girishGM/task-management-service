module.exports = {
    components: {
      schemas: {
        // task object
        Task: {
          type: "object", 
          properties: {
            id: {
                type: "string", 
                description: "Task identification number ( system generated )", 
                example: "yrvops", 
            },
            timestamp: {
                type: "Date", 
                description: "creation date time of a task ( system generated )",
                example: "2021-08-07T1:02:52+08:00",
            },
            title: {
                type: "string", 
                description: "Task's title",
                example: "TDCX-assessment", 
            },
            description: {
                type: "string", 
                description: "Task's description",
                example: "Online assessment need to completed before 9th Aug 2021",
            },
            completed: {
              type: "boolean",
              description: "The status of the task",
              example: false,
            },
          },
        },

        // Task request object
        TaskRequest: {
            type: "object", 
            properties: {
                title: {
                    type: "string", 
                    description: "Task's title", 
                    example: "TDCX - assessment",
                },
                completed: {
                    type: "boolean", 
                    description: "The status of the task", 
                    example: false,
                },
            },
        },


                // Task request object
        DashboardResponse: {
            type: "object", 
            properties: {
                totalTasks: {
                    type: "number", 
                    description: "Total number of task of a user", 
                    example: "15",
                },
                completedTasks: {
                    type: "number", 
                    description: "Total number of completed task of a user", 
                    example: "8",
                },
            },
        },

        // Error object
        Error: {
            type: "object", 
            properties: {
              message: {
                type: "string", 
                description: "Error message", 
                example: "Not found", 
              },
              internal_code: {
                type: "string", 
                description: "Error internal code", 
                example: "Invalid parameters", 
              },
            },
          },
        },
      },
    };