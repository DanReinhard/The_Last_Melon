$("#submit").on("click", function (){
    if($("#displayName").val() === "" || $("#comment").val() === "") {
        alert("Please enter your Name and Comment")
    } else {
        $(".comment_section").prepend(`
            <div class="subComment"> 
                ${$("#displayName").val()}
                ${$("#comment").val()}
            </div>
            <div class="editDelete">
                ${$("#")}
            </div>
            `)
    }
});