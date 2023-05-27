import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LocalFieldsItem from "../../LocalFieldsCarousel/LocalFieldsItem";

describe("LocalFieldItem test", () => {
  test("", () => {
    render(
      <LocalFieldsItem
        fieldName="잠실제1풋살경기장"
        img="https://plab-football.s3.amazonaws.com/media/ydp_sky_B_coner.jpeg"
        stars={3.5}
      />,
    );
  });
});
