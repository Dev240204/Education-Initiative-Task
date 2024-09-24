package com.marsrover;

import java.util.ArrayList;
import java.util.List;

public class Grid {
    private int width;
    private int height;
    private List<Obstacle> obstacles;

    public Grid(int width, int height) {
        if (width <= 0 || height <= 0) {
            throw new IllegalArgumentException("Grid dimensions must be positive");
        }
        this.width = width;
        this.height = height;
        this.obstacles = new ArrayList<>();
    }

    public void addObstacle(Obstacle obstacle) {
        if (obstacle == null) {
            throw new IllegalArgumentException("Obstacle cannot be null");
        }
        if (!isValidPosition(obstacle.getPosition())) {
            throw new IllegalArgumentException("Obstacle position is outside the grid");
        }
        obstacles.add(obstacle);
    }

    public boolean isValidMove(Position position) {
        return isValidPosition(position) && !detectObstacle(position);
    }

    private boolean isValidPosition(Position position) {
        return position.getX() >= 0 && position.getX() < width &&
               position.getY() >= 0 && position.getY() < height;
    }

    public boolean detectObstacle(Position position) {
        return obstacles.stream().anyMatch(obstacle -> obstacle.getPosition().equals(position));
    }
}