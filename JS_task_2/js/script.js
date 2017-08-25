var mainPage = document.querySelector("#main-page");
var profilePage = document.querySelector("#profile-page");
profilePage.classList.add("profile-page_hide");





//to main page

function showMainPage(){
	mainPage.classList.remove("main-page_hide");
	profilePage.classList.add("profile-page_hide");
}

var toMainPageBtn = document.querySelector("#to-main-page");
toMainPageBtn.addEventListener("click", showMainPage);

//handlebars

// var myInfo = "<p>My name is {{name}} and I live at {{street}}</p>";
//
// var template = Handlebars.compile(myInfo);
//
// var data = template({name: "Sasha", street: "adfdf"});
//
// document.querySelector("#derekData").innerHTML += data;


// var usersInfo1 = {
// 	"users": [
// 		{
// 			"id": 100,
// 			"name": "Dwyane Wade",
// 			"position": "coder",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2004, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2016", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2016-present", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 101,
// 			"name": "Lebron James",
// 			"position": "coder",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2005, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2014", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2015-2017", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 102,
// 			"name": "Derrick Rose",
// 			"position": "web-designer",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2004, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2016", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2016-present", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 103,
// 			"name": "Carmelo Anthony",
// 			"position": "web-designer",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2005, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2014", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2015-2017", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 104,
// 			"name": "Corey Joseph",
// 			"position": "coder",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2004, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2016", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2016-present", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 105,
// 			"name": "Alex Len",
// 			"position": "coder",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2005, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2014", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2015-2017", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 106,
// 			"name": "JR Smith",
// 			"position": "web-designer",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2005, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2014", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2015-2017", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 107,
// 			"name": "Hassan Whiteside",
// 			"position": "coder",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2004, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2016", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2016-present", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 108,
// 			"name": "Russell Westbrook",
// 			"position": "web-designer",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2005, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2014", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2015-2017", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 109,
// 			"name": "Blake Griffin",
// 			"position": "coder",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2004, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2010-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2016", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2016-present", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		},
// 		{
// 			"id": 110,
// 			"name": "Chris Paul",
// 			"position": "web-designer",
// 			"education": [
// 				{"year": 2000, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2005, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"year": 2008, "title": "Title", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			],
// 			"experience": [
// 				{"company": "Google", "period": "2011-2012", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yahoo", "period": "2012-2014", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"},
// 				{"company": "Yandex", "period": "2015-2017", "title": "FE Developer", "responsibilities": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit harum ipsam nesciunt, provident quae quas quisquam similique! Adipisci alias ea eaque eveniet expedita iusto minima recusandae repellendus totam voluptatum!"}
// 			]
// 		}
// 	]
// }

// var experienceBl = document.querySelector(".experience-block");
//
// var hadlebarsTest = document.querySelector("#test").innerHTML;
// var compiledTest = Handlebars.compile(hadlebarsTest);
//
// experienceBl.innerHTML = compiledTest(usersInfo1);