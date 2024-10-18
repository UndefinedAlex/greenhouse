import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMQTT } from '../services/mqttService';
import { supabase } from '../config/supabaseClient';

type SensorData = { 
  id: number; 
  temperature_dht: number; 
  humidity: number;
  temperature_ds18b20: number;
  moisture: number;
  created_at: string; 
};

export default function MonitoringScreen() {
  const sensorData = useMQTT();
  const [dbData, setDbData] = useState<SensorData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        const { data, error } = await supabase
        .from('sensors') // Using only one argument
        .select('*')
        .eq('id', 1);

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setDbData(data || []);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensor Monitoring</Text>
      <Text>MQTT Data: {JSON.stringify(sensorData)}</Text>
      <Text>DB Data: {JSON.stringify(dbData)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
