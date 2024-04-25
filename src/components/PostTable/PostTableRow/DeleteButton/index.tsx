import { Icon, IconProps, IconButton, IconButtonProps } from "@chakra-ui/react";

const TrashIcon = (props: IconProps) => (
  <Icon viewBox="0 0 512 512" {...props}>
    <path
      fill="currentColor"
      d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"
    />
  </Icon>
);

export function DeleteButton({ ...rest }: IconButtonProps) {
  return (
    <IconButton
      variant="ghost"
      size="xs"
      icon={<TrashIcon color="gray.500" boxSize={5} />}
      {...rest}
    />
  );
}
