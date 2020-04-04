export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB
    const db = getFirestore();
    const profile=getState().firebase.profile;
    const authorID=getState().firebase.auth.uid;
    console.log(profile);
    console.log(authorID);
    db.collection("Projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.secondName,
        authorID: authorID,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",  
          project: project
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          error: err
        });
      });
  };
};
