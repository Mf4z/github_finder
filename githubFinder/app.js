//Instantiate GitHub object
const gitHub = new GitHub();

//Instanciate UI object
const ui = new UI();
//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const searchValue = e.target.value;

  if (searchValue !== '') {
    //Make http call
    // console.log(searchValue);
    gitHub.getUser(searchValue).then((data) => {
      console.log(data);

      if (data.profile.message === 'Not Found') {
        //Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //show profile
        ui.showProfile(data.profile);
        //show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
