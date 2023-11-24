import {useState} from 'react';
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from '@/components/FlexBetween';

type Props = {}

const Navbar = (props: Props) => {
const { palette } = useTheme();
  return (
    <FlexBetween mb="0.25rem" p="0.5 rem 0 rem" color={palette.grey[300]}>
        hey
    </FlexBetween>
  );
};

export default Navbar
