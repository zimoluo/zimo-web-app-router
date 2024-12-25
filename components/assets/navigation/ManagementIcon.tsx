export default function ManagementIcon({
  color = null,
  className = "",
}: ImageIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      aria-label="Navigate to management page"
      className={className}
    >
      <path
        fill={color || undefined}
        className={color ? "" : "fill-primary"}
        fillRule="evenodd"
        d="M512 959.99c247.424 0 448-200.576 448-448 0-247.423-200.576-448-448-448s-448 200.577-448 448c0 247.424 200.576 448 448 448Zm0 64c282.77 0 512-229.23 512-512S794.77-.01 512-.01 0 229.22 0 511.99s229.23 512 512 512ZM408.873 244H699.333C760.454 244 810 293.547 810 354.667V411.639c.003 3.656.005 8.375-.4 12.562-.483 4.984-1.769 12.467-6.51 20.015l-.005.009-.006.009a45.126 45.126 0 0 1-14.191 14.185l-.002.001c-7.547 4.742-15.029 6.029-20.016 6.512-4.188.407-8.907.404-12.563.401h-103.64v327.065l-42.12-14.04L542 755.509l-68.547 22.849-10.12 3.373-10.119-3.373-68.547-22.849-68.548 22.849L274 792.398V378.873c-.002-22.992-.004-43.363 2.205-59.794 2.398-17.83 7.911-35.729 22.528-50.346 14.617-14.617 32.516-20.13 50.346-22.528 16.431-2.209 36.802-2.207 59.794-2.205ZM746 401.333v-46.666C746 328.893 725.108 308 699.333 308c-25.774 0-46.666 20.893-46.666 46.667v46.666H746ZM598.958 308H410.889c-25.627 0-41.629.068-53.282 1.635-10.705 1.439-12.864 3.598-13.613 4.347l-.006.006-.006.006c-.749.749-2.908 2.908-4.347 13.613-1.567 11.653-1.635 27.655-1.635 53.282v322.713l36.547-12.182 10.12-3.373 10.119 3.373 68.547 22.849 68.548-22.849L542 688.047l10.119 3.373 36.548 12.182V354.667c0-16.674 3.687-32.487 10.291-46.667Zm163.736 93.231h-.003.003ZM411 349c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32h105c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32H411Zm-32 137c0-17.673 14.327-32 32-32h70c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32h-70c-17.673 0-32-14.327-32-32Zm32 73c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32h78c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32h-78Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
