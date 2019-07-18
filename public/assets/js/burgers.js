// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT"
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });