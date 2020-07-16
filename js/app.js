$("#sub").click(function(e){
    e.preventDefault();
    let listDiv = $("ul");
    let newItem = $("input").val();
    let addItem = $(`<li class = 'lis'> <p class = 'itemShop mrg-10'> ${newItem} </p> <div class = 'mrg-10'> <button class='checar'>check</button> <button class='del'>delete</button> </div></li>`)
    listDiv.append(addItem);
})

$("div").on("click",".checar", function(e){
    e.preventDefault();
    let parent = $(this).parent();
    parent.parent().toggleClass("chec");
})

$("div").on("click",".del", function(e){
    e.preventDefault();
    let parent = $(this).parent();
    parent.parent().remove();
})