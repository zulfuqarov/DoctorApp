import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DetailsSelectDate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.selectDateText}>Select Date</Text>

      <View style={styles.dateSelectorContainer}>
        <TouchableOpacity style={styles.dateSelector}>
          <Text style={styles.dateText}>Day</Text>
          {/* ShowMore component burada bir ikon ya da benzer bir şey olabilir */}
        </TouchableOpacity>

        <TouchableOpacity style={styles.dateSelector}>
          <Text style={styles.dateText}>Month</Text>
          {/* ShowMore component burada bir ikon ya da benzer bir şey olabilir */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 16, 
    justifyContent: 'flex-start', 
  },
  selectDateText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 0.5, 
    marginBottom: 16, 
  },
  dateSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%', 
    flexWrap: 'wrap', 
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: '#F4F4F6', 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D6E1', 
    width: '48%', 
    marginBottom: 16, 
  },
  dateText: {
    fontSize: 16, 
    fontWeight: 'normal',
    color: '#888', 
    letterSpacing: 0.3, 
    lineHeight: 22, 
  },
});

export default DetailsSelectDate;
