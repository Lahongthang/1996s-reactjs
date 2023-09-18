import { ReactNode } from "react";
import { Box } from "@mui/material";
import { motion } from 'framer-motion';
import { varContainer } from "./variants";
import { Rest } from "../../configs/types";

type Props = {
	animate?: boolean;
	action?: boolean;
	children: ReactNode;
} & Rest

const MotionContainer = ({ animate, action, children, ...props }: Props) => {
	if (action) return (
		<Box component={motion.div}
			initial={false}
			animate={animate ? 'animate' : 'exit'}
			variants={varContainer()}
			{...props}>
			{children}
		</Box>
	);

	return (
		<Box component={motion.div}
			initial='initial'
			animate='animate'
			exit='exit'
			variants={varContainer()}
			{...props}>
			{children}
		</Box>
	)
}

export default MotionContainer;
