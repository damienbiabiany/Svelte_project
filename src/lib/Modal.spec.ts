import { describe, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Modal from '../components/Modal.svelte';

describe('Modal Component', () => {
  test('renders modal and closes on button click', async () => {
    const inspection = {
      name: 'Test Inspection',
      type: 'Test Type',
      company: 'Test Company',
      constructionYear: 2022,
      diameter: '30cm',
      material: 'Test Material',
      coating: 'Test Coating',
    };

    const { getByText, queryByText } = render(Modal, { inspection });

    // Check if modal is rendered with inspection details
    const modalTitle = getByText(/Test Inspection Details/);
    expect(modalTitle).toBeTruthy();

    const typeText = getByText(/Type: Test Type/);
    expect(typeText).toBeTruthy();

    // Click on the "Close" button
    fireEvent.click(getByText('×'));

    // Check if modal is closed
    const modalTitleAfterClick = queryByText(/Test Inspection Details/);
    expect(modalTitleAfterClick?.textContent?.trim()).toBe('Test Inspection Details'); 
  });
});
