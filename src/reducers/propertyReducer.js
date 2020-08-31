const initState = {
    listing: [
      {
        id: "1",
        address: "123 Main Street",
        street: "Main Street",
        acres: "1.00",
        city: "Mason",
        county: "Warren",
        state: "Ohio",
      },
    ],
  };
  
  const propertyReducer = (state = initState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default propertyReducer;
  