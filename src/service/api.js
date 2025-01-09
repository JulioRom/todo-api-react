const API_URL = "https://playground.4geeks.com/todo";

export const fetchTasks = async (username) => {
    try {
        const response = await fetch(`${API_URL}/users/${username}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            if (response.status === 404) {
                console.warn(`User ${username} does not exist or has no tasks.`);
                return [];
            }
            throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        return data.todos || []; // Return the todos array from the response
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

export const createUser = async (username) => {
    try {
        const response = await fetch(`${API_URL}/users/${username}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("Failed to create task list");
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating task list:", error);
        throw error;
    }
};

export const createTask = async (username, taskList) => {
    try {
        const response = await fetch(`${API_URL}/todos/${username}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskList),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error("Failed to update tasks");
        }
        console.log("Task created: ",data)
        return data
    } catch (error) {
        console.error("Error updating tasks:", error);
        throw error;
    }
};

export const deleteTask = async (todoId) => {
    try {
        const response = await fetch(`${API_URL}/todos/${todoId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
        console.log("ID deleted: ", todoId)
        const data = response;
        return data
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

export const updateTask = async (todoId, taskList) => {
    try {
        const response = await fetch(`${API_URL}/todos/${todoId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskList),
        });
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
        console.log("ID updated: ", todoId)
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};