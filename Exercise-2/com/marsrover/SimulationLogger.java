package com.marsrover;

import java.util.logging.Level;
import java.util.logging.Logger;

public class SimulationLogger {
    private static final Logger LOGGER = Logger.getLogger(SimulationLogger.class.getName());

    public static void log(String message) {
        LOGGER.log(Level.INFO, message);
    }

    public static void logError(String message, Throwable throwable) {
        LOGGER.log(Level.SEVERE, message, throwable);
    }
}