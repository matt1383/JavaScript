/*
====================================
DOM SELECTORS FOR SINGLE ELEMENTS
====================================
*/

// // GET ELEMENT BY ID
// console.log(document.getElementById('task-title'))

// // GET THINGS FROM THE ELEMENT
// console.log(document.getElementById('task-title').id)

// const taskTitle = document.getElementById('task-title')

// // CHANGE STYLING
// taskTitle.style.background = '#333'
// taskTitle.style.color = '#fff'
// taskTitle.style.padding = '5px'

// // CHANGE CONTENT
// taskTitle.textContent = 'Task List'
// taskTitle.innerText = 'My Tasks'
// taskTitle.innerHTML = '<span style="color:red">Task List</span>'

// QUERY SELECTOR
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = 'blue'

document.querySelector('li:last-child').style.color = 'red'
document.querySelector('li:nth-child(3)').style.color = 'yellow'
document.querySelector('li:nth-child(4)').textContent = 'Hello World'
document.querySelector('li:nth-child(odd)').style.background = '#ccc'
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'