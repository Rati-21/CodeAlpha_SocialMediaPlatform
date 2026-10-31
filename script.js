const postsDiv = document.getElementById("posts");
const followBtn = document.getElementById("followBtn");

let following = false;

followBtn.addEventListener("click", () => {
  following = !following;

  followBtn.textContent =
    following ? "Following" : "Follow";
});

function createPost() {

  const input =
    document.getElementById("postInput");

  const text = input.value;

  if (text === "") return;

  const post =
    document.createElement("div");

  post.className = "post";

  post.innerHTML = `
    <h3>Ratanang</h3>
    <p>${text}</p>

    <button onclick="likePost(this)">
      ❤️ 0
    </button>

    <button onclick="commentPost()">
      💬 Comment
    </button>
  `;

  postsDiv.prepend(post);

  input.value = "";
}

function likePost(button) {

  let likes =
    parseInt(button.textContent.replace(/\D/g,""));

  likes++;

  button.textContent = `❤️ ${likes}`;
}

function commentPost() {
  const comment =
    prompt("Write a comment:");

  if(comment){
    alert("Comment added: " + comment);
  }
}
