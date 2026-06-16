package com.enterprise.dashboard.metrics;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

/**
 * Production-ready Core Metrics Model for system telemetry pipeline.
 * Designed for JSON serialization mapping within Spring Web architectures.
 */
public class DashboardMetrics {

    private final String nodeId;
    private final long epochTimestamp;
    private final Map<String, Object> coreTelemetry;

    public DashboardMetrics(String nodeId) {
        this.nodeId = nodeId;
        this.epochTimestamp = Instant.now().getEpochSecond();
        this.coreTelemetry = new HashMap<>();
        initializeTelemetry();
    }

    private void initializeTelemetry() {
        // Simulating highly typed structured performance parameters
        this.coreTelemetry.put("networkThroughputMbps", 148.23);
        this.coreTelemetry.put("activeDbConnections", 14);
        this.coreTelemetry.put("garbageCollectionTriggered", false);
        this.coreTelemetry.put("runtimeEngine", "Java 17 / Spring Boot 3");
    }

    // Standard Enterprise Getters
    public String getNodeId() { return nodeId; }
    public long getEpochTimestamp() { return epochTimestamp; }
    public Map<String, Object> getCoreTelemetry() { return coreTelemetry; }
}
