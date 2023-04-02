import type { SVGAttributes } from "react";
import { clsx } from "clsx";

const baseClass = "h-6 w-6";

export const Logo = ({ className, ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="54"
      fill="none"
      viewBox="0 0 128 54"
      className={clsx("h-8 w-auto", className)}
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3.201.228C1.199.92 0 2.572 0 4.637c0 .67 7.768 44.912 8.095 46.109.32 1.165 1.414 2.414 2.598 2.96l.634.294h104.484l.726-.382c1.015-.535 1.747-1.238 2.153-2.068.511-1.044 8.49-45.841 8.406-47.196a4.637 4.637 0 00-2.683-3.949l-.776-.363-59.862-.03C6.513-.018 3.882-.008 3.201.228zm20.258 13.505c.027.072-.712 3.097-1.643 6.722-1.133 4.407-1.729 6.507-1.799 6.338-.126-.303-5.738-22.147-5.738-22.335 0-.139 9.095 9.05 9.18 9.275zm41.895 2.136c0 .097-1.946 7.748-4.325 17.001a5252.525 5252.525 0 00-4.325 16.884c0 .032-2.77.058-6.158.058H44.39l-3.879-3.981c-2.133-2.19-3.934-3.982-4.002-3.982-.068 0-.124.072-.124.159 0 .087-.441 1.879-.981 3.981l-.981 3.823H23.408l-5.764-5.764-5.763-5.766 5.558-.035 5.558-.036 2.461-9.58c1.354-5.27 2.505-9.533 2.558-9.474.076.085 1.974 7.378 4.698 18.058l.272 1.064H45.24l4.182-16.304C51.722 13.008 53.69 5.369 53.797 5l.193-.67 5.682 5.68c3.125 3.125 5.682 5.761 5.682 5.858zM45.72 13.828c0 .435-3.347 13.194-3.436 13.095-.095-.108-5.765-22.093-5.764-22.35 0-.075 2.071 1.933 4.6 4.462 2.53 2.529 4.6 4.685 4.6 4.793zm67.622 6.533c2.824 4.323 2.363 9.833-1.133 13.539-1.107 1.174-2.587 2.18-3.954 2.69-.742.276-1.019.443-.981.591.03.113 1.793 2.913 3.918 6.222 2.125 3.308 3.864 6.042 3.864 6.075 0 .033-2.735.06-6.078.06h-6.077l-5.692-5.698-5.692-5.698h6.072c3.339 0 6.071-.03 6.071-.066 0-.036-1.789-2.86-3.977-6.273l-3.976-6.206.949-.37c3.24-1.26 5.635-3.825 6.661-7.13.362-1.168.438-4.087.141-5.442-.253-1.153-1.094-3.108-1.654-3.842-.187-.246-.339-.497-.338-.558.005-.255 11.367 11.327 11.876 12.106zM89.165 10.13c3.63 1.248 4.707 5.823 2.008 8.522-.384.383-1.052.863-1.485 1.066l-.787.37-6.419.038-6.419.038V9.859h6.157c5.772 0 6.206.016 6.945.27zm-1.76 21.49c1.989 3.097 3.618 5.676 3.62 5.733.002.056-.769.103-1.713.103h-1.716v12.082H76.473l-5.698-5.698-5.698-5.698h10.986V25.918l3.862.037 3.863.036 3.617 5.63z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const InstagramIcon = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  );
};

export const VimeoIcon = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16.2 149.6c-1.4 31.1-23.2 73.8-65.3 127.9-43.5 56.5-80.3 84.8-110.4 84.8-18.7 0-34.4-17.2-47.3-51.6-25.2-92.3-35.9-146.4-56.7-146.4-2.4 0-10.8 5-25.1 15.1L64 192c36.9-32.4 72.1-68.4 94.1-70.4 24.9-2.4 40.2 14.6 46 51.1 20.5 129.6 29.6 149.2 66.8 90.5 13.4-21.2 20.6-37.2 21.5-48.3 3.4-32.8-25.6-30.6-45.2-22.2 15.7-51.5 45.8-76.5 90.1-75.1 32.9 1 48.4 22.4 46.5 64z"></path>
    </svg>
  );
};

export const PlayIcon = ({ className, ...rest }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx("h-8 w-8", className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
  );
};

export const CloseIcon = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx("text-white", baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const Airplane = ({ className, ...rest }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
};

export const RightArrow = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 55 20"
      version="1.1"
      viewBox="0 0 55 20"
      xmlSpace="preserve"
      className={clsx(className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M43.3 0L55 10 43.3 20 42.4 19.1 52.2 10.7 0 10.7 0 9.3 52.2 9.3 42.4 0.9 43.3 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const LeftArrow = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 55 20"
      version="1.1"
      viewBox="0 0 55 20"
      xmlSpace="preserve"
      className={clsx(className, "rotate-180")}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M43.3 0L55 10 43.3 20 42.4 19.1 52.2 10.7 0 10.7 0 9.3 52.2 9.3 42.4 0.9 43.3 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const ChevronDown = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
