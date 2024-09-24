# Exercise-1

## TypeScript Design Patterns Exercises

This project contains implementations of various design patterns in TypeScript, organized into three main categories: Behavioral, Creational, and Structural. Each category includes two use cases demonstrating the application of different design patterns.

### Project Structure

```bash
Exercise-1/
├── src/
│   ├── BehavioralDesignPattern/
│   │   ├── WeatherStationSystem/
│   │   │   └── main.ts
│   │   └── TrafficLightSystem/
│   │       └── main.ts
│   ├── CreationalDesignPattern/
│   │   ├── CustomComputerConfigurationSystem/
│   │   │   └── main.ts
│   │   └── PaymentGatewaySystem/
│   │       └── main.ts
│   └── StructuralDesignPattern/
│       ├── CustomizableCoffeeOrderingSystem/
│       │   └── main.ts
│       └── SmartHomeDevice/
│           └── main.ts
├── dist/
│   ├── BehavioralDesignPattern/
│   ├── CreationalDesignPattern/
│   └── StructuralDesignPattern/
├── package.json
├── tsconfig.json
└── README.md
```

### Getting Started

1. Clone the repository
   ```bash
    git clone https://github.com/Dev240204/Education-Initiative-Task.git
   ```

2. Navigate to the project directory
   ```bash
   cd Exercise-1
   ```
3. Install dependencies
   ```bash
   npm install
   ```

4. Compile TypeScript files
   ```bash
   npx tsc
   ```

5. Run a specific example
   ```bash
   node dist/BehavioralDesignPattern/WeatherStationSystem/main.js
   ```

# Exercise-2

## Mars Rover Simulation

### Project Description
This project simulates a Mars Rover that navigates a grid-based terrain. The rover can move forward, turn left, and turn right while avoiding obstacles and staying within the grid boundaries. The simulation demonstrates the use of Object-Oriented Programming principles, design patterns, and best coding practices.

### Features

- Grid-based terrain with customizable size
- Obstacle detection and avoidance
- Command-based movement system
- Directional navigation (North, South, East, West)
- Status reporting

### Design Patterns Used

- Command Pattern: For encapsulating movement and turn commands
- Composite Pattern: For representing the grid and obstacles

### Project Structure
```bash
Exercise-2
│   └── com/
│      └── marsrover/
│          ├── MarsRoverSimulation.java (Main class)
│          ├── Rover.java
│          ├── Grid.java
│          ├── Position.java
│          ├── Direction.java
│          ├── Command.java
│          ├── MoveCommand.java
│          ├── TurnLeftCommand.java
│          ├── TurnRightCommand.java
│          ├── Obstacle.java
│          └── SimulationLogger.java
```

### Requirements
- Java Development Kit (JDK) 8 or higher

### Setup and Execution

1. Navigate to the Exercise-2/ directory in your terminal.
2. Compile all Java files with the following command
   ```bash
   javac com/marsrover/*.java
   ```
3. Running the Simulation
   ```bash
   java com.marsrover.MarsRoverSimulation
   ```

### Customization
You can customize the simulation by modifying the MarsRoverSimulation.java file:

- Change the grid size
- Add or remove obstacles
- Modify the initial position and direction of the rover
- Alter the sequence of commands
