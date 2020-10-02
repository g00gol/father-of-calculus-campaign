// ========== AOS ===========
$(function () {
	AOS.init();
});

// ============ Bar Graph =============

// =========== Isaac Graph ==========
function isaacGraph() {
	document.getElementById("vote-text-cont").style.opacity = "0";
	$("#vote-text-cont").css("z-index", -2);

	$("#isaac-bar").animate(
		{
			height: "55%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);
	$("#wilhelm-bar").animate(
		{
			height: "45%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);

	$("#count").text("55");

	$("#count").each(function () {
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

	$("#isaac-img").delay(4000).animate({ width: "100px" }, 1000);
}

// ============ Wilhelm Graph =============
function wilhelmGraph() {
	document.getElementById("vote-text-cont").style.opacity = "0";
	$("#vote-text-cont").css("z-index", -2);

	$("#wilhelm-bar").animate(
		{
			height: "55%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);
	$("#wilhelm-bar").animate(
		{
			height: "45%",
		},
		{
			delay: 500,
			duration: 4000,
		}
	);

	$("#count").text("55");

	$("#count").each(function () {
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

	$("#wilhelm-img").delay(4000).animate({ width: "100px" }, 1000);
}
