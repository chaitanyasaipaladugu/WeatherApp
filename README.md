# 🌤️ Weather App

A React weather application that lets users search by city, view current conditions, and save favorite cities. Built with React, Redux Toolkit, and React-Redux. Uses the OpenWeatherMap API.

## Features

- Search weather by city name
- Display temperature, humidity, and wind speed
- Add/remove favorite cities
- One-click to view weather for a favorite city

## Tech Stack

- React 19
- Redux Toolkit
- React-Redux
- Create React App (react-scripts)

## Getting Started

### Prerequisites

- Node.js 16+ (18+ recommended)
- npm 7+

### Installation

```bash
cd weatherapp
npm install
# Ensure Redux deps (if not already installed)
npm install @reduxjs/toolkit react-redux
```

### Environment Setup (API Key)

This app uses OpenWeatherMap. The example code currently has a demo key in `src/features/weather/WeatherSlice.js`. For production, create a free key and store it in an environment variable.

1. Create `.env` in the project root (same level as package.json):

```bash
REACT_APP_OPENWEATHER_API_KEY=your_key_here
```

2. Update `src/features/weather/WeatherSlice.js` to read from `process.env.REACT_APP_OPENWEATHER_API_KEY`.

### Run the app

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Project Structure

```
weatherapp/
  public/
  src/
    app/store.js           # Redux store
    App.js                 # Root component/layout
    components/
      WeatherSearch.js     # City input + search
      WeatherDisplay.js    # Current weather output
      FavoritesList.js     # Favorite cities list
    features/weather/
      WeatherSlice.js      # Slice, async thunk for fetching
```

## Usage

1. Enter a city name and click Search
2. View temperature, humidity, and wind speed
3. Click "Add to Favorites" to save the city
4. Use the favorites list to quickly view or remove cities

## Troubleshooting

- App not rendering or blank screen

  - Ensure Redux dependencies are installed: `npm install @reduxjs/toolkit react-redux`
  - Restart the dev server after installation

- "City not found" error

  - Check the city spelling
  - Verify your API key is valid if you replaced the demo key

- CORS or network errors
  - Check your internet connection
  - Verify the OpenWeatherMap API status and your account limits

## Scripts

```bash
npm start     # Start dev server
npm build     # Create production build
npm test      # Run tests
```

## License

This project is for learning purposes. Adapt as needed for your own use.

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
