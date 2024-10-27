import Link from "next/link";
import {
  Next as NextGray,
  TypeScriptGray,
  TypeScriptColored,
} from "../_icons/Svgs";

export const Next = () => (
  <Link href="https://nextjs.org/">
    <NextGray />
  </Link>
);

export const TypeScript = () => (
  <Link href="https://www.typescriptlang.org/">
    <div className="group">
      <TypeScriptGray className="group-hover:hidden" />
      <TypeScriptColored className="hidden group-hover:block" />
    </div>
  </Link>
);
