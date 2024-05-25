"id random";

export default function GalleryModeIcon({
  className = "",
  color,
  isLight = false,
}: ImageIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      strokeMiterlimit={10}
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      viewBox="0 0 1024 1024"
      className={className}
      aria-label="Gallery mode"
    >
      <path
        className={color ? "" : isLight ? "fill-light" : "fill-saturated"}
        fill={color || undefined}
        d="M125.272 0C56.086 0 0 56.086 0 125.272v244.282c0 69.186 56.086 125.272 125.272 125.272h244.282c69.186 0 125.272-56.086 125.272-125.272V125.272C494.826 56.086 438.74 0 369.554 0H125.272Zm25.936 52.556h192.41c54.492 0 98.652 44.16 98.652 98.652v192.41c0 54.492-44.16 98.652-98.652 98.652h-192.41c-54.492 0-98.652-44.16-98.652-98.652v-192.41c0-54.492 44.16-98.652 98.652-98.652ZM654.446 0C585.26 0 529.174 56.086 529.174 125.272v244.282c0 69.186 56.086 125.272 125.272 125.272h244.282c69.186 0 125.272-56.086 125.272-125.272V125.272C1024 56.086 967.914 0 898.728 0H654.446Zm25.936 52.556h192.41c54.492 0 98.652 44.16 98.652 98.652v192.41c0 54.492-44.16 98.652-98.652 98.652h-192.41c-54.492 0-98.652-44.16-98.652-98.652v-192.41c0-54.492 44.16-98.652 98.652-98.652Zm-555.11 476.618C56.086 529.174 0 585.26 0 654.446v244.282C0 967.914 56.086 1024 125.272 1024h244.282c69.186 0 125.272-56.086 125.272-125.272V654.446c0-69.186-56.086-125.272-125.272-125.272H125.272Zm25.936 52.556h192.41c54.492 0 98.652 44.16 98.652 98.652v192.41c0 54.492-44.16 98.652-98.652 98.652h-192.41c-54.492 0-98.652-44.16-98.652-98.652v-192.41c0-54.492 44.16-98.652 98.652-98.652Zm503.238-52.556c-69.186 0-125.272 56.086-125.272 125.272v244.282c0 69.186 56.086 125.272 125.272 125.272h244.282C967.914 1024 1024 967.914 1024 898.728V654.446c0-69.186-56.086-125.272-125.272-125.272H654.446Zm25.936 52.556h192.41c54.492 0 98.652 44.16 98.652 98.652v192.41c0 54.492-44.16 98.652-98.652 98.652h-192.41c-54.492 0-98.652-44.16-98.652-98.652v-192.41c0-54.492 44.16-98.652 98.652-98.652Z"
      />
    </svg>
  );
}
