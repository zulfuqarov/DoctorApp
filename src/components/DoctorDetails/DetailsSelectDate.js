import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailsSelectDate = () => {
  const [showDaySelector, setShowDaySelector] = useState(false);
  const [showTimeSelector, setShowTimeSelector] = useState(false);

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const formattedDate = selectedDay.toLocaleDateString('en-GB').replace(/\//g, '-');
  const formattedDateTime = selectedTime.toLocaleTimeString('tr-TR').slice(0, 5);

  const handleConfirmDate = (date) => {
    setSelectedDay(date)
    setShowDaySelector(false);
  }

  const handleConfirmTime = (time) => {
    setSelectedTime(time)
    setShowTimeSelector(false);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.selectDateText}>Tarixi Seçin</Text>
      <View style={styles.dateSelectorContainer}>
        <TouchableOpacity
          style={styles.dateSelector}
          onPress={() => setShowDaySelector(true)}>
          <Text style={styles.dateText}>
            {formattedDate ? `Tarix: ${formattedDate}` : 'Tarixi'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.dateSelector}
          onPress={() => setShowTimeSelector(true)}>
          <Text style={styles.dateText}>
            {formattedDateTime ? `Saat: ${formattedDateTime}` : 'Saatı'}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={showDaySelector}
          mode="date"
          date={selectedDay}
          onConfirm={handleConfirmDate}
          onCancel={() => setShowDaySelector(false)}
        />

        <DateTimePickerModal
          isVisible={showTimeSelector}
          mode="time"
          is24Hour={true}
          onConfirm={handleConfirmTime}
          onCancel={() => setShowTimeSelector(false)}
        />

      </View>
      <View style={styles.ReservationView}>
        <TouchableOpacity style={styles.ReservationButton}>
          <Text style={styles.ReservationText}>Qeyddiyatdan Keçin</Text>
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
    fontSize: wp("6%"),
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
    fontSize: wp("4%"),
    fontWeight: 'normal',
    color: '#888',
    letterSpacing: 0.3,
    lineHeight: 22,
  },
  ReservationView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 35,
  },
  ReservationButton:{
    backgroundColor: '#2E6FF3',
    padding: 16,
    borderRadius: 8,
  },
  ReservationText:{
    color: 'white',
    fontSize: wp("4%"),
    fontWeight: 'bold'
  }
});

export default DetailsSelectDate;
