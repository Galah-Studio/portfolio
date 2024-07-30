import { LINKS, EXTRA_LINKS } from "@/constants";

export type SectionName = (typeof LINKS)[number]["name"];
export type ExtraLinks = keyof typeof EXTRA_LINKS;
