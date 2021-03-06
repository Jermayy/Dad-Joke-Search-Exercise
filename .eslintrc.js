module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "parser": "babel-eslint",
    "extends": [
        "airbnb"
    ],
    "plugins": [
        "react",
        "jest",
        "react-hooks",
        "flowtype"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "react/require-default-props": 0

    }
};
