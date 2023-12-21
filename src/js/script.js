const searchInput = document.querySelector('#searchbox')
const searchResults = document.querySelector('#searchresults')
const userProfile = document.querySelector('.Profiles')
const profilePic = document.querySelector('#profilepic')
const userName = document.querySelector('#Gname')
const userId = document.querySelector('#Gid')
const userJoin = document.querySelector('#Gjoin')
const userSkills = document.querySelector('#skills')
const userRepos = document.querySelector('#repos')
const userNoRepos = document.querySelector('#rcount')
const noFollowers = document.querySelector('#fcount')
const noFollowing = document.querySelector('#focount')
const userLocation = document.querySelector('#location')
const link = document.querySelector('#link')

window.addEventListener('load',(e) => {
    e.preventDefault()
    if(searchInput.value.trim === '')
        searchInput.innerHTML=''

    getGitHubUser(this.value)
})
searchInput.addEventListener('input', function (){
    getGitHubUser(this.value)
})

async function getGitHubUser(username){
    const html_url = `https://api.github.com/users/${username}`;

    const token = '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'

    const fetch_response = await fetch(html_url,{
        headers:{'Authorization': `token ${token}`}
    })
    const userData = await fetch_response.json()
    // users.push(...userData)
    console.log(userData)
    createUserProfile(userData)
}

function createUserProfile(userData){
    userName.innerHTML = userData.name ?? 'not found! 😒'
    userId.innerHTML = userData.login ?? 'not found! 😒'
    profilePic.src = userData.avatar_url ?? 'not found! 😒'
    userSkills.innerHTML = userData.bio ?? '..'
    userNoRepos.innerHTML = userData.public_repos ?? '..'
    noFollowers.innerHTML = userData.followers ?? '..'
    noFollowing.innerHTML = userData.following ?? '..'
    userJoin.textContent = 'Joined : ' + userData.created_at ?? '..'
    userLocation.innerHTML = userData.location ?? '..'
    link.href = userData.html_url ?? '..'
    link.innerHTML = userData.login ?? '..'
}
