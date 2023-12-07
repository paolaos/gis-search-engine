'use client';
import { Card, Title, Text, Metric, Bold } from '@tremor/react';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/datasets/')
      .then(response => response.json())
      .then(data => setDatasets(data))
      .then(response => console.log(response))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Metric>Datasets</Metric>
    {datasets.map(dataset => (
      <Card>
        <Title>{dataset.name}</Title>
        <Text><Bold>Source: </Bold><a href={dataset.source} target="_blank">{dataset.source}</a></Text>
        <Text><Bold>URL: </Bold><a href={dataset.url} target="_blank">{dataset.url}</a></Text>
        <Text><Bold>Capture Time: </Bold>{dataset.capture_time}</Text>
        <Text><Bold>EPSG Code: </Bold>{dataset.epsg_code}</Text>
      </Card>
        ))}
  </main>
  );
}
