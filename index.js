require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const githubData = {
  "login": "Dasmat13",
  "id": 164524276,
  "node_id": "U_kgDOCc5w9A",
  "avatar_url": "https://avatars.githubusercontent.com/u/164524276?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Dasmat13",
  "html_url": "https://github.com/Dasmat13",
  "followers_url": "https://api.github.com/users/Dasmat13/followers",
  "following_url": "https://api.github.com/users/Dasmat13/following{/other_user}",
  "gists_url": "https://api.github.com/users/Dasmat13/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Dasmat13/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Dasmat13/subscriptions",
  "organizations_url": "https://api.github.com/users/Dasmat13/orgs",
  "repos_url": "https://api.github.com/users/Dasmat13/repos",
  "events_url": "https://api.github.com/users/Dasmat13/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Dasmat13/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "dasmat ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": "learning new things\r\n\r\n",
  "twitter_username": null,
  "public_repos": 55,
  "public_gists": 0,
  "followers": 7,
  "following": 10,
  "created_at": "2024-03-22T14:39:35Z",
  "updated_at": "2026-05-24T18:05:19Z"
}

app.get('/github',(req, res) => {
    res.json(githubData)   
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('dasmat.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>hii this is my new workspace</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>code with dasmat</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})