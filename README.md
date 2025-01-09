# To-do List App

This is a task management app built in React, which syncs in real-time with a REST API. It allows you to dynamically add, view, update, and delete tasks.

## Features

- **Add Tasks**: Create new tasks and automatically sync them with the backend.
- **Update Tasks**: Change the status of a task between completed and pending.
- **Delete Tasks**: Delete individual tasks or clear the entire list.
- **Real-Time Sync**: Keeps tasks in sync with the API.
- **Modern Interface**: Uses Bootstrap for a clean, responsive design.

## Installation

Follow these steps to run the project on your local machine:

1. Clone the repository:
```tap
git clone https://github.com/JulioRom/todo-api-react
```

2. Navigate to the project directory:
```tap
cd todo-api-react
```

3. Install the dependencies:
```tap
npm install
```

4. Start the development server:
```tap
npm run developer
```

5. Open your browser to `http://localhost:3000` to see the application in action.

##API Configuration

The application is configured to interact with the REST API provided at `https://playground.4geeks.com/todo`. Make sure that the API is working properly so that the application can sync data.

## Project Structure

```plain text
src/
├── components/
│ ├── InputField.jsx # Component for adding new tasks
│ ├── TaskItem.jsx # Component for each individual task
│ ├── TaskList.jsx # Component for the task list
│ └── Todo.jsx # Main component of the application
├── service/
│ └── api.js # Functions to interact with the API
├── styles/
│ └── index.css # Custom styles
└── main.jsx # Main configuration
```

## Usage

### Add a Task
1. Type a task in the input field.
2. Press `Enter` to add it to the list and sync it with the API.

### Update a Task
1. Click the button to toggle the task status between “Completed” and “Pending”.

### Delete a Task
1. Click the delete button (`✖`) to delete a specific task.

### Clear All Tasks
1. Press the `Clear All Tasks` button to delete all tasks.

## Technologies Used

- **React**: To build the user interface.
- **Bootstrap**: For styling and responsive design.
- **REST API**: For real-time data sync.

## Upcoming Enhancements

- **Filters**: Add options to filter completed and pending tasks.
- **Authentication**: Incorporate user authentication.
- **Notifications**: Show alerts upon completion such as adding actions or deleting tasks.

## Author

- **Developed by JulioRom**
- **Contact:** [julioandrescampos@gmail.com](email to:julioandrescampos@gmail.com)
- **GitHub:** [https://github.com/JulioRom](https://github.com/JulioRom)

## License

This project is under the MIT License. You can consult the LICENSE file for more details.