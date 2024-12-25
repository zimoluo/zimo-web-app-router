export default function CopyFailedIcon({
  className = "",
  color,
}: ImageIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1024 1024"
      className={className}
      aria-label="Copy failed"
    >
      <path
        className={color ? "" : "fill-primary"}
        fill={color || undefined}
        fillRule="evenodd"
        d="m167.978 557.664-78.25 78.447C2.2 723.856-8.535 863.639 75.72 948.102c84.314 84.528 223.888 73.738 311.443-14.039l-22.128-22.073 22.128 22.073 78-78.197a344.742 344.742 0 0 1-72.507-17.934l-50.805 50.932v.001c-67.161 67.328-165.889 69.105-220.82 14.039-54.99-55.127-53.181-154.238 14.008-221.595l50.711-50.838a344.708 344.708 0 0 1-17.772-72.807ZM682.148 135.14c67.162-67.329 165.89-69.109 220.821-14.042 54.991 55.127 53.181 154.237-14.008 221.593l22.656 22.6-22.656-22.599-50.711 50.838a344.82 344.82 0 0 1 17.772 72.806l78.25-78.446c87.528-87.744 98.268-227.526 14.008-311.991-84.316-84.524-223.889-73.73-311.443 14.042l22.655 22.6-22.655-22.6-77.999 78.194a344.76 344.76 0 0 1 72.507 17.935l50.803-50.93Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        className={color ? "" : "fill-primary"}
        fill={color || undefined}
        fillRule="evenodd"
        d="M512 859c191.643 0 347-155.357 347-347S703.643 165 512 165 165 320.357 165 512s155.357 347 347 347Zm160.43-507.43c12.497 12.497 12.497 32.758 0 45.255L557.755 511.5 672.43 626.175c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0L512.5 556.755 397.825 671.43c-12.497 12.497-32.758 12.497-45.255 0s-12.497-32.758 0-45.255L467.245 511.5 352.57 396.825c-12.497-12.497-12.497-32.758 0-45.255s32.758-12.497 45.255 0L512.5 466.245 627.175 351.57c12.497-12.497 32.758-12.497 45.255 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
