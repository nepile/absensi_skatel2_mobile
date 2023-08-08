import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import axios from "axios";
import { presensiHarianApi } from "../../../routes/Api";
import { getToken, getUserId } from "../../../utils/Session";

export default function Today({ navigation }) {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false); // State for RefreshControl

  const fetchData = async () => {
    try {
      const token = await getToken();
      const userId = await getUserId();
      const response = await axios.get(`${presensiHarianApi}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const dataFromAPI = response.data.data;

      // Filter the data to keep only rows with user_id 8
      const filteredData = dataFromAPI.filter((row) => row.user_id === userId);

      setTableData(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await fetchData();
    setIsRefreshing(false);
  };

  const tableHead = ["#", "Date", "Time", "Presensi"];

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows
          data={tableData.map((row, index) => [
            index + 1,
            `${row.day} ${row.month} ${row.year}`, // Menggabungkan day, month, year
            row.time,
            row.category,
          ])}
          textStyle={styles.text}
        />
      </Table>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
