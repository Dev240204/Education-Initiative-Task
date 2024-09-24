package com.marsrover;

public class RoverException extends Exception {
    public RoverException(String message) {
        super(message);
    }

    public RoverException(String message, Throwable cause) {
        super(message, cause);
    }
}