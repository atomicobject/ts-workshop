import { RenderFunction } from "@storybook/react";
import React from "react";

export function expectToLookLike(
  expected: string | React.ReactElement<any>,
  story: RenderFunction
) {
  return () => (
    <table cellSpacing={0}>
      <thead>
        <tr>
          <th>Expected</th>
          <th>Your component:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{expected}</td>
          <td>{story()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export const ReplaceMe: React.SFC<{}> = props => (
  <div>Edit the story file and change &lt;ReplaceMe /&gt; with the appropriate tag</div>
);