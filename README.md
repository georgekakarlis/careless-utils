
# ts-utils


A mini collection of small code chunks to help/ease the flow of development. It is build on top of Typescript. Tests behave as they should. 


As it is my first package it will be updated more-over often. 
You are welcome to open issues, contribute and/or further modify this source. 
Also, care to give me some tips to correct some parts of the code if you think that runs faster/better or anything! Thanks :)



## Installation

Install ts-utils with npm

```bash
  npm install careless-utils
```
    
## Documentation

The exported functions are : 
```
reverseString,
validateEmail,
generateRandomString,
toTitleCase,
generateRandomHash,
capitalizeFirstLetter,
formatDate
```
*To be added more often.

You can use the exported functions like that in your code : 
```
const locale = navigator.language;
const date = new Date();
const formattedDate = formatDate(date, locale); //pass options here
console.log(formattedDate); // e.g. "21 février 2023" for French locale
```


## Running Tests

To run tests, run the following command

```bash
  npm t
```


## Contributing

Contributions are always welcome!




## Author

- [@georgekakarlis](https://www.github.com/georgekakarlis)


## License

[ISC](https://en.wikipedia.org/wiki/ISC_license)

