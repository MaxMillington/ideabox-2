$(document).ready(function(){
    fetchIdea();
    createIdea();
    fetchIdeaButton();
});

function fetchIdea() {
    var newestItemID = parseInt($(".post").last().attr("data-id"))

    $.ajax({
        type:    "GET",
        url:     "https://turing-birdie.herokuapp.com/api/v1/posts.json",
        success: function(posts) {
            $.each(posts, function(index, post){
                if (isNaN(newestItemID) || post.id > newestItemID) {
                    renderPost(post)
                }
            })
        }
    })
}

function createIdea() {
    $("#create-post").on("click", function(){
        var postParams = {
            post: {
                description: $("#post-description").val()
            }
        }

        $.ajax({
            type:    "POST",
            url:     "https://turing-birdie.herokuapp.com/api/v1/posts.json",
            data:    postParams,
            success: function(post) {
                renderPost(post)
            }
        })
    })
}

function renderIdea(post) {
    $("#latest-posts").append(
        "<div class='post' data-id='"
        + post.id
        + "'><h6>Published on "`
        + post.created_at
        + "</h6><p>"
        + post.description
        + "</p><button id='delete-post' class='btn btn-default btn-xs'>Delete</button></div>"
)
}