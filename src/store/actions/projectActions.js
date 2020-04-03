export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB
    const db = getFirestore();
    db.collection("Projects")
      .add({
        ...project,
        authorFirstName: "Kelvin",
        authorLastName: "Mugendi",
        authorID: 1278656,
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
