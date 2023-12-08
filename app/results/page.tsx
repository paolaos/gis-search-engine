'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './results.module.css';

export default function Results() {
    const [datasets, setDatasets] = useState([]);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [selectedEPSG, setSelectedEPSG] = useState('');
    const [selectedAttribute, setSelectedAttribute] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Fake data for filters (replace these with real data later)
    const fakeEPSGCodes = ['EPSG:4326', 'EPSG:3857', 'EPSG:32633'];
    const fakeAttributes = ['Attribute 1', 'Attribute 2', 'Attribute 3'];

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/datasets/')
          .then(response => response.json())
          .then(data => setDatasets(data))
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
        // You might want to call the API again with the new search term
    };

    const [email, setEmail] = useState(''); // State for subscription email

    const handleSubscription = (e) => {
        e.preventDefault();
        // Implement subscription logic here
        console.log('Subscribing:', email);
        // Possibly make an API call to handle the subscription
    };

    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>Search Results</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.topBar}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <form onSubmit={handleSearch} className={styles.searchForm}>
                    <input
                        type="text"
                        placeholder="Search datasets..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>Search</button>
                </form>
            </div>
            <div className={styles.pageLayout}>
                {isSidebarVisible && (
                    <div className={styles.sidebar}>
                        <h3>Filters</h3>
                        <div className={styles.filterSection}>
                            <label htmlFor="epsg-select">EPSG Code:</label>
                            <select id="epsg-select" value={selectedEPSG} onChange={(e) => setSelectedEPSG(e.target.value)}>
                                <option value="">Select EPSG Code</option>
                                {fakeEPSGCodes.map(code => (
                                    <option key={code} value={code}>{code}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.filterSection}>
                            <label htmlFor="attribute-select">Attributes:</label>
                            <select id="attribute-select" value={selectedAttribute} onChange={(e) => setSelectedAttribute(e.target.value)}>
                                <option value="">Select Attribute</option>
                                {fakeAttributes.map(attr => (
                                    <option key={attr} value={attr}>{attr}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}
                <div className={styles.mainContent}>
                {datasets.map(dataset => (
                    <div key={dataset.id} className={styles.datasetCard}>
                        <div>
                            <h2 className={styles.datasetName}>{dataset.name}</h2>
                            <p><strong>Source:</strong> {dataset.source}</p>
                            <p><strong>Capture Time:</strong> {dataset.capture_time}</p>
                            <p><strong>EPSG Code:</strong> {dataset.epsg_code}</p>
                        </div>
                        <a href={dataset.url} className={styles.downloadButton} target="_blank" rel="noopener noreferrer">Download</a>
                    </div>
                ))}
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <form onSubmit={handleSubscription} className={styles.subscriptionForm}>
                        <input 
                            type="email" 
                            placeholder="Subscribe to our waiting list" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className={styles.subscriptionInput}
                        />
                        <button type="submit" className={styles.subscriptionButton}>Subscribe</button>
                    </form>
                    <p className={styles.footerNotice}>
                        The user agrees to respect the licenses of the datasets provided in the search results.
                    </p>
                </div>
            </footer>
        </div>
    );
};
