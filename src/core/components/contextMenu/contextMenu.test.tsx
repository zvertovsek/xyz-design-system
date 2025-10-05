import { render, withThemeProvider } from "@test-utils/renderers";
import { act, screen, waitFor } from "@testing-library/react";
import { ContextMenuProps, ContextMenuRef } from "./contextMenu.types";
import ContextMenu from "./contextMenu";
import Icons from "@icons";
import React, { SyntheticEvent } from "react";
import userEvent from "@testing-library/user-event";

const PROPS: ContextMenuProps = {
  items: [
    {
      label: "Copy as image",
      icon: Icons.CopyIcon,
      onClick: jest.fn(),
    },
    {
      label: "Send via email",
    },
  ],
};

const setup = async (props = PROPS) => {
  const ref = React.createRef<ContextMenuRef>();

  render(withThemeProvider)(<ContextMenu {...props} ref={ref} />);

  await act(async () => {
    ref.current?.show({
      currentTarget: { getBoundingClientRect: () => ({}) },
      stopPropagation: jest.fn(),
    } as unknown as SyntheticEvent);
  });

  return {
    menu: screen.getByRole("menu", { hidden: true }),
    items: screen.getAllByRole("button", { hidden: true }),
  };
};

describe("Context Menu", () => {
  it("renders menu correctly", async () => {
    const { menu, items } = await setup();

    expect(menu).toBeInTheDocument();
    expect(items).toHaveLength(2);
    expect(items[0].firstChild).toHaveAttribute("data-testid", "Copy");
    expect(items[0].lastChild).toHaveTextContent("Copy as image");
    expect(items[1].lastChild).toHaveTextContent("Send via email");
  });

  it("handles correctly click on menu item", async () => {
    const { menu, items } = await setup();

    await waitFor(() => expect(menu).toBeInTheDocument());
    await act(async () => {
      userEvent.click(items[0]);
    });
    await waitFor(() => expect(menu).not.toBeInTheDocument());
    expect(PROPS.items[0].onClick).toHaveBeenCalled();
  });

  it("hides menu when clicking outside of it", async () => {
    const { menu } = await setup();

    expect(menu).toBeInTheDocument();
    await act(async () => {
      userEvent.click(document.body);
    });
    await waitFor(() => expect(menu).not.toBeInTheDocument());
  });
});
