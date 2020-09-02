const initState = {
  properties: [
    {
      id: "1",
      address: "123 Main Street",
      street: "Main Street",
      acres: "1.00",
      city: "Mason",
      county: "Warren",
      state: "Ohio",
      title: "Corner Lot Near Town",
      description:
        "This is a perfect opportunity! but close enough for it to be convenient to go into town. Perfect corner lot with a secluded drive.  ",
      price: 150,
      priceStrike: 300,
    },
    {
      id: "1",
      address: "123 Main Street",
      street: "Main Street",
      acres: "5.00",
      city: "Hamilton",
      county: "Butler",
      state: "South Carolina",
      title: "You Need This Lot Now",
      description:
        "This is a perfect opportunity to live out of town and away from the hussle and bustle, but close enough for it to be convenient to go into town. This is a sweet little town built in the 1950's,  a time period of expansion after WWII. Perfect corner lot with a secluded drive.  ",
      price: 1500,
      priceStrike: 300,
    },
    {
      id: "1",
      address: "123 Main Street",
      street: "Main Street",
      acres: "9.00",
      city: "Cincinnati",
      county: "Hamilton",
      state: "North Carolina",
      title: "Perfect Lot For You, Buy Now!",
      description:
        "This is a perfect opportunity to live out of town and away from the hussle and bustle, but close enough for it to be convenient to go into town.  ",
      price: 320,
      priceStrike: 300,
    },
    {
      id: "1",
      address: "123 Main Street",
      street: "Main Street",
      acres: "0.5",
      city: "Marion",
      county: "Marion",
      state: "Califoria",
      title: "I'm Not Going To Lie I Want Your Money!  ",
      description:
        "Buy this lot now, this is perfect for you! This is a perfect opportunity to live out of town and away from the hussle and bustle, but close enough for it to be convenient to go into town. Perfect corner lot with a secluded drive.  ",
      price: 590,
      priceStrike: 300,
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
