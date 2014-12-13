$(document).ready(function () {
	window.twitterWidgets = {
		'Foundation': '<a class=\"twitter-timeline\" href=\"https:\/\/twitter.com\/search?q=%23foundationdriven%20%23foundation\" data-widget-id=\"541593139824590848\">Tweets about #foundationdriven #foundation<\/a>\r\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=\/^http:\/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\":\/\/platform.twitter.com\/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");<\/script>',
		'Sponge.js': '<a class=\"twitter-timeline\" href=\"https:\/\/twitter.com\/search?q=%23foundationdriven%20%23spongejs\" data-widget-id=\"541602949085270016\">Tweets about #foundationdriven #spongejs<\/a>\r\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=\/^http:\/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\":\/\/platform.twitter.com\/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");<\/script>'
	};
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
			$('#loadingPage').fadeOut(500);
		});
	});

});
