import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { LocalNotifications } from '@capacitor/local-notifications';
import './Home.css';
import { useEffect } from 'react';

const Home: React.FC = () => {
	const scheduleNotifs = async () => {
		await LocalNotifications.requestPermissions();
		await LocalNotifications.schedule({
			notifications: [
				{
					title: 'LocalNotifications test',
					body: 'ScheduleOn bug test',
					id: 1,
					schedule: {
						on: {
							second: 0,
						},
						allowWhileIdle: true,
					},
				},
			],
		});
		console.log('Notifications scheduled');
	};

	useEffect(() => {
		scheduleNotifs();
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Local Notifications</IonTitle>
				</IonToolbar>
			</IonHeader>
		</IonPage>
	);
};

export default Home;
