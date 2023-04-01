const adding = document.querySelector('.add')
const list = document.querySelector('.todos')
const li = document.querySelector('.list-group-item')
const remove = document.querySelector('.delete')
 
const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
  
    // remove filtered class
    Array.from(list.children)
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered'));
  
  };

// Adding new todos using html
adding.addEventListener('submit', (e)=>{
    e.preventDefault();
    const todo= adding.add.value.trim();
    
    if(todo.length){
    
    html=`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML+=html;
    }
    adding.reset();
})



// deleting todos using event delegation i.e adding event listener to ul itself
list.addEventListener('click',(e)=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

// This way only one item gets deleted and we have to add manually event listener to newly added todos so we event delegation as done above
// remove.addEventListener('click', e=>{
//     li.remove();
// })

  search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});