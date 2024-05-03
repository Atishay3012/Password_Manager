import React from 'react';
import Navbar from './Navbar'


const About = () => {
  return (
    <div>
    <Navbar />
    <div className="container mx-auto px-4 py-8" style={{ backgroundImage: `url(https://www.forbes.com/advisor/wp-content/uploads/2023/09/best_android_password_managers_-_article_image.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-2xl font-bold mb-4">About Our Password Manager Project</h2>
      <p className="mb-4">
        Our password manager project aims to provide a secure and convenient solution for managing passwords and sensitive information. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, our application offers a robust platform for users to store, organize, and retrieve their login credentials and other important data.
      </p>
      <h3 className="text-lg font-bold mb-2">Key Features:</h3>
      <ul className="list-disc pl-4 mb-4">
        <li>
          <strong>Secure Password Storage:</strong> Utilizing advanced encryption techniques, our password manager ensures that user passwords are securely stored in the database, protecting them from unauthorized access.
        </li>
        {/* <li>
          <strong>User Authentication:</strong> We implement a robust authentication system to verify the identity of users, preventing unauthorized access to their accounts and sensitive information.
        </li> */}
        <li>
          <strong>Password Generation:</strong> Our password manager includes a feature for generating strong and unique passwords, helping users improve their online security practices.
        </li>
        <li>
          <strong>Organization and Categories:</strong> Users can organize their passwords into different categories or folders, making it easier to manage and locate specific credentials.
        </li>
        <li>
          <strong>Cross-Platform Accessibility:</strong> Our application is accessible across various devices and platforms, allowing users to securely access their passwords anytime, anywhere.
        </li>
        <li>
          <strong>Responsive Design:</strong> With a responsive design, our password manager adapts seamlessly to different screen sizes, providing a consistent and user-friendly experience on desktops, tablets, and smartphones.
        </li>
      </ul>
      <h3 className="text-lg font-bold mb-2">Technologies Used:</h3>
      <ul className="list-disc pl-4 mb-4">
        <li>Frontend: React.js, HTML, tailwind-CSS, JavaScript</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB</li>
         <li>Encryption: Bcrypt.js</li>
        <li>Deployment: Heroku</li>
      </ul>
      <h3 className="text-lg font-bold mb-2">Security Measures:</h3>
      <ul className="list-disc pl-4 mb-4">
        <li>
          <strong>Encryption:</strong> We encrypt user passwords before storing them in the database using industry-standard encryption algorithms to ensure data security.
        </li>
        <li>
          <strong>HTTPS:</strong> Our application uses HTTPS to encrypt data transmitted between the client and server, providing an additional layer of security.
        </li>
        <li>
          <strong>Input Validation:</strong> We validate user input to prevent common security vulnerabilities such as SQL injection and cross-site scripting (XSS) attacks.
        </li>
         
      </ul>
      <p>
        For more information or to contribute to the project, please visit our GitHub repository: <a href="https://github.com/Atishay3012/Password-Manger" className="text-blue-500">Project Repository</a>.
      </p>
    </div>
    </div>
   );
};

export default About;
