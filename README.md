# Anki Adder

## Objective

The main goal of this project is to make the life easy mining cards for Anki. This code is aimed at inserting the English definition but can be changed to other purposes. If you want to do that, make sure to read the last topic. Follow the image, which illustrates how the card is going to be added.

![image](https://github.com/user-attachments/assets/3e48bea3-b961-46fb-8f7e-c2fa1cb80e54)

If the code doesn't find any phrases, it'll replace the phrase with the word you want to remember the meaning of, and the definitions are going to be the same.

# Requirements

You'll need to install the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) add-on. Please make sure the port that has been used in the AnkiConnect is the same in the code and the link to the localhost; otherwise, it's not going to work. If you want to be safe, make sure to be the same as the following image:

![image](https://github.com/user-attachments/assets/42cc058e-b777-49c3-8d36-e838b30efa88)

## How To Use

Read the comments from these files and make the necessary changes:

- CardController.js - located in the server/src/controller/
- FormCard.jsx - located in the client/src/components/FormCard/
- Index.js - located in the server/src/.

Install all necessary node_modules in the files the client uses npm and the server uses yarn. To do that in the client file you can write:

```
    npm i
```

And in the server file you do:

```
    yarn install
```

To run the code do this respectively, client and server both need to be running:

```
    npm run dev

    yarn run dev
```

Now just acess the client link and enjoy!

## What I Used To Build

I used the [reversoContext API](https://www.npmjs.com/package/reverso-api) and [wordreference API](https://www.npmjs.com/package/wordreference), with this being used to find the definition(wordreference) and the phrase(reversoContext). If you want to make changes to the language definitions or phrase phrases, I would recommend you just to change the DefinitionController and PhraseController.
