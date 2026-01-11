import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TimersDemo = () => {
  const [countdown, setCountdown] = useState(10);
  const [stopwatch, setStopwatch] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let countdownTimer;
    if (countdown > 0) {
      countdownTimer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(countdownTimer);
    }
    return () => clearInterval(countdownTimer);
  }, [countdown]);

  useEffect(() => {
    let stopwatchTimer;
    if (isRunning) {
      stopwatchTimer = setInterval(() => {
        setStopwatch(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(stopwatchTimer);
  }, [isRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer Demo</Text>

      {/* Countdown Timer */}
      <Text style={styles.timerLabel}>Countdown Timer:</Text>
      <Text style={styles.timer}>{countdown}s</Text>

      {/* Stopwatch */}
      <Text style={styles.timerLabel}>Stopwatch:</Text>
      <Text style={styles.timer}>{stopwatch}s</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title={isRunning ? 'Pause' : 'Start'}
          onPress={() => setIsRunning(!isRunning)}
        />
        <Button title="Reset Stopwatch" onPress={() => setStopwatch(0)} />
        <Button title="Reset Countdown" onPress={() => setCountdown(10)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timerLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  timer: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'blue',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    gap: 10,
  },
});

export default TimersDemo;