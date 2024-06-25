# ThreeSpark

ThreeSpark is a starter project for Three.js with TypeScript, dat.gui, and GSAP. This project provides a solid foundation for building interactive 3D applications using Three.js, with enhanced features for smooth animations and intuitive user interfaces.

## Demo

You can see a live demo of this project at the following URL:

[ThreeSpark Demo](https://onur-celik.github.io/three-spark)

## Features

- **Three.js**: A powerful library for creating 3D graphics in the browser.
- **TypeScript**: Strongly-typed JavaScript for better code quality and development experience.
- **dat.gui**: A lightweight controller library for real-time tweaking of parameters.
- **GSAP**: High-performance animations for rich, engaging user experiences.
- **OrbitControls**: Intuitive camera controls to navigate the 3D scene.
- **Shadow Mapping**: Realistic shadows for enhanced depth perception.
- **Modular Structure**: Organized code structure for scalability and maintainability.

## Installation

To get started with ThreeSpark, clone the repository and install the dependencies:

```bash
git clone https://github.com/onur-celik/three-spark.git
cd three-spark
npm install
```

## Usage

To start the development server:

```bash
npm start
```

To build the project for production:

```bash
npm run build
```

## Project Structure

The project structure is organized into different folders for better maintainability:

```
src/
│
├── index.ts          # Main entry point
├── style.css         # Global styles
├── scenes/
│   ├── SceneSetup.ts # Scene setup with camera and renderer
│
├── objects/
│   ├── Cube.ts       # Cube object with shadow casting
│   ├── Plane.ts      # Plane object to receive shadows
│
├── lights/
│   ├── Lights.ts     # Ambient and directional lights
```

## Adding a Favicon

To add a favicon to your project, place your `favicon.ico` file in the `src` directory. The favicon will be automatically copied to the `dist` directory during the build process.

## License

This project is licensed under the MIT License.

## Contributing

If you want to contribute to this project, feel free to open a pull request or file an issue on GitHub.

## Contact

For any inquiries or questions, please contact [Mustafa Onur Celik](mailto:onurcelik@me.com).