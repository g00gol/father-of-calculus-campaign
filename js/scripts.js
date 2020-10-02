// ========== AOS ===========
$(function () {
	AOS.init();
});

// ============ Bar Graph =============

// ============ Count ===========
function count() {
	$("#isaac-count, #wilhelm-count").each(function () {
		$(this)
			.prop("Counter", 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 4000,
					easing: "swing",
					step: function (now) {
						$(this).text(Math.ceil(now));
					},
				}
			);
	});
}
// =========== Exact ============
function exact() {
	$("#isaac-exact, #wilhelm-exact").each(function () {
		$(this)
			.prop("Counter", 0)
			.animate(
				{
					Counter: $(this).text(),
				},
				{
					duration: 4000,
					easing: "swing",
					step: function (now) {
						$(this).text(Math.ceil(now));
					},
				}
			);
	});
}

// =========== Isaac Graph ==========
function isaacGraph() {
	document.getElementById("vote-text-cont").style.opacity = "0";
	$("#vote-text-cont").css("z-index", -2);

	$("#isaac-bar").animate(
		{
			height: "51%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);
	$("#wilhelm-bar").animate(
		{
			height: "49%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);

	$("#isaac-count").text("51");
	$("#isaac-exact").text("50358");
	$("#wilhelm-count").text("49");
	$("#wilhelm-exact").text("48383");
	count();
	exact();
	$("#isaac-img").delay(4000).animate({ width: "200px" }, 1000);
}

// ============ Wilhelm Graph =============
function wilhelmGraph() {
	document.getElementById("vote-text-cont").style.opacity = "0";
	$("#vote-text-cont").css("z-index", -2);

	$("#wilhelm-bar").animate(
		{
			height: "51%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);
	$("#isaac-bar").animate(
		{
			height: "49%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);

	$("#wilhelm-count").text("51");
	$("#wilhelm-exact").text("50358");
	$("#isaac-count").text("49");
	$("#isaac-exact").text("48383");
	count();
	exact();
	$("#wilhelm-img").delay(4000).animate({ width: "200px" }, 1000);
}
