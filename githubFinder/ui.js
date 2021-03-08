class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  //Show user profile in UI
  showProfile(user) {
    // console.log(user);
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}"></img>
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>

            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                <span class="badge badge-success">Followers : ${user.followers}</span>
                <span class="badge badge-info">Following : ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company : ${user.company}</li>
                    <li class="list-group-item">Website/Blog : ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Memeber Since : ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3 ">Lates Repos</h3>
    <div id="repos"></div>
    `;
  }

  //Show Alert
  showAlert(message, className) {
    //clear any remaining alert
    this.clearAlert();
    //create div
    const div = document.createElement('div');
    //add class name
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parenting
    const container = document.querySelector('.searchContainer');
    //get search box
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(div, search);

    //Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
