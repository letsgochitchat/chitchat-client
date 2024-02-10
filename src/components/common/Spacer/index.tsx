type SpacerProps = {
  width?: number;
  height?: number;
};

export const Spacer = ({ width, height }: SpacerProps) => {
  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width}px` : '100%',
        height: typeof height === 'number' ? `${height}px` : '100%',
      }}
    />
  );
};
