import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const ReportOutage = ({ fetchOutages }) => {
    const [location, setLocation] = useState('');
    // user details
    const [name, setName] = useState('');
    const [status, setStatus] = useState('No Power');
    const [coords, setCoords] = useState({ latitude: null, longitude: null });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/outages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, location, status, ...coords })
        });

        if (response.ok) {
            fetchOutages();
            setLocation('');
            setStatus('');
            setCoords({ latitude: null, longitude: null });

            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            // on success redirect to home page
            navigate("/")
        }

    };

    const fetchLiveLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                setCoords({ latitude, longitude });

                try {
                    const apiKey = 'AIzaSyD_gTnQgyWt3h-rsG3wQACQxONYgh-r7Y0';
                    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
                    const data = await response.json();

                    if (data.results.length > 0) {
                        const city = data.results[0].address_components.find(component =>
                            component.types.includes("locality")
                        ).long_name;
                        setLocation(city);
                    } else {
                        setLocation('Unknown Location');
                    }
                } catch (error) {
                    console.error("Error fetching city name", error);
                    Swal.fire({
                        title: "An error Occurred",
                        text: `${error}`,
                        icon: "error"
                    })
                }
            }, (error) => {
                console.error("Error fetching location", error);
            });
        } else {
            Swal.fire({
                title: "An error Occurred",
                text: 'Geolocation is not supported by this browser.',
                icon: "error"
            })
        }
    };

    const styles = {
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            padding: '20px',
            margin: '10% auto',
            maxWidth: '400px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#'
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
        },
        button: {
            padding: '10px 20px',
            margin: '10px 0',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#388da8',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer'
        },
        coordinates: {
            fontSize: '14px',
            color: '#555',
            margin: '10px 0'
        }
    };

    return (

        <form onSubmit={handleSubmit} style={styles.formContainer}>
            <p style={{
                color: "#3d4348"
            }}>Please fill in the form below with your details</p>
            <label style={{

            }} htmlFor="name">
                Your Name:
            </label>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your Name'
                required
                style={styles.input}
            />
            <label htmlFor="location">
                Location
            </label>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City"
                required
                style={styles.input}
            />
            <button type="button" onClick={fetchLiveLocation} style={styles.button}>Use Live Location</button>
            {coords.latitude && coords.longitude && (
                <p style={styles.coordinates}>Coordinates: {coords.latitude}, {coords.longitude}</p>
            )}
            <label htmlFor="status">
                Status:
            </label>
            <input
                type="select"
                value={status}
                disabled
                placeholder="Status"
                required
                style={styles.input}
            />
            <button type="submit" style={styles.button}>Add Outage</button>
        </form>
    );
};

export default ReportOutage;
