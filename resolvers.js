let message = 'Hello, World!';
let email = 'example@example.com';
const resolvers = {
  hello: () => 'Hello! Welcome To GraphQL',
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
export default resolvers;
