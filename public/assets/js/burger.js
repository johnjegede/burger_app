$(function(){
    $("#submit").on("submit", function(e){
        e.preventDefault();
        var getBurger = {
            name: $("#name").val().trim()
        };
        //console.log(getBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: getBurger
        }).then(function(){
            console.log("Created a new burger");
            location.reload();
        });
    });

    $(".devourBtn").on("click", function(e){
        console.log("hit");
        var id = $(this).data("id");
        var getDevour = {
            devoured: true
          };
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: getDevour
        }).then(function(){
            console.log("devoured: " + id);
            location.reload();
        });
    });

    $(".deleteBtn").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            //console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


});