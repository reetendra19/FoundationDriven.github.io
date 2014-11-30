(function() {
	$(document).ready(function() {
		console.log("Document ready!");

		function getContributors() {
			$.ajax({
				url: "https://api.github.com/orgs/foundationdriven/members",
				dataType: "json",
				success: function(members) {
					for (member in members) {
						$('#contributors').append(
							'<a href="' + members[member].html_url + '"><img src="' + members[member].avatar_url + '" height="60px"></a>  '
						);
					}
				}
			});
		}

		function getProjects() {
			$.ajax({
				url: "https://api.github.com/orgs/foundationdriven/repos",
				dataType: "json",
				success: function(repos) {
					for (repo in repos) {
						$('#projects-holder').append(
							'<div class="well well-sm project-content" style="margin-top: 20px; text-align: center; display: block;">' +
								'<h1><span class="">' + repos[repo].name + '</span></h1>' +
								'<p>' + repos[repo].description + '</p>' +
								'<a href="' + repos[repo].html_url + '"><button type="button" class="btn btn-primary">View on GitHub</button></a>' +
								'<div id="stats">' +
									'<span class="label label-info">' + repos[repo].stargazers_count + ' Stars</span> ' +
									'<span class="label label-info">' + repos[repo].watchers_count + ' Watchers</span> ' +
									'<span class="label label-info">' + repos[repo].forks_count + ' Forks</span>' +
								'</div>' +
								'<div id="dates">' +
									'<span class="label label-success">Updated ' + repos[repo].updated_at + '</span> ' +
								'</div>' +
							'</div>'
						);
					}
				}
			});
		}

		getProjects();
		getContributors();
	});
}(), window);