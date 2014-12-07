$(document).ready(function () {
	window.twitterWidgets = {};
	jQuery.ajax('https://api.github.com/orgs/FoundationDriven/repos').done(function (projects) {
		var append = "";
		var i;
		for (i = 0; i < projects.length; ++i) {
			var project = projects[i];
			append += '<div class=\"slide project\">\r<div class=\"sectionMain\">\r<h1 class=\"project-name\">' + project.name + '<\/h1>\r<p class=\"project-description\">' + project.description + '<\/p>\r'
			if (window.twitterWidgets[project.name]) {
				append += window.twitterWidgets[project.name];
			}
			append += '<div class=\"project-icons\">\r<a href=\"' + project.html_url + '\" class=\"project-link\"><i class=\"fa fa-github fa-6\"><\/i><\/a>\r'
			if (project.homepage) {
				append += '<a href=\"' + project.homepage + '\" class=\"project-link\"><i class=\"fa fa-cloud-download fa-6\"><\/i><\/a>\r';
			}
			append += '<\/div>\r<\/div>\r<\/div>';
		}
		$('#section2').append(append);
		console.log('Loaded and wrote repositories');
		jQuery.ajax('https://api.github.com/orgs/FoundationDriven/members').done(function (members) {
			var append = "";
			var i;
			for (i = 0; i < members.length; ++i) {
				var member = members[i];
				append += '<img class=\"memberIcon tooltip\" title=\"' + member.login + '\" src=\"' + member.avatar_url + ' \" height=\"200\" width=\"200\">';
			}
			$('.members').append(append);
			console.log('Loaded and wrote members');
			$('#fullpage').fullpage({
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Top', 'Projects', 'The Team', 'Contact us'],
				slidesNavigation: true,
				slidesNavPosition: 'bottom',
				css3: true,
				scrollingSpeed: 800,
				autoScrolling: true,
				scrollBar: false,
				easing: 'easeInOutQuart',
				easingcss3: 'ease',
				loopBottom: true,
				loopTop: true,
				loopHorizontal: true,
				continuousVertical: false,
				normalScrollElements: '',
				scrollOverflow: false,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,
				keyboardScrolling: true,
				animateAnchor: true,
				verticalCentered: true,
				resize: true,
				sectionsColor: ['#2ecc71', '#3498db', '#9b59b6', '#34495e'],
				paddingTop: '3em',
				paddingBottom: '10px',
				fixedElements: '',
				responsive: 1,
			});
			$('.tooltip').tooltipster();
		});
	});

});
