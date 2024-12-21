import { useRouter } from "next/navigation";
import {
  Link as LinkLocale,
  useRouter as useRouterLocale,
} from "@/i18n/routing";
import Link from "next/link";

export const useAppRouter = (locale: string) => {
  const isDefaultLocale = locale === "en";
  const router = useRouter();
  const routerLocale = useRouterLocale();

  const LinkTag = isDefaultLocale ? Link : LinkLocale;

  return { Link: LinkTag, router: isDefaultLocale ? router : routerLocale };
};
