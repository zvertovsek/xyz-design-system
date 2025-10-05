import { SubmenuItemFormatted, SubmenuItemProps } from "./submenu.types";

export const addIdPathsToItems = (items: SubmenuItemProps[], parentIdsPath: string[] = []): SubmenuItemFormatted[] => {
  const itemsFormatted: SubmenuItemFormatted[] = [];
  items.forEach((item) => {
    const { id, children } = item;
    const idsPath = parentIdsPath.concat(id);
    let childrenFormatted: SubmenuItemFormatted[] | undefined;

    if (children?.length) {
      childrenFormatted = addIdPathsToItems(children, idsPath);
    }

    itemsFormatted.push({
      ...item,
      idsPath,
      children: childrenFormatted,
    });
  });

  return itemsFormatted;
};

export const getInitialSelections = (items: SubmenuItemProps[], selections?: string[]): string[] => {
  return selections?.length ? selections : [items[0]?.id];
};
