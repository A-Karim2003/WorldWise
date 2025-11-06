# 🌍 WorldWise - Travel Tracking Application

A modern, interactive web application that allows users to track and document their travel experiences around the world. Built with React and featuring an interactive map interface, WorldWise helps you keep a visual journal of all the places you've visited.

## ✨ Features

### 🗺️ Interactive Map

- Click anywhere on the map to add a new city to your travel log
- View all your visited cities marked on an interactive Leaflet map
- Automatic geolocation support to center the map on your current location
- Smooth map transitions and fly-to animations

### 📝 Travel Journaling

- Add cities with dates and personal notes about your trips
- Update existing trip notes and dates
- View detailed information about each city you've visited
- Automatic reverse geocoding to fetch city and country information

### 🌐 Location Features

- geolocation detection
- Automatic map positioning based on selected cities
- URL-based navigation with latitude/longitude parameters
- "Use Your Position" button for quick location access

### 📊 Data Organization

- **Cities View**: List all cities you've visited with dates
- **Countries View**: Aggregated view of all countries visited
- Click on any city to view detailed information
- Delete cities from your travel history

### 🔐 Authentication

- login system (not secure)
- Protected routes for authenticated users only
- User profile with avatar display
- Demo credentials for testing:
  - Email: `guestUser@gmail.com`
  - Password: `pass123`

### 💬 User Feedback

- Toast notifications for all CRUD operations
- Loading states and spinners for async operations
- Error handling with user-friendly messages
- Success confirmations for added/updated/deleted cities

## 🛠️ Technologies Used

### Frontend

- **React** - UI library
- **React Router** - Navigation and routing
- **React Leaflet** - Interactive maps
- **Context API** - State management
- **React DatePicker** - Date selection
- **React Toastify** - Notifications
- **CSS Modules** - Scoped styling
- **Font Awesome** - Icons

### Backend

- **JSON Server** - Mock REST API (runs on localhost:9000)

### APIs

- **OpenStreetMap** - Map tiles
- **BigDataCloud Reverse Geocoding API** - Location data
- **DiceBear Avatars** - User avatar generation

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/A_Karim2003/worldwise.git
cd worldwise
```

2.**Install dependencies**

```bash
npm install
```

3.**Start the JSON Server (backend)**

```bash
npm run server
```

This will start the API server on `http://localhost:9000`

4.**Start the development server**

```bash
npm run dev
```

The app will open at `http://localhost:5173` (or another port if 5173 is busy)

## 🎯 Usage

1. **Login** - Use the demo credentials or create your own authentication system
2. **Navigate** - Click on the map to select a location
3. **Add City** - Fill in the form with city name, date, and notes
4. **View Cities** - Switch between Cities and Countries view
5. **Update** - Click on map markers to update trip notes
6. **Delete** - Remove cities from your travel history

## 📁 Project Structure

```bash
worldwise/
├── data/                          # JSON Server database
├── node_modules/                  # Dependencies
├── public/                        # Static assets
├── src/
│   ├── assets/
│   │   ├── icon.png
│   │   └── react.svg
│   ├── components/
│   │   ├── AppLayout/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── appLayout.module.css
│   │   │   ├── Button.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── NavLinks.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── City.jsx               # City list item
│   │   ├── CityCard.jsx           # Detailed city view
│   │   ├── CityList.jsx           # Cities list container
│   │   ├── cityList.module.css    # Styles for city/country lists
│   │   ├── Country.jsx            # Country component
│   │   ├── CountryList.jsx        # Countries aggregation
│   │   ├── Image.jsx              # Image component
│   │   ├── PageMainContent.jsx    # Page content wrapper
│   │   ├── Spinner.jsx            # Loading spinner
│   │   └── UserProfile.jsx        # User profile component
│   ├── context/
│   │   ├── AuthProvider.jsx       # Authentication context
│   │   └── CitiesProvider.jsx     # Cities data context
│   ├── hooks/
│   │   ├── useGeolocation.js      # Geolocation hook
│   │   └── useUrlPosition.js      # URL params hook
│   ├── pages/
│   │   ├── Homepage/
│   │   │   ├── Homepage.jsx
│   │   │   └── homepage.module.css
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   │   └── login.module.css
│   │   ├── PageNotFound/
│   │   │   ├── PageNotFound.jsx
│   │   │   └── pageNotFound.module.css
│   │   ├── Pricing/
│   │   │   ├── Pricing.jsx
│   │   │   └── pricing.module.css
│   │   ├── Product/
│   │   │   ├── Product.jsx
│   │   │   └── product.module.css
│   │   └── WorldWise/
│   │       ├── Map/
│   │       │   └── Map.jsx
│   │       ├── SidePanel/
│   │       │   └── SidePanel.jsx
│   │       ├── TripForm.jsx
│   │       ├── UpdateNotesForm.jsx
│   │       ├── WorldWise.jsx
│   │       └── worldwise.module.css
│   ├── PageNotFound.jsx           # 404 component
│   ├── Product.jsx                # Product component
│   ├── ProtectedRoutes.jsx        # Route protection
│   ├── App.jsx                    # Root component
│   ├── index.css                  # Global styles
│   └── main.jsx                   # App entry point
├── .gitignore
├── package.json
├── README.md
└── vite.config.js                 # Vite configuration
```

## Acknowledgments

- Map tiles by [OpenStreetMap](https://www.openstreetmap.org/)
- Geocoding by [BigDataCloud](https://www.bigdatacloud.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Avatars by [DiceBear](https://dicebear.com/)
