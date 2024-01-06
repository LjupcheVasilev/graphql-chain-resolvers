# TypeScript API Project

This project is a TypeScript application that interacts with two different APIs: GeoDataSource and SpaceX.

## Features

- Fetch city information based on latitude and longitude from GeoDataSource.
- Fetch launch information from SpaceX API using a launch id.

## How to Use

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the application using `npm start`.

## Code Overview

The main file is `index.ts`. It contains two main functions:

- `city`: This function takes latitude and longitude as parameters and returns city information by making a request to the GeoDataSource API.
- `launch`: This function takes a launch id as a parameter and returns launch information by making a request to the SpaceX API.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments
- [SpaceX API](https://github.com/r-spacex/SpaceX-API)
- [GeoDataSource API](https://www.geodatasource.com/web-service/location-search)
