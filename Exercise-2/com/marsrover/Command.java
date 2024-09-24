package com.marsrover;

public interface Command {
    void execute(Rover rover) throws RoverException;
}
