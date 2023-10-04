import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
	const [region, setRegion] = useState({
		latitude: 51.5079145,
		longitude: -0.0899163,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	});
	// const tokyoRegion = {
	// 	latitude: 35.6762,
	// 	longitude: 139.6503,
	// 	latitudeDelta: 0.01,
	// 	longitudeDelta: 0.01,
	// };

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				//onRegionChangeComplete runs when the user stops dragging MapView
				onRegionChangeComplete={region => setRegion(region)}
				// initialRegion={tokyoRegion}
			>
				<Marker coordinate={region} />
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		flex: 1, //the container will fill the whole screen.
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});
