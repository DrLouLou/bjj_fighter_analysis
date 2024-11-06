type Props = {
  text: string;
};

export const NoRowsOverlayComponent = ({
  text = "There are no rows to show",
}: Props) => (
  <div className="flex flex-col items-center justify-center text-gray-500">
    {text}
  </div>
);
