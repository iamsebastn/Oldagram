import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const postsData = [
    {
        name: "Joel Agnès Heymans",
        username: "heyjoel",
        location: "Zundert, Netherlands",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
        post: "https://images.unsplash.com/photo-1653199898411-b93028f1a916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        numberOfComments: 3,
        comments: [
            { 
                handle: "",
                avatar: "",
                comment: "Lorem"
            },
        ],
        comment: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        likes: 216,
        likedByName: "iamfreya",
        likedByPic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        isLiked: false,
        isShared: false,
        postDate: "12 hours ago",
        uuid: uuidv4()
    },
    {
        name: "Freya Wolf",
        username: "iamfreya",
        location: "Munich, Germany",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        post: "https://images.unsplash.com/photo-1671509774803-1640e8853b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        numberOfComments: 4,
        comment: "magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo",
        likes: 1529,
        likedByName: "heyjoel",
        likedByPic: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
        isLiked: false,
        isShared: false,
        postDate: "13 hours ago",
        uuid: uuidv4()
    },
    {
        name: "Mikael Nithin Romà",
        username: "mikaelromani",
        location: "Ornans, France",
        avatar: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        post: "https://images.unsplash.com/photo-1654299194534-7e5445e8f08a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
        numberOfComments: 2,
        comment: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsu",
        likes: 450,
        likedByName: "queenalthea",
        likedByPic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        isLiked: false,
        isShared: false,
        postDate: "15 hours ago",
        uuid: uuidv4()
    },
    {
        name: "Derrick Theodard Langley",
        username: "derrley",
        location: "Paris, France",
        avatar: "https://plus.unsplash.com/premium_photo-1669703777692-0289d224bcc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        post: "https://images.unsplash.com/photo-1648275492532-0065e0e8ed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
        numberOfComments: 6,
        comment: "ed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea",
        likes: 1523,
        likedByName: "iamfreya",
        likedByPic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        isLiked: false,
        isShared: false,
        postDate: "16 hours ago",
        uuid: uuidv4()
    },
    {
        name: "Althea Lucky Ramsey",
        username: "queenalthea",
        location: "Paris, France",
        avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        post: "https://images.unsplash.com/photo-1650756697432-98d1a1448cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        numberOfComments: 3,
        comment: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero ",
        likes: 974,
        likedByName: "mikaelromani",
        likedByPic: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        isLiked: false,
        isShared: false,
        postDate: "18 hours ago",
        uuid: uuidv4()
    },
]


