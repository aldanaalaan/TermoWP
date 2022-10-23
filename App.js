import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
} from "react-native";
import conversor from "./Modules/myTermo.js";

const App = () => {
	const [inMode, setInMode] = useState("C");
	const [outMode, setOutMode] = useState("C");
	const [salida, setSalida] = useState(0);
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.textPrimary}>Entrada</Text>
			<View style={styles.subcontainer}>
				<TouchableOpacity
					style={
						inMode == "C"
							? styles.btnSelectorSelected
							: styles.btnSelector
					}
					onPress={() => {
						setInMode("C");
					}}
				>
					<Text style={styles.text}>Celcius</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						inMode == "F"
							? styles.btnSelectorSelected
							: styles.btnSelector
					}
					onPress={() => {
						setInMode("F");
					}}
				>
					<Text style={styles.text}>Fahrenheit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						inMode == "K"
							? styles.btnSelectorSelected
							: styles.btnSelector
					}
					onPress={() => {
						setInMode("K");
					}}
				>
					<Text style={styles.text}>Kelvin</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.textPrimary}>Salida:</Text>
			<View style={styles.subcontainer}>
				<TouchableOpacity
					style={
						outMode == "C"
							? styles.btnSelectorSelected
							: styles.btnSelector
					}
					onPress={() => {
						setOutMode("C");
					}}
				>
					<Text style={styles.text}>Celcius</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						outMode == "F"
							? styles.btnSelectorSelected
							: styles.btnSelector
					}
					onPress={() => {
						setOutMode("F");
					}}
				>
					<Text style={styles.text}>Fahrenheit</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						outMode == "K"
							? styles.btnSelectorSelected
							: styles.btnSelector
					}
					onPress={() => {
						setOutMode("K");
					}}
				>
					<Text style={styles.text}>Kelvin</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.subcontainer}>
				<TextInput
					placeholder="Entrada"
					style={styles.input}
					keyboardType="numeric"
					onChange={(value) => {
						value.nativeEvent.text == ""
							? setSalida(0)
							: setSalida(
									conversor(
										inMode,
										outMode,
										parseFloat(value.nativeEvent.text)
									)
							  );
					}}
				/>
			</View>
			<View style={styles.subcontainer}>
				<Text style={styles.text}>Escribe para actualizar</Text>
			</View>
			<Text style={styles.text}>
				Resultado: {salida}°{outMode}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3C4048",
		alignItems: "center",
		justifyContent: "center",
	},
	subcontainer: {
		flexDirection: "row",
	},
	text: {
		color: "#EAEAEA",
	},
	textPrimary: {
		color: "#00ABB3",
	},
	btnSelector: {
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00ABB3",
		width: 75,
		height: 75,
		borderRadius: 15,
	},
	btnSelectorSelected: {
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#006468",
		width: 75,
		height: 75,
		borderRadius: 15,
	},
	btnEnviar: {
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#121315",
		width: 75,
		height: 50,
		borderRadius: 25,
	},
	input: {
		height: 40,
		width: 150,
		textAlign: "center",
		backgroundColor: "#5b636f",
		color: "#FFFFFF",
		borderRadius: 10,
		margin: 20,
	},
});

export default App;
