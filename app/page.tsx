'use client';
import { Card, Title, Text } from '@tremor/react';

export default function Home() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Title>Users</Title>
    <Text>A list of users retrieved from a Postgres database.</Text>
    <Card className="mt-6">
      <p>Hello</p>
    </Card>
  </main>
  );
}
