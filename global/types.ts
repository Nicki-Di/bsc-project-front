import React from "react";

export type childrenType = {
  children: React.ReactNode | string;
  className?: string;
  "data-testid"?: string;
};

export type classNameType = {
  className?: string;
};
