# NextHire

**Description:**
This project is a job search application inspired by Naukri.com, built using React.Here users can signup and login their account. The application allows users to search for jobs using the Adzuna API, view job details, and save jobs to their wishlist.

**Features:**
Job search by title, location.
Job listing and detailed job view.
User authentication (login, signup).
Wishlist functionality to save favorite jobs.
Responsive design for mobile and desktop.

## Tech Stack

- **React.js** - Interactive, component-based UI
- **Redux Toolkit** - Efficient global state management
- **Firebase** - Authentication (Login, Signup, Session Persistence, Forget password)
- **Tailwind CSS** - Responsive and utility-first styling
- **React Router** - Seamless page navigation
- **React Icons** - For consistent and modern icon usage
- **API** - Adzuna API


## Installation
Prerequisites
Before you begin, ensure you have the following installed:
Node.js
Adzuna API key (can be obtained from Adzuna Developers)
  ### Steps to Access the App:
  
  1. **Clone the repository**:
      ```bash
      git clone https://github.com/Yogesh-Ginti/naukri-clone.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd NextHire
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Configure environment variables**:  
   Create a `.env` file in the root directory and add the following:
    ```bash
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_AUTH_DOMAIN=your-firebase-auth-domain
    VITE_PROJECT_ID=your-firebase-project-id
    VITE_STORAGE_BUCKET=your-firebase-storagebucket
    VITE_MESSAGING_SENDER_ID=your-firebase-messaging-senderid
    VITE_FIREBASE_APP_ID=your-firebase-appid
    VITE_MEASUREMENT_ID=your-firebase-measurement-id
    VITE_APP_KEY=your-api-key
    VITE_APP_ID=your-api-app-id
    VITE_API_BASE_URI=https://fakestoreapi.com
    ```

5. **Run the application**:
    ```bash
    npm run dev
    ```  
    Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Usage
- Visit the homepage to search for jobs by title, location, or salary.
- Log in or sign up to save jobs to your wishlist.
- Browse job listings and view detailed job descriptions.
- add jobs on your bookmarks




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

##License
This project is licensed under the MIT License.
