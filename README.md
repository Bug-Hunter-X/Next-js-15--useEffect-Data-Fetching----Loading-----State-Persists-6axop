# Next.js 15 useEffect Data Fetching Bug

This repository demonstrates a bug in a Next.js 15 application related to data fetching within the `useEffect` hook. The About page displays a 'Loading...' message indefinitely, even after the API call successfully retrieves data.

## Bug Description
The issue occurs because of how asynchronous operations are handled within the `useEffect` hook, specifically the timing of setting the `data` state.

## Reproduction Steps
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Observe the 'Loading...' message that persists even though the API call returns data within 2 seconds.

## Solution
The solution addresses the timing issue by ensuring that the state is updated correctly after the API call is completed.  See the solution file for the correction.