/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import App from '../src/App.svelte';

describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('must render greeting', () => {
    fetch.mockResponseOnce('[{"title":"item1"},{"title":"item2"}]');
    const { getByText } = render(App, { props: { name: 'world' } });
    expect(getByText('Hello world!')).toBeDefined();
  });

  // eslint-disable-next-line jest/no-test-callback
  test('must snapshot', done => {
    fetch.mockResponseOnce('[{"title":"item1"},{"title":"item2"}]');
    const { container } = render(App, { props: { name: 'world' } });
    setTimeout(() => {
      // HACK: Timeout needed to allow onMount to complete async execution
      expect(container).toMatchSnapshot();
      done();
    }, 100);
  });
});
