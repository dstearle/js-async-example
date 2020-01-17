// Available posts
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
]

// Function to display available posts
function getPosts() {

    // setTimeout function to simulate time to get posts
    setTimeout(() => {
        
        // Empty variable to hold posts
        let output = '';

        // Foreach loop that displays each post
        posts.forEach((post, index) => {

            // Post Title
            output += `<li>${post.title}</li>`

        });

        // Visual output
        document.body.innerHTML = output;

    }, 1000);

}

// Function to create a new post
// function createPost(post) {

//     // setTimeout function to simulate time to create a post
//     setTimeout(() => {
        
//         // Empty variable to hold posts
//         posts.push(post);

//     }, 2000);

// }

// Function to create a new post with callback
function createPost(post, callback) {

    // setTimeout function to simulate time to create a post
    setTimeout(() => {
        
        // Empty variable to hold posts
        posts.push(post);
        // Callback function to make sure getPosts runs after a new post is created
        callback();

    }, 2000);

}

// Runs getPosts function
// getPosts();

// Runs createPost function
// createPost({ title: 'Post Three', body: 'This is post three' });

// Runs createPost function
createPost({ title: 'Post Three', body: 'This is post three' });