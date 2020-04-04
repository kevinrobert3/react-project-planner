const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
  return admin
    .firestore()
    .collection("Notifications")
    .add(notification)
    .then(doc => {
      console.log("Notification Added", doc);
      return;
    })
    .catch(err => {
      console.log("Error Adding Notification", err);
    });
};

exports.projectCreated = functions.firestore
  .document("Projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore()
    .collection("Users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the Team",
        user: `${newUser.firstName} ${newUser.secondName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    })
    .catch(err => {
      console.log("Error on Auth new User", err);
    });
});
