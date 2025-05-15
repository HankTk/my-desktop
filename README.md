# My Desktop Monorepo

This repository contains a suite of web, desktop, and server applications, each in its own directory. The projects cover a range of technologies including React, Electron, Node.js, TypeScript, Three.js, and more.

## Included Projects

- **MyWebGL**: React + Three.js demo showing how to form self-contained components with their own state and user interaction.
- **MyTetris**: Simple PWA Tetris game built with React. ([Demo](https://tetris-react.web.app/))
- **MyServer**: RESTful API built with Node.js, Express, MongoDB, and TypeScript. Stores contact information and provides HTTP endpoints.
- **MyDiagrams**: Minimal diagrammatic tool built with HTML5 Canvas & React. [Blog post](https://www.integrtr.com/building-diagram-tool-with-canvas-react/)
- **MyClock**: React analog clock. (No description provided in package.json)
- **MyClient**: Electron + React + TypeScript boilerplate for building cross-platform desktop apps.
- **MySuite**: Monorepo of libraries for making game development with React and Three.js easier and more powerful. Includes tools for VFX, UI, camera rigs, and more.

## Getting Started

To install dependencies for all projects, run the following in each subdirectory (or use your preferred package manager):

```sh
cd <ProjectDirectory>
yarn install # or npm install
```

### Running All Apps

You can use the provided `start.sh` script to start all major applications in new Terminal windows (macOS only):

```sh
./start.sh
```

This will:
- Free up ports as needed
- Start each app in its own Terminal window

### Running Individual Apps

Each project can be run, built, and tested individually. Below are the instructions for launching each application:

- **MyWebGL**
  ```sh
  cd MyWebGL
  yarn install # or npm install
  yarn start   # or npm start
  # Opens at http://localhost:3010
  ```

- **MyTetris**
  ```sh
  cd MyTetris
  yarn install # or npm install
  yarn start   # or npm start
  # Opens at http://localhost:8080
  ```

- **MyServer**
  ```sh
  cd MyServer
  yarn install # or npm install
  yarn run dev # for development mode
  # or
  yarn run prod # for production mode
  # Default URL: http://localhost:9010
  ```

- **MyDiagrams**
  ```sh
  cd MyDiagrams
  yarn install # or npm install
  yarn start   # or npm start
  # Opens at http://localhost:3000
  ```

- **MyClock**
  ```sh
  cd MyClock
  yarn install # or npm install
  yarn start   # or npm start
  # Opens at http://localhost:3030
  ```

- **MyClient** (Electron app)
  ```sh
  cd MyClient
  yarn install # or npm install
  yarn start   # or npm start
  # Launches the Electron desktop app
  ```

- **MySuite**
  ```sh
  cd MySuite
  yarn install # or npm install
  # See MySuite/README.md for details on running individual packages or example apps
  ```

See the `README.md` in each subdirectory for more details and specific instructions.

## License

Each subproject may have its own license. See individual directories for details. Unless otherwise specified, content is provided under the MIT License. 