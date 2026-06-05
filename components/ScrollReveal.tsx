"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const directionOffset: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 48 },
    down: { x: 0, y: -48 },
    left: { x: 48, y: 0 },
    right: { x: -48, y: 0 },
};

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: Direction;
    amount?: number;
}

export const ScrollReveal = ({
    children,
    className,
    delay = 0,
    direction = "up",
    amount = 0.2,
}: ScrollRevealProps) => {
    const offset = directionOffset[direction];

    const variants: Variants = {
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount, margin: "-60px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export const StaggerContainer = ({
    children,
    className,
    staggerDelay = 0.12,
}: StaggerContainerProps) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "-80px" }}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 32 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};
