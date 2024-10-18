// src/services/mqttService.tsx
import { useEffect, useState } from 'react';
import { connect, MqttClient } from 'mqtt';

const MQTT_BROKER_URL = 'wss://broker.emqx.io:8084/mqtt'; // WebSocket connection for MQTT
const TOPIC = 'greenhouse/sensors';

export function useMQTT() {
  const [sensorData, setSensorData] = useState<any>(null); // Use `any` to avoid TS issues with dynamic data

  useEffect(() => {
    const client: MqttClient = connect(MQTT_BROKER_URL);

    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe(TOPIC, (err) => {
        if (err) console.error('Subscription error:', err);
      });
    });

    client.on('message', (topic, message) => {
      setSensorData(JSON.parse(message.toString()));
    });

    // Cleanup function to disconnect the client on unmount
    return () => {
      if (client) {
        client.end(() => console.log('Disconnected from MQTT broker'));
      }
    };
  }, []); // Empty dependency array to run only once

  return sensorData;
}
