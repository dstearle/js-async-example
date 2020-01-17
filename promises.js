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
function createPosts(post) {

    // Promise
    return new Promise((resolve, reject) => {

        // setTimeout function to simulate time to create a post
        setTimeout(() => {
            
            // Empty variable to hold posts
            posts.push(post);

            // Boolean
            const error = false;

            // If no errors then
            if(!error) {

                // When resolve runs .then(getPosts) occurs
                resolve();

            }

            // Else show error
            else {

                // When reject runs .then(getPosts) does not run
                reject('Error: Something went wrong!');

            }

        }, 2000);

    });

}

// Runs createPosts function with promise
createPosts({ title: 'Post Three', body: 'This is post three' }).then(getPosts);