"use client"
import React from 'react'
import { Interface } from '../../page'
import { motion } from 'framer-motion'

interface AnimationInterface extends Interface {
  grow?: boolean,
  fromTop?: boolean,
  fromBottom?: boolean,
  fromLeft?: boolean,
  fromRight?: boolean,
  whileInView?: boolean,
  once?: boolean
}

export const FadeIn: React.FC<AnimationInterface> = ({ children, className, grow, fromTop, fromBottom, fromLeft, fromRight, whileInView, once }) => {
  return (
    <motion.div
      initial={{
        y: fromTop ? -100 : fromBottom ? 100 : 0,
        x: fromLeft ? -100 : fromRight ? 100 : 0,
        opacity: 0,
        scale: grow ? 0 : 1
      }}
      animate={
        !whileInView ? {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1
        } : {}
      }
      transition={{
        duration: 1
      }}
      whileInView={ 
        whileInView ? {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1
        } : {}
      }
      viewport={{ once: once ? true : false }}
      className={className || ""}
    >
      {children}
    </motion.div>
  )
}