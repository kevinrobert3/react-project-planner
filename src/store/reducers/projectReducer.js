const initState = {
  projects: [
    {
      id: 1,
      title: "Help me find Nemo",
      content: "yeah yeah bluh bluh"
    },
    {
      id: 2,
      title: "the other one",
      content: "yeah yeah bluh bluh"
    },
    {
      id: 3,
      title: "the eggs??",
      content: "yeah yeah bluh bluh"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  //console.log(action.type)
  switch (action.type) {
    //default:
    case "CREATE_PROJECT":
      console.log("Created Project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("Error Creating Project:", action.error);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
