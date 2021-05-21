$("#submit").on("click", function (){
    if($("#displayName").val() === "" || $("#comment").val() === "") {
        alert("Please enter your Name and Comment")
    } else {
        $(".comment_section").prepend(`
        <div class="containForComment">
                <div class="submittedComment"> 
                    <div id="nameAndText">
                        <div class="name">
                            ${$("#displayName").val()}
                        </div>
                        <div class="commentToBeChanged">
                            ${$("#comment").val()}
                        </div>
                    </div>
                    <div id="buttons">
                        <button class="edit_butt">Edit</button>
                        <button class="delete_butt">Delete</button>
                    </div>
                </div>
                <div class="edit_input no_display">
                    <input class="choose_me"> 
                    <button class="submit_edit">Submit</button>
                </div>
            </div>

            
            `)
    }
});
$(".comment_section").on("click", ".delete_butt", function (){
    let parent = $(this).parents()[0];
    let parent2 = $(parent).parents()[1];
    $(parent2).remove();
})

$(".comment_section").on("click", ".edit_butt", function (){
    let parent = $(this).parents()[1];
    let parent2 = $(parent).next();
    $(parent2).toggleClass("no_display");
});

$(".comment_section").on("click", ".submit_edit", function(){
    let change = $(this).prev();
    let change2 = $(change).val();
    let parent = $(this).parents()[0];
    let parent2 = $(parent).prev();
    let child = $(parent2).children()[0];
    let child2 = $(child).children()[1];
    $(child2).text(change2);
});
