const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEl = document.getElementById("post-el")
const imageBtn = document.getElementById("like-button")
const text = document.getElementById("heart")
const likesCount = document.getElementById("like-count")
const mainEl = document.getElementById("main-content")


for(let i = 1; i < posts.length; i++) {
    let post = `<div class="post" id="post-el">
    <div class="user-info_wr">
                        <img class="user_img" src=${posts[i].avatar}>
                        <div class="user_info">
                            <p class="bold_txt">${posts[i].name}</p>
                            <p>${posts[i].location}</p>
                        </div>
                    </div>
                    <div class="user-post_wr" id="user-img">
                        <button class="post-btn" id="like-button">
                            <img class="post_img" src=${posts[i].post}>
                        </button>
                    </div>
                    <div class="user-desc_wr">
                        <div class="icon-wrapper">
                            <img class="interaction-icon" src="images/icon-heart.png">
                            <img class="interaction-icon" src="images/icon-comment.png">       
                            <img class="interaction-icon" src="images/icon-dm.png">
                        </div>
                        <p class="bold_txt"><span id="like-count">${posts[i].likes}</span> Likes</p>
                        <p>
                            <span class="bold_txt">
                                ${posts[i].username}
                            </span> 
                            ${posts[i].comment}
                        </p>
                    </div>
                </div>
                `

    mainEl.innerHTML += post 
    
}

console.log(imageBtn.innerHTML)

$("imageBtn").addEventListener("dblclick", function() {
    console.log("Hello world")
})