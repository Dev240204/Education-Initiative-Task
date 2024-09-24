package com.marsrover;

public class TurnRightCommand implements Command {
    @Override
    public void execute(Rover rover) throws RoverException {
        if (rover == null) {
            throw new IllegalArgumentException("Rover cannot be null");
        }
        rover.turnRight();
    }
}