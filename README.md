# Taskberry

Taskberry is a MERN stack Todo App that allows users to add, edit, and delete tasks. Tasks are stored in a database on www.mongodb.com.

Taskberry features a pleasant UI with strawberry vibes :).

> All tasks are publicly accessible. If you try the app from my demo version on Netlify, be mindful of what you post! Feel free to leave a nice message to brighten another user's day :D

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Nodemon

### Frontend
- React.js
- Axios
- Bootstrap
- React DOM

## Installation

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend folder and add the following variable:
   ```sh
   MONGODB_URI=<your_mongodb_connection_string>
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```

## Deployment  
You can test the live version of Taskberry here:  
🔗 [Taskberry Live Demo](https://katsakos-taskberry.netlify.app/)

> **Note:** On Render.com’s free plan, backend servers go idle after 15 minutes of inactivity. If the app hasn’t been used recently, the first request may take up to one minute to respond.

## Contribution

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is open-source under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.

## Acknowledgments

This project was developed as part of the Social Hackers Academy Bootcamp.

🦖
