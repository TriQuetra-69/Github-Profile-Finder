let user_name = document.getElementById("user_name");
let btn = document.getElementById("btn");
let user_image = document.getElementById("user_image");
let username = document.getElementById("username");
let git_name = document.getElementById("git_name");
let bio = document.getElementById("bio");
let repo_no = document.getElementById("repo-no");
let follower_no = document.getElementById("follower-no");
let followeing_no = document.getElementById("following-no");

async function user(){
  let URL = `https://api.github.com/users/${user_name.value}`
  const response =  await fetch(URL);
  const data = await response.json();
  console.log(data);
  document.getElementById("user_image").src = data.avatar_url
  username.innerHTML = data.name;
  git_name.innerHTML = data.login;
  bio.innerHTML = data.bio;
  repo_no.innerHTML = data.public_repos;
  follower_no.innerHTML = data.followers;
  followeing_no.innerHTML = data.following;
}

btn.addEventListener("click",user);