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

            // If error is flase then resolve the promise
            if(!error) {

                // When resolve runs .then(getPosts) occurs
                resolve();

            }

            // Else reject the promise
            else {

                // When reject runs .catch(...) occurs
                reject('Error: Something went wrong!');

            }

        }, 2000);

    });

}

// Basic promise example

// Runs createPosts function with promise
// createPosts({ title: 'Post Three', body: 'This is post three' })
// .then(getPosts)
// .catch(err => console.log(err));

// Promise.all example

// Multiple promises to be checked
const promise1 = Promise.resolve('Hello World!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// Array of promises to be ran
Promise.all([promise1, promise2, promise3]).then(
    (values) => console.log(values)
);