import {postsData} from "./data.js"

document.addEventListener("click", function(e) {
    if (e.target.dataset.like) {
        getLikesPost(e.target.dataset.like)
    } else if (e.target.dataset.save) {
        savePost(e.target.dataset.save)
    } 
})

function getLikesPost(postId) {
    const likeHandle = postsData.filter((post) => {
        return post.uuid === postId
    })[0]

    if(likeHandle.isLiked){
        likeHandle.likes--
    } else {
        likeHandle.likes++
    }
    likeHandle.isLiked = !likeHandle.isLiked
    render()
}

function savePost(postId){
    const saveHandle = postsData.filter((post) => {
        return post.uuid === postId
    })

    saveHandle = !saveHandle.isShared
    render()
}

function createPosts() {
    let postItem = ""

    postsData.forEach((post) => {
        let likeIconClass = "fa-regular"
        let saveIconClass = "fa-regular"

        if (post.isLiked) {
            likeIconClass = "fa-solid"
        }
        
        if (post.isShared) {
            saveIconClass = "fa-solid yellow"
        }

        postItem += `
    <div class="post-item">
        <div class="post-header">
            <div class="userpic-wr">
                <img class="post-userpic" src="${post.avatar}">
            </div>
            <div class="post-name">
                <p class="t-p bold">${post.username}</p>
                <p class="t-p">${post.location}</p>
            </div>
        </div>
        <div class="post-content">
            <img class="post-img" src="${post.post}" data-dbl="${post.uuid}">
        </div>
        <div class="post-info">
            <div class="btn-wrap">
                <div class="main-btns">
                    <button class="interact-btn">
                        <i class="${likeIconClass} fa-heart" data-like="${post.uuid}"></i>
                    </button>
                    <button class="interact-btn">
                        <i class="fa-regular fa-comment icon"></i>
                    </button>
                    <button class="interact-btn">
                        <i class="fa-regular fa-paper-plane icon"></i>
                    </button>
                </div>
                <button class="interact-btn" data-save="${post.uuid}">
                    <i class="${saveIconClass} fa-bookmark icon"></i>
                </button>
            </div>
            <div class="like-stats">
                <div class="liked-by-wr">
                    <img class="liked-by_img" src="${post.likedByPic}">
                </div>
                <div class="like-details">
                    <p class="t-p">liked by <span class="t-p bold">${post.likedByName}</span> and <span class="t-p bold">${post.likes}</span> others</p>
                </div>
            </div>
            <div class="post-creator">
                <p class="t-p"><span class="t-p bold">${post.username} </span>${post.comment}</p>
            </div>
            <div class="post-footer">
                <button class="comment-btn">View all <span>${post.numberOfComments}</span> comments</button>
                <p class="t-eye">${post.postDate}</p>
            </div>
        </div>
    </div> 
        `
    })

    return postItem
}

function render() {
    document.getElementById("post-wrapper").innerHTML = createPosts()
}

render()
