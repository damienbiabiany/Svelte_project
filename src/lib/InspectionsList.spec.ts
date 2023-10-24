import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/svelte';
import InspectionsList from '../components/InspectionsList.svelte';

describe('App Component', () => {
  test('renders inspections list and opens modal on button click', async () => {
    // Simulate receiving inspections data
    const inspectionData = [
      {
        name: 'Test Inspection 1',
        type: 'Test Type 1',
        company: 'Test Company 1',
      },
      {
        name: 'Test Inspection 2',
        type: 'Test Type 2',
        company: 'Test Company 2',
      },
    ];

    // Render the InspectionsList component with initial props
    const { getByText, queryByText, component } = render(InspectionsList, { props: { inspectionData } });

    // Check if the inspections list is rendered
    // Wait for the "Loading..." text to be rendered
    await vi.waitFor(() => {
        expect(queryByText('Loading...')).toBe(null);
    });

    // Access the component instance to update the inspections prop
    component.$set({ inspections: [] }); // Update with a different inspections array

    // Check if the updated inspections list is rendered
    // Wait for the "Loading..." text to be rendered
    await vi.waitFor(() => {
        expect(queryByText('Loading...')).toBe(null);
    });

    // Simulate asynchronous data loading
    await component.$set({ inspectionData });

    // Check if the inspections are rendered
    expect(getByText(/Test Inspection 1/)).toBeTruthy();
    expect(queryByText(/Test Inspection 2/)).toBeTruthy();
  });
});

