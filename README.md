# LIVEGRAPHIX
**Overview**

This project is a real-time weather data visualization dashboard built with ReactJS, NodeJS, MongoDB, and PowerBI. The application collects, stores, and visualizes weather data, providing an interactive and insightful analysis through a PowerBI dashboard.

**Features**
1. Real-time Weather Data Collection: Fetches weather data from an external API.
2. Data Storage: Uses MongoDB to store historical weather data.
3. Frontend Visualization: ReactJS-based user interface for real-time data visualization.
4. PowerBI Dashboard: Integration with PowerBI for advanced data analysis and reporting.

**Architecture**
1. Frontend: Built with ReactJS, it displays real-time weather data and interacts with the backend API.
2. Backend: NodeJS server handles data fetching from external APIs and communicates with the MongoDB database.
3. Database: MongoDB stores the weather data.
4. PowerBI: Provides advanced visualization and analytical capabilities for the stored weather data.
   
**Prerequisites**
1. NodeJS (v14 or later)
2. MongoDB (v4.4 or later)
3. PowerBI account
4. Weather API key (e.g., OpenWeatherMap)
   
**Installation**
1. Clone the repository
git clone https://github.com/Asifa-10/LIVEGRAPHIX.git
cd weather-dashboard

2. Install backend dependencies
cd backend
npm install

3. Install frontend dependencies
cd ../frontend
npm install

**Usage**
1. Start MongoDB: Ensure your MongoDB server is running.
2. Configure Environment Variables: Create a .env file in the backend directory and add the following variables:
PORT=3001
MONGODB_URI=mongodb://localhost:27017/employee

3.Run the Backend Server
cd backend
npm start
4. Run the Frontend Development Server
cd ../frontend
npm start
5. Access the Application: Open your browser and navigate to http://localhost:3000.

**Project Structure**

LIVEGRAPHIX/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   └── package.json
│
├── client/
│   ├── public/
│   ├── src/
|   |   ├── assets/
│   │   ├── components/
|   │   ├── data/
|   │   ├── scenes/
│   │   ├── pages/
│   │   ├── App.js
|   │   ├── theme.js
│   │   └── index.js
│   └── package.json
│
└── README.md

**Configuration**
1. Backend Configuration: All backend configurations are stored in the .env file in the backend directory.
2. Frontend Configuration: Modify the API endpoint URLs in the frontend/src/config.js if necessary.
   
**PowerBI Integration**
1. Set Up PowerBI: Create a PowerBI workspace and dataset for your weather data.
2. Connect to MongoDB: Use a connector or intermediary to sync MongoDB data with PowerBI.
3. Create Reports and Dashboards: Use the PowerBI interface to create visualizations and dashboards.
