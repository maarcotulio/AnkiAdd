# Anki Adder

The main goal of this project is to make the life easy mining cards for Anki. This code is aimed at inserting the definitions with phrases. 

# Getting Started
## Requirements
You'll need to install the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) add-on. Please make sure the port that has been used in the AnkiConnect is the same in the code and the link to the localhost. Otherwise, it's not going to work. If you want to be safe, make sure to be the same as the following image:

```JSON
{
    "apiKey": null,
    "apiLogPath": null,
    "ignoreOriginList": [],
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOriginList": [
        "http://localhost"
    ]
}
```
Also, you going to need the Node, **the project was build in the node version 22** and package manager here I going to use yarn.

## Installing

Go to the folder Config and read the comments in the files and make the necessary changes. Install the dependecies in the client and server files
```
    yarn
```

To run the code use

```
    yarn dev
```

Be sure of Anki is open to add the cards.

# Built With

- [Dictionary API](https://dictionaryapi.dev/)
- Node
- React
- Vite

# Disclaimer
For now, the AnkiAdd only have English definitions.
