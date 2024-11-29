const User = [];

module.exports = {
  //   hello() {
  //     return "Hello World ;";
  //   },
  hello() {
    return {
      text: "Hello world!",
      views: 12345,
    };
  },

  hi(){
    return "Hi Mann!"
  },

  createUser: async function ({ userInput }, req) {
    User.push({
      email: userInput.email,
      name: userInput.name,
    });
    return {
      _id: "2",
      name: "Mann",
      email: userInput.email,
      password: "xyz",
      status: "404",
      posts: [],
    };
  },
};
