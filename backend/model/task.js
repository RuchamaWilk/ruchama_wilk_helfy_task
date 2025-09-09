const tasks = [
    {
        id: generateRandomId(),
        title: "ללמוד React",
        description: "לתרגל קומפוננטות ו־JSX",
        completed: false,
        createdAt: new Date().toLocaleDateString(),
        priority: "high"
    },
    {
        id: generateRandomId(),
        title: "לסיים תרגיל בית",
        description: "לבדוק שה־backend מחזיר Tasks נכון",
        completed: false,
        createdAt: new Date().toLocaleDateString(),
        priority: "medium"
    },
    {
        id: generateRandomId(),
        title: "לקרוא מסמך פרויקט",
        description: "לקרוא את ההגדרות והדרישות למודל Tasks",
        completed: true,
        createdAt: new Date().toLocaleDateString(),
        priority: "low"
    },
    {
        id: generateRandomId(),
        title: "להתנסות ב־fetch API",
        description: "לשלוח GET ו־POST כדי לבדוק אינטגרציה עם frontend",
        completed: false,
        createdAt: new Date().toLocaleDateString(),
        priority: "medium"
    }
];

function createTask({ title, description, priority }) {
  const newTask = {
    id: generateRandomId(),               
    title: title ,   
    description: description, 
    completed: "false",         
    createdAt: new Date().toLocaleDateString(),        
    priority: priority            
  };
  
  tasks.push(newTask);
  return newTask;
}

function generateRandomId() {
    return Math.floor(100000 + Math.random() * 900000);
}

function getTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find(t => t.id === id);
}

function updateTask(id, updates) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    Object.assign(task, updates);
  }
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    return tasks.splice(index, 1)[0];
  }
  return null;
}

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
