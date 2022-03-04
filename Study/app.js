let users = [{
    id: 1,
    name: 'Nhat Bui'
}, {
    id: 2,
    name: 'Alex Doe'
}, {
    id: 3,
    name: 'Hung Dam'
}]

let comments = [{
    id: 1,
    user_id: 1,
    content: 'Anh Nhat chua ra videos'
}, {
    id: 2,
    user_id: 2,
    content: 'Ra xong roi em oi'
},{
    id: 3,
    user_id: 1,
    content: 'Cam on Anh'
}]

//1. Lay comments,
//2. Lay ra user ID
//Fake API

//Array
//Function
//CallBack
//DOM


function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    })
}


function getUser(userId) {
    return new Promise((resolve) => {
        let res = users.filter((user) => {
            return userId.includes(user.id);
        })
        setTimeout(() => {
            resolve(res);
        }, 1000);
    })
}

//Promise Hell
getComments().then(function (comments) {
    // console.log(comments);
    let userIds = comments.map(function (res) {
        return res.user_id;
    });
    return getUser(userIds).then(function (user) {
        return {
            user: user,
            comments: comments
        };
    })
}).then(data => {
    let commentBlock = document.querySelector('.comment-block');
    console.log(commentBlock);  
    let html ='';
    data.comments.forEach(function (comment){
        let user = data.user.find((user) => {
            return user.id === comment.user_id;
        })
        html +=`<li>${user.name}:${comment.content}</li>`
    });
    commentBlock.innerHTML = html;
})








