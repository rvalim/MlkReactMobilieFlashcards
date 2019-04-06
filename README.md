This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

# Mobile Flash Cards

This project was made following instructions of the Udacity's course React Nanodegree Program.

Need to be honest with you, I don't give so much attention to the CSS so I tried to be focus on the functionalities and understant as much as I can about Expo, React-Native and working with mobiles.

I build and destruct this project some times, this is my way learning, so I could compare the best ways(at least I think it is) to write the code and structure my components and AsyncStorage.

## About Development and Testing

It was made using VSCode and Android Studio to emulate a mobile phone, the android version used was the 8.0. Tests for IOS was made by Expo Snack. 

## Structure

Bellow there is some comments about the application structure, some obvious things like _what action deck does? It triggers the actions for decks_, it was ignored and not described here ( =D ).  

├── src                   # Where the intelligence lives
|   ├── actions           # All the actions responsible to trigger the updates
|   ├── components        # Customized components 
|       └── navControl.js # Routes's implementation, responsible for loading all components
|   ├── middleware        # Middlewares for the app, the logger stays in here
|   ├── reducers          # Reducers responsible for updating the state
|   ├── store.js          # Where the store lives
|   └── utils             # Place to put shared files
|       ├── _data.js      # The way I work with AsyncStorage, the structure is in here
|       └── api.js        # A facede to work with_ _data.js_, so components can be more abstractive
└── App.js                # Where I load initial data and _navControl.js_

## First steps

All you need to do is run the command bellow to install all dependencies

### Dependencies

    * Expo (https://www.npmjs.com/package/expo)
    * Expo Snack: https://snack.expo.io/ (Maybe be an option same times)
    * Optional
        * Expo App for Mobile - if you want to test it using your own phone
        * Emulator
            * Android Studio - to run locally on Android Emulator
            * XCode - to run locally on Apple Emulator

Instructions for expo can be foung at https://expo.io/

### `npm install`

And then this other command to get things running

### `npm start`

Runs the app in the development mode.<br>

It rund the _expo start_, command to initiate the mobile emulator.

Please read carfully the _Dependencies_ section for instructions.