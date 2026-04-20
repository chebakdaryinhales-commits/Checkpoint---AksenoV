let taskIdCounter = 1;

const createTask = (description, tags = []) => ({
    id: taskIdCounter++,
    description,
    completed: false,
    tags: [...new Set(tags)]
});

const addTask = (tasks, task) => [...tasks, task];

const addTagToTask = (tasks, taskId, tag) => {
    return tasks.map(task => {
    if (task.id === taskId && !task.tags.includes(tag)) {
        return { ...task, tags: [...task.tags, tag] };
    }
    return task;
    });
};

const removeTagFromTask = (tasks, taskId, tag) => {
    return tasks.map(task => {
    if (task.id === taskId) {
        return { ...task, tags: task.tags.filter(t => t !== tag) };
    }
    return task;
    });
};


const markTaskCompleted = (tasks, taskId) => {
    return tasks.map(task => 
    task.id === taskId ? { ...task, completed: true } : task
    );
};

const filterTasksByTags = (tasks, filterTags) => {
    if (!filterTags || (Array.isArray(filterTags) && filterTags.length === 0)) {
    return tasks;
    }
    const searchTags = Array.isArray(filterTags) ? filterTags : [filterTags];
    return tasks.filter(task => 
    searchTags.every(tag => task.tags.includes(tag))
    );
};

let myTasks = [];
const task1 = createTask('продать младшего брата за бравлпас', ['шопинг', 'сеиья']);
const task2 = createTask('Скрючить важную рожу', ['работа', 'js']);

myTasks = addTask(myTasks, task1);
myTasks = addTask(myTasks, task2);

myTasks = addTagToTask(myTasks, 1, 'срочно');

myTasks = markTaskCompleted(myTasks, 2);

const workTasks = filterTasksByTags(myTasks, ['работа']);
const urgentTasks = filterTasksByTags(myTasks, 'срочно');

console.log('Весь список:', myTasks);
console.log('Только работа:', workTasks);