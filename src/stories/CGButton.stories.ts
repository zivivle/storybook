import type { Meta, StoryObj } from "@storybook/react";
import { CGButton } from "../components";

const meta = {
    title: "Buttons/CGButton",
    component: CGButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        iconPath: {
            control: "text",
            description: "이미지 경로",
            defaultValue: "",
        },
        iconAlt: {
            control: "text",
            description: "이미지 설명",
            defaultValue: "",
        },
        text: {
            control: "text",
            description: "버튼 텍스트",
            defaultValue: "카테고리",
        },
        onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    },
} satisfies Meta<typeof CGButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconAlt: "iconButton",
        text: "카테고리",
        iconPath: "/images/prev_icon.svg",
    },
};
