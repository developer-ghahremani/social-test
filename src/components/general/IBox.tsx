import { Box, BoxProps } from "@mui/material";
import React from "react";

type Props = BoxProps;

const IBox: React.FC<Props> = (props: Props) => <Box {...props} />;

export default IBox;
