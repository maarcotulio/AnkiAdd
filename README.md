# Anki Adder

## Objective

The main goal of this project is to make the life easy mining cards for Anki. This code is aimed at inserting the English definitions with phrases when possible. Follow the image, which illustrates how the card is going to be added.

![image](https://github.com/user-attachments/assets/e10af457-a1c9-4d5b-9b2d-a91bd28998ee)

If the code doesn't find any phrases, it'll replace the phrase with the word you want to remember the meaning of, and the definitions are going to be the same.

# Requirements

You'll need to install the [AnkiConnect](https://ankiweb.net/shared/info/2055492159) add-on. Please make sure the port that has been used in the AnkiConnect is the same in the code and the link to the localhost and you are using node in version 20.17.0. Otherwise, it's not going to work. If you want to be safe, make sure to be the same as the following image:

![image](https://github.com/user-attachments/assets/42cc058e-b777-49c3-8d36-e838b30efa88)

## How To Use

Go to the folder Config and read the comments in the files and make the necessary changes.

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

Now open the client link, **make sure the Anki is open** and enjoy! All searched words if have in the dictionary going to be added.

# What I used

I have used a [Dictionary API](https://dictionaryapi.dev/).
