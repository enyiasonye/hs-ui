import React from 'react';
import { render, fireEvent, waitFor, configure } from '@testing-library/react';
import Icon from '@mdi/react';
import Text from '../Text';

configure({ testIdAttribute: 'data-test-id' });

const testId = 'hsui-Text';

describe('Text', () => {
  it('matches snapshot', async () => {
    const { container, getByTestId } = render(<Text />);
    await waitFor(() => getByTestId(testId));
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with isLoading', async () => {
    const { container, getByTestId } = render(<Text isLoading />);
    await waitFor(() => getByTestId(testId));
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with isProcessing', async () => {
    const { container, getByTestId } = render(<Text isProcessing />);
    await waitFor(() => getByTestId(testId));
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with icon strings', async () => {
    const { container, getByTestId } = render(
      <Text iconPrefix="mdiComment" iconSuffix="mdiComment" />,
    );
    await waitFor(() => getByTestId(testId));
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with icons', async () => {
    const { container, getByTestId } = render(
      <Text iconPrefix={<Icon path={'mdiComment'} />} iconSuffix={<Icon path={'mdiComment'} />} />,
    );
    await waitFor(() => getByTestId(testId));
    expect(container).toMatchSnapshot();
  });
});
