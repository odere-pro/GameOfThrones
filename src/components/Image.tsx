interface ImageProps {
  url: string;
  altText?: string;
  // Prevent CLS by setting a minHeight
  height?: string;
  fullWidth?: boolean;
}

export default function Image({
  url,
  altText = '',
  height = '15dvh',
  fullWidth,
}: ImageProps) {
  if (!url) {
    return null;
  }

  return (
    <div
      className="flex justify-center items-start bg-[#ffffff1a] rounded-lg overflow-hidden h-full"
      style={{ height, maxHeight: height }}
    >
      <img
        className={`h-full mx-auto object-cover select-none ${fullWidth ? 'w-full' : ''}`}
        style={{ maxHeight: height, minHeight: height }}
        src={url}
        alt={altText}
      />
    </div>
  );
}
