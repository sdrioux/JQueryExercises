// alert("hi");

// name=prompt("What is your name?");

// console.log("Your name is " + name + "!");

// movie = prompt( "Give me a movie..." );
// time = prompt( "Now give me a time..." );

// response = prompt( "Do you want to go with me to see " + movie + " at " + time + "?")

// console.log(response);

// password = prompt( "Enter a password" );
// while (password.length < 11){
// 	password = prompt( "Your password was too short, enter another." );
// }
// console.log(password);

// 8.
// age = prompt ("What is your age?");
// if ( age >= 21 ){
// 	alert("You can drink!");
// }
// else {
// 	alert("You are too young to drink.");
// }
// 9.  
// groceries = ["broccoli", "zucchini", "apples"]

// for (i=0; i<groceries.length; i++){
// 	console.log("I need to buy " + groceries[i] + ".");
// }
// alert("Done shopping!");
// 10.
// silas = {firstname: "Silas", lastname: "Rioux", age: 24, gender: "male"}

// alert("My name is " + silas.firstname + " " + silas.lastname + ", and I am a " + String(silas.age) + " year old " + silas.gender + ".");
// 11.
// var create_header = function(my_name){
// 	document.write("<h1>" + my_name + "</h1>");
// }

// var create_image = function(image_file){
// 	document.write("<img src='" + image_file + "' alt='test' >");
// }

// var create_paragraph = function(age, gender, job){
// 	document.write("<p> I am a " + String(age) + " year old " + gender + " who works as a " + job + ".</p>")
// }

// create_header("Silas Rioux");
// create_image("http://www.smallbiztechnology.com/wp-content/uploads/2012/12/success-300x199.jpg");
// create_paragraph(24, "male", "web developer");

// // Need to call the functions I created!

//DOM MANIPULATION

// 16.
// //first h1 tag
// $("h1")[0]
// //all the divs
// $("div")
// //first div
// $("div")[0] or $("div").first()
// //everything with a class of 'nav-item'
// $(".nav-item")
// //object using its ID
// $("#bottom-nav-item")
// //
// $(this), $("div:first"), $("div:odd"), $("div").parent()

// 17.  $(".right-sidebar").hide();
// 18.  $(".card").hide();
// 19.  $(".main.card").show()
// 20.  $(".main.card p").html("My name is Silas Rioux")
// 21.  $(".main.card p").append("Shezhan has a big ego")
// 22.  $("<p>This is a test</p>").insertAfter(".main.card p")
// 23.  $(".right-sidebar").remove()
// 24.
// 	blog = $(".nav-item:first");
// 	$(".nav-item:first").remove();
// 	blog.insertAfter(".nav-item:last");

// 25.	 $(".card.nav").clone().insertAfter(".main.card")
// 26.	 $(".profilepic").width(20)
// 27.  $(".right-sidebar").hide(500)
// 28.  $(".right-sidebar").fadeOut(5000), .slideToggle(500), .slideDown(500)

// 34.
// $(document).ready(function(){
// 	$("div:first").hide();
// });
// 35.
// $(document).ready(function(){
// 	$(".main.card").click(function(){
// 		alert("You clicked this section!");
// 		$(this).clone().insertAfter(this)
// 		$(".main.card p").append("!");
// 	})

// 	$("body").click(function(){
// 		$(this).css( "background-color", "#000");
// 	})

	
// })
// 39.
// $(document).ready(function(){
// 	$(".main.card").click(function(){
// 		$("body").bind({
// 			dblclick: function(){
// 				$('div').toggle();
// 			}
// 		})
// 	});
// });
// 40.
// $(document).ready(function(){
// 	$('p').mouseenter(function(){
// 		$(this).css("font-weight", "bold");
// 	}).mouseleave(function(){
// 		$(this).css("font-weight", "normal");
// 	})
// 	$('p').dblclick(function(){
// 		$('.nav-item').css("font-weight", "bold");
// 	})
// })
// 41.
$(document).ready(function(){
	$('.mybutton').click(function(){
		reg=/.*@.*\..*/
		email= $("#email").val()
		password = $("#password").val()
		$('.error').remove();
		$('.success').remove();
		if(email== ''){
			$('br.errors').after('<p class="error">You need to input an email!</p>')
		}
		else if(email.length < 8){
			$('br.errors').after('<p class="error">Your email must be at least 8 characters!</p>')
		}
		else if(!reg.test(email)){
			$('br.errors').after('<p class="error">Your email must contain a "@" symbol and a period.</p>')
		}
		else if(password== ''){
			$('br.errors').after('<p class="error">You need to input a password!</p>')
		}
		else if(password.length < 8){
			$('br.errors').after('<p class="error">Your password must be at least 8 characters!</p>')
		}
		else{
			$('br.errors').after('<p class="success">Success!</p>')
		}
		return false
	});
})

