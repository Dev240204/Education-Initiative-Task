package com.marsrover;

import java.util.Arrays;
import java.util.List;

public class MarsRoverSimulation {
    public static void main(String[] args) {
        try {
            Grid grid = new Grid(10, 10);
            grid.addObstacle(new Obstacle(2, 2));
            grid.addObstacle(new Obstacle(3, 5));

            Rover rover = new Rover(new Position(0, 0), Direction.NORTH, grid);
            
            List<Command> commands = Arrays.asList(
                new MoveCommand(),
                new MoveCommand(),
                new TurnRightCommand(),
                new MoveCommand(),
                new TurnLeftCommand(),
                new MoveCommand()
            );

            for (Command command : commands) {
                try {
                    command.execute(rover);
                } catch (RoverException e) {
                    SimulationLogger.logError("Error executing command: " + e.getMessage(), e);
                }
            }

            System.out.println(rover.getStatusReport());
        } catch (Exception e) {
            SimulationLogger.logError("Unexpected error in simulation: " + e.getMessage(), e);
        }
    }
}