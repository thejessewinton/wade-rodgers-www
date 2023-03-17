export const classnames = (
  ...args: Array<string | undefined | null | boolean>
) => {
  return args.filter(Boolean).join(" ");
};
