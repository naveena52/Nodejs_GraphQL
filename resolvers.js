let message = 'Hello, World!';
let email = 'example@example.com';
let hello='hello welcome';
const resolvers = {
  hello: () => hello,
  message: () => message,
  email: () => email,
  setMessage: ({ message: newMessage }) => {
    message = newMessage;
    return message;
    
  },
  setEmail: ({ email: newEmail }) => {
    email= newEmail;
    return email;
  }
  
};

module.exports = {resolvers};