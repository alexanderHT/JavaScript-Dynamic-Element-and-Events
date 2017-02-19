var count = 1;

/* jquery ui to make drag and drop */
$(function(){
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
});

/* add to do list */
function addToDo(){
  // add a valdation is empty
  if ($('#todo-input').val()) {
    // get user input and assign it into variable data
    let data = $('#todo-input').val();

    //  generate input from user into to do list
    $('#sortable').prepend(`
      <div class="col s12" id="item${count}">
        <h5 class="item z-depth-4 center" id="${count}" >
          <i id="text-value-${count}">${data}</i>
          <a><i class="material-icons blue-text right" onclick="check('${count}')">done</i></a>
          <a><i class="material-icons blue-text right" onclick="deleteItem('item${count}')">delete</i></a>
          <a><i class="material-icons blue-text right" onclick="preEdit(${count})">mode_edit</i></a>
        </h5>
      </div>`);

    // clear input
    $('#todo-input').val('');

    // increment the id
    count++
  }else{
    alert('please fill the from to do fisrt')
  }
}

/* check to do list if it alrady done */
function check(input){
  $(`#text-value-${input}`).css( "text-decoration", "line-through" );
}

/* show a input to make change */
function preEdit(input){
  let data = $(`#text-value-${input}`).html()
  // chnage the text inside item into from input
  $(`#${input}`).html(`
    <div id="edit${input}">
      <input id="edit-text-${input}" type="text" class="validate" value="${data}" required>
      <a class="waves-effect waves-light btn" onclick="edit('${input}')">Change</a>
    </div>
    `)
}

/* change the to do list text */
function edit(input){
  let data = $(`#edit-text-${input}`).val()
  console.log(data);
  // remove the edit form
  $(`#edit${input}`).remove()

  // remove every thing inside the item
  $(`#${input}`).remove()

  // add edited input to the item again
  $(`#item${input}`).append(`
    <h5 class="item z-depth-4 center" id="${input}">
      <i id="text-value-${input}">${data}</i>
      <a><i class="material-icons blue-text right" onclick="check('${input}')">done</i></a>
      <a><i class="material-icons blue-text right" onclick="deleteItem('item${input}')">delete</i></a>
      <a><i class="material-icons blue-text right" onclick="preEdit(${input})">mode_edit</i></a>
    </h5>
  `)

}

function deleteItem(item){
  console.log(item);
  $(`#${item}`).remove()
}
