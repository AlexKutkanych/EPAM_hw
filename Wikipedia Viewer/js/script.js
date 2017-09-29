var searchBlockBtn = document.querySelector(".search-block-btn");
var searchBtn = document.querySelector(".search-btn");
var searchBlock = document.querySelector(".search-block");

function showSearchBlock(){
	searchBlock.classList.toggle("search-block_show");
}

searchBlockBtn.addEventListener("click", showSearchBlock);

$(function(){

		
	$(".search-btn").click(function(){

		var searchQuery = $("#search-input").val();
		console.log(searchQuery);

		$.ajax({
			type: "GET",
			url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchQuery + "&prop=revisions&rvprop=content&format=json&callback=?",
			dataType: "json",
	 		async: false,
	 		success: function(data){
	 			console.log(data);
	 			// $("#result").append("<article><></article>")
	  				
	 		},
	 		error: function(errorMsg){
	 			console.log("Error occured " + errorMsg);
	 		}
		})
		
	})
})
	