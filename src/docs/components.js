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
                description: "Creation date time of a task ( system generated )",
                example: "2021-08-07T1:02:52+08:00",
            },
            userId: {
              type: "string", 
              description: "logged in user's id to manage the tasks", 
              example: "105678", 
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

        // Common response object
        CommonResponse: {
            type: "object", 
            properties: {
                result: {
                    type: "object", 
                    description: "This will have the fileds as per the called api", 
                    example: "one task details or arrry of all user's task...",
                },
                _status: {
                    type: "object", 
                    description: "This will show the api specific response code and message", 
                    example: "{ code: 8001, message: 'Task added successfully}",
                },
            },
        },

        },
      },
    };