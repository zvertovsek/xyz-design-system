import { Button, ContainerWrapper } from "./menuBar.styles";
import { HorizontalSpacer } from "../../spacer";
import { MenuBarProps } from "./menuBar.types";
import Icons, { IconProps, IconSize } from "@icons";
import { useTheme } from "styled-components";

export const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  const { spacing } = useTheme();
  const propsIcon: IconProps = {
    size: IconSize.sm,
  };

  return (
    <ContainerWrapper>
      <Button
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.isEditable}
        isActive={editor.isActive("bold")}
        data-testid="menu-bar__bold-button"
      >
        <Icons.BoldIcon {...propsIcon} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("italic")}
        data-testid="menu-bar__italic-button"
      >
        <Icons.ItalicIcon {...propsIcon} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("underline")}
        data-testid="menu-bar__underlined-button"
      >
        <Icons.UnderlinedIcon {...propsIcon} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("strike")}
        data-testid="menu-bar__strike-through-button"
      >
        <Icons.StrikeThroughIcon {...propsIcon} />
      </Button>
      <HorizontalSpacer size={spacing[2]} />
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("heading", { level: 1 })}
        data-testid="menu-bar__h1-button"
      >
        <Icons.H1Icon {...propsIcon} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("heading", { level: 2 })}
        data-testid="menu-bar__h2-button"
      >
        <Icons.H2Icon {...propsIcon} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("paragraph")}
        data-testid="menu-bar__paragraph-button"
      >
        <Icons.ParagraphIcon {...propsIcon} />
      </Button>
      <HorizontalSpacer size={spacing[2]} />
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("bulletList")}
        data-testid="menu-bar__bullet-list-button"
      >
        <Icons.BulletListIcon {...propsIcon} />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.isEditable}
        isActive={editor.isActive("orderedList")}
        data-testid="menu-bar__ordered-list-button"
      >
        <Icons.OrderedListIcon {...propsIcon} />
      </Button>
    </ContainerWrapper>
  );
};

export default MenuBar;
