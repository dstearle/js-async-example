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

// Runs getPosts function
getPosts();