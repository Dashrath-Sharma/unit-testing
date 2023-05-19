import App from "./App";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

it('App Snapshot Test', async () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
});