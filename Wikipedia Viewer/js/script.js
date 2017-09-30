var searchBlockBtn = document.querySelector(".search-block-btn");
var searchBtn = document.querySelector(".search-btn");
var searchBlock = document.querySelector(".search-block");

function showSearchBlock(){
	searchBlock.classList.toggle("search-block_show");
}

searchBlockBtn.addEventListener("click", showSearchBlock);

$(function(){

	$(".search-btn").click(function(e){

		var searchQuery = $("#search-input").val();
		if(searchQuery.length !== 0 || searchQuery !== ''){
			console.log(searchQuery);
			$.ajax({
				type: "GET",
				url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchQuery + "&prop=revisions&rvprop=content&format=json&callback=?",
				dataType: "json",
		 		async: false,
		 		success: function(data){
		 			console.log(data);
		 			for (var i = 0; i < data[1].length; i++){
		 				$("#results").append("<article class='results-article'><a class='article-title' href=" + data[3][i] + ">" + data[1][i] + "</a><p class='article-desc'>" + data[2][i]+ "</p></article>");

		 				if(data[2][i] === ""){
		 					console.log($(this).parent());
		 				}
		 			}

		 		},
		 		error: function(errorMsg){
		 			console.log("Error occured " + errorMsg);
		 		}
			})
		} else {
			alert("Enter the thing you are looking for");
		}

	})
})
