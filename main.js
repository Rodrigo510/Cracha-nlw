const LinksSocialMedia = {
  github: 'Rodrigo50',
  Youtube: 'UCnuM3QG1fUZBDs9QdKRtM_A',
  facebook: 'rodrigo510',
  instagram: 'r.a.rodrigues',
  twitter: 'AlvesMar68'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = "https://api.github.com/users/Rodrigo510"

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
