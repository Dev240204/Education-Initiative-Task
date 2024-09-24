package com.marsrover;

public class Obstacle {
    private final Position position;

    public Obstacle(int x, int y) {
        this.position = new Position(x, y);
    }

    public Position getPosition() {
        return position;
    }
}