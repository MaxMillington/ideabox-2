$(document).ready(function(){
    fetchIdea();
    //createIdea();
    //fetchIdeaButton();
});

function fetchIdea() {
    $.ajax({
        type:    "GET",
        url:     "https://localhost:3000/monkey.json",
        success: function(ideas) {
            $.each(ideas, function(index, idea){
                console.log(idea);
                renderIdea(idea)
            })
        }
    })
}


function renderIdea(idea) {
    $("#latest-posts").append(
        "<div class='post' data-id='"
        + idea.id
        + "'><h6>Created at "
        + idea.created_at
        + "</h6><p>"
        + idea.title
        + ": "
        + idea.body
        + "<br>Quality: "
        + idea.quality
        + "</p><button id='delete-post' class='btn btn-default btn-xs'>Delete</button></div>"
    )
}