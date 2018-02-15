/*eslint-env jquery*/
$(document).ready(function() {
	"use strict";

	function openChat() {
		if ($(".chat_container").is(":visible")) {
			$(".chat_container").width(254);
			$(".chat_container").css("right", 20);
			$(".from_row").show();
			$(".chat_content").show();
			$(".chat_input_container").show();
			$(".close_chat").show();
		} else {
			$(".chat_container").show();
		}

		$(".chat_head").css("background-color", "#4570ff");
		$("#resume_chat_link").css("color", "white");
	}

	function appendBubble(text) {
		var bubble = $("<div>")
			.text(text)
			.addClass("float-right")
			.addClass("chat_bubble");

		$("#chat_text").append(bubble);
	}

	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	$("#resume_chat_link").click(function() {
		if ($(".chat_content").is(":visible")) {
			$(".chat_container").width(149);
			$(".chat_container").css("right", 120);
			$(".from_row").hide();
			$(".chat_content").hide();
			$(".chat_input_container").hide();
			$(".close_chat").hide();
			$(".chat_head").css("background-color", "#f6f7f9");
			$("#resume_chat_link").css("color", "#4a4e56");
		} else {
			openChat();
		}
	});

	$(".close_chat").click(function() {
		$(".chat_container").hide();
		$(".chat_head").css("background-color", "#f6f7f9");
		$("#resume_chat_link").css("color", "#4a4e56");
	});

	$("#btn_message").click(function() {
		openChat();
	});

	$("#chat_input_message").keypress(function(e) {
		if (e.which == 13) {
			var input_email = $("#chat_input_from").val();
			var input_message = $("#chat_input_message").val();
			var payload = {
				email: input_email,
				message: input_message
			};
			var href = "https://formcarry.com/s/HJydhmzDf";

			if (!isEmail(input_email)) {
				appendBubble("Enter valid email");
			} else {
				$.ajax({
					type: "POST",
					dataType: "json",
					url: href,
					data: payload,
					success: function(response) {
						if (response.status == "success") {
							$("#chat_input_message").val("");
							appendBubble("Message Send");
						} else {
							appendBubble("There was an error sending the message");
						}
					}
				});
			}
		}
	});
});
