import {posts} from "./data.js"

const likeEl = document.getElementById("like-btn")
const mainContent = document.getElementById("main-content")

document.addEventListener("dblclick", function(e) {
    handleLikeClick(e.target.dataset.image)

})

function handleLikeClick(likeId) {
    const targetPostObj = posts.filter(function(post) {
        return targetPostObj.uuid === likeId
    })

    
}

posts.forEach(function(post) {
    let postContent = ""

    postContent += `
        <main class="post" id="post-el">
        <div class="user-info_wr">
            <img class="user_img" src=${post.avatar}>
            <div class="user_info">
                <p class="bold_txt">${post.name}</p>
                <p>${post.location}</p>
            </div>
        </div>
        <div class="user-post_wr" id="user-img">
            <div class="post-btn" id="like-button">
                <img data-image="${post.uuid} class="post_img" src=${post.post}>
            </div>
        </div>
        <div class="user-desc_wr">
            <div class="icon-wrapper" id="img-btn">
                <img class="interaction-icon" src="images/icon-heart.png">
                <img class="interaction-icon" src="images/icon-comment.png">       
                <img class="interaction-icon" src="images/icon-dm.png">
            </div>
            <p class="bold_txt likes"><span id="like-count">${post.likes}</span> Likes</p>
            <p>
                <span class="bold_txt">
                    ${post.username}
                </span> 
                ${post.comment}
            </p>
        </div>
    </main>
    `
    mainContent.innerHTML += postContent
})



