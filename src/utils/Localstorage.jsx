
  const employees = [
    {
      "id": 1,
      "name":"mohit",
      "email": "employee1@gmail.com",
      "password": "123",
      "taskCount": [{
      "active": 0,
      "completed": 1,
      "failed": 1,
      "newTask": 1 
    }],
      "tasks": [
        {
          "taskTitle": "Build Login Page",
          "taskDescription": "Create a responsive login page with form validation.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed":false,
          "status": "pending",
          "priority": "high",
          "taskDeadline": "2026-06-20"
        },
        {
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve the mobile menu issue in the navigation bar.",
          "active": false,
          "newTask": false,
          "failed":false,
          "status": "completed",
          "completed":true,
          "priority": "medium",
          "taskDeadline": "2026-06-15"
        },
        {
          "taskTitle": "Update Documentation",
          "taskDescription": "Add API usage details to the project documentation.",
          "active": false,
          "newTask": false,
          "failed": true,
          "completed": false,
          "status": "failed",
          "priority": "low",
          "taskDeadline": "2026-06-10"
        }
      ]
    },
    {
      "id": 2,
      "name":"rohan",
      "email": "employee2@gmail.com",
      "password": "123",
      "taskCount": [{
      "active": 0,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    }],
      "tasks": [
        {
          "taskTitle": "Design Dashboard UI",
          "taskDescription": "Create a modern dashboard interface design.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "status": "pending",
          "priority": "high",
          "taskDeadline": "2026-06-22"
        },
        {
          "taskTitle": "Optimize Images",
          "taskDescription": "Compress website images for faster loading.",
          "active": false,
          "newTask": false,
          "failed":false,
          "completed":true,
          "status": "completed",
          "priority": "medium",
          "taskDeadline": "2026-06-16"
        },
        {
          "taskTitle": "Test Payment System",
          "taskDescription": "Run tests on payment gateway integration.",
          "active": false,
          "newTask": false,
          "completed":false,
          "failed": true,
          "status": "failed",
          "priority": "high",
          "taskDeadline": "2026-06-12"
        },
        {
          "taskTitle": "Create Reports",
          "taskDescription": "Generate weekly performance reports.",
          "active": false,
          "completed": false,
          "failed": false,
          "newTask": true,
          "status": "pending",
          "priority": "low",
          "taskDeadline": "2026-06-25"
        }
      ]
    },
    {
      "id": 3,
      "name":"rahul",
      "email": "employee3@gmail.com",
      "password": "123",
       "taskCount":[ {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }],
      "tasks": [
        {
          "taskTitle": "Setup Database",
          "taskDescription": "Configure database tables and relationships.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "status": "pending",
          "priority": "high",
          "taskDeadline": "2026-06-19"
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review team members' code changes.",
          "active": false,
          "newTask": false,
          "failed": false,
          "completed":true,
          "status": "completed",
          "priority": "medium",
          "taskDeadline": "2026-06-14"
        },
        {
          "taskTitle": "Deploy Application",
          "taskDescription": "Deploy the application to production server.",
          "active": true,
          "completed": false,
          "failed": false,
          "newTask": false,
          "status": "pending",
          "priority": "high",
          "taskDeadline": "2026-06-28"
        }
      ]
    },
    {
      "id": 4,
      "name":"neeraj",
      "email": "employee4@gmail.com",
      "password": "123",
       "taskCount": [{
      "active": 0,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }],
      "tasks": [
        {
          "taskTitle": "Create Landing Page",
          "taskDescription": "Develop the company landing page UI.",
          "active": false,
          "completed": false,
          "failed": false,
          "newTask": true,
          "status": "pending",
          "priority": "medium",
          "taskDeadline": "2026-06-23"
        },
        {
          "taskTitle": "Performance Testing",
          "taskDescription": "Test application speed and optimize performance.",
          "active": false,
          "newTask": false,
          "completed":true,
          "failed":false,
          "status": "completed",
          "priority": "high",
          "taskDeadline": "2026-06-17"
        },
        {
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Add unit tests for important components.",
          "active": false,
          "newTask": false,
          "failed": true,
          "completed":false,
          "status": "failed",
          "priority": "low",
          "taskDeadline": "2026-06-11"
        }
      ]
    },
    {
      "id": 5,
      "name":"shivam",
      "email": "employee5@gmail.com",
      "password": "123",
      "taskCount": [{
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 2
    }],
      "tasks": [
        {
          "taskTitle": "Create API Endpoints",
          "taskDescription": "Develop backend API routes for the application.",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "status": "pending",
          "priority": "high",
          "taskDeadline": "2026-06-26"
        },
        {
          "taskTitle": "Update User Profile",
          "taskDescription": "Add profile editing functionality.",
          "active": false,
          "newTask": false,
          "failed":false,
          "completed":true,
          "status": "completed",
          "priority": "medium",
          "taskDeadline": "2026-06-18"
        },
        {
          "taskTitle": "Security Check",
          "taskDescription": "Review application security vulnerabilities.",
          "active": false,
          "newTask": false,
          "completed":false,
          "failed": true,
          "status": "failed",
          "priority": "high",
          "taskDeadline": "2026-06-13"
        },
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create project presentation slides.",
          "active": false,
          "completed": false,
          "failed": false,
          "newTask": true,
          "status": "pending",
          "priority": "low",
          "taskDeadline": "2026-06-30"
        },
        {
          "taskTitle": "Fix UI Issues",
          "taskDescription": "Resolve reported interface problems.",
          "active": true,
          "completed": false,
          "failed": false,
          "newTask": false,
          "status": "pending",
          "priority": "medium",
          "taskDeadline": "2026-06-21"
        }
      ]
    }
  ];

 const admin = [
    {
    "id": 101,
    "name":"Garima",
    "email": "admin@gmail.com",
    "password": "123"
    }
]

export const setLocalStorage =() =>{
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  
  return {employees,admin}
}

