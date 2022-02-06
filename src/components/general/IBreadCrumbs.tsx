import { Breadcrumbs, Link, BreadcrumbsProps, LinkProps } from "@mui/material";
import React from "react";

interface Props {
  breadcrumbs?: BreadcrumbsProps;
  links: Array<{ title: string; link?: LinkProps }>;
}

const IBreadCrumbs: React.FC<Props> = ({ breadcrumbs, links }: Props) => {
  return (
    <Breadcrumbs {...breadcrumbs}>
      {links.map((link) => {
        const { title, link: linkProps = {} } = link;
        const { children, ...props } = linkProps;
        return (
          <Link
            color="white"
            sx={{ display: "flex", alignItems: "center" }}
            href="/"
            underline="hover"
            {...props}>
            {children}
            {title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default IBreadCrumbs;
