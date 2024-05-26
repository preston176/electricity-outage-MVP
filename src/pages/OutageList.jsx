import { useState, useEffect } from 'react';

const OutageList = () => {
    const [outages, setOutages] = useState([]);

    useEffect(() => {
        const fetchOutages = async () => {
            const response = await fetch('http://localhost:3000/outages');
            const data = await response.json();
            setOutages(data);
        };

        fetchOutages();
    }, []);

    const styles = {
        container: {
            padding: '20px',
            justifyContent: 'center',
            margin: '15% auto',
            maxWidth: '600px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff'
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#007bff'
        },
        list: {
            listStyleType: 'none',
            padding: '0'
        },
        listItem: {
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd'
        },
        listItemHeading: {
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        listItemText: {
            margin: '0'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Reported Outages</h2>
            <ul style={styles.list}>
                {outages.map((outage) => (
                    <li key={outage.id} style={styles.listItem}>
                        <h3 style={styles.listItemHeading}>{outage.location}</h3>
                        <p style={styles.listItemText}>{outage.status}</p>
                        {outage.latitude && outage.longitude && (
                            <p style={styles.listItemText}>
                                Coordinates: {outage.latitude}, {outage.longitude}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OutageList;
