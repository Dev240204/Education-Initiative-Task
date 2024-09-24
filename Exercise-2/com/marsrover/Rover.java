package com.marsrover;

public class Rover {
    private Position position;
    private Direction direction;
    private Grid grid;

    public Rover(Position position, Direction direction, Grid grid) {
        if (position == null || direction == null || grid == null) {
            throw new IllegalArgumentException("Position, direction, and grid cannot be null");
        }
        this.position = position;
        this.direction = direction;
        this.grid = grid;
    }

    public void move() throws RoverException {
        Position newPosition = position.move(direction);
        if (grid.isValidMove(newPosition)) {
            position = newPosition;
            SimulationLogger.log("Rover moved to " + position);
        } else {
            throw new RoverException("Movement blocked. Obstacle detected or out of bounds.");
        }
    }

    public void turnLeft() {
        direction = direction.turnLeft();
        SimulationLogger.log("Rover turned left. Now facing " + direction);
    }

    public void turnRight() {
        direction = direction.turnRight();
        SimulationLogger.log("Rover turned right. Now facing " + direction);
    }

    public String getStatusReport() {
        return String.format("Rover is at %s facing %s. %s", 
            position, direction, grid.detectObstacle(position) ? "Obstacle detected." : "No obstacles detected.");
    }
}