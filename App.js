import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

export default function App() {
  const [state, setState] = useState({
    input: "",
    factor: "",
    result: 0,
    flag: "Not",
  })
  const Clicked = (type) => {
    let text = { ...state }
    if (type === "AC") {
      text.input = ""
      text.factor = ""
      text.result = 0
      text.flag = "Not"
    } else if (type === "C") {
      if (text.input.length >= 1) text.input = text.input.substr(0, text.input.length - 1)
    } else if (
      text.input.length >= 1 &&
      (type === "/" || type === "X" || type === "-" || type === "+" || type === "=")
    ) {
      if (text.flag === "Not") {
        if (type === "=") {
          null
        } else {
          text.flag = "Yes"
          text.input = text.input + "" + type
        }
      } else if (text.flag === "Yes") {
        console.log(text.factor)
        let [first, second] = text.input.split(text.factor)
        first = parseFloat(first)
        second = parseFloat(second)
        switch (text.factor) {
          case "/": {
            text.result = first / second
            break
          }
          case "-": {
            text.result = first - second
            break
          }
          case "+": {
            text.result = parseFloat(first) + parseFloat(second)
            break
          }
          case "X": {
            text.result = first * second
            break
          }
          default:
            // null
            text.flag = "Not"
        }
        if (type === "=") {
          text.input = text.result + ""
        } else {
          text.input = text.result + "" + type
        }
      }
      if (type === "=") {
        text.factor = ""
      } else {
        text.factor = type
      }
    } else {
      text.input = text.input + "" + type
    }
    setState(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.output}>
        {console.log(state)}
        <Text style={styles.outputText}>{state.input}</Text>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("AC")}>
          <Text style={styles.text}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("C")}>
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("/")}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("7")}>
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("8")}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("9")}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("X")}>
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("4")}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("5")}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("6")}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("-")}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("1")}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("2")}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("3")}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("+")}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zeroBtn} onPress={() => Clicked("0")}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked(".")}>
          <Text style={styles.text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Clicked("=")}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
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
