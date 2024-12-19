import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export function pascalCase(str: string) {
  return upperFirst(camelCase(str));
}

function titleize(hyphenedString: string): string {
  return upperFirst(hyphenedString.split("-").join(" "));
}

export interface Page {
  pathname: string;
  query?: object;
  subheader?: string;
  title?: string | false;
}

export function pageToTitle(page: Page): string | null {
  if (page.title === false) {
    return null;
  }

  if (page.title) {
    return page.title;
  }

  const path = page.subheader || page.pathname;
  const name = path
    .replace(/.*\//, "")
    .replace("react-", "")
    .replace(/\..*/, "");

  // TODO remove post migration
  if (path.includes("/api-docs/")) {
    return pascalCase(name);
  }

  // TODO support more than React component API (PascalCase)
  if (path.includes("/api/")) {
    return name.startsWith("use") ? camelCase(name) : pascalCase(name);
  }

  return titleize(name);
}

export function pageToTitleI18n(page: Page, t: any): string | null {
  const path = page.subheader || page.pathname;
  return page.query
    ? pageToTitle(page)
    : t(`pages.${path}`, { ignoreWarning: true }) || pageToTitle(page);
}

/**
 * Get the value of a cookie
 * Source: https://vanillajstoolkit.com/helpers/getcookie/
 * @param name - The name of the cookie
 * @return The cookie value
 */
export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") {
    throw new Error(
      "getCookie() is not supported on the server. Fallback to a different value when rendering on the server.",
    );
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts[1].split(";").shift();
  }

  return undefined;
}

export function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return true;
  }
  return false;
}
