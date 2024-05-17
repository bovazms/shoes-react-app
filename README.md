# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

https://in.video.search.yahoo.com/search/video;_ylt=Awrx_PDOGNxlFPoQSAm7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?p=ai+chatting+ai+character&type=E211IN714G91815&ei=UTF-8&fr=mcafee&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOVP.CgnE_H7GkJIa0y6KLWwEuwEsDh%26pid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DWPAHhdruPxI&tit=Create+Your+Own+Custom+Chatbot+with+Character+AI&pos=2&vid=076ebe9b8177bebd7429a928ca883ba4&sigr=V1FNkKB3S7sv&sigt=tFKMNcqPRRcB&sigi=AoAi1nsjSEI1




/* html, body {
    height: 120%;
    margin: 0;
  } */
  
  .BACKGROUND_IMG {
    background-image: url("../images/pexels-mnz-1598505\ \(1\).jpg");
    background-size: cover;
    height: 800px;
    margin: 0%;
    /* background-position: center; */
    /* background-repeat: no-repeat; */
    
  }
  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
  }
  
  h6 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
  }
  
  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #222;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 1rem;
  }
  
  button:hover {
    background-color: #111;
  }
  


import React, { useContext, useState } from 'react';
import './Adminusers.css'; 
import Sidebar from './Sidebar';
import { MyContext } from '../components/MyContext';

function Adminusers() {
  const { user, setUser } = useContext(MyContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [bannedUsers, setBannedUsers] = useState([]);

  const userClick = (user) => {
    setSelectedUser(user);
  };

  const banUser = (user) => {
    setBannedUsers([...bannedUsers, user]);
    setUser(user.filter(u => u.id !== user.id));
  };

  return (
    <div className="admin-users-container" style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Sidebar/>
      </div>
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phno</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id} className="user-row">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.phno}</td>
              <td>
                <button onClick={() => userClick(user)}>View Details</button>
                <button onClick={() => banUser(user)}>Ban User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Ph no:</strong> {selectedUser.phno}</p>
        </div>
      )}

      <h1>Banned Users</h1>
      <ul>
        {bannedUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Adminusers;


