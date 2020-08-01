import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.outputText}>0</Text>
      </View>
      <View style={styles.btnGroup}>
        <View style={styles.btn}>
          <Text style={styles.text}>AC</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>C</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>%</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>/</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>7</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>8</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>9</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>X</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>-</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>+</Text>
        </View>
        <View style={styles.zeroBtn}>
          <Text style={styles.text}>0</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>.</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>=</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F3",
    justifyContent: "flex-end",
  },
  btnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 1,
    justifyContent: "center",
  },
  output: {
    height: 70,
    paddingEnd: 35,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  outputText: {
    fontSize: 60,
    fontWeight: "bold",
  },
  btn: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F3",
    borderRadius: 18,
    shadowColor: "#FFFFFF",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 4,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  zeroBtn: {
    width: 155,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F3",
    borderRadius: 18,
    shadowColor: "#FFFFFF",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 4,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
})
