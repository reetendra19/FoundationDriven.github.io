var extraRepoMeta, openProjectModal;

extraRepoMeta = {
  24189444: {
    issuesLink: 'http://issues.foundationdriven.tk/projects/foundation',
    wikiLink: 'http://issues.foundationdriven.tk/projects/foundation/wiki',
    downloadLink: 'http://issues.foundationdriven.tk/projects/foundation/files'
  },
  27344922: {
    issuesLink: 'http://issues.foundationdriven.tk/projects/sponge-js',
    wikiLink: 'http://issues.foundationdriven.tk/projects/sponge-js/wiki',
    downloadLink: 'http://issues.foundationdriven.tk/projects/sponge-js/files'
  },
  27345343: {
    issuesLink: 'http://issues.foundationdriven.tk/projects/website',
    wikiLink: 'http://issues.foundationdriven.tk/projects/website/wiki',
    downloadLink: 'http://issues.foundationdriven.tk/projects/website/files'
  }
};

openProjectModal = function(projectId) {
  return $('#' + projectId + '-modal').modal();
};

$(document).ready(function() {
  return jQuery.getJSON('https://api.github.com/orgs/FoundationDriven/repos', function(data) {
    var append, downloadLink, issuesLink, repo, wikiLink, _i, _len;
    append = '';
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      repo = data[_i];
      if (extraRepoMeta[repo.id] != null) {
        issuesLink = extraRepoMeta[repo.id].issuesLink;
      }
      if (extraRepoMeta[repo.id] != null) {
        wikiLink = extraRepoMeta[repo.id].wikiLink;
      }
      if (extraRepoMeta[repo.id] != null) {
        downloadLink = extraRepoMeta[repo.id].downloadLink;
      }
      append += "<div class=\"link\" onclick=\"openProjectModal('" + repo.id + "')\"><p class=\"linkTitle\">" + repo.name + "<\/p><p class=\"linkDescription\">" + repo.description + "<\/p><\/div><div class=\"projectModal\" id=\"" + repo.id + "-modal\"><h1 class=\"projectModalTitle\">" + repo.name + "<\/h1><p class=\"projectModalDescription\">" + repo.description + "<\/p><a class=\"projectModalIssuesLink\" href=\"" + issuesLink + "\">Issues<\/a><a class=\"projectModalWikiLink\" href=\"" + wikiLink + "\">Wiki<\/a><a class=\"projectModalDownloadLink\" href=\"" + downloadLink + "\">Download<\/a><\/div>";
      issuesLink = '';
      wikiLink = '';
      downloadLink = '';
    }
    return $('#links').html(append);
  });
});
